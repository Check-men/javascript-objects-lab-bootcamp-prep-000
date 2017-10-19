var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  var new = object.assignt(object, recipes)
  return new
}
