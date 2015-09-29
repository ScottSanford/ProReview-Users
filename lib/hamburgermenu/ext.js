$(document).ready(function(){

	document.addEventListener('touchmove', function(event) {
    	event.preventDefault();
    }, false);

    $(function() {
    	FastClick.attach(document.body);
	});

	$("#menu").mmenu();


	$('.annotations').bind("touchstart click" , function(){
		// mflyCommands.showAnnotations(500,500,500,500);
		$('#menu').trigger('close.mm');
		
		var clicked = true;		
		if (clicked) {
			var timesRun = 0;
			var interval = setInterval(function(){
				timesRun += 1;
				mflyCommands.showAnnotations(500,500,500,500);
				if (timesRun  === 1) {
					clearInterval(interval);
				}
			}, 500);
		}
	})

	$('.second-screen').bind("touchstart click", function(){
		$('#menu').trigger("close.mm");
		mflyCommands.showSecondScreenOptions();
	})

	$('.collections').bind("touchstart click", function(){
		$('#menu').trigger("close.mm");
		mflyCommands.getInteractiveInfo()
			.done(function(data){
				console.log("data.id :: ", data.id);
				window.location = 'mfly://control/showAddToCollection?id=' + data.id + '&x=1&y=1&w=1&h=1'; 
			});
	})

	$('.previous').bind("touchstart click", function(){
		mflyCommands.previous();
	})

	$('.next').bind("touchstart click", function(){
		mflyCommands.next();
	})

	$('.close-btn').bind("touchstart click" , function(){
		$('#menu').trigger("close.mm");
		mflyCommands.close();
	})


});