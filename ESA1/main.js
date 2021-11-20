var richtig = [
  "BTSSXXTVVE",
  "BPVVE",
  "BTXXVPSE",
  "BTSXSE",
  "BTXSE",
  "BPVPXVPXVPXVVE",
  "BTSXXVPSE",
  "BPVPXVPXTVVE",
  "BPTTVPXVVE",
  "BPTTVVE",
  "BPTVVE",
  "BTXXTTVVE",
]
var falsch = [
  "BTSSPXSE",
  "BXPVVBS",
  "BSTVSPPS",
  "BBXVSPXSSSS",
  "BXSTTTVBXXSTE",
  "BPTVVB",
  "BTXXVVSE",
  "BPVSPSE",
  "BTSSSE",
  "BPPVVV",
]
window.onload = function () {
  document
    .getElementById("generierekorrekt")
    .addEventListener("click", function () {
      alert("works")
    })
  document
    .getElementById("generierekorrekt")
    .addEventListener("click", function () {
      ergebnis = richtig[Math.floor(Math.random() * richtig.length)]
      document.getElementById("inputs").value = ergebnis
      testNum(ergebnis)
    })

  document
    .getElementById("generierefalsch")
    .addEventListener("click", function () {
      ergebnis = falsch[Math.floor(Math.random() * falsch.length)]
      document.getElementById("inputs").value = ergebnis
      testNum(ergebnis)
    })

  function isInArray(array, search) {
    return array.indexOf(search) >= 0
  }

  function testNum(value) {
    var result
    if (isInArray(richtig, value)) {
      result = "Korrekt"
    } else {
      result = "Nicht Korrekt"
    }
    document.getElementById("ausgabe").value = result
  }
}
