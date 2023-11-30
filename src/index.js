const core = require("@actions/core");

async function run() {
  // get input called fail
  const fail = core.getInput("fail");

  if (fail == "true") {
    core.setFailed("Failed");
    await randomFunction();
    // see exit code
    console.log("exit code", process.exitCode);

    process.exitCode = 0;
  } else {
    core.setOutput("success", "true");
  }
}

run();

async function randomFunction() {
  console.log("random function");
}
