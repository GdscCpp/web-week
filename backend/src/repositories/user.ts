import { readFile } from 'fs/promises';

import { DatabaseEntry } from '@lib/interfaces/db';

/**
 * Repository function for getting a user by their email and password
 * 
 * @param {string} username - the desired username to search for
 * @param {string} password - the desired password to search for
 * @returns {Promise<void>} 
 */
export const getUser = async (username: string, password: string) => {
  // Normally this would be a db model/connection instance, but we are keeping it simple
  const items: DatabaseEntry[] = JSON.parse(await readFile('./src/lib/db.json', 'utf8'));

  for (let i = 0; i < items.length; i++) {
    if (items[i].username === username && items[i].password === password) {
      return;
    }
  }

  throw new Error('Incorrect Username/Password Combination');
};
