const scriptURL = 'https://script.google.com/macros/s/AKfycbws2HFwMZJLnZ99rReIUVy8IyRHpTeKuP2X9GSlwzmLqpgh8LxcdiP2rDPKY-F1hZ-R/exec'
            const form = document.forms['google-sheet']
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => setTimeout(function(){ document.getElementById('thanks').classList.remove("after-submit"); document.getElementById('myForm').classList.add("after-submit")}, 1))
                .catch(error => console.error('Error!', error.message))
            });

$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})
  


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
    
    


  
  
// document ready  
});

              
