EventManager.module("Entities", function (Entities, EventManager, Backbone, Marionette, $, _) {

    EventManager.Evento = Backbone.Model.extend({
        urlRoot: "/api/eventos/",
        activate: true,
        defaults: {
            date: '',
            fecha: '',
            dia: '',
            hora: '',
            catagoria: '',
            lugar: ''
        }
       /*
        initialize: function () {
            this.on("change:date", this.onFecha, this);
        },
        onFecha: function (model, options) {
            var fecha = new Date(model.get('date'));
            var dia = this.getDia(fecha.getDay());
            model.set({dia: dia});
            model.set({hora: fecha.getHours() +"::"+ fecha.getMinutes()});
            model.set({
                fecha: fecha.getDate() +"/"+ fecha.getMonth() +"/"+ fecha.getFullYear()
            });
        },
        getDia: function (dia) {
            if(dia==1) {return "Lunes"};
            if(dia==2) {return "Martes"};
            if(dia==3) {return "Miercoles"};
            if(dia==4) {return "Jueves"};
            if(dia==5) {return "Viernes"};
            if(dia==6) {return "Sábado"};
            if(dia==7) {return "Domingo"};
        }        */
    });

    EventManager.EventosCollection = Backbone.Collection.extend({
        url: "/api/eventos/",
        model: EventManager.Evento
    });

    var eventosTodos = false;
    var API = {
        getEventosEntities: function () {
            var eventosColeccion = new EventManager.EventosCollection();
            var defer = $.Deferred();

            if ( eventosTodos.length ) {
                defer.resolve(eventosTodos);
            } else {
                eventosColeccion.fetch({
                    success: function(models){
                        eventosTodos = models;
                        defer.resolve(models);
                    }
                });
            }
            return defer.promise();
        },

        getEventoEntity: function (id) {
            var eventoModel = new EventManager.Evento({id: id});
            var defer = $.Deferred();

            if(eventosTodos.length){
                var evento = eventosTodos.get(id);
                if( evento.activate === true ){
                    defer.resolve(eventosTodos.get(id));
                }else{
                    eventoModel.fetch({
                        success: function(data){
                            defer.resolve(data);
                            evento.set(data);
                        }
                    });
                    evento.activate = true;
                }
            }else{
                eventoModel.fetch({
                    success: function(data){
                        defer.resolve(data);
                    }
                });
            }
            return defer.promise();
        }
    };

    EventManager.reqres.setHandler("eventos:entities", function () {
        return API.getEventosEntities();
    });

    EventManager.reqres.setHandler("evento:entity", function (id) {
        return API.getEventoEntity(id);
    });
});