import * as Friend from '../controller/friend.es6';
import * as User from '../db/user.es6';
import * as Status from '../controller/status.es6';
import _ from 'lodash';
import assert from 'assert';
export async function create(userName, password, firstName, lastName, phoneNumber,
                             email, profileImage = 'http://i.imgur.com/4AiXzf8.jpg') {
  const status = await Status.create('Looking 4 friends', false);
  const publicInfo = await Friend.create(firstName, lastName, phoneNumber,
    email, profileImage, true, status);
  return await User.create({publicInfo, userName, password});
}

export async function findOne(_id) {
  return await User.findOne(_id, ['publicInfo', 'availability', 'friendsList']);
}

export async function updatePassword(_id, password) {
  return await User.findOneAndUpdate(_id, {password});
}


export async function addFriend(_id, newFriend) {
  const user = await User.findOne(_id, ['publicInfo', 'availability', 'friendsList']);
  _.forEach(user.friendList, friend => {
    if(friend._id.equals(newFriend._id)) { throw  new Error;}
  });
  user.friendList.push(newFriend);
  return await user.save();
}

export async function findEnabledFriends(_id) {
  const user = await User.findOne(_id, ['publicInfo', 'availability', 'friendsList']);
  const arr = [];
  _.forEach(user.friendList, friend => {
    if(friend.enabled) {
      arr.push(friend);
    }
  });
  return arr;
}