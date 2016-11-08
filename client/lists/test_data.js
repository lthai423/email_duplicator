const Chance = require('chance');
const chance = new Chance();
const fs = require('fs');

for (var j = 0; j < 11; j++){
	var list = [];
	for (var i = 0; i < 85000 * (j + 1); i++){
		list.push(chance.email());
		if (i % 3 === 0)
			list.push(list[list.length - 1]);
		
	};
	fs.writeFile('list' + j + '.js', 'const list' + j + ' = ' + JSON.stringify(list) + ';');
	console.log(list.length)
}


