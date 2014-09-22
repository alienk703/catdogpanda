$('body').append('<img class="cat" src="http://kao-ani.com/wp-content/uploads/2013/05/sushi-neko-cat-4.jpg" />')
$('body').append('<img class="dog" src="http://33.media.tumblr.com/4726a6237813577adf2d92eb9af917e8/tumblr_mny1gubA7C1s4yg05o1_500.jpg" />')
$('body').append('<img class="panda" src="http://i.imgur.com/EEFZqeM.gif"/>')

$( "html" ).mousemove(function( event ) {
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  $( "#coords" ).text( "" + pageCoords );
});


$('body').mousemove(function(event){
var x = event.pageX
var y = event.pageY

$('.cat').css({'margin-right': x/7 + 'px', 'margin-left': x/4 + 'px', 'margin-top': y/3 + 'px', 'margin-bottom': y/6 + 'px'})
$('.dog').css({'margin-right': x/9 + 'px', 'margin-left': x/5 + 'px', 'margin-top': y/5 + 'px', 'margin-bottom': y/4 + 'px'})
$('.panda').css({'margin-right': x/6 + 'px', 'margin-left': x/5 + 'px', 'margin-top': y/8 + 'px', 'margin-bottom': y/8 + 'px'})

$('body').css({'background-color': x/7 + 'rbg'})

});


// Have it so that when you click on any image, it either adds or removes the ".border" class
$('img').click(function(){
	$(this).toggleClass("blue-border");
});


// Have it so that when you click on the body, it freezes position of the images. Check out off
$( 'body' ).click(function(){
	$(this).off()
	// event.stopPropagation();

});


// If I click on an image now, for some reason it is freezing the position of all the images. 
// All I want it to do is add or remove the border though. How do I stop that from happening? 
// Hint: Check out Event Propagation.