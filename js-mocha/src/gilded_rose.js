// const ItemType = Object.freeze({
//   normal: 1,
//   fast: 2
// })

// const ItemName = Object.freeze({
//   AgedBrie: 'Aged Brie',
// })

// class AbstractItem {
//   name = ''
//   sellIn = 0
//   quality = 0

//   constructor(name, sellIn, quality){
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      if(this.items[i].name === 'Aged Brie') {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }

        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0 && this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
        }
      } else if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') { 
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].sellIn < 11) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
          if (this.items[i].sellIn < 6) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
  
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0) { 
          this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }
      } else if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
  
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0 && this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  GildedRose: Shop
}
