import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import chalk from "chalk";

const rl = readline.createInterface({ input, output });

function exite() {
  rl.close();
  process.exit();
}

function choix(cmdx) {
  switch (cmdx) {
    case "cmd1": {
      {
        console.log("cmd1");
      }
      break;
    }
    case "exit": {
      console.log(chalk.red("exit --->  exit"));
      exite();
      break;
    }
    case "help": {
      console.log("help");

      break;
    }
    default: {
      console.log("Saisi non valide");
    }
  }
}

const promptREPL = async () => {
  const cmd = await rl.question(chalk.blue("$>> "));

  console.log(`Feedback: ${cmd}`);

  choix(cmd);

  promptREPL();
};

promptREPL();
