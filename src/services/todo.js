import { client, checkError } from './client';

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchTasks() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}
