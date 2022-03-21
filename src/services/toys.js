import { client, checkError } from './client';
export async function getToys() {
  const resp = await client.from('toys').select('*');
  return (checkError(resp));
}