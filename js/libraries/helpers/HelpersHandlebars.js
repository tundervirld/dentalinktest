Handlebars.registerHelper("ContainerRowBuilder", function (cita) {
    var html = [];
    var valor = "";
    var class_primer_div = "";
    var div_interior = "";
    
    if(cita == "" || cita["header"] != undefined){
        div_interior =  "&nbsp;";

        if(cita["header"] != undefined){
            class_primer_div = "row-header";
            div_interior = (cita["header"] == "") ?  "&nbsp" : cita["header"];   
        }
    }else if(typeof cita == "object"){
        var _html = [];
        var class_div_interior="";
        var valor_div_interior=""; 
        var valor_span = "";
        
        if( cita["nombre"] != ""){ //Si tienen nombre son citas
            class_div_interior = "text-row-appointment";
            valor_span = cita["nombre"];
            class_primer_div = "appointment" + ((cita["advertencia"] == true) ? " delayed " : "");


        }else if(cita["disponible"] == true ){// si no tienen nombre son horas disponibles
            class_div_interior = "text-row";
            valor_span = "&nbsp";
            class_primer_div = "available";
        }
        
        _html.push('<div class="'+class_div_interior+'">');
              _html.push('<span>'+valor_span+'</span>');
        _html.push('</div>');    

         div_interior = _html.join("");
        //div_interior = "cita xxx";

    }else{
        div_interior = cita;
    }

    html.push('<div class="container-row ' + class_primer_div + ' ">');
        html.push(div_interior);
    html.push('</div>');
     

    return new Handlebars.SafeString(
                html.join("")
    );
});
/*
tipos de celdas en las citas
//vacias
<div class="container-row row-header">
    &nbsp;
</div>

//disponibles
<div class="container-row available">
    <div class="text-row">
        <span>&nbsp;</span>
    </div>
</div>

//tomadas
<div class="container-row appointment">
    <div class="text-row-appointment">
        <span>Roger Reyes</span>
    </div>                                      
</div>

<div class="container-row appointment delayed">
    <div class="test-row-appointment">
        <span>Peter More</span>
    </div>                                      
</div>
*/