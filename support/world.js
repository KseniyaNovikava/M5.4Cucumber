const format = require('string-format');
const ElementHelper = require('./helpers/ElementHelper.js');

function World() {
    this.format = format;
    this.elementHelper = new ElementHelper();
}

module.exports = function() {
    this.World = World;
};