// created by apoovey 12-26-16
import * as status from '../../../api/db/status.es6';
import {clear} from '../../../models/mongo/index.es6';
import assert from 'assert';

describe('Status DB API', () => {
  const attributes = {
    available: true,
    descrip: "Hello World!" // eslint-disable-line
  };
  beforeEach(async () => {
    await clear();
  });

  describe('#create()', () => {
     it('should create a Status object with attributes successfully', async () => {
      const stat = await status.create({description: attributes.descrip,
        availability: attributes.available});
      assert.equal(stat.description, attributes.descrip);
      assert.equal(stat.availability, attributes.available);
    });
  });

  describe('#findOne()', () => {
    it('should fail to find an uncreated Status object', async () => {
        try{
          await status.findOne({description: "Hello World!"});

        } catch(e) { return;}
        assert(false);
    });

    it('should fail to find a Status object when several exist', async () => {
      await status.create({description: attributes.descrip,
        availability: true});
      await status.create({description: "studying",
        availability: false});
      try {
        await status.findOne({description: "goodbye world"});
      } catch (e) {
        return;
      } assert(false);
    });

    it('should find a created Status object successfully', async () => {
      const {_id} = await status.create({description: attributes.descrip,
        availability: attributes.available});
      const stat = await status.findOne(_id);
      assert.equal(stat.description, attributes.descrip);
      assert.equal(stat.availability, attributes.available);
    });
  });

  describe('#findOneAndUpdate()', () => {
    it('should fail to find and update a Status object that does not exist', async () => {
      try {
        await status.findOneAndUpdate({availability: true}, {description: "meowcats",
          availability: false});
      } catch (e) { return;}
      assert(false);
    });

    it('should find and update a Status object successfully', async () => {
      const {_id} = await status.create({description: attributes.descrip,
        availability: attributes.available});
      const stat =  await status.findOneAndUpdate(_id, {description: "hello youtube",
        availability: false});
      assert.equal(stat.description, "hello youtube");
      assert.equal(stat.availability, false);
    });
  });

});
