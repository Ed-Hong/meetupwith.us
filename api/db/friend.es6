// created by ehong on 12-27-16
import models from '../../models/mongo/index.es6';
import * as Utils from '../../lib/utils.es6';
import _ from "lodash"

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
 * Returns a Friend object given a query
 *
 * @param {Object} attributes: key value pairs of the attributes we want to query by
 * @param {Array<String>} populateFields: fields to populate query with
 * @returns {Promise}: returns a Friend object
 */
export async function findOne(attributes, populateFields = []) {
    let findQuery = Friend.findOne(attributes);
    findQuery = _.reduce(populateFields, (query, field) =>
            findQuery.populate(field),
        findQuery);
    const friend = await findQuery.exec();
    if (Utils.isEmpty(friend)) {
        throw new Error(`Could not find producer with attributes: ${JSON.stringify(attributes)}`);
    }
    return friend;
}

/**
 * Returns a Query object for finding Friends
 *
 * @param {Object} conditions: key value pairs of the conditions we want to query by
 * @param {Number} limit: number of objects to limit the query to find
 * @param {Object} sortFields: key value pairs of the fields to sort on Ex: {createdAt: 'descending'}
 * @param {Array<String>} populateFields: fields to populate query with
 * @returns {Promise}: returns the Friends found
 */
export async function find(conditions, limit, sortFields, populateFields) {
    let findQuery = Friend.find(conditions);
    findQuery = _.reduce(populateFields, (query, field) =>
        findQuery.populate(field), findQuery);
    if (limit <= 0) return await findQuery.sort(sortFields).exec();
    return await findQuery.limit(limit).sort(sortFields).exec();
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
    if (Utils.isEmpty(friend)) {
        throw new Error(`Could not find and update status with attributes:
      ${conditions} with updates ${updates}`);
    }
    return friend;
}
