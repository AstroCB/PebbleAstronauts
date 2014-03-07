var req = new XMLHttpRequest();
req.open('GET', 'http://api.open-notify.org/astros.json', true);
req.onload = function(e){
	if (req.readyState == 4 && req.status == 200){
		if(req.status == 200){
			var response = JSON.parse(req.responseText);
			var people = response.people;
			var pplString = "";
			var sameCraft = true;
			var prevCraft = people[0].craft;
			var craftString = "";
			for(var i = 0; i < people.length; i++){
				pplString += people[i].name;
				if(!(i === people.length - 1)){
					pplString += ", ";
					if(i === people.length - 2){
						pplString += "and ";
					}
				}
				if(sameCraft && people[i].craft === prevCraft){
					prevCraft = people[i].craft;
				}else{
					sameCraft = false;
				}
			}
			if(sameCraft){
				Pebble.showSimpleNotificationOnPebble("How many people are in space?",  response.number + "- " + pplString + ".\n\nThey all currently reside on the " + people[0].craft + ".");
			}else{
				for(var i = 0; i < people.length; i++){
					if(i !== people.length - 1){
						craftString += people[i].name + ": " + people[i].craft + "\n";
					}else{
						craftString += people[i].name + ": " + people[i].craft;
					}
				}
				Pebble.showSimpleNotificationOnPebble("How many people are in space?", response.number + "- " + pplString + ".\n\nLocations:\n" + craftString);
			}
		}else{ console.log("Error"); }
	}
}

req.send(null);