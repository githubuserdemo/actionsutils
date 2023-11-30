const core = require("@actions/core");

async function run() {
  // get input called fail
  const fail = core.getInput("fail");

  if (fail == "true") {
    core.setFailed(`Failed - ${await randomFunction()}`);
  } else {
    core.setOutput("success", "true");
  }
}

run();

async function randomFunction() {
  // see exit code
  console.log("exit code", process.exitCode);
  process.exitCode = 0;
  return "I am a random function";
}
