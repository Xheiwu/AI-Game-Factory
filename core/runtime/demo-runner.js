const RuntimeRunner = require('./runtime-runner');
const modules = require('../modules/mock-modules');
const workflow = require('./demo-workflow.json');

async function main() {
  const runner = new RuntimeRunner(modules);
  const result = await runner.run(workflow, {
    input: 'game_screenshot_demo'
  });

  console.log(JSON.stringify(result, null, 2));
}

main();
