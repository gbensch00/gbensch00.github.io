var appStates = {
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
  STEP: "STEP",
  STOPPED: "STOPPED",
};
var speed = {
  Langsam: "5000",
  Normal: "1000",
  Schnell: "500",
};
var appState = appStates.STOPPED;
var currentSpeed = speed.Normal;
var stepWord = "foo";

var pauseRequested = false;
var currentStep = 0;
var aut = null;

async function tourClick() {
  introJs()
    .setOptions({
      steps: [
        {
          intro: "Intro für den Kellerautomat",
        },
        {
          element: document.querySelector("#btn-genValid"),
          intro: "Generiert einen validen arithmetischen Ausdruck",
        },
        {
          element: document.querySelector("#btn-genInvalid"),
          intro: "Generiert einen invaliden arithmetischen Ausdruck",
        },
        {
          element: document.querySelector("#input"),
          intro: "Hier kann ein zu validierender Ausdruck angegeben werden",
        },
        {
          element: document.querySelector("#btn-play"),
          intro: "Startet das automatische Validieren der Arithmetik",
        },
        {
          element: document.querySelector("#btn-pause"),
          intro: "Pausiert die Validierung. Zum erneuten Starten Start drücken",
        },
        {
          element: document.querySelector("#btn-step"),
          intro:
            "Startet das schrittweise Validieren des arithmetischen Ausdrucks",
        },
        {
          element: document.querySelector("#btn-cancel"),
          intro:
            "Bricht das Validieren ab und versetzt die Applikation in den Initialzustand",
        },
        {
          element: document.querySelector("#drp-speed"),
          intro: "Hier kann die Animationsgeschwindigkeit gewählt werden",
        },
        {
          element: document.querySelector("#btn-tour"),
          intro: "Startet dieses Tutorial",
        },
        {
          element: document.querySelector("#btn-doc"),
          intro: "Dokumentation der Anwendung",
        },
        {
          element: document.querySelector("#graph"),
          intro: "Der Kellerautomat als Graph",
        },
        {
          element: document.querySelector("#output-table"),
          intro: "Hier kann die Generierung schrittweise nachvollzogen werden",
        },
        {
          element: document.querySelector("#cellar-table"),
          intro: "Hier kann der aktuelle Zustand des Kellers gesehen werden",
        },
        {
          element: document.querySelector("#grammarPre"),
          intro: "Hier ist die Definition des vorliegenden Kellerautomaten",
        },
      ],
    })
    .start();
}

async function playClick() {
  pauseRequested = false;
  var lastNode = "q0";
  var lastEdge = "";
  appState = "RUNNING";
  setupButtonStates();

  resetColors();
  var input = document.getElementById("input_expression").value.trim();
  aut = new Automaton(input);
  var fin = false;

  document
    .getElementById("node_" + aut.currentState.name)
    .classList.toggle("green");
  var res = aut.nextState();
  while (res.result && fin == false) {
    await new Promise((r) =>
      setTimeout(r, document.getElementById("drp-speed").value)
    );
    document.getElementById("node_" + lastNode).classList.toggle("green");
    if (lastEdge.length > 0) {
      document.getElementById("t_" + lastEdge).classList.toggle("green");
      document.getElementById("r_" + lastEdge).classList.toggle("green");
      console.log("r_" + lastEdge);
    }

    lastNode = aut.currentState.name;
    lastEdge = res.rule;
    if (lastEdge == "q2_q3_1") {
      lastEdge = "q2_q3_0";
    }

    if (lastEdge == "q3_q2_1") {
      lastEdge = "q3_q2_0";
    }
    console.log(lastEdge);
    document.getElementById("node_" + lastNode).classList.toggle("green");
    if (lastEdge.length > 0) {
      console.log("r_" + lastEdge);

      document.getElementById("t_" + lastEdge).classList.toggle("green");
      document.getElementById("r_" + lastEdge).classList.toggle("green");
    }
    if (aut.finished()) fin = true;
    res = aut.nextState();
  }
  resetColors();
  if (fin) {
    tryAddClass("node_" + lastNode, "green");
    tryAddClass("r_" + lastEdge, "green", "pulsing");
    tryAddClass("t_" + lastEdge, "green", "pulsing");
  } else {
    tryAddClass("node_" + lastNode, "red");
    tryAddClass("r_" + lastEdge, "red", "pulsing");
    tryAddClass("t_" + lastEdge, "red", "pulsing");
  }
  appState = "STOPPED";
  document.getElementById("btn-cancel").classList.add("css-tooltip");
  setupButtonStates(true);
}
var lastStepNode = "q0";
var lastStepEdge = "";

function stepClick() {
  if (appState == "STOPPED") {
    appState = "STEP";
    setupButtonStates();
    var input = document.getElementById("input_expression").value.trim();
    aut = new Automaton(input);
    resetColors();
    document.getElementById("node_q0").classList.toggle("green");
  }

  var res = aut.nextState();

  document.getElementById("node_" + lastStepNode).classList.toggle("green");
  if (lastStepEdge.length > 0) {
    document.getElementById("t_" + lastStepEdge).classList.toggle("green");
    document.getElementById("r_" + lastStepEdge).classList.toggle("green");
  }

  lastStepNode = aut.currentState.name;
  lastStepEdge = res.rule;
  if (lastEdge == "q2_q3_1") {
    lastEdge = "q2_q3_0";
  }

  if (lastEdge == "q3_q2_1") {
    lastEdge = "q3_q2_0";
  }
  document.getElementById("node_" + lastStepNode).classList.toggle("green");
  if (lastStepEdge.length > 0) {
    console.log("r_" + lastStepEdge);

    document.getElementById("t_" + lastStepEdge).classList.toggle("green");
    document.getElementById("r_" + lastStepEdge).classList.toggle("green");
  }
  var fin = false;
  if (aut.word.length == 0) {
    fin = aut.finished();
  } else {
    return;
  }

  if (fin) {
    document.getElementById("input_expression").value = "";
    alert("Erfolgreich beendet");

    document.getElementById("node_" + lastStepNode).classList.add("green");
    document
      .getElementById("t_" + lastStepEdge)
      .classList.add("green", "pulsing");
    document
      .getElementById("r_" + lastStepEdge)
      .classList.add("green", "pulsing");
    lastStepEdge = "";
    lastStepNode = "q0";
    appState = "STOPPED";
    setupButtonStates(true);
  } else {
    alert("Mit fehler beendet!");
    document.getElementById("input_expression").value = "";
    document.getElementById("node_" + lastStepNode).classList.add("red");
    if (lastStepEdge.length > 0) {
      document
        .getElementById("t_" + lastStepEdge)
        .classList.add("red", "pulsing");
      document
        .getElementById("r_" + lastStepEdge)
        .classList.add("red", "pulsing");
    }
    lastStepEdge = "";
    lastStepNode = "q0";
    appState = "STOPPED";
    setupButtonStates(true);
  }
}

/*
 
*/
function genValid() {
  appState = "RUNNING";
  setupButtonStates();
  document.getElementById("input_expression").value =
    new Generator().generateValid();
  appState = "STOPPED";
  setupButtonStates(true);
}

function genInvalid() {
  appState = "RUNNING";
  setupButtonStates();
  document.getElementById("input_expression").value =
    new Generator().generateInvalid();
  appState = "STOPPED";
  setupButtonStates(true);
}

window.onload = (event) => {
  appState = "STOPPED";
  setupButtonStates();
};
