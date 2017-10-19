var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var new_obj = {key: value}
  var new = Object.assign(object, new_obj)
  return new
}