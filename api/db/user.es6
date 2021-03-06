// created by apoovey 12-26-16
import models from '../../models/mongo/index.es6';
const User = models.User;
import * as Utils from '../../lib/utils.es6'
import _ from 'lodash';

/**
 * Creates a User object based off the schema
 * @param {*} attributes: the attributes to add to the status
 * @returns {Promise} the created object
 */

export async function create(attributes) {
  return await (new User(attributes)).save();
}
/**
 *Returns a User object given a query
 *@param {Object} attributes: key value pairs of the attributes we want to query by
 * @param {*} populateFields: the fields to populate query with
 *@returns {Promise}: returns a SocketToken object
 */
export async function findOne(attributes, populateFields = []) {
  let findQuery = User.findOne(attributes);
  findQuery = _.reduce(populateFields, (query, field) =>
      findQuery.populate(field),
    findQuery);
  const user = await findQuery.exec();
  if (Utils.isEmpty(user)) {
    throw new Error(`Could not find producer with attributes: ${JSON.stringify(attributes)}`);
  }
  return user;
}


/**
 *
 * @param {Object} conditions: the conditions to find the object by
 * @param {Object} updates: the updated fields
 * @param {Object} options: options to pass for the query and update
 * @returns {Promise}: the updated User object
 */
export async function findOneAndUpdate(conditions, updates, options = null) {
  const user = await User.findOneAndUpdate(conditions, updates, {new: true}).exec();
  if ((user ==  null)) {
    throw new Error(`Could not find and update status with attributes:
      ${conditions} with updates ${updates}`);
  }
  return user;
}
