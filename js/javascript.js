<!-- transparent navbar scroll effect -->
	
	     var nav = document.getElementById('nav');
		 
		 window.onscroll = function(){
			 
			 if(window.pageYOffset >100){
				 nav.style.background="#0a7785";
				 }
			 else{
				 nav.style.background = "transparent";
				 }
			 }

	
	
	<!-- smooth scrolling from css tricks!! -->
	<script>
		$(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
		  });
		});
	</script>
	