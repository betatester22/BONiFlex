$(function() {

	// aktiv hervorheben
	$("#home a:contains('Home')").parent().addClass('active');
	$("#info a:contains('Info')").parent().addClass('active');
	$("#office a:contains('Office')").parent().addClass('active');
	$("#netzwerk a:contains('Netzwerk')").parent().addClass('active');
	$("#kassen a:contains('Kassen')").parent().addClass('active');
	$("#download a:contains('Download')").parent().addClass('active');
	$("#bestellung a:contains('Bestellung')").parent().addClass('active');

	//  Dropdown automatisch
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover

}); //jQuery is loaded 