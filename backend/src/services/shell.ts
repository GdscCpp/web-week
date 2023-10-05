import { logger } from '@lib/logger';
import { exec } from 'child_process';


/**
 * Service function for executing a command on the local backend server
 *
 * @param {string} command - the command to be executed
 */
export const executeCommand = async (command: string) => {
    return new Promise(function (resolve, reject) {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }

        logger.info(`${command}: ${stdout.trim()}`)
        resolve(stdout.trim());
      });
    });
};
