

export const formJson = function(form){
	var formData = {}
	var elems = form.elements

	for(var i = 0; i < elems.length; i++){
		var input = elems[i];
	    if(input.name){
	        formData[input.name] = input.value
	    }
	}
	return formData;
}