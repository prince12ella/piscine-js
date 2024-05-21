function pick(obj, keys) {
  const pickedObj = {};
  if (typeof keys === 'string') {
      keys = [keys];
  }
  keys.forEach(key => {
      if (obj.hasOwnProperty(key)) {
          pickedObj[key] = obj[key];
      }
  });
  return pickedObj;
}
function omit(obj, keys) {
  const omittedObj = {};
  if (typeof keys === 'string') {
      keys = [keys];
  }
  for (const key in obj) {
      if (!keys.includes(key)) {
          omittedObj[key] = obj[key];
      }
  }
  return omittedObj;
}
