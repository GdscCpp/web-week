/* tslint:disable:ordered-imports */
import express from 'express';
import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@handlers': `${__dirname}/handlers`,
  '@lib': `${__dirname}/lib`,
  '@config': `${__dirname}/config`,
  '@services': `${__dirname}/services`,
  '@repositories': `${__dirname}/repositories`,
  '@integrations': `${__dirname}/integrations`,
  '@routes': `${__dirname}/routes`,
});

import { logger } from '@lib/logger';
import routes from './routes';

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  logger.info(`Running on ${port}`);
});
