export function isEmpty(a) {
  return isNullOrUndefined(a) || (typeof a === 'string' && !a.trim().length);
}

export function isNullOrUndefined(a) {
  return typeof a === 'undefined' || a === null;
}