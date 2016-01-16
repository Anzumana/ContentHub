// A $( document ).ready() block.

$( document ).ready(function() {
	console.log( "ready!" );
	$('.shape').shape();
	$('#test').click(function(){
		console.log("testts");
		$('.shape').shape();
		$('.shape').shape('flip up');
		});
});
