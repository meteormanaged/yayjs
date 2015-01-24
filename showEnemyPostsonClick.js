$(document).ready(function() {
	$('.pagination').append('<div style="display:inline-block; float:right;"><a href="#" class="clicker">View Enemy Posts</a></div>');
	$('.clicker').click(function() {
		$('.enemy').each(function() {
			$(this).removeClass('enemy');
		});
		$('.ignore-container').each(function() {
			$(this).removeClass('ignore-container');
		});
	});
});