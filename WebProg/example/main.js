{
  ("use strict");

  document
    .getElementById("submitButton")
    .addEventListener("click", function checkInput() {
      let fn = document.getElementById("fname");
      let ln = document.getElementById("lname");
      let tag = document.createElement("p");
      let element = document.getElementById("containerDiv");
      element.appendChild(tag);
      let text = document.querySelector("form").querySelector("p");
      if (ln.value.length < 2 || fn.value.length < 2) {
        text.innerHTML = "Names must be at least 2 characters long.";
        text.classList.add("red");
      } else {
        text.classList.add("green");
        text.innerHTML = "Success!";
      }
    });

  const formDefault = document.querySelector("form");
  formDefault.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submission cancelled.");
  });

  document.querySelector("form").addEventListener("submit", (event) => {
    let allInputs = document.getElementsByTagName("input");
    for (let i = 0; i < allInputs.length; i++) {
      if (allInputs[i].value != "") {
        console.log(
          "Element: " + allInputs[i].name + ", value: " + allInputs[i].value
        );
      }
    }
  });
  document.querySelector("form").addEventListener("reset", (event) => {
    console.log("form reset");
    let text = document.querySelector("form").querySelector("p");
    text.parentNode.removeChild(text);
  });
}
