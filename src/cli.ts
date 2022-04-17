import ImportCommand from './cli-command/import-command.js';
import CLIApplication from './app/cli-application.js';
import HelpCommand from './cli-command/help-command.js';

const myManager = new CLIApplication();
myManager.registerCommands([
  new HelpCommand, new ImportCommand
]);
myManager.processCommand(process.argv);
