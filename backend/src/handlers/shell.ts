import { logger } from '@lib/logger';
import { Request, Response } from 'express';

import { ShellService } from '@services/index';

import { BaseRequestBody, TextResponse } from './interfaces/common';

/**
 * Handler function for executing a command on the local backend server.
 *
 * @param {BaseRequestBody} req - the request being made
 * @param {TextResponse} res - the API response
 */
export const executeCommand = async (req: BaseRequestBody<{ command: string }>, res: TextResponse) => {
  try {
    await ShellService.executeCommand(req.body.command);

    res.json({ response: 'Success' });
    res.status(200);
  } catch (error) {
    logger.error(error);

    res.json({ response: error });
    res.status(500);
  }
};
