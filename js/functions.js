function factorial(n)
{
	if (n == 0 || n == 1)
		return 1;
	else
		return n*factorial(n - 1);
}

function isInteger(n){
	var nIsInteger = n.match(/^-?[0-9]+$/);
	return nIsInteger ? true : false;
}

function isNumber(n){
	var nIsNumber = n.match(/^\d{0,2}(?:\.\d{0,2}){0,1}$/);
	return nIsNumber ? true : false;
}

function numberToStringArray(n){
	return String(n).split("");
}

function numberZerosToRight(n){
	var arrayValues = numberToStringArray(n);
	var zeros = _.filter(arrayValues, function(string){ return string == "0"; });
    return zeros.length;
}

function numberToWords(n){
	if (n.length > 0 && parseInt(n.join("")) > 0) {
		var size = n.length;
		var wordNumber = evaluationTypeNumber(size, n)

        //delete first member in array and recursion
        var copy_array = n.shift();
		return  wordNumber + " " + (numberToWords(n));
	}else{
		return "";
	}
}

function evaluationTypeNumber(size, value){
    var response = "";
	var words_numbers = DictionaryWordsNumbers;
	var value_to_number = value.join("");

	switch(size) {
	    case 1:
	        response = words_numbers[size][value_to_number];
	        break;
	    case 2:
	        if(parseInt(value[0]) != 0){
		        var value_residue = value_to_number % 10;
	            var string_and = "";
				if(value_residue!=0){
					value_to_number =  parseInt(value_to_number) - value_residue;
					string_and = " y ";
				}
		    	response = words_numbers[size][value_to_number] + string_and;
		    }else{
		    	response = "";
		    }
	    	break;
		case 3:
	        var before_word = "";
	        var after_word  = "";
				
	        if(parseInt(value[0]) == 0){
        		before_word = "";
	        	after_word  = "";
	        }else if(parseInt(value[0]) == 1){
	        	before_word = words_numbers[size]["descripcion_especial_cien"];
	        	
	        	if(parseInt(value_to_number) > 100 && parseInt(value_to_number) < 199  ){
	        		before_word = "";
		        	after_word  = words_numbers[size]["descripcion_simple"]; 
	        	}	
	        }else if(parseInt(value[0]) == 5){
	        	before_word = "";
	        	after_word = words_numbers[size]["descripcion_especial_quinientos"];
	        }else if(parseInt(value[0]) == 9){
	        	before_word = "";
	        	after_word = words_numbers[size]["descripcion_especial_novecientos"];
	        }else{
	        	before_word = words_numbers[1][value[0]]
		        after_word  = words_numbers[size]["descripcion_compuesta"];        	
	        }
	    	response = before_word + " " + after_word;    	
	    	break;
	    case 4:
	    	if(parseInt(value[0]) != 0){
				response = words_numbers[size]["descripcion_simple"];
			}else{
				response = "";
			}
	    	break;	
	    default:
	    	break;
	}
	return response;
}