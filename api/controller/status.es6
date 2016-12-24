import Status from '../db/status.es6';

export async function create(bool, descrip) {
  return await Status.create({description: descrip, availability: bool});
}