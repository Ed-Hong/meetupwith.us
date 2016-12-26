import status from '../../../api/controller/status.es6';
import {clear} from '../../../models/mongo/index.es6';
import assert from 'assert';

describe('Status DB API', () => {
  const attributes = {
    available: 'some action',
    descrip: "Hello World!" // eslint-disable-line
  };
  beforeEach(async () => {
    await clear();
  });

  describe('#create()', () => {
     it('should create a Status object with attributes successfully', async () => {
      const stat = await status.create(attributes.descrip, true);
      assert.equal(stat.description, attributes.descrip);
      assert.equal(stat.availability, true);
    });
  });
});
