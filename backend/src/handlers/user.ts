import { logger } from '@lib/logger';
import { Response } from 'express';

import { UserService } from '@services/index';

import { LoginBody, TextResponse } from './interfaces/common';

/**
 * Handler function for logging a user in.
 *
 * @param {LoginBody} req - the request body containing the username and password
 * @param {TextResponse} res - the API response
 */
export const login = async (req: LoginBody, res: TextResponse) => {
  try {
    await UserService.login(req.body.username, req.body.password);

    res.status(200);
    res.send({ response: 'User successfully logged in' });
  } catch (error) {
    logger.error(error);

    res.status(500);
    res.send({ response: error.message });
  }
};
