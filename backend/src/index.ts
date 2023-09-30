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
import { userRoutes } from './routes/user';

const app = express();

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// normally we would export each set of routes to a single routes file, instead of directly importing it
app.use(userRoutes);

app.listen(port, () => {
  logger.info(`Running on ${port}`);
});
