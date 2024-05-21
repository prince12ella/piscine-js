function invert(obj) {
  const invertedObj = {};
  for (const key in obj) {
      invertedObj[obj[key]] = key;
  }
  return invertedObj;
}
