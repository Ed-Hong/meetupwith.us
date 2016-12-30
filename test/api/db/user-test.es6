
// created by apoovey 12-28-16
import * as status from '../../../api/db/status.es6';
import * as friend from '../../../api/db/friend.es6'
import * as User from '../../../api/db/user.es6'
import {clear} from '../../../models/mongo/index.es6';
import assert from 'assert';

describe('User DB API', () => {
  const attributes = {
    descrip: 'hello world',
    availability: true,
    firstName: "Hello",
    lastName: "World",
    phoneNumber:"2142644998",
    email:"bobtester@gmail.com",
    profileImage:"http://i.imgur.com/KxFO2vS.jpg",
    enabled:true,
    userName: 'captainHooker',
    password: 'hooks'
  };
  beforeEach(async () => {
    await clear();
  });

  describe('#create()', () => {
    it('should fail to create a User object with the same usernames', async () => {
      const stat = await status.create({description: attributes.descrip,
        availability: attributes.availability});
      const fr = await friend.create({
        firstName: attributes.firstName,
        lastName: attributes.lastName,
        phoneNumber: attributes.phoneNumber,
        email: attributes.email,
        profileImage: attributes.profileImage,
        enabled: attributes.enabled,
        availability: stat
      });
      try {
        await User.create({
          publicInfo: fr,
          userName: attributes.userName,
          password: attributes.password
        });
        await User.create({
          publicInfo: fr,
          userName: attributes.userName,
          password: 'passy'
        });
      } catch(e) { return;}
      assert(false)
    });

    it('should create a User object with attributes successfully', async () => {
      const stat = await status.create({description: attributes.descrip,
        availability: attributes.availability});
      const fr = await friend.create({
        firstName: attributes.firstName,
        lastName: attributes.lastName,
        phoneNumber: attributes.phoneNumber,
        email: attributes.email,
        profileImage: attributes.profileImage,
        enabled: attributes.enabled,
        availability: stat
      });
      const user = await User.create({
        publicInfo: fr,
        userName: attributes.userName,
        password: attributes.password
      });
      assert.equal(user.password, attributes.password);
      assert.equal(user.userName, attributes.userName);
      assert.equal(user.publicInfo.availability._id, stat._id);
      assert.equal(user.publicInfo._id, fr._id);
    });

    it('should create several User objects with attributes successfully', async () => {
      const stat = await status.create({description: attributes.descrip,
        availability: attributes.availability});

      const fr = await friend.create({
        firstName: attributes.firstName,
        lastName: attributes.lastName,
        phoneNumber: attributes.phoneNumber,
        email: attributes.email,
        profileImage: attributes.profileImage,
        enabled: attributes.enabled,
        availability: stat
      });

      const user1 = await User.create({
        publicInfo: fr,
        userName: attributes.userName,
        password: attributes.password
      });

      const user2 = await User.create({
        publicInfo: fr,
        userName: "bob",
        password: attributes.password
      });

      assert.equal(user1.password, attributes.password);
      assert.equal(user1.userName, attributes.userName);
      assert.equal(user1.publicInfo.availability._id, stat._id);
      assert.equal(user1.publicInfo._id, fr._id);

      assert.equal(user2.password, attributes.password);
      assert.equal(user2.userName, "bob");
      assert.equal(user2.publicInfo.availability._id, stat._id);
      assert.equal(user2.publicInfo._id, fr._id);
    });
  });

  describe('#findOne()', () => {
    it('should find a User object with attributes successfully', async () => {
      const stat = await status.create({description: attributes.descrip,
        availability: attributes.availability});

      const fr = await friend.create({
        firstName: attributes.firstName,
        lastName: attributes.lastName,
        phoneNumber: attributes.phoneNumber,
        email: attributes.email,
        profileImage: attributes.profileImage,
        enabled: attributes.enabled,
        availability: stat
      });

      const {_id} =  await User.create({
        publicInfo: fr,
        userName: attributes.userName,
        password: attributes.password
      });

      const user = await User.findOne(_id);

      assert.equal(user.password, attributes.password);
      assert.equal(user.userName, attributes.userName);
      assert.deepEqual(user.publicInfo, fr._id);
    });

    it('should find a User object with attributes successfully', async () => {
      const stat = await status.create({description: attributes.descrip,
        availability: attributes.availability});

      const fr = await friend.create({
        firstName: attributes.firstName,
        lastName: attributes.lastName,
        phoneNumber: attributes.phoneNumber,
        email: attributes.email,
        profileImage: attributes.profileImage,
        enabled: attributes.enabled,
        availability: stat
      });

      const {_id: id1} =  await User.create({
        publicInfo: fr,
        userName: attributes.userName,
        password: attributes.password
      });
      const {_id: id2} =  await User.create({
        publicInfo: fr,
        userName: 'hello world',
        password: 'world'
      });

      const user1 = await User.findOne(id1);
      const user2 = await User.findOne(id2);


      assert.equal(user1.password, attributes.password);
      assert.equal(user1.userName, attributes.userName);
      assert.deepEqual(user1.publicInfo, fr._id);

      assert.equal(user2.password, 'world');
      assert.equal(user2.userName, 'hello world');
      assert.deepEqual(user2.publicInfo, fr._id);
    });
  });

  describe('#findOneandUpdate()', () => {
    it('should find a User object and update the password', async () => {
      const stat = await status.create({description: attributes.descrip,
        availability: attributes.availability});

      const fr = await friend.create({
        firstName: attributes.firstName,
        lastName: attributes.lastName,
        phoneNumber: attributes.phoneNumber,
        email: attributes.email,
        profileImage: attributes.profileImage,
        enabled: attributes.enabled,
        availability: stat
      });

      const {_id} =  await User.create({
        publicInfo: fr,
        userName: attributes.userName,
        password: attributes.password
      });

      const user = await User.findOneAndUpdate(_id, {password:'eddy'}, {new: true});

      assert.equal(user.password, 'eddy');
      assert.equal(user.userName, attributes.userName);
      assert.deepEqual(user.publicInfo, fr._id);
    });
  });

  it('should find a User object and update the username', async () => {
    const stat = await status.create({description: attributes.descrip,
      availability: attributes.availability});

    const fr = await friend.create({
      firstName: attributes.firstName,
      lastName: attributes.lastName,
      phoneNumber: attributes.phoneNumber,
      email: attributes.email,
      profileImage: attributes.profileImage,
      enabled: attributes.enabled,
      availability: stat
    });

    const {_id} =  await User.create({
      publicInfo: fr,
      userName: attributes.userName,
      password: attributes.password
    });

    const user = await User.findOneAndUpdate(_id, {userName:'eddy'}, {new: true});

    assert.equal(user.password, attributes.password);
    assert.equal(user.userName, 'eddy');
    assert.deepEqual(user.publicInfo, fr._id);
  });
});
