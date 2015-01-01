$(document).ready(function() {
    $( ".show-answers" ).click(function(event) {
      $( ".show-answers" ).removeClass('selected');
      $(this).addClass('selected');
      
        var selected = $(this).attr("attr-show-answer");
  
        $( ".question" ).hide();
        $(selected).show()
        
        event.preventDefault();
    });



     //format code
     // see in http://steamdev.com/snippet/
    $("pre.js").snippet("javascript",{style:"vim",transparent:true});
    $("pre.sql").snippet("sql",{style:"vim",transparent:true});
    $("pre.php").snippet("php",{style:"vim",transparent:true});
        
    //cargar por defecto la agenda 
    generar_agenda("citas1");


   //evaluation-factorial 
	$( ".button-evaluation-factorial" ).click(function(event) {
  		var value = $(".input-text-factorial").val();
  		if(value && isNumber(value)){
				
				var factorial_number = factorial(parseInt(value));
				$(".value-factorial-number").html(factorial_number);
               
                var zeros = numberZerosToRight(factorial_number);
                $(".response-cero-numbers").html(zeros);

  		}else{
  			$(".input-text-factorial").val("");
  			alert("Ingrese un número");
  		}
      event.preventDefault();
	});

	//number-to-words event clic
	$( ".button-number-to-words" ).click(function(event) {
  		var value = $(".input-text-number-to-words").val();
  		if(value && isInteger(value) ){
				
				$(".value-number-to-words").html(value);

				var textNumber = numberToWords(numberToStringArray(value));
				$(".text-number-to-words").html(textNumber);               
               
  		}else{
  			$(".input-text-number-to-words").val("");
  			alert("Ingrese un número entero menor o igual a 1999");
  		}
      event.preventDefault();
	});

  //Changue set in Agenda
  $( "#pregunta33 a.button-link" ).click(function(event) {
      generar_agenda($(this).attr("attr-tipo-set"));
      $(".container-citas2 , .container-citas1").toggle();
      event.preventDefault();
  });


});