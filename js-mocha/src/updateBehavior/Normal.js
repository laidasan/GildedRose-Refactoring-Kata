const IUpdate = require('./IUpdate.js');

class Normal extends IUpdate {
    constructor() {
        super();
    }

    update = function(item) {
        item.quality -= 1;
        item.sellIn -= 1;
        if(item.sellIn < 0) {
          item.quality -= 1;
        }
        item.quality = Math.max(0, item.quality)
    }
}

module.exports = Normal