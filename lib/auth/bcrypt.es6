//created by apoovey 12-26-16
import bycrpt from 'bcrypt';

/**
 * Generates a salt to be used for hashing
 * @returns {Promise}: the generated salt
 */
export async function genSalt() {
  return new Promise((res, rej) => {
    bycrpt.genSalt((err, salt) => {
      if (err) rej(err);
      else res(salt);
    })
  })
}

/**
 * Generates a hashed input
 * @param {String} input: the input to be hashed
 * @param {String} salt: the salt to hash with
 * @returns {Promise}: the hashed input
 */
export async function hash(input, salt) {
  return new Promise((res, rej) => {
    bycrpt.hash(input, salt, (err, hashedInput) => {
      if(err) rej(err);
      else res(hashedInput);
    })
  })
}

/**
 * Generates a salt and uses it to hash the input
 * @param {String} input: the input to hash
 * @returns {Promise}: the hashed input
 */
export async function saltAndHash(input) {
  const salt = await genSalt();
  return hash(input, salt);
}

/**
 * Compares an input with a hashed input
 * @param {String} input: input to check with
 * @param {String} hashInput: the hashed input to check against
 * @returns {Promise}: if the arguments are equal
 */
export async function compareInputs(input, hashInput) {
  return new Promise((res, rej) => {
    bycrpt.compare(input, hashinput, (err, bool) => {
      if(err) rej(err);
      else res(bool);
    })
  })
}