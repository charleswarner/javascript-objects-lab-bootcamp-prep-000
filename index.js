var recipes = {}

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;

  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
  return object;
}

function deleteFromObjectByKey(object,key) {
  delete object.key;

  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
delete object.key;
return obj;
}
