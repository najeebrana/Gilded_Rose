var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function () {
	it("Sulfuras Quality should always be 80", function () {
		const gildedRose = new Shop([
			new Item("Sulfuras, Hand of Ragnaros", 10, 10),
		]);
		const item = gildedRose.updateQuality();
		expect(item[0].quality).toEqual(80);
	});

	it("Quality should be 0", function () {
		const shop = new Shop([new Item("Aged Brie", -1, 0)]);
		const item = shop.updateQuality();
		expect(item[0].quality).toBeGreaterThan(0);
	});

	it("Conjured quality should decrease by 2", function () {
		const shop = new Shop([new Item("Conjured", 8, 2)]);
		const item = shop.updateQuality();
		expect(item[0].quality).toBe(0);
	});

	it("Quality should not be negative", function () {
		const shop = new Shop([
			new Item("Backstage passes to a TAFKAL80ETC concert", 8, -2),
		]);
		const item = shop.updateQuality();
		expect(item[0].quality).toBe(0);
	});

	it("Backstage quality should increase", function () {
		const shop = new Shop([
			new Item("Backstage passes to a TAFKAL80ETC concert", 1, 10),
		]);
		const items = shop.updateQuality();
		expect(items[0].quality).toBe(13);
	});

	it("Backstage quality should be 0 after the concert", function () {
		const shop = new Shop([
			new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10),
		]);
		const items = shop.updateQuality();
		expect(items[0].quality).toBe(0);
	});

	it("Quality should be within 50 range", function () {
		const shop = new Shop([
			new Item("Backstage passes to a TAFKAL80ETC concert", 5, 70),
		]);
		const items = shop.updateQuality();
		expect(items[0].quality).toBe(50);
	});

	it("Quality of Aged Brie should increase", function () {
		const shop = new Shop([new Item("Aged Brie", 5, 0)]);
		const items = shop.updateQuality();
		expect(items[0].quality).toBe(1);
	});
});
