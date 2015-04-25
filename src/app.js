/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');

getData();

function callback(main, data) {
    main.on('click', 'select', function(e) {
		var people = data.people, pplList = [];
		
		for(var i = 0; i < people.length; i++){
			pplList[i] = {
				title: people[i].name,
				subtitle: people[i].craft
			};
		}
		var menu = new UI.Menu({sections:[{items:pplList}]});
		menu.show();
    });
}

function getData() {
	// Pull data from Open Notify Astros API
    var req = new XMLHttpRequest();
    req.open("GET", "http://api.open-notify.org/astros.json", true);
    req.onload = function(e) {
        if (req.readyState === 4 && req.status === 200) {
			// Parse data & construct message
            var data = JSON.parse(req.responseText);
            var message = data.number + " people are in space.";

			// Create main interface card
			var main = createCard("Who's in Space?", null, message,
                "Who are they?");
			
            // Add methods to card after initializing it after data load
			callback(main, data);
        }
    };
    req.send(null);
}

function createCard(title, icon, subtitle, body) {
    var card = new UI.Card({
        title: title,
        icon: icon,
        subtitle: subtitle,
        body: body
    });
    card.show();
    return card;
}