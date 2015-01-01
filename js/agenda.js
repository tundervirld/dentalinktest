var generar_agenda = function (set){ 
    $("#citas").html("");
    var intervalo_tiempo = 30;//minutos de intervalo segun el problema lo plantea
    var set_datos = {
        citas1: {
                lunes: [
                    {nombre: 'Roger ', hora_inicio: '06:30', hora_termino: '08:00'},
                    {nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00', advertencia:true },
                    {nombre: 'Daniel', hora_inicio: '09:30', hora_termino: '11:00'},
                    {nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
                    {nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
                ], 
                martes: [],
                miercoles: [
                    {nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'},
                    {nombre: 'Daniel', hora_inicio: '10:30', hora_termino: '12:00', advertencia:true },
                    {nombre: 'Daniel', hora_inicio: '15:00', hora_termino: '16:00'},
                    {nombre: 'Daniel', hora_inicio: '17:00', hora_termino: '19:30'}
                ], 
                jueves: [], 
                viernes: [
                    {nombre: ''      , hora_inicio: '10:30', hora_termino: '11:00', disponible: true },
                    {nombre: ''      , hora_inicio: '16:00', hora_termino: '18:00', disponible: true }
                ]
        },

        citas2 : {
                lunes: [                    
                    {nombre: 'Daniel', hora_inicio: '09:30', hora_termino: '11:00', advertencia:true },
                    {nombre: ''      , hora_inicio: '08:30', hora_termino: '09:30', disponible: true }
                ], 
                martes: [
                    {nombre: ''      , hora_inicio: '09:30', hora_termino: '11:00', disponible: true }
                ],
                miercoles: [
                    {nombre: 'Daniel', hora_inicio: '08:00', hora_termino: '09:00'}
                ], 
                jueves: [], 
                viernes: []
        }
    }

    //Todas las horas minimas desde el Json
    var horas_inicio =_.compact(_.map(set_datos[set], function(listCitas , dia){ 
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
    var horas_termino =_.compact(_.map(set_datos[set], function(listCitas , dia){ 
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

    //agregar el campo vacio para las cabeceras del calendario en la columna de horas para que se dibuje el icono
    array_intervalo.unshift({
                    header:""
        }             
    );


    //set completo de datos en array, solo para facilitar la presentacion
    var citas_set_completo = []
        citas_set_completo[0] = array_intervalo;
        citas_set_completo[8] = array_intervalo;


    //generar el array completo para pasarlo a la plantilla handlebars
    
    //iteracion de todo el set de datos para scar los dias

   /*Casos borde*/
   if(set_datos[set]["sabado"]==undefined){
        set_datos[set]["sabado"] = [];
   }
   if(set_datos[set]["domingo"]==undefined){
        set_datos[set]["domingo"] = [];
   }
   /*End Casos borde*/

    _.each(set_datos[set] , function(citasPorDia , dia){ 
        
        var _citasPorDiaAux = []; 

        for (var hora = hora_minima; hora <= hora_maxima; hora+=intervalo_tiempo) {
            
            var usuario_citado = "";

            _.each(citasPorDia , function(cita , key){ 
                var hora_inicio  = parseStringToMinuteNumber(cita["hora_inicio"]);
                var hora_termino = parseStringToMinuteNumber(cita["hora_termino"]);;            

                if(hora >= hora_inicio && hora < hora_termino ){
                    var _nombre      = (cita["nombre"]     != undefined) ? cita["nombre"] : "";
                    var _advertencia = (cita["advertencia"]!= undefined) ? cita["advertencia"]:"";
                    var _disponible  = (cita["disponible"] != undefined) ? cita["disponible"]:"";

                    usuario_citado = {
                        nombre: _nombre,
                        advertencia: _advertencia,
                        disponible: _disponible
                    };
                    
                }
            });

            _citasPorDiaAux.push(usuario_citado);

        };
        var dia_en_numero = parseInt(parseDayToNumberDay(dia)) + 1 ;

        //agregar el campo con el nombre del día para las cabeceras del calendario
        _citasPorDiaAux.unshift(
            {
                header:dia.capitalize()
            }       
        );

        citas_set_completo[dia_en_numero] = _citasPorDiaAux;
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

   function parseDayToNumberDay(cadena_dia){
        var diccionario_dia_numero = {
            lunes:0,
            martes:1,
            miercoles:2,
            jueves:3,
            viernes:4,
            sabado:5,
            domingo:6
        }
    return diccionario_dia_numero[cadena_dia];
   }

    // Stub out the person model
    var Cita = Backbone.Model.extend({
        
    });

    //Definir la coleccion de datos como un modelo Backbone
    var ColeccionCitas = Backbone.Collection.extend({
        model: Cita
    });

    //Definición de la vista ColeccionCitas Individual
    var CitaVista = Backbone.View.extend({
        tagName: "div",
        className: "container-cell",
        template: $("#citaTemplate").html(),

        render: function () {
            var source = this.template;
            var template = Handlebars.compile(source);
            var html = template(this.model.toJSON());
            $(this.el).html(html);            
            return this;
        }
    });

    //Definicion de la vista principal
    var DirectorioVista = Backbone.View.extend({
        el: $("#citas"),

        initialize: function () {
            this.collection = new ColeccionCitas(citas_set_completo);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderCita(item);
            }, this);
        },

        renderCita: function (item) {
            var citaVista = new CitaVista({
                model: item
            });
            this.$el.append(citaVista.render().el);
        }
    });

    //create instance of master view
    var directorio_citas = new DirectorioVista();

};