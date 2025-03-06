const { getDB } = require('../config/db');

const collectionName = 'users';

const createUser = async (user) => {
  const db = getDB();
  return await db.collection(collectionName).insertOne(user);
};

const findUserByEmail = async (email) => {
  const db = getDB();
  return await db.collection(collectionName).findOne({ email });
};

module.exports = { createUser, findUserByEmail };
