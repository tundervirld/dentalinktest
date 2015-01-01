(function ($) {
 
    var intervalo_tiempo = 30;//minutos de intervalo segun el problema plantiado

    //var citas = {
    var citas = {
                lunes: [
                    {nombre: 'Roger ', hora_inicio: '06:30', hora_termino: '08:00'},
                    {nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'},
                    {nombre: 'Daniel', hora_inicio: '09:30', hora_termino: '11:00'},
                    {nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
                    {nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
                ], 
                martes: [],
                miercoles: [
                    {nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'},
                    {nombre: 'Daniel', hora_inicio: '10:30', hora_termino: '12:00'},
                    {nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
                    {nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
                ], 
                jueves: [], 
                viernes: []
    }

    //Todas las horas minimas desde el Json
    var horas_inicio =_.compact(_.map(citas, function(listCitas , dia){ 
                                    if(listCitas.length > 0){
                                        return  _.pluck(listCitas, 'hora_inicio') ;
                                    }else{
                                        return "";
                                    }
                        })
    );
    //la hora minima de todas
    var hora_minima = _.min(
        _.map(horas_inicio.join(",").split(","), function(value, key) {
            return parseStringToMinuteNumber(value);
        })
    );
    
    //Todas las horas maximas desde el Json
    var horas_termino =_.compact(_.map(citas, function(listCitas , dia){ 
                                    if(listCitas.length > 0){
                                        return  _.pluck(listCitas, 'hora_termino') ;
                                    }else{
                                        return "";
                                    }
                        })
    );

    //la hora maxima de todas
    var hora_maxima = _.max(
        _.map(horas_termino.join(",").split(","), function(value, key) {
            return parseStringToMinuteNumber(value);
        })
    );

    //Intervalos de horas necesarias para generar el array completo para dibujar el front
    var array_intervalo = [];
    for (var hora = hora_minima; hora <= hora_maxima; hora+=intervalo_tiempo) {
        var hora_real = parseInt((hora / 60));
        var min_real  = (hora %60);
        var hora_compuesta = (hora_real < 10 ? ("0" + String(hora_real)) : hora_real) + ":" + (min_real < 10 ? ("0" + String(min_real)) : min_real);
        array_intervalo.push(hora_compuesta);
    };

    //set completo de datos
    var citas_set_completo = {
        "horas":array_intervalo

     };
    //generar el array completo para pasarlo a la plantilla handlebars
    
    //iteracion de todo el set de datos para scar los dias

   /*Casos borde*/
   if(citas["sabado"]==undefined){
        citas["sabado"] = [];
   }
   if(citas["domingo"]==undefined){
        citas["domingo"] = [];
   }
   /*End Casos borde*/

    _.each(citas , function(citasPorDia , dia){ 
        
        var _citasPorDiaAux = []; 

        for (var hora = hora_minima; hora <= hora_maxima; hora+=intervalo_tiempo) {
            
            var usuario_citado = "";

            _.each(citasPorDia , function(cita , key){ 
                var hora_inicio  = parseStringToMinuteNumber(cita["hora_inicio"]);
                var hora_termino = parseStringToMinuteNumber(cita["hora_termino"]);;            

                if(hora >= hora_inicio && hora < hora_termino ){
                    usuario_citado = minuteNumberToHour(hora) + " " +  cita["nombre"];
                    //break;
                }
            });

            _citasPorDiaAux.push(usuario_citado);

        };

        citas_set_completo[dia] = _citasPorDiaAux;
    });

   function parseStringToMinuteNumber(valor){
        var array_valor   = valor.split(":");
        var valor_minutos = (parseInt(array_valor[0])*60)+ parseInt(array_valor[1]);
    return parseInt(valor_minutos);
   }

   function minuteNumberToHour(valor){
        var hora_real = parseInt((valor / 60));
        var min_real  = (valor %60);
        var hora_compuesta = (hora_real < 10 ? ("0" + String(hora_real)) : hora_real) + ":" + (min_real < 10 ? ("0" + String(min_real)) : min_real);
    return hora_compuesta;
   }


} (jQuery));