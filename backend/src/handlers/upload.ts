import { logger } from '@lib/logger';
import { Request } from 'express';

import { BaseRequestBody, TextResponse } from './interfaces/common';

// TODO BRYAN: document this
export const upload = (req: Request, res: TextResponse) => {
  try {
    if (!req.file) throw new Error('There was an error uploading your file');

    res.json({ response: 'File successfully uploaded' });
    res.status(200);
  } catch (error) {
    logger.error(error);

    res.status(500);
    res.send({ response: error });
  }
};
