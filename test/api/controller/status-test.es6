/**
 * Created by apoovey on 12/26/16.
 */
import * as status from '../../../api/controller/status.es6';
import {clear} from '../../../models/mongo/index.es6';
import assert from 'assert';

describe('Status Controller API', () => {
  const attributes = {
    available: true,
    descrip: "Hello World!" 
  };
  beforeEach(async () => {
    await clear();
  });

  describe('#create()', () => {
    it('should create a Status object with attributes successfully', async () => {
      const stat = await status.create(attributes.available, attributes.descrip);
      assert.equal(stat.description, attributes.descrip);
      assert.equal(stat.availability, true);
    });
  });
  describe('#findById', () => {
    it('should fail to find a status object using and ObjectId', async () => {
        try {
          await status.findById('adasd');
        } catch (e) { return;}
      assert(false);
    });
    it('should find a status object using and ObjectId', async () => {
      const {_id} = await status.create(attributes.available, attributes.descrip);
      const stat = status.findById(_id);
      assert.equal(stat.description, attributes.descrip);
      assert.equal(stat.availability, true);
    });
  });
  describe('#updateAvailability', () => {
    it('should fail to find a status object using and ObjectId', async () => {
      try {
        await status.updateAvailability('adasd');
      } catch (e) { return;}
      assert(false);
    });
    it('should update a status object availability', async () => {
      const {_id} = await status.create(attributes.available, attributes.descrip);
      const stat = status.updateAvailability(_id, false);
      assert.equal(stat.description, attributes.descrip);
      assert.equal(stat.availability, false);
    });
  });
});
