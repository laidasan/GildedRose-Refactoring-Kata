const IUpdate = require('./IUpdate.js');

class Freeze extends IUpdate {
    constructor() {
        super();
    }

    update = function() {}
}

module.exports = Freeze