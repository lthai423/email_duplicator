var email_duplicator = function(list){
	var obj = {};
	var normalized = '';
	for (var i = 0; i < list.length; i++){
		normalized = list[i].toLowerCase();
		if (!obj[normalized]){
			obj[normalized] = true;
		}
	}
	return Object.keys(obj);
};