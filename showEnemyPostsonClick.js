var yhJs = {
	// Builds the View Enemy Posts Clicker
	$clicker: '<div style="display:inline-block; float:right;"><a href="#" class="clicker" style="padding: 4px; text-transform: uppercase; font-size: 9px;">View Enemy Posts</a></div>',
	//Pulls info to check the nav
	$navCheck: $('#thread-navigation').text().substring(11, 22),
	//Functionality
	revealonClick: function() {
		//Checks the nav to determine if thread listing or actual thread
		if (this.$navCheck !== 'Post Thread') {
			$('.pagination').append(this.$clicker);
			$('.clicker').click(function() {
				$('.enemy').each(function() {
					$(this).removeClass('enemy');
				});
				$('.ignore-container').each(function() {
					$(this).removeClass('ignore-container');
				});
			});
		}
	},
};
$(document).ready(function() {
	//When the document is ready - do it up.
	yhJs.revealonClick();
});