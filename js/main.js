/*
* main.js
* Stores code for the example code for box.web
* The bundled code output for this file is stored in demo/bundle.js */

const m = require("mithril");
const bw = require("./index");

const Homepage = {
    view: function () {
        return m(bw.Button("Click me!", "orange", 2))
    }
};

m.route(document.body, "/", {
    "/": Homepage
});