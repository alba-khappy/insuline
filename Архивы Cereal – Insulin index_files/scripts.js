$(document).ready(function(){
	$("#hamb").click(function(){
		$("header nav").toggleClass("shownav");
		$(this).toggleClass("close");
		$("body").toggleClass("openednav");
	});
    $('#foodTable').DataTable( {
        "paging":   false,
        "ordering": true,
        "info":     false,
		"fixedheader": true,
        "order": [[ 2, "asc" ]]
    });
});

$(document).ready(function(){
	var strokedasharray = $('.circle-big').data("circle");
	var strokedashoffset = $('.circle-big').data("circle") - 360;
	//$('.circle-big .indexquality').css('stroke-dasharray', strokedasharray);
	//$('.circle-big .indexquality').css('stroke-dashoffset', strokedashoffset);
	
			
});