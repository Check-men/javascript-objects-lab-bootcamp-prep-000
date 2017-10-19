var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value

  return Object.assign({}, object, recipes)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}