// created by apoovey 12-26-16
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
  const status = await Status.findOne(attributes).exec();
  if(status == null) throw new Error(`Could not find and 
    update status with attributes ${attributes}`);
  return status
}

/**
 * 
 * @param {Object} conditions: the conditions to find the object by
 * @param {Object} updates: the updated fields
 * @param {Object} options: options to pass for the query and update
 * @returns {Promise}: the updated Status object
 */
export async function findOneAndUpdate(conditions, updates, options = null) {
  const status = await Status.findOneAndUpdate(conditions, updates, {new: true}).exec();
  if ((status ==  null)) {
    throw new Error(`Could not find and update status with attributes:
      ${conditions} with updates ${updates}`);
  }
  return status;
}
