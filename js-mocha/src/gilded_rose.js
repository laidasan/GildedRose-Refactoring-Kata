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
    return this.items.map(item => item.update())
  }
}

module.exports = {
  Item,
  GildedRose: Shop
}
