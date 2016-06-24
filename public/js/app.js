var EventManager = new Marionette.Application();

EventManager.addRegions({
    mainRegion: "#main-region"
});

EventManager.on("start", function () {
    EventManager.EventosApp.List.Controller.listEventos();
});