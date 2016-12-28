import * as Status from '../db/status.es6';

/**
 * Creates a Status Object
 * @param {String} descrip: the status's description
 * @param {Boolean} bool: the availbility of the status
 * @returns {Promise}: the created Status object
 */
export async function create(descrip, bool ) {
  return await Status.create({description: descrip, availability: bool});
}

/**
 * Finds a status from the obectId
 * @param {ObjectId}_id : the objectId to find the status from
 * @returns {Promise}: the found Status
 */
export async function findById(_id) {
  return await Status.findOne(_id);
}

/**
 * Finds a Status and updates the fields of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} description: the Status's description to set
 * @param {Boolean} availability: the availability to set
 * @returns {Promise}: the updated Status object
 */
export async function findOneAndUpdate(_id, description, availability) {
  return await Status.findOneAndUpdate(_id, {description, availability});
}

/**
 * Finds a Status object and availability of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {Boolean} availability: the updated availability
 * @returns {Promise}: the updated Status object
 */
export async function updateAvailability(_id , availability) {
  return await Status.findOneAndUpdate(_id, {availability});
}

/**
 * Finds a Status object and updates the description of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} description: the description to update it with
 * @returns {Promise}: the updated Status object
 */
export async function updateDescription(_id, description) {
  return await Status.findOneAndUpdate(_id, {description});
}