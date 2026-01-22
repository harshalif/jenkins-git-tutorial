const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "output.txt");

process.stdin.setEncoding("utf8");

console.log("Enter text to append and press Enter:");

process.stdin.once("data", (data) => {
  fs.appendFile(FILE_PATH, "\n" + data.trim(), (err) => {
    if (err) {
      console.error("Error appending file:", err);
      process.exit(1);
    }

    console.log("Text appended to output.txt");
    askToViewFile();
  });
});

function askToViewFile() {
  console.log("Do you want to view the file content? (y/n)");

  process.stdin.once("data", (answer) => {
    const choice = answer.trim().toLowerCase();

    if (choice === "y") {
      showFileContent();
    } else {
      console.log("Exiting...");
      process.exit();
    }
  });
}

function showFileContent() {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      process.exit(1);
    }

    console.log("\n--- File Content ---");
    console.log(data);
    console.log("--------------------");

    process.exit();
  });
}
