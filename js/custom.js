
$(document).ready(function() {
	$(".metismenu").height($(document).outerHeight(true));
	$("#menu").metisMenu();
	var options = {
		  useEasing : true, 
		  useGrouping : true, 
		  separator : ',', 
		  decimal : '.', 
		  prefix : '', 
		  suffix : '' 
	};

	$(".metismenu > li > a").click(function(){
		var t= $(this).attr("aria-expanded");
		if(t == 'true'){
			$(this).find("i.fa-pull-right").removeClass("fa-angle-left").addClass("fa-angle-down");
		}
		else if(t == 'false'){
			$(this).find("i.fa-pull-right").removeClass("fa-angle-down").addClass("fa-angle-left");			
		}
	})
});


