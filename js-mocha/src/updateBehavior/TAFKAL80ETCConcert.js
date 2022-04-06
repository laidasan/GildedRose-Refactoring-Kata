const IUpdate = require('./IUpdate.js');

class TAFKAL80ETCConcert extends IUpdate {
    constructor() {
        super();
    }

    update = function(item) {
        item.quality += 1;

        if(item.sellIn < 11 ) {
          item.quality += 1;
        }

        if(item.sellIn < 6) {
          item.quality += 1;
        }

        item.sellIn -= 1;
        if(item.sellIn < 0) {
          item.quality = 0
        }

        item.quality = Math.min(50, item.quality)
    }
}

module.exports = TAFKAL80ETCConcert