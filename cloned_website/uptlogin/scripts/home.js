// JavaScript Document
var subfix_path = "";

$(document).ready(function () {
							
	$("#gsearch").click(function(){
		if ($('#q').val() != "" && $.trim($('#q').val()) != "")
			document.location = "http://www.google.com/search?hl=es&site=&q=" + $('#q').val() + " site:upt.edu.pe";	
	});
							
	$('#btnAbout').click(function(){
		$('#servicesLayer').hide();
		$('#officesLayer').hide();
		$('#aboutLayer').toggle(50);
		return false;
	});
							
	$('#btnServices').click(function(){
		$('#aboutLayer').hide();
		$('#officesLayer').hide();
		$('#servicesLayer').toggle(50);
		return false;
	});
							
	$('#btnOffices').click(function(){
		$('#aboutLayer').hide();
		$('#servicesLayer').hide();
		$('#officesLayer').toggle(50);
		return false;
	});	
	
	$('a.submenu').hover(
		function(){
			$(this).parent().addClass('hover');
		},
		function(){
			$(this).parent().removeClass('hover');									  
		});		
});