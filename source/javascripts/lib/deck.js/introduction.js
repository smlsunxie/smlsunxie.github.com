$(function() {
	// Deck initialization
	$.deck('.slide');
	
	$('#style-themes').change(function() {
		$('#style-theme-link').attr('href', $(this).val());
	});
	
	$('#transition-themes').change(function() {
		alert($(this).val());
		$('#transition-theme-link').attr('href', $(this).val());
	});
});

