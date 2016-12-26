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
});
