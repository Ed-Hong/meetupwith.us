// created by apoovey 12-26-16
import * as status from '../../../api/db/status.es6';
import * as friend from '../../../api/db/user.es6'
import * as user from '../../../api/db/user.es6'
import {clear} from '../../../models/mongo/index.es6';
import assert from 'assert';

describe('Status DB API', () => {
  const attributes = {
    availability: true,
    description: "Hello World!", // eslint-disable-line
    firstName: "bob",
    lastName: "testerson",
    phonenumber: "0123456789",
    email: "bobtesterson@gmail.com",
    profileImage: "pornhub.com",
    enabled: true,
    userName: 'captainHooker',
    password: 'hooks'
  };
  beforeEach(async () => {
    await clear();
  });

  describe('#create()', () => {
    it('should create a User object with attributes successfully', async () => {
      const status = await status.create({description: attributes.descrip,
        availability: attributes.available});
      const friend  =  await friend.create
      assert.equal(stat.description, attributes.descrip);
      assert.equal(stat.availability, attributes.available);
    });
  });

});
