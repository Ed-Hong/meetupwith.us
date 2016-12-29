//created by ehong on 12-27-16
import * as Friend from '../db/friend.es6';

/**
 * Creates a Friend Object with required parameters
 * @param {String} firstName: the Friend object's first name
 * @param {String} lastName: the Friend object's last name
 * @param {String} phoneNumber: the Friend object's phone number
 * @param {String} email: the Friend object's email address
 * @param {String} profileImage: a URL to the Friend object's profile picture
 * @param {Boolean} enabled: the Friend object's enabled attribute
 * @param {Promise} availability: the Friend object's Status
 * @returns {Promise}: the created Status object
 */

export async function create(firstName, lastName, phoneNumber, email, profileImage, enabled, availability) {
    return await Friend.create( {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        profileImage: profileImage,
        enabled: enabled,
        availability: availability } );
}

/**
 * Finds a Friend from the obectId
 * @param {ObjectId}_id : the objectId to find the Friend from
 * @returns {Promise}: the found Friend
 */
export async function findById(_id) {
    return await Friend.findOne(_id, ['availability']);
}

/**
 * Finds a Friend and updates the fields of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} firstName: the Friend object's first name
 * @param {String} lastName: the Friend object's last name
 * @param {String} phoneNumber: the Friend object's phone number
 * @param {String} email: the Friend object's email address
 * @param {String} profileImage: a URL to the Friend object's profile picture
 * @param {Boolean} enabled: the Friend object's enabled attribute
 * @param {Status} availability: the Friend object's Status
 * @returns {Promise}: the updated Friend object
 */
export async function findOneAndUpdate(_id, firstName, lastName, phoneNumber, email, profileImage, enabled, availability) {
    return await Friend.findOneAndUpdate({_id}, {description, availability});
}

/**
 * Finds a Friend object and updates the FirstName of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} firstName: the updated first name
 * @returns {Promise}: the updated Friend object
 */
export async function updateFirstName(_id , firstName) {
    return await Friend.findOneAndUpdate({_id}, {firstName});
}

/**
 * Finds a Friend object and updates the LastName of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} lastName: the updated last name
 * @returns {Promise}: the updated Friend object
 */
export async function updateLastName(_id , lastName) {
    return await Friend.findOneAndUpdate({_id}, {lastName});
}

/**
 * Finds a Friend object and updates the availability of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} phoneNumber: the updated phone number
 * @returns {Promise}: the updated Friend object
 */
export async function updatePhoneNumber(_id , phoneNumber) {
    return await Friend.findOneAndUpdate({_id}, {phoneNumber});
}

/**
 * Finds a Friend object and updates the availability of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} email: the updated email address
 * @returns {Promise}: the updated Friend object
 */
export async function updateEmail(_id , email) {
    return await Friend.findOneAndUpdate({_id}, {email});
}

/**
 * Finds a Friend object and updates the availability of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {String} profileImage: the updated profile image URL
 * @returns {Promise}: the updated Friend object
 */
export async function updateProfileImage(_id , profileImage) {
    return await Friend.findOneAndUpdate({_id}, {profileImage});
}

/**
 * Finds a Friend object and updates the availability of it
 * @param {ObjectId} _id: the ObjectId to query with
 * @param {Boolean} enabled: the updated enabled state
 * @returns {Promise}: the updated Friend object
 */
export async function updateEnabled(_id , enabled) {
    return await Friend.findOneAndUpdate({_id}, {enabled});
}