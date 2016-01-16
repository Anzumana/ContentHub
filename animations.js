// A $( document ).ready() block.

$( document ).ready(function() {
	console.log( "ready!" );
	$('.shape').shape();
	$('#test0').mouseenter(function(){ 
		$('#test0').shape('flip back');
	}
	).mouseleave(function(){ 
		$('#test0').shape('flip back');
	}
	);
	$('#test1').mouseenter(function(){ 
		$('#test1').shape('flip back');
	}
	).mouseleave(function(){ 
		$('#test1').shape('flip back');
	}
	);
	$('#test2').mouseenter(function(){ 
		$('#test2').shape('flip back');
	}
	).mouseleave(function(){ 
		$('#test2').shape('flip back');
	}
	);
	$('#test3').mouseenter(function(){ 
		$('#test3').shape('flip back');
	}
	).mouseleave(function(){ 
		$('#test3').shape('flip back');
	}
	);
	$('#test4').mouseenter(function(){ 
		$('#test4').shape('flip back');
	}
	).mouseleave(function(){ 
		$('#test4').shape('flip back');
	}
	);
	$('#test5').mouseenter(function(){ 
		$('#test5').shape('flip back');
	}
	).mouseleave(function(){ 
		$('#test5').shape('flip back');
	}
	);

	$('.shape').click(function(){
		});
});
