var homdna = require('../dist');
var client = homdna.client;
client.setConfig({
	apiUrls: {
		core: 'http://core.example1.com',
		ads: 'https://ads.example1.com',
		user: 'https://user.example1.com'
	}
});

var client2 = client.create({
	apiUrls: {
		core: 'http://core.example2.com',
		ads: 'https://ads.example2.com',
		user: 'https://user.example2.com'
	}
});

Promise.resolve().then(function () {
	console.log('ALL SERVICES IMPORTED Test');
	console.log('------------------------------------');
	console.log('client 1');
	return Promise.all([
		client.core.getStatus(),
		client.user.getStatus(),
		client.ads.getStatus()
	]).then(() => console.log());
}).then(function () {
	console.log('client 2');
	return Promise.all([
		client2.core.getStatus(),
		client2.user.getStatus(),
		client2.ads.getStatus()
	]).then(() => console.log());
}).then(function () {
	console.log('Clients have their own services');
	console.log('client.core !== client2.core', client.core !== client2.core);
	console.log('client.ads  !== client2.ads ', client.ads !== client2.ads);
	console.log('client.user !== client2.user', client.user !== client2.user);
	console.log();
}).then(function () {
	console.log('But those services have the same prototype');
	console.log('client.core.__proto__ === client2.core.__proto__', client.core.__proto__ === client2.core.__proto__);
	console.log('client.ads.__proto__  === client2.ads.__proto__ ', client.ads.__proto__ === client2.ads.__proto__);
	console.log('client.user.__proto__ === client2.user.__proto__', client.user.__proto__ === client2.user.__proto__);
	console.log();
}).then(function () {
	console.log('getters return the same instance of the service after multiple calls')
	var core1 = client.core;
	var core2 = client.core;
	console.log('var core1 = client.core;');
	console.log('var core2 = client.core;');
	console.log('core1 === core2', core1 === core2);
}).catch(function (err) {
	console.log('ERROR', err);
});
