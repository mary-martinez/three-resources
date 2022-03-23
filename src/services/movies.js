import { client, checkError } from './client.js';
export async function fetchMovies(query = '') {
  console.log(query);
  let resp;
  if (query.length > 0) {
    resp = await client.from('movies').select('*').ilike('title', `%${query}%`);

  } else {
    resp = await client.from('movies').select('*');
  }
  return (checkError(resp));
}