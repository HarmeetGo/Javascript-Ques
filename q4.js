var get = function (obj, path, def) {
	var current = obj;
	for (var i = 0; i < path.length; i++) {
		if (!current[path[i]]) return def;
		current = current[path[i]];
	}
	return current;
};
var obj = {
    a: 1,
        b: 2,
        c: {
            d: 4,
            e: {
                i: 'Hey'
            }
        },
        j: 'k'
    } 

var getPath = get(obj, ['c', 'e', 'i']);
console.log(getPath);