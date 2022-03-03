// var {expect} = require('chai');
// var {Shop, Item} = require('../src/gilded_rose.js');
// describe("Gilded Rose", function() {

//   it("should foo", function() {
//     const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).to.equal("fixme");
//   });

// });





var { expect, } = require('chai');
var {GildedRose, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it('quality_never_is_negative', function() {
    const items = [new Item("foo", 0, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(0);
  })

  it('sulfuras_could_not_be_sold', function() {
    
    const items = [new Item("Sulfuras, Hand of Ragnaros", 10, 0)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).to.equal(10);
  })


  it('sulfuras_could_not_decrease_quality', function() {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 10, 10)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(10);
  })

  
  it('quality_could_not_be_more_than_fifty', function() {
    const items = [new Item("Aged Brie", 10, 50)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(50);
  })
  
  
  it('item_with_date_passed_quality_decrease_by_twice', function() {
    const items = [new Item("foo", -1, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(38);
  })

  
  it('aged_brie_increase_quality_when_it_gets_older', function() {
    const items = [new Item("Aged Brie", 1, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(41);
  })

  
  it('aged_brie_increase_by_two_quality_when_date_passed', function() {
    const items = [new Item("Aged Brie", -1, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(42);
  })
  
  
  it('aged_brie_increase_by_two_quality_when_date_passed_and_not_more_than_fifty', function() {
    const items = [new Item("Aged Brie", -1, 50)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(50);
  })
  
  
  it('backstage_passes_increase_quality_by_two_when_sellin_less_than_ten', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(42);
  })
  
  
  it('backstage_passes_increase_quality_by_two_when_sellin_less_than_six', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 6, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(42);
  })
  
  
  it('backstage_passes_increase_quality_by_three_when_sellin_less_than_five', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(43);
  })
  
  
  it('backstage_passes_increase_quality_by_two_when_sellin_less_than_six_and_not_more_than_fifty', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(50);
  })
  
  
  it('backstage_passes_increase_quality_by_three_when_sellin_less_than_five_and_not_more_than_fifty', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(50);
  })
  
  
  it('backstage_passes_quality_drops_to_zero_after_concert', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(0);
  })
  
  
  it('backstage_passes_quality_increase_quality_by_one_when_date_is_more_than_10', function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 11, 40)];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).to.equal(41);
  })
})