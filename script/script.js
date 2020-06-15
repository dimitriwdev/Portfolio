
console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  
  addMyEventListener()
  getDate()
  fade()

});

function addMyEventListener(){

  // navigation
	$('.menu').click(function(){
		$('.content').toggleClass('togglePanel');
		$('.hamburger').toggleClass('hamburgerRotate');
		$('.cross').toggleClass('crossRotate');
		$('nav').toggleClass('toggleNav');
    $('.menu-items').toggleClass('navFixed');
    $('.menu').toggleClass('menuFixed');
  });
  

  // close panel clicking on it
  $('.content').click(function(){
    if($('.content').hasClass('togglePanel')){
      $('.content').toggleClass('togglePanel');
      $('.hamburger').toggleClass('hamburgerRotate');
      $('.cross').toggleClass('crossRotate');
      $('nav').toggleClass('toggleNav');
      $('.menu-items').toggleClass('navFixed');
      $('.menu').toggleClass('menuFixed');
    }
  });
	
}

// update year in footer

function getDate(){
	var d = new Date();
	var n = d.getFullYear()
	$('.year').html(n);
}


// letters fading in

function fade(){

// Get the letters from the original string.
var letters = $("#fadeletters").text().split("");
// Remove the original string.
$("#fadeletters").text("");


// Create a span for each letters and append them to the document.
letters.forEach(function(item,index){
  var span = $("<span class='fade'>").text(item);
  $("#fadeletters").append(span);
});

// Animate each spans
$(document).find(".fade").each(function(){
  // Random delay
  var delay = Math.random();
  var letter = $(this);
  
  // Set a timeout to animate the spans
  setTimeout(function(){
    letter.animate({"opacity":1},delay*1000);
  },delay*2000);
});

}











