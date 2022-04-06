var { expect, } = require('chai');
var {GildedRose, Item} = require('../src/gilded_rose.js');
var AgedBrieUpdateBehavior = require('../src/updateBehavior/AgedBrieUpdateBehavior.js')
var TAFKAL80ETCConcert = require('../src/updateBehavior/TAFKAL80ETCConcert.js')
var NormalUpdateBehavior = require('../src/updateBehavior/Normal.js')
var FreezeBehavior = require('../src/updateBehavior/Freeze.js')

var agedBrieUpdateBehavior = new AgedBrieUpdateBehavior()
var tafkal80etcConcert = new TAFKAL80ETCConcert()
var normalUpdateBehavior = new NormalUpdateBehavior()
var freezeBehavior = new FreezeBehavior()

describe("Gilded Rose", function() {

  it('quality_never_is_negative', function() {
    const items = [new Item("foo", 0, 0, normalUpdateBehavior)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(0);
  })

  it('sulfuras_could_not_be_sold', function() {
    
    const items = [new Item("Sulfuras, Hand of Ragnaros", 10, 0, freezeBehavior)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).to.equal(10);
  })


  it('sulfuras_could_not_decrease_quality', function() {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 10, 10, freezeBehavior)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(10);
  })

  
  it('quality_could_not_be_more_than_fifty', function() {
    const items = [new Item("Aged Brie", 10, 50, agedBrieUpdateBehavior)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(50);
  })
  
  
  it('item_with_date_passed_quality_decrease_by_twice', function() {
    const items = [new Item("foo", -1, 40, normalUpdateBehavior)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(38);
  })

  
  it('aged_brie_increase_quality_when_it_gets_older', function() {
    const items = [new Item("Aged Brie", 1, 40, agedBrieUpdateBehavior)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(41);
  })

  
  it('aged_brie_increase_by_two_quality_when_date_passed', function() {
    const items = [new Item("Aged Brie", -1, 40, agedBrieUpdateBehavior)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(42);
  })
  
  
  it('aged_brie_increase_by_two_quality_when_date_passed_and_not_more_than_fifty', function() {
    const items = [new Item("Aged Brie", -1, 50, agedBrieUpdateBehavior)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(50);
  })
  
  
  it('backstage_passes_increase_quality_by_two_when_sellin_less_than_ten', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40, tafkal80etcConcert)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(42);
  })
  
  
  it('backstage_passes_increase_quality_by_two_when_sellin_less_than_six', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 6, 40, tafkal80etcConcert)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(42);
  })
  
  
  it('backstage_passes_increase_quality_by_three_when_sellin_less_than_five', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40, tafkal80etcConcert)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(43);
  })
  
  
  it('backstage_passes_increase_quality_by_two_when_sellin_less_than_six_and_not_more_than_fifty', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49, tafkal80etcConcert)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(50);
  })
  
  
  it('backstage_passes_increase_quality_by_three_when_sellin_less_than_five_and_not_more_than_fifty', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48, tafkal80etcConcert)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(50);
  })
  
  
  it('backstage_passes_quality_drops_to_zero_after_concert', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40, tafkal80etcConcert)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(0);
  })
  
  
  it('backstage_passes_quality_increase_quality_by_one_when_date_is_more_than_10', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 11, 40, tafkal80etcConcert)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(41);
  })
})