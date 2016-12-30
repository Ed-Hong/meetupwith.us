/**
 * Created by ehong on 12/28/16.
 */
import * as friend from '../../../api/controller/friend.es6';
import * as status from '../../../api/controller/status.es6';
import {clear} from '../../../models/mongo/index.es6';
import * as user from '../../../api/controller/user.es6';
import assert from 'assert';

describe('User Controller API', () => {
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
    userName: 'pirate',
    password: 'booty'
  };
  beforeEach(async () => {
    await clear();
  });

  describe('#create()', () => {
    it('should create a User object with attributes successfully', async () => {
      const usr = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);

      assert.equal(usr.publicInfo.firstName, attributes.firstName);
      assert.equal(usr.publicInfo.lastName, attributes.lastName);
      assert.equal(usr.userName, attributes.userName);
    });

    it('should create a several User object with attributes successfully', async () => {
      const usr = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      const usr2 = await user.create('eddy', attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);

      assert.equal(usr.publicInfo.firstName, attributes.firstName);
      assert.equal(usr.publicInfo.lastName, attributes.lastName);
      assert.equal(usr.userName, attributes.userName);
      assert.equal(usr2.publicInfo.firstName, attributes.firstName);
      assert.equal(usr2.publicInfo.lastName, attributes.lastName);
      assert.equal(usr2.userName, 'eddy');
    });

    it('should fail to create a User with a taken username', async () => {
      await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      try {
        await user.create(attributes.userName, attributes.password,
          attributes.firstName, attributes.lastName, attributes.phoneNumber);
      } catch(e) {return;}
      assert(false);
    });
  });

  describe('#find()', () => {
    it('should find a User object with by id', async() => {
      const usr = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      const find  = await user.findOne(usr._id);
      assert.deepEqual(usr._id, find._id)
    });
  });

  describe('#updatePassword()', () => {
    it('should find a User object with by id', async() => {
      const {_id} = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      const usr  = await user.updatePassword(_id, 'cats');
      assert(usr.password, 'cats');
    });
  });

  describe('#addFriend()', () => {
    it('should add a friend to User object', async() => {
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
      const {_id} = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      const usr  = await user.addFriend(_id, fr);
      assert.deepEqual(usr.friendList[0]._id, fr._id);
    });

    it('should add several unqique friends to a User object', async() => {
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
      const fr2 = await friend.create(
        'pirateBooty',
        'Robinson',
        attributes.phoneNumber,
        attributes.email,
        attributes.profileImage,
        attributes.enabled,
        stat
      );
      const {_id} = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      await user.addFriend(_id, fr);
      const usr = await user.addFriend(_id, fr2);
      assert.deepEqual(usr.friendList[0]._id, fr._id);
      assert.deepEqual(usr.friendList[1]._id, fr2._id);
    });

    it('should fail to friends to a User object that are the same', async() => {
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

      const {_id} = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      await user.addFriend(_id, fr);
      try {
        await user.addFriend(_id, fr);
      } catch(e) {return;}
      assert(false);
    });
  });

  describe('#findEnabledFriends()', () => {
    it('should find all enabled friends for a User', async() => {
      const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

      const {_id} = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      const fr = await friend.create(
        attributes.firstName,
        attributes.lastName,
        attributes.phoneNumber,
        attributes.email,
        attributes.profileImage,
        attributes.enabled,
        stat
      );
      const fr2 = await friend.create(
        'pirateBooty',
        'Robinson',
        attributes.phoneNumber,
        attributes.email,
        attributes.profileImage,
        attributes.enabled,
        stat
      );
      await user.addFriend(_id, fr);
      await user.addFriend(_id, fr2);
      const friends = await user.findEnabledFriends(_id);
      assert.equal(2, friends.length);
      assert.deepEqual(friends[0]._id, fr._id);
      assert.deepEqual(friends[1]._id, fr2._id);
    });

    it('should find all enabled friends for a User', async() => {
      const stat = await status.create(statusAttributes.descrip, statusAttributes.available);

      const {_id} = await user.create(attributes.userName, attributes.password,
        attributes.firstName, attributes.lastName, attributes.phoneNumber);
      const fr = await friend.create(
        attributes.firstName,
        attributes.lastName,
        attributes.phoneNumber,
        attributes.email,
        attributes.profileImage,
        attributes.enabled,
        stat
      );
      const fr2 = await friend.create(
        'pirateBooty',
        'Robinson',
        attributes.phoneNumber,
        attributes.email,
        attributes.profileImage,
        false,
        stat
      );
      await user.addFriend(_id, fr);
      await user.addFriend(_id, fr2);
      const friends = await user.findEnabledFriends(_id);
      assert.equal(1, friends.length);
      assert.deepEqual(friends[0]._id, fr._id);
    });
  });
});
