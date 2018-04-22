const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	try {
		// set viewport
		await page.setViewport({
			width: 375,
			height: 4000
		});
		// set cookie
		await page.setCookie({
			name: 'h5_city',
			domain: '.yiguo.com',
			value: '{"Default":0,"Version":"2.0","Id":"312d0556-0671-4f2e-8bac-7b8873b5a03a","Name":"%E4%B8%8A%E6%B5%B7","Code":1,"DId":"1f3180c7-4ec3-43ad-80b3-d4561ba20589","DName":"%E5%AE%9D%E5%B1%B1%E5%8C%BA"}'		});
		// goto
		await page.goto('http://home.m.yiguo.com');
		// wait for loading
		await page.waitFor(8000);

		const result = await page.evaluate(() => {
			const temp = document.querySelectorAll('[data-cid]');
			let arr = [];
			for(var i = 0; i < temp.length; i++) {
				const name = temp[i].querySelector('.name a').innerText;
				arr.push({
					id: temp[i].dataset.cid,
					name
				});
			}
			return arr;
		});

		console.log(result);

		await page.screenshot({
			path: 'yg.jpg',
			fullPage: true
		});
		console.log('print over');
	} catch (err) {
		console.log(err);
	}
})();
