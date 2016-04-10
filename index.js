function hanoitowers(size, cbstep, cbend) {
	var a     = [];
	var b     = [];
	var c     = [];
	var step  = 0;
	var start = new Date();
	var now   = new Date();

	//Initialize tower A
	for (i = size; i >= 0; i--)
		push(a, i);

	function move(n, src, by, dst) {

		if (n == 1) {
			push(dst, pop(src));
			step++;
			dump();
		} else {
			move(n - 1, src, dst, by);
			push(dst, pop(src));
			step++;
			dump();
			move(n - 1, by, src, dst);
		}
	}


	//region ==> Auxiliary functions
	function push(peg, item) {
		peg.push(item);
	}

	function pop(peg) {
		return peg.pop();
	}

	function peek(peg) {
		return peg[peg.length - 1];
	}

	function dump() {

		if (cbstep) {
			var ctx = JSON.parse(JSON.stringify({
				a: a,
				b: b,
				c: c,
				step: step,
				start: start,
				now: now,
				dur: now.getTime() - start.getTime()
			}));
			setTimeout(function () {
				ctx.start = start;
				ctx.now   = new Date();
				ctx.dur   = ctx.now.getTime() - start.getTime();
				cbstep(ctx)
			}, step * 15);

		}
	}

	//endregion

	move(a.length, a, b, c);

	if (cbend) {
		cbend();
	}


}
