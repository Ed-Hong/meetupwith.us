import models from '../../models/mongo/index.es6';
const Status = models.Status;

/**
 * Creates a Status object based off the schema
 * @param {*} attributes: the attributes to add to the hour of the producers
 * @returns {Promise} the created object
 */

export async function create(attributes) {
  return await (new Status(attributes)).save();
}
/**
 *Returns a Status object given a query
 *@param {Object} attributes: key value pairs of the attributes we want to query by
 *@returns {Promise}: returns a SocketToken object
 */
export async function findOne(attributes) {
  return await Status.findOne(attributes).exec();
}


export async function findOneAndUpdate(conditions, updates, options = null) {
  const status = await Status.findOneAndUpdate(conditions, updates, options).exec();
  if (Utils.isEmpty(status)) {
    throw new Error(`Could not find and update status with attributes: ${conditions} with updates ${updates}`);
  }
  return status;
}
