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
	$selfColor: '#fcf6db',
	self: function() {
		return $('#left-column > div.lc-node.welcome > h4 > a').text();
		},
	selfPost: function(){
		$('div.two > div.username').each(function(){
			$this = $(this);
			if ( $this.text().trim() === yhJs.self() ) {
				$this.parent().parent().css('background', yhJs.$selfColor);
				}
		});
		$('div.user-block > div.username').each(function(){
			$this = $(this);
			if ( $this.text().trim() === yhJs.self() ) {
				$this.css('background', yhJs.$selfColor);
				/* $this.parent().parent().css('background', yhJs.$selfColor); */
				console.log($this);
			}	
		});
	},
};

$(document).ready(function() {
	//When the document is ready - do it up.
	yhJs.revealonClick();
	yhJs.selfPost();
});