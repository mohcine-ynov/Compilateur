// Retrieve Elements
const consoleLogList = document.querySelector(".editor__console-logs");
const executeCodeBtn = document.querySelector(".editor__run");
const resetCodeBtn = document.querySelector(".editor__reset");

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = "console.log()";
let consoleMessages = [];

let editorLib = {
  clearConsoleScreen() {
    consoleMessages.length = 0;

    // Remove all elements in the log list
    while (consoleLogList.firstChild) {
      consoleLogList.removeChild(consoleLogList.firstChild);
    }
  },
  printToConsole() {
    consoleMessages.forEach((log) => {
      const newLogItem = document.createElement("li");
      const newLogText = document.createElement("pre");

      newLogText.className = log.class;
      newLogText.textContent = `> ${log.message}`;

      newLogItem.appendChild(newLogText);
      checkResults(log.message);

      consoleLogList.appendChild(newLogItem);
    });
  },
  init() {
    // Configure Ace

    // Theme
    codeEditor.setTheme("ace/theme/dreamweaver");

    // Set language
    codeEditor.session.setMode("ace/mode/javascript");

    // Set Options
    codeEditor.setOptions({
      fontFamily: "Inconsolata",
      fontSize: "12pt",
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    });

    // Set Default Code
    codeEditor.setValue(defaultCode);
  },
};

// Events
executeCodeBtn.addEventListener("click", () => {
  // Clear console messages
  editorLib.clearConsoleScreen();

  // Get input from the code editor
  const userCode = codeEditor.getValue();

  // Run the user code
  try {
    new Function(userCode)();
  } catch (err) {
    console.error(err);
  }

  // Print to the console
  editorLib.printToConsole();
});

resetCodeBtn.addEventListener("click", () => {
  // Clear ace editor
  codeEditor.setValue(defaultCode);

  // Clear console messages
  editorLib.clearConsoleScreen();
});

const resultsExpected = [5, '"Hello World"'];
let c = 0;

function checkResults(results) {
  console.log("results", results, resultsExpected[c]);
  if (results == resultsExpected[c]) {
    console.log("c", c);
    console.log("congrats");
    const checkbox1 = document.getElementById(`checkbox-ex-${c + 1}`);
    checkbox1.checked = true;
    c++;
  }
}

editorLib.init();
