var yhJs = {
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
	$('.enemy').each(function() {
		$this = $(this);
		$this.css('background-color', '#edd9d9');
		$this.removeClass('enemy');
	});
	$('.ignore-container').each(function() {
		$(this).removeClass('ignore-container');
	});
	yhJs.selfPost();
});