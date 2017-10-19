var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  var new = object.assign(object, recipes)
  return new
}
