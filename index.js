var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  var n = object.assign(object, recipes)
  return n
}
