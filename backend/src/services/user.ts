import { UserRepository } from '@repositories/index';

/**
 * Service function for logging a user in
 *
 * @param {string} username - the username to login with
 * @param {string} password - the password to login with
 */
export const login = async (username: string, password: string) => {
  await UserRepository.getUser(username, password);
};
