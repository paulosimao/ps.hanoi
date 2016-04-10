var hanoitowers = require('../index');

describe('Hanoi Towers', function () {
	it('Should run basic test', function () {
		hanoitowers(1, function (ctx) {
			console.dir(ctx)
		}, function () {
			console.log('TEST OVER')
		});
	});
});