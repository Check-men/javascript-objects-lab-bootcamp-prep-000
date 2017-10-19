var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  var n = Object.assign({}, recipes)
  return n
}
