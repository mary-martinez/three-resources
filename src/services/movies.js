import { client, checkError } from './client.js';
export async function fetchMovies() {
  const resp = await client.from('movies').select('*');
  return (checkError(resp));
}