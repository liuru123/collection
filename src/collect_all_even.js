'use strict';

function collect_all_even(collection) {
	var result=new Array();
	var j=0;
	for(var i=0;i<collection.length;i++)
	{
		if(collection[i]%2==0)
			result[j++]=collection[i];
	}
	return result;
}

module.exports = collect_all_even;
