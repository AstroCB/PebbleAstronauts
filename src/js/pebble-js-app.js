var req = new XMLHttpRequest();
  req.open('GET', 'http://api.open-notify.org/astros.json', true);
  req.onload = function(e) {
    if (req.readyState == 4 && req.status == 200) {
      if(req.status == 200) {
        var response = JSON.parse(req.responseText);
		var people = response.people;
		var pplString = "";
		var sameCraft = true;
		var prevCraft = "";
		  for(var i = 0; i < people.length; i++){
			  pplString += people[i].name;
			  if(!(i === people.length - 1)){
			  	pplString += ", ";
			  }
			  /* while(sameCraft){
				  if(prevCraft === people[i].craft){
					  prevCraft = people[i].craft;
					  break;
				  }else{
					  sameCraft = false;
				  }
			  }
		  */}
		  //if(sameCraft){
	          Pebble.showSimpleNotificationOnPebble("How many people are in space?", response.number + "- " + pplString + ". They all currently reside on the " + people[0].craft + ".");
		  //}else{
			  //Pebble.showSimpleNotificationOnPebble("How many people are in space?", response.number + "- " + pplString + ".");
			  //for(int i = 0; i < people.length; i++){
				//  Pebble.showSimpleNotificationOnPebble(people[i] + ": " + people[i].craft);
			  //}
		  //}
      } else { console.log("Error"); }
    }
  }
  req.send(null);


//New version - doesn't appear to be working at this time; I'm still working on it, but if anyone wants to give it a go, you're welcome to.

/*Pebble.showSimpleNotification("Working?", "Yes");
var req = new XMLHttpRequest();
  req.open('GET', 'http://api.open-notify.org/astros.json', true);
  req.onload = function(e) {
    if (req.readyState == 4 && req.status == 200) {
      if(req.status == 200) {
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
			  }
			  if(sameCraft && people[i].craft === prevCraft){
				  prevCraft = people[i].craft;
			  }else{
				  sameCraft = false;
			  }
		  }
		  if(sameCraft){
	          //Pebble.showSimpleNotificationOnPebble("How many people are in space?",  response.number + "- " + pplString + ". They all currently reside on the " + people[0].craft + ".");
		  }else{
			  for(int i = 0; i < people.length; i++){
				  if(i !== people.length - 1){
					  craftString += people[i] + ": " + people[i].craft + "\n";
				  }else{
					  craftString += people[i] + ": " + people[i].craft;
				  }
			  }
			  //Pebble.showSimpleNotificationOnPebble("How many people are in space?", response.number + "- " + pplString + "." + "\nLocations:\n" + craftString);
		  }
      } else { console.log("Error"); }
    }
  }
  req.send(null);
  */