var appStates = {
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
  STEP: "STEP",
  STOPPED: "STOPPED",
}
var speed = {
  Langsam: "5000",
  Normal: "1000",
  Schnell: "500",
}
var appState = appStates.STOPPED
var currentSpeed = speed.Schnell

const initialState = "F"
var currentState = initialState
var pauseRequested = false
var currentStep = 0
const states = {
  S: {
    followers: ["FOF", "A", "Z"],
  },
  Z: {
    followers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  O: {
    followers: ["+", "-", "*", "/"],
  },
  A: {
    followers: ["(F)"],
  },
}

var node = document.getElementById("output-table").innerHTML
function clearTable() {
  document.getElementById("output-table").innerHTML = node
  document.getElementById("output").innerHTML =
    "Generierter Ausdruck: Start Drücken um einen Ausdruck zu generieren"
}
/**
 * Sets up the buttons according tio a passed state
 * @param {string} state
 */
document.getElementById("btn-play").style.backgroundColor = "lightgreen"
const setupButtonStates = () => {
  switch (appState) {
    case appStates.PAUSED:
      enableButton("btn-play", "btn-step")
      disableButton("btn-pause", "drp-speed")

      document.getElementById("btn-pause").style.backgroundColor = "lightgrey"
      document.getElementById("btn-step").style.backgroundColor = "lightgreen"
      break

    case appStates.RUNNING:
      enableButton("btn-pause")
      disableButton("btn-play", "btn-step", "drp-speed")
      document.getElementById("btn-play").style.backgroundColor = "lightred"
      document.getElementById("btn-pause").style.backgroundColor = "lightgreen"
      break

    case appStates.STEP:
      enableButton("btn-step")
      disableButton("btn-play", "btn-pause", "drp-speed")
      break

    case appStates.STOPPED:
      enableButton("btn-play", "btn-step", "drp-speed")
      disableButton("btn-pause")
      document.getElementById("btn-play").style.backgroundColor = "lightgreen"
      document.getElementById("btn-pause").style.backgroundColor = "lightgrey"

      break
  }
}
async function tourClick() {
  introJs()
    .setOptions({
      steps: [
        {
          intro: "Intro für den Arithmetik Generator",
        },
        {
          element: document.querySelector("#btn-play"),
          intro:
            "Startet das automatische generieren des arithmetischen Ausdrucks.",
        },
        {
          element: document.querySelector("#btn-genInvalid"),
          intro:
            "Generiert einen ungüligen ausdruck indem ein gültiger ausdruck generiert wird und ein zeichen gelöscht wird",
        },
        {
          element: document.querySelector("#btn-pause"),
          intro:
            "Pausiert die generierung. Zum erneuten starten Start oder Schritt drücken.",
        },

        {
          element: document.querySelector("#btn-step"),
          intro:
            "Hier kann der Ausdruck, wenn die Generation abgebrochen wurde oder wenn die Maximallänge erreicht wurde, schrittweise weiter generiert werden.",
        },
        {
          element: document.querySelector("#btn-clear"),
          intro:
            "Bricht das generieren ab und versetzt die Applikation in den Initialzustand. Dies muss immer getan werden, bevor ein neuer Ausdruck generiert werden kann.",
        },
        {
          element: document.querySelector("#drp-speed"),
          intro: "Hier kann die Animationsgeschwindigkeit gewählt werden.",
        },
        {
          element: document.querySelector("#btn-tour"),
          intro: "Startet dieses Tutorial.",
        },
        {
          element: document.querySelector("#btn-doc"),
          intro: "Dokumentation der Anwendung.",
        },
        {
          element: document.querySelector("#output"),
          intro:
            "Hier erscheint der generierte Ausdruck bzw es werden Status informationen angezeigt.",
        },
        {
          element: document.querySelector("#output-table"),
          intro: "Hier kann die Generierung schrittweise nachvollzogen werden.",
        },
        {
          element: document.querySelector("#grammar"),
          intro: "Die Grammatik, die in dieser Anwendung zu grunde liegt.",
        },
      ],
    })
    .start()
}

async function pauseClick() {
  document.getElementById("output").innerHTML =
    "Generierter Ausdruck : \n Pausiert"
  pauseRequested = true
}
async function stepClick() {
  appState = appStates.STEP
  setupButtonStates()
  document.getElementById("output").innerHTML =
    "Generierter Ausdruck : \n Schritt klicken um den nächsten Schritt durchzuführen"
  currentState = nextState(currentState)
  if (isTerminal(currentState)) {
    markLastRow()
    disableButton("btn-step")
    alert("Ausdruck erfolgreich generiert")
    document.getElementById("output").innerHTML =
      "Generierter Ausdruck : \n" + currentState
  }
}
async function playClick() {
  pauseRequested = false
  if (appState != appStates.PAUSED) {
    clearTable()
  }
  appState = appStates.RUNNING
  setupButtonStates()
  document.getElementById("output").innerHTML =
    "Generierter Ausdruck : \n Generiere ..."
  var output = await genValid()

  document.getElementById("output").innerHTML =
    "Generierter Ausdruck : \n" + output.currentState
  appState = appStates.PAUSED
  setupButtonStates()
}

async function genValid() {
  while (!isTerminal(currentState)) {
    currentState = nextState(currentState)
    if (currentState.length > lengthInput.value) {
      alert("Maximale länge überschritten")
      break
    }
    if (pauseRequested) {
      break
    }
    await new Promise((r) =>
      setTimeout(r, document.getElementById("drp-speed").value)
    )
  }

  var output = {
    currentState,
    numberOpen: (currentState.match(/\(/g) || []).length,
    numberClosed: (currentState.match(/\)/g) || []).length,
    isValid: isTerminal(currentState) && eval(currentState),
  }
  if (!pauseRequested) {
    markLastRow()
  }
  return output
}

function genInvalid() {
  pauseRequested = false
  if (appState != appStates.PAUSED) {
    clearTable() //Only clear table if we start a new sim
  }
  appState = appStates.RUNNING
  setupButtonStates()

  var state = currentState
  while (!isTerminal(state)) {
    state = nextState(state)
    if (state.length > lengthInput.value) {
      alert("Maximale länge überschritten")
      break
    }
    if (pauseRequested) {
      break
    }
  }
  if (state.length == 1) {
    state = "-"
  } else {
    ops = "/"
    oldst = state
    state = state.replace(")", "")

    insertRow(++currentStep, ops, oldst, state)
    var table = document.getElementById("output-table")
    var rows = table.getElementsByTagName("tr")

    rows[rows.length - 1].className = "failure-row"
  }
  document.getElementById("output").innerHTML =
    "Generierter ungültiger Ausdruck : \n" + state
  appState = appStates.STOPPED
  setupButtonStates()
}
function markLastRow() {
  var table = document.getElementById("output-table")
  var rows = table.getElementsByTagName("tr")

  rows[rows.length - 1].className = "success-row"
}

function prependOps(op, operations) {
  for (var i = 0; i < operations.length; i++) {
    operations[i] = op + "->" + operations[i]
  }
}

function isTerminal(value) {
  if (value.includes("A")) return false
  if (value.includes("F")) return false
  if (value.includes("Z")) return false

  return true
}

function nextState(state, addToTable = true) {
  var oldState = state
  var operations = []
  state = state.replaceAll("F", () => {
    followers = shuffle(states.S.followers)
    operations.push(followers[0])
    return followers[0]
  })
  if (addToTable && operations.length > 0) {
    prependOps("F", operations)
    insertRow(++currentStep, operations.join(","), oldState, state)
  }
  oldState = state
  operations = []
  state = state.replaceAll("O", () => {
    followers = shuffle(states.O.followers)
    operations.push(followers[0])
    return followers[0]
  })
  if (addToTable && operations.length > 0) {
    prependOps("O", operations)
    insertRow(++currentStep, operations.join(","), oldState, state)
  }
  oldState = state
  operations = []

  state = state.replaceAll("A", () => {
    followers = shuffle(states.A.followers)
    operations.push(followers[0])
    return followers[0]
  })
  if (addToTable && operations.length > 0) {
    prependOps("A", operations)
    insertRow(++currentStep, operations.join(","), oldState, state)
  }
  oldState = state
  operations = []

  state = state.replaceAll("Z", () => {
    var val = getRandomIntInclusive(0, 9)
    operations.push(val)
    return val
  })
  if (addToTable && operations.length > 0) {
    prependOps("Z", operations)
    insertRow(++currentStep, operations.join(","), oldState, state)
  }
  return state
}

/**
 * Performs a fisher yates shuffle of a given array
 * @param {any[]} array
 * @returns the shuffled array
 */
function shuffle(array) {
  var m = array.length,
    t,
    i

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

/**
 * Gets a random number in the range of R=[min,max]
 * @param {number} min
 * @param {number} max
 * @returns a random number
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}

/**
 * Adds the disabled class to elements identified by id
 * @param  {...string} ids
 */
function disableButton(...ids) {
  ids.forEach((id) => document.getElementById(id).classList.add("disabled"))
}

/**
 * Remove the disabled class to elements identified by id
 * @param  {...string} ids
 */
function enableButton(...ids) {
  ids.forEach((id) => document.getElementById(id).classList.remove("disabled"))
}
function insertRow(step, rule, oldstate, newstate) {
  var table = document.getElementById("output-table")
  var row = table.insertRow()
  var cell0 = row.insertCell(0)
  cell0.innerHTML = step
  var cell1 = row.insertCell(1)
  cell1.innerHTML = oldstate
  var cell2 = row.insertCell(2)
  cell2.innerHTML = newstate
  var cell3 = row.insertCell(3)
  cell3.innerHTML = rule
}
