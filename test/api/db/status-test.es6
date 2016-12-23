/**
 * Created by kfu on 6/24/16.
 */
import status from '../../../api/db/status.es6';
import {clear} from '../../../models/mongo/index.es6';
import assert from 'assert';
import mongoose from 'mongoose';

describe('Status DB API', () => {
  const attributes = {
    available: 'some action',
    descrip: "Hello World!" // eslint-disable-line
  };
  beforeEach(async () => {
    await clear();
  });

  describe('#create()', () => {
    it('should create an empty Status object successfully', async () => {
      const stat = await status.create({});
      assert.equal(stat.description,  undefined);
      assert.equal(stat.available, false);
    });

    it('should create a Status object with attributes successfully', async () => {
      const stat = await status.create({  description: attributes.descrip,
        availability: true });
      assert.equal(stat.description, attributes.descrip);
      assert.equal(stat.availability, true);
    });
  });
});
