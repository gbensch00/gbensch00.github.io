const q0 = {
  name: "q0",
  follower: ["q1", "q2"],
  isEnd: false,
}
const q1 = {
  name: "q1",
  follower: ["q2", "q3"],
  isEnd: true,
}
const q2 = {
  name: "q2",
  follower: ["q1", "q2", "q3"],
  isEnd: true,
}
const q3 = {
  name: "q3",
  follower: ["q1", "q3", "q2"],
  isEnd: false,
}
const rules = {
  "q0,q1": {
    read: "Z",
    readCellar: null,
    writeCellar: null,
    next: q1,
  },
  "q0,q2": {
    read: "(",
    readCellar: null,
    writeCellar: "X",
    next: q2,
  },
  "q1,q3": {
    read: "O",
    readCellar: null,
    writeCellar: null,
    next: q3,
  },
  "q1,q2": {
    read: ")",
    readCellar: "X",
    writeCellar: null,
    next: q2,
  },
  "q2,q1": {
    read: "Z",
    readCellar: null,
    writeCellar: null,
    next: q1,
  },
  "q2,q2": {
    read: "(",
    readCellar: null,
    writeCellar: "X",
    next: q2,
  },

  "q2,q3": [
    {
      read: "O",
      readCellar: null,
      writeCellar: null,
      next: q3,
    },
    {
      read: null,
      readCellar: null,
      writeCellar: null,
      next: q3,
    },
  ],
  "q3,q1": {
    read: "Z",
    readCellar: null,
    writeCellar: null,
    next: q1,
  },

  "q3,q2": [
    {
      read: "(",
      readCellar: null,
      writeCellar: "X",
      next: q2,
    },
    {
      read: null,
      readCellar: null,
      writeCellar: null,
      next: q2,
    },
  ],
  "q3,q3": {
    read: ")",
    readCellar: "X",
    writeCellar: null,
    next: q3,
  },
}

class Automaton {
  cellar = []
  currentState = null
  word = ""
  constructor(word) {
    this.currentState = q0
    this.word = word
  }

  finished() {
    return (
      this.word.length == 0 &&
      this.currentState.isEnd &&
      this.cellar.length == 0
    )
  }
  read(input, readType) {
    switch (readType) {
      case "Z":
        return (
          input == "0" ||
          input == "1" ||
          input == "2" ||
          input == "3" ||
          input == "4" ||
          input == "5" ||
          input == "6" ||
          input == "7" ||
          input == "8" ||
          input == "9"
        )
      case "O":
        return input == "+" || input == "-" || input == "*" || input == "/"
      case "(":
      case ")":
        return input == readType
      default:
        return false
    }
  }

  nextState() {
    var oldstate = this.currentState
    if (this.word.length == 0) {
      if (this.currentState.name == "q3") {
        this.currentState = q2
        return { result: true, rule: "q3_q2_1" }
      }
      return { result: false, rule: null }
    }
    var input = this.word.charAt(0)

    for (var i = 0; i < this.currentState.follower.length; i++) {
      var rulesByName =
        rules[`${this.currentState.name},${this.currentState.follower[i]}`]

      if (!rulesByName) {
        return { result: false, rule: null }
      }
      if (!Array.isArray(rulesByName)) {
        rulesByName = [rulesByName]
      }
      for (var j = 0; j < rulesByName.length; j++) {
        var rule = rulesByName[j]
        if (
          rule.read != null &&
          this.read(input, rule.read) &&
          !rule.readCellar
        ) {
          this.word = this.word.substring(1)
          this.currentState = rule.next
          if (rule.writeCellar) {
            this.cellar.push(rule.writeCellar)
            insertRow()
          }

          return {
            result: true,
            rule: `${oldstate.name}_${oldstate.follower[i]}_${j}`,
          }
        }
        if (
          rule.read != null &&
          this.read(input, rule.read) &&
          rule.readCellar
        ) {
          var cellarValue = this.cellar.pop()
          deleteRow()

          if (!cellarValue) {
            return {
              result: false,
              rule: `${oldstate.name}_${oldstate.follower[i]}_${j}`,
            }
          }
          this.word = this.word.substring(1)
          this.currentState = rule.next
          if (rule.writeCellar) {
            this.cellar.push(rule.writeCellar)
            insertRow()
          }

          return {
            result: true,
            rule: `${oldstate.name}_${oldstate.follower[i]}_${j}`,
          }
        }
        if (rule.read == null && !rule.readCellar) {
          this.word = this.word
          this.currentState = rule.next

          return {
            result: true,
            rule: `${oldstate.name}_${oldstate.follower[i]}_${j}`,
          }
        }
      }
    }
    return { result: false, rule: [] }
  }
}
