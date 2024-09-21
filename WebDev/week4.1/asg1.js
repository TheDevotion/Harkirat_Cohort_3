const { Command } = require("commander");
const program = new Command();
const fs = require("fs");

program
  .name("char-count")
  .description("CLI for character count")
  .version("0.8.0");

program
  .command("count")
  .description("give character count in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("your file has characters.: ");
        console.log(data.split("").length);
      }
    });
  });

program.parse();
