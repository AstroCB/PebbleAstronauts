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