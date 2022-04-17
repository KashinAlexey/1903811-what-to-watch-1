import ImportCommand from './cli-command/import-command.js';
import CLIApplication from './app/cli-application.js';

const myManager = new CLIApplication();
myManager.registerCommands([
  new ImportCommand
]);
myManager.processCommand(process.argv);
