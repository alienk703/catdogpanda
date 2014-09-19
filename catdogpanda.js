$('body').append('<img class="cat" src="http://kao-ani.com/wp-content/uploads/2013/05/sushi-neko-cat-4.jpg" />')
$('body').append('<img class="dog" src="http://33.media.tumblr.com/4726a6237813577adf2d92eb9af917e8/tumblr_mny1gubA7C1s4yg05o1_500.jpg" />')
$('body').append('<img class="panda" src="http://i.imgur.com/EEFZqeM.gif"/>')

$( "html" ).mousemove(function( event ) {
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  $( "#coords" ).text( "" + pageCoords );
});