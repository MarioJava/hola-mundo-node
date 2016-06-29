var express = require('express');
var router = express.Router();

router.get('/eventos', function (req, res) {
    res.json(
        [
            {
                id: 1,
                dia: "Jue, Jun 19",
                hora: "06:00 AM",
                name: "Curso Marionette",
                categoria: "Desarrollo web",
                lugar: "Lima, Lima"
            },
            {
                id: 2,
                dia: "Mar, Jun 03",
                hora: "05:00 AM",
                name: "Curso Backbone",
                categoria: "Desarrollo web",
                lugar: "Trujillo, trujillo"
            },
            {
                id: 3,
                dia: "Dom, Jun 07",
                hora: "08:00 PM",
                name: "Java",
                categoria: "Desarrollo de escritorio",
                lugar: "Tacna, tacna"
            },
            {
                id: 4,
                dia: "Lun, Jun 07",
                hora: "08:00 PM",
                name: "Jquery",
                categoria: "Desarollo Frontend",
                lugar: "Tacna, tacna"
            },
            {
                id: 5,
                dia: "Lun, Jun 07",
                hora: "08:00 PM",
                name: "Docker",
                categoria: "DevOps",
                lugar: "Tacna, tacna"
            }
        ]
    );
});

module.exports = router;