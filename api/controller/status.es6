import * as Status from '../db/status.es6';

export async function create(descrip, bool ) {
  return await Status.create({description: descrip, availability: bool});
}