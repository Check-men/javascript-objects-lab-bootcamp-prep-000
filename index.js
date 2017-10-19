var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  var a = object
  
  return Object.assign(a, recipes)
}
