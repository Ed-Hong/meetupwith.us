/**
 * Created by ehong on 12/28/16.
 */
import * as friend from '../../../api/controller/friend.es6';
import * as status from '../../../api/controller/status.es6';
import {clear} from '../../../models/mongo/index.es6';
import assert from 'assert';

describe('Friend Controller API', () => {
    const statusAttributes = {
        available: true,
        descrip: "Hello World!"
    };

    const attributes = {
        firstName: "Hello",
        lastName: "World",
        phoneNumber:"2142644998",
        email:"bobtester@gmail.com",
        profileImage:"http://i.imgur.com/KxFO2vS.jpg",
        enabled:true,
        //availability: statusAttributes
    };
    beforeEach(async () => {
        await clear();
    });

    describe('#create()', () => {
        it('should create a Friend object with attributes successfully', async () => {
            const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

            const fr = await friend.create(
                attributes.firstName,
                attributes.lastName,
                attributes.phoneNumber,
                attributes.email,
                attributes.profileImage,
                attributes.enabled,
                stat
            );

            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.equal(fr.availability._id, stat._id);
        });
    });

    describe('#findById', () => {
        it('should fail to find a Friend object using ObjectId', async () => {
            try {
                await friend.findById('adasd');
            } catch (e) { return;}
            assert(false);
        });

        it('should find a Friend object using ObjectId', async () => {
            const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

            const {_id} = await friend.create(
                attributes.firstName,
                attributes.lastName,
                attributes.phoneNumber,
                attributes.email,
                attributes.profileImage,
                attributes.enabled,
                stat
            );

            const fr = await friend.findById(_id);
            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.deepEqual(fr.availability, stat._id);
        });
    });

    describe('#updateFirstName', () => {
        it('should fail to find a Friend object using an ObjectId', async () => {
            try {
                await friend.updateFirstName("oogabooga" , "new name");
            } catch (e) { return;}
            assert(false);
        });

        it('should update a Friend objects firstName', async () => {
            const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

            const {_id} = await friend.create(
                attributes.firstName,
                attributes.lastName,
                attributes.phoneNumber,
                attributes.email,
                attributes.profileImage,
                attributes.enabled,
                stat
            );

            const fr = await friend.updateFirstName(_id, "meow");
            assert.equal(fr.firstName, "meow");
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.deepEqual(fr.availability, stat._id);
        });
    });

    describe('#updateLastName', () => {
        it('should fail to find a Friend object using an ObjectId', async () => {
            try {
                await friend.updateLastName("oogabooga" , "new name");
            } catch (e) { return;}
            assert(false);
        });

        it('should update a Friend objects lastName', async () => {
            const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

            const {_id} = await friend.create(
                attributes.firstName,
                attributes.lastName,
                attributes.phoneNumber,
                attributes.email,
                attributes.profileImage,
                attributes.enabled,
                stat
            );

            const fr = await friend.updateLastName(_id, "meow");
            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, "meow");
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.deepEqual(fr.availability, stat._id);
        });
    });

    describe('#updatePhoneNumber', () => {
        it('should fail to find a Friend object using an ObjectId', async () => {
            try {
                await friend.updatePhoneNumber("oogabooga" , "new name");
            } catch (e) { return;}
            assert(false);
        });

        it('should update a Friend objects phoneNumber', async () => {
            const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

            const {_id} = await friend.create(
                attributes.firstName,
                attributes.lastName,
                attributes.phoneNumber,
                attributes.email,
                attributes.profileImage,
                attributes.enabled,
                stat
            );

            const fr = await friend.updatePhoneNumber(_id, "meow");
            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, "meow");
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.deepEqual(fr.availability, stat._id);
        });
    });

    describe('#updateEmail', () => {
        it('should fail to find a Friend object using an ObjectId', async () => {
            try {
                await friend.updateEmail("oogabooga" , "new name");
            } catch (e) { return;}
            assert(false);
        });

        it('should update a Friend objects email', async () => {
            const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

            const {_id} = await friend.create(
                attributes.firstName,
                attributes.lastName,
                attributes.phoneNumber,
                attributes.email,
                attributes.profileImage,
                attributes.enabled,
                stat
            );

            const fr = await friend.updateEmail(_id, "meow");
            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, "meow");
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.deepEqual(fr.availability, stat._id);
        });
    });

    describe('#updateProfileImage', () => {
        it('should fail to find a Friend object using an ObjectId', async () => {
            try {
                await friend.updatePhoneNumber("oogabooga" , "new name");
            } catch (e) { return;}
            assert(false);
        });

        it('should update a Friend objects profileImage (url)', async () => {
            const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

            const {_id} = await friend.create(
                attributes.firstName,
                attributes.lastName,
                attributes.phoneNumber,
                attributes.email,
                attributes.profileImage,
                attributes.enabled,
                stat
            );

            const fr = await friend.updateProfileImage(_id, "meow");
            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, "meow");
            assert.equal(fr.enabled, attributes.enabled);
            assert.deepEqual(fr.availability, stat._id);
        });
    });

    describe('#updateEnabled', () => {
        it('should fail to find a Friend object using an ObjectId', async () => {
            try {
                await friend.updatePhoneNumber("oogabooga" , "new name");
            } catch (e) { return;}
            assert(false);
        });

        it('should update a Friend objects enabled state', async () => {
            const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

            const {_id} = await friend.create(
                attributes.firstName,
                attributes.lastName,
                attributes.phoneNumber,
                attributes.email,
                attributes.profileImage,
                attributes.enabled,
                stat
            );

            const fr = await friend.updateEnabled(_id, false);
            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, false);
            assert.deepEqual(fr.availability, stat._id);
        });
    });


});
