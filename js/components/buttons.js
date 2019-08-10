const m = require("mithril");

module.exports = function Button(text, colour, size) {
    return {
        view: function () {
            // Create an html button
            return m("button", {class: 'button-' + size + ' bg-' + colour}, text)
        }
    }
};