// created by ehong on 12-27-16
import * as friend from '../../../api/db/friend.es6';
import * as status from '../../../api/db/status.es6';
import {clear} from '../../../models/mongo/index.es6';
import assert from 'assert';

describe('Friend DB API', () => {
    const statusAttributes = {
        available: true,
        descrip: "Hello World!" // eslint-disable-line
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
            const stat = await status.create({description: statusAttributes.descrip,
                availability: statusAttributes.available});

            const fr = await friend.create({
                firstName: attributes.firstName,
                lastName: attributes.lastName,
                phoneNumber: attributes.phoneNumber,
                email: attributes.email,
                profileImage: attributes.profileImage,
                enabled: attributes.enabled,
                availability: stat
            });

            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.equal(fr.availability._id, stat._id);
        });
    });

    describe('#findOne()', () => {
        it('should fail to find an uncreated Friend object', async () => {
            try{
                await friend.findOne({firstName: "This should fail"});

            } catch(e) { return;}
            assert(false);
        });

        it('should fail to find a Friend object when several exist', async () => {
            const stat = await status.create({description: statusAttributes.descrip,
                availability: statusAttributes.available});

            await friend.create({
                firstName: "Eddy",
                lastName: "Hong",
                phoneNumber: attributes.phoneNumber,
                email: attributes.email,
                profileImage: attributes.profileImage,
                enabled: attributes.enabled,
                availability: stat
            });

            await friend.create({
                firstName: "Drew",
                lastName: "Poovey",
                phoneNumber: attributes.phoneNumber,
                email: attributes.email,
                profileImage: attributes.profileImage,
                enabled: attributes.enabled,
                availability: stat
            });
            try {
                await findOne({firstName: "This should also fail"});
            } catch (e) {
                return;
            } assert(false);
        });

        it('should find a created Friend object successfully', async () => {
            const stat = await status.create({description: statusAttributes.descrip,
                availability: statusAttributes.available});

            const {_id} = await friend.create({
                firstName: attributes.firstName,
                lastName: attributes.lastName,
                phoneNumber: attributes.phoneNumber,
                email: attributes.email,
                profileImage: attributes.profileImage,
                enabled: attributes.enabled,
                availability: stat
            });

            const fr = await friend.findOne(_id);

            assert.equal(fr.firstName, attributes.firstName);
            assert.equal(fr.lastName, attributes.lastName);
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.deepEqual(fr.availability, stat._id);
        });
    });

    describe('#findOneAndUpdate()', () => {
        it('should fail to find and update a Friend object that does not exist', async () => {
            try {
                await friend.findOneAndUpdate({firstName: "Hi please fail"}, {lastName: "new lastName",
                    email: "new email"});
            } catch (e) { return;}
            assert(false);
        });

        it('should find and update a Friend object successfully', async () => {
            const stat = await status.create({description: statusAttributes.descrip,
                availability: statusAttributes.available});

            const {_id} = await friend.create({
                firstName: attributes.firstName,
                lastName: attributes.lastName,
                phoneNumber: attributes.phoneNumber,
                email: attributes.email,
                profileImage: attributes.profileImage,
                enabled: attributes.enabled,
                availability: stat
            });

            const fr = await friend.findOneAndUpdate(_id, {firstName: "Meow",
                lastName: "Spaghetti"});

            assert.equal(fr.firstName, "Meow");
            assert.equal(fr.lastName, "Spaghetti");
            assert.equal(fr.phoneNumber, attributes.phoneNumber);
            assert.equal(fr.email, attributes.email);
            assert.equal(fr.profileImage, attributes.profileImage);
            assert.equal(fr.enabled, attributes.enabled);
            assert.deepEqual(fr.availability, stat._id);
        });
    });

});
