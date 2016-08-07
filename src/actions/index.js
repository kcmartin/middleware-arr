import { FETCH_USERS } from './types';

export function fectchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'June' },
      { name: 'Peter' },
      { name: 'Maria' },
    ]
  }
}
