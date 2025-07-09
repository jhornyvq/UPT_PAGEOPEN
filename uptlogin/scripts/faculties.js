// JavaScript Document
subfix_path = "../../";
$(function(){
	$('#btnPresent').click(function(){
		var state = $('#presentLayer').css('display');
		hideAll();
		if (state == 'none')
			$('#presentLayer').show();
		else
			$('#presentLayer').hide();
		return false;
	});
	$('#btnSchools').click(function(){
		var state = $('#schoolsLayer').css('display');
		hideAll();
		if (state == 'none')
			$('#schoolsLayer').show();
		else
			$('#schoolsLayer').hide();
		return false;
	});
	$('#btnSpecialities').click(function(){
		var state = $('#specialitiesLayer').css('display');
		hideAll();
		if (state == 'none')
			$('#specialitiesLayer').show();
		else
			$('#specialitiesLayer').hide();
		return false;
	});
	$('#btnInitial').click(function(){
		var state = $('#initialLayer').css('display');
		hideAll();
		if (state == 'none')
			$('#initialLayer').show();
		else
			$('#initialLayer').hide();
		return false;
	});
	$('#btnPrimary').click(function(){	
		var state = $('#primaryLayer').css('display');
		hideAll();
		if (state == 'none')
			$('#primaryLayer').show();
		else
			$('#primaryLayer').hide();
		return false;
	});
	$('#btnSecundary').click(function(){
		var state = $('#secundaryLayer').css('display');	
		hideAll();
		if (state == 'none')
			$('#secundaryLayer').show();
		else
			$('#secundaryLayer').hide();
		return false;
	});
	$('#btnTechnical').click(function(){
		var state = $('#technicalLayer').css('display');	
		hideAll();
		if (state == 'none')
			$('#technicalLayer').show();
		else
			$('#technicalLayer').hide();
		return false;
	});
	$('#btnSports').click(function(){	
		var state = $('#sportsLayer').css('display');
		hideAll();
		if (state == 'none')
			$('#sportsLayer').show();
		else
			$('#sportsLayer').hide();
		return false;
	});
});

function hideAll(){ 
	$('.popup').each(function(){
		$(this).hide();
	});
}