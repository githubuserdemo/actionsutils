const core = require("@actions/core");

async function run() {
  // get input called fail
  const fail = core.getInput("fail");

  if (fail == "true") {
    core.setFailed("Failed");
  } else {
    core.setOutput("success", "true");
  }
}

run();
