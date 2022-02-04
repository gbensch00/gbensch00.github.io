var state = 0;
var input = document.getElementById("input");
var status = document.getElementById("statusText");
var exp = [];
var tempexp = [];
var goodletter = ["B", "T", "P", "S", "X", "V", "E"];
var templetter = "";
var stepCounter = 0;
var running = 0;
var auto = 0;
var finished = 0;
var speed = 1000;
var lastEdge = "";

function generateRight() {
  tempexp = [];
  input.value = "";
  input.dispatchEvent(new Event("input"));
  tempexp.push("B");
  if (Math.floor(Math.random() * 11) > 5) {
    tempexp.push("T");
    templetter = "T";
  } else {
    tempexp.push("P");
    templetter = "P";
  }
  tempexp.push("B");

  if (Math.floor(Math.random() * 11) > 5) {
    tempexp.push("P");
    while (Math.floor(Math.random() * 11) > 4) {
      tempexp.push("T");
    }
    tempexp.push("V");
    tempexp.push("V");
  } else {
    tempexp.push("T");
    while (Math.floor(Math.random() * 11) > 4) {
      tempexp.push("S");
    }
    tempexp.push("X");

    if (Math.floor(Math.random() * 11) > 5) {
      tempexp.push("S");
    } else {
      tempexp.push("X");
      while (Math.floor(Math.random() * 11) > 4) {
        tempexp.push("T");
      }
      tempexp.push("V");
      tempexp.push("V");
    }
  }
  tempexp.push("E");
  if (templetter == "T") {
    tempexp.push("T");
  } else if (templetter == "P") {
    tempexp.push("P");
  }
  tempexp.push("E");

  return tempexp;
}

function displayWrongWord() {
  reset();
  let output = generateRight();
  if (output[output.length - 2] == "T") output[output.length - 2] = "P";
  else if (output[output.length - 2] == "P") output[output.length - 2] = "T";
  output = output.join("");
  input.value = output;
  input.dispatchEvent(new Event("input"));
}

function displayRightWord() {
  reset();
  let output = generateRight().join("");
  input.value = output;
  input.dispatchEvent(new Event("input"));
}

function runAuto() {
  if (auto == 0) {
    auto = 1;
    autoStep();
  }
}

function pause() {
  if (auto == 1) {
    auto = 0;
  }
}

function autoStep() {
  run();
  if (auto == 1) {
    setTimeout(() => autoStep(), speed);
  }
}

//Sets the speed of auto mode
function setSpeed(value) {
  speed = Math.abs(10000 / value);
}

function checkWord() {
  for (let m = 0; m < input.value.length; m++) {
    //Für jeden Buchstaben des Strings
    if (goodletter.includes(input.value.charAt(m))) continue;
    else return false;
  }
  return true;
}

function run() {
  if (running == 0) {
    if (checkWord() == false) {
      document.getElementById("statusText").innerHTML =
        "Wort enthält ungültige Zeichen!";
      auto = 0;
      return 0;
    } else {
      exp = input.value.split("");
      running = 1;
    }
  }

  console.log("Button clicked");
  console.log(exp);
  if (runMachine(exp[stepCounter], stepCounter)) {
    console.log(exp);
    stepCounter++;
    if (state == 4 || state == 5) {
      //4 und 5 sind sonderfälle, weil hier nicht im Wort vorwärts, sonder zurückgeschaut wird. Der Stepcounter wird hier "pausiert" und der nächste Buchstabe erst beim nächsten Aufruf verarbeitet.
      stepCounter--;
    }
  } else {
    console.log("Fehlgeschlagen" + state);
    document.getElementById("statusText").style.color = "red";
    auto = 0;
  }
  if (finished !== 1)
    document.getElementById("statusText").innerHTML = exp.join(""); //Statuszeile aktualisieren
}

function reset() {
  running = 0;
  auto = 0;
  state = 0;
  stepCounter = 0;
  finished = 0;

  document.getElementById("statusText").innerHTML = "System bereit";
  document.getElementById("statusText").style.color = "black";
}

function runMachine(letter, pos) {
  switch (state) {
    case 0:
      if (letter == "B") {
        state = 1;
        exp[pos] = "_";
        console.log("B erkannt");
        document.getElementById("q0_q1").classList.toggle("green");
        lastEdge = "q0_q1";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 1:
      if (letter == "T") {
        state = 2;
        console.log("T erkannt");
        document.getElementById("q1_q2").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q1_q2";
        return true;
      } else if (letter == "P") {
        state = 2;
        console.log("P erkannt");
        console.log(lastEdge);
        document.getElementById("q1_q2").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q1_q2";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 2:
      if (letter == "B") {
        state = 8;
        exp[pos] = "_";
        console.log("B erkannt");
        document.getElementById("q2_q3").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q2_q3";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 3:
      if (letter == "T") {
        state = 4;
        exp[pos] = "_";
        console.log("T erkannt");
        document.getElementById("q9_q10").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q9_q10";
        return true;
      } else if (letter == "P") {
        state = 5;
        exp[pos] = "_";
        console.log("hinteres P erkannt");
        document.getElementById("q9_q11").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q9_q11";

        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 4: //Sonderfall, weil hier auf position 1 zurückgecheckt werden muss.
      document.getElementById("q10_q10").classList.toggle("green");
      document.getElementById(lastEdge).classList.toggle("green");
      lastEdge = "q10_q10";
      for (let j = pos; j >= 0; j--) {
        //läuft rückwärts über das Band
        if (exp[j] == "T") {
          state = 6;
          exp[j] = "_";
          console.log("T erkannt");
          document.getElementById("q10_q12").classList.toggle("green");
          document.getElementById(lastEdge).classList.toggle("green");
          lastEdge = "q10_q12";

          return true;
        } else if (j == 0 && exp[j] !== "T") return false;
      }
      break;
    case 5: //Sonderfall, weil hier auf position 1 zurückgecheckt werden muss.
      document.getElementById("q11_q11").classList.toggle("green");
      document.getElementById(lastEdge).classList.toggle("green");
      lastEdge = "q11_q11";
      for (let j = pos; j >= 0; j--) {
        //läuft rückwärts über das Band
        if (exp[j] == "P") {
          state = 6;
          exp[j] = "_";
          console.log("vorderes P erkannt");
          document.getElementById("q11_q12").classList.toggle("green");
          document.getElementById(lastEdge).classList.toggle("green");
          lastEdge = "q11_q12";

          return true;
        } else if (j == 0 && exp[j] !== "P") return false;
      }
      break;
    case 6:
      if (letter == "E") {
        state = 7;
        exp[pos] = "_";
        console.log("Finales E erkannt");
        document.getElementById("q12_q13").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q12_q13";

        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 7:
      if (
        letter == "X" ||
        letter == "T" ||
        letter == "V" ||
        letter == "P" ||
        letter == "B" ||
        letter == "S" ||
        letter == "E"
      ) {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById("q13_q13").classList.toggle("red");
        return false;
      } else {
        console.log("Erfolgreich durchgelaufen");
        running = 0;
        auto = 0;
        finished = 1;
        document.getElementById("statusText").style.color = "green";
        document.getElementById("statusText").innerHTML = "Erfolgreich!";
        document.getElementById(lastEdge).classList.toggle("green");
        return true;
      }
    case 8:
      if (letter == "T") {
        state = 12;
        exp[pos] = "_";
        console.log("T erkannt");
        document.getElementById("q3_q4").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q3_q4";
        return true;
      } else if (letter == "P") {
        state = 9;
        exp[pos] = "_";
        console.log("P erkannt");
        document.getElementById("q3_q5").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q3_q5";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 9:
      if (letter == "T") {
        state = 9;
        exp[pos] = "_";
        console.log("T erkannt");
        document.getElementById("q5_q5").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q5_q5";
        return true;
      } else if (letter == "V") {
        state = 10;
        exp[pos] = "_";
        console.log("V erkannt");
        document.getElementById("q5_q7").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q5_q7";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 10:
      if (letter == "P") {
        state = 13;
        exp[pos] = "_";
        console.log("P erkannt");
        document.getElementById("q7_q6").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q7_q6";
        return true;
      } else if (letter == "V") {
        state = 11;
        exp[pos] = "_";
        console.log("V erkannt");
        document.getElementById("q7_q8").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q7_q8";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 11:
      if (letter == "E") {
        state = 3;
        exp[pos] = "_";
        console.log("E erkannt");
        document.getElementById("q8_q9").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q8_q9";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 12:
      if (letter == "S") {
        state = 12;
        exp[pos] = "_";
        console.log("S erkannt");
        document.getElementById("q4_q4").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q4_q4";
        return true;
      } else if (letter == "X") {
        state = 13;
        exp[pos] = "_";
        console.log("X erkannt");
        document.getElementById("q4_q6").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q4_q6";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
    case 13:
      if (letter == "S") {
        state = 11;
        exp[pos] = "_";
        console.log("S erkannt");
        document.getElementById("q6_q8").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q6_q8";
        return true;
      } else if (letter == "X") {
        state = 9;
        exp[pos] = "_";
        console.log("X erkannt");
        document.getElementById("q6_q5").classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("green");
        lastEdge = "q6_q5";
        return true;
      } else {
        document.getElementById(lastEdge).classList.toggle("green");
        document.getElementById(lastEdge).classList.toggle("red");
        return false;
      }
  }
}
