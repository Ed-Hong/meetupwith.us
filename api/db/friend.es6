// created by ehong on 12-27-16
import models from '../../models/mongo/index.es6';
const Friend = models.Friend;

/**
 * Creates a Friend object based off the schema
 * @param {*} attributes: the attributes to add
 * @returns {Promise} the created object
 */

export async function create(attributes) {
    return await (new Friend(attributes)).save();
}
/**
 *Returns a Friend object given a query
 *@param {Object} attributes: key value pairs of the attributes we want to query by
 *@returns {Promise}: returns a SocketToken object
 */
export async function findOne(attributes) {
    const friend = await Friend.findOne(attributes).exec();
    if(friend == null) throw new Error(`Could not find and 
    update friend with attributes ${attributes}`);
    return friend
}

/**
 *
 * @param {Object} conditions: the conditions to find the object by
 * @param {Object} updates: the updated fields
 * @param {Object} options: options to pass for the query and update
 * @returns {Promise}: the updated Friend object
 */
export async function findOneAndUpdate(conditions, updates, options = null) {
    const friend = await Friend.findOneAndUpdate(conditions, updates, {new: true}).exec();
    if ((friend ==  null)) {
        throw new Error(`Could not find and update status with attributes:
      ${conditions} with updates ${updates}`);
    }
    return friend;
}
