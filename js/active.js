jQuery(document).ready(function($) {
	
	var note = $('#note'),
		ts = new Date(2024, 1, 15),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " Dias" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " Horas" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " Minutos" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " Segundos" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
	
});