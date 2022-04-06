
const { GildedRose, Item } = require("../src/gilded_rose");
const AgedBrieUpdateBehavior = require('../src/updateBehavior/AgedBrieUpdateBehavior.js')
const TAFKAL80ETCConcert = require('../src/updateBehavior/TAFKAL80ETCConcert.js')
const NormalUpdateBehavior = require('../src/updateBehavior/Normal.js')
const FreezeBehavior = require('../src/updateBehavior/Freeze.js')




const agedBrieUpdateBehavior = new AgedBrieUpdateBehavior()
const tafkal80etcConcert = new TAFKAL80ETCConcert()
const normalUpdateBehavior = new NormalUpdateBehavior()
const freezeBehavior = new FreezeBehavior()



const items = [
  new Item("+5 Dexterity Vest", 10, 20, normalUpdateBehavior),
  new Item("Aged Brie", 2, 0, agedBrieUpdateBehavior),
  new Item("Elixir of the Mongoose", 5, 7, normalUpdateBehavior),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80, freezeBehavior),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80, freezeBehavior),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20, tafkal80etcConcert),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49, tafkal80etcConcert),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49, tafkal80etcConcert),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6, normalUpdateBehavior),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new GildedRose(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
