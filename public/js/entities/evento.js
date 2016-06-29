EventManager.module("Entities", function (Entities, EventManager, Backbone, Marionette, $, _) {

    EventManager.Evento = Backbone.Model.extend({
        urlRoot: "/api/eventos/"
    });

    EventManager.EventosCollection = Backbone.Collection.extend({
        url: "/api/eventos/",
        model: EventManager.Evento
    });

    var eventosTodos;

    var initializeEventos = function () {
        eventosTodos = new EventManager.EventosCollection();
        eventosTodos.fetch();
    };

    var API = {

        getEventosEntities: function () {
            if ( eventosTodos === undefined ) {
                initializeEventos();
            }

            return eventosTodos;
        },
        getEventoEntity: function (id) {
            if (eventosTodos === undefined ) {
                initializeEventos()
            }

            return eventosTodos.get(id);
        }
    };

    EventManager.reqres.setHandler("eventos:entities", function(){
        return API.getEventosEntities();
    });

    EventManager.reqres.setHandler("evento:entity", function (id) {
        return API.getEventoEntity(id);
    })
});