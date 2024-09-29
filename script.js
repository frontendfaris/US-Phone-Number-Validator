const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkUserInput = (input) => {
  const usNumRegex =
    /^1?\s?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }
  resultsDiv.textContent = usNumRegex.test(input)
    ? `Valid US number: ${input}`
    : `Invalid US number: ${input}`;
};

checkBtn.addEventListener("click", () => {
  checkUserInput(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});
