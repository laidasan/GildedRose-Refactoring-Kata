class Item {
  constructor(name, sellIn, quality, updateBehavior){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.updateBehavior = updateBehavior
  }

  update = function() {
    this.updateBehavior.update(this)
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].update()
    }

    return this.items;
  }
}
module.exports = {
  Item,
  GildedRose: Shop
}
