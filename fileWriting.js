import fs from "fs";
import path from "path";

// Get the directory path of the current script using __dirname
const filePath = path.join(__dirname, "message.txt");

// Write to the file
fs.writeFile(filePath, "Hello, my name is Aarati Thapa", (err) => {
  if (err) throw err;
  console.log("The file has been saved at:", filePath);
});

// Read from the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("File content:");
  console.log(data);
});
