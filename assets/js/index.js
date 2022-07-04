$(document).ready(function() {

    // Gets the video src from the data-src on each button
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. 
    this.querySelector('video').play();
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    
    // stop playing the  video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        this.querySelector('video').pause();
        $("#video").attr('src',$videoSrc); 
    }) 
        
      // when the modal is opened autoplay it  
      $('#myModal2').on('shown.bs.modal', function (e) {
        
        // set the video src to autoplay and not to show related video. 
        this.querySelector('video').play();
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
        })
          
        
        
        // stop playing the  video when I close the modal
        $('#myModal2').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            this.querySelector('video').pause();
            $("#video").attr('src',$videoSrc); 
        }) 
            
        
    
    
      
      
    // document ready  
    });

$(".solution-links").click(function(){
    $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        300,
        'linear'
      )
})


$('#sign').on('click', function() {
    $('#sign1').modal('show');
});
$('#next').on('click', function() {
    $('#sign1').modal('hide');
    $('#sign2').modal('show');
});
$('#next2').on('click', function() {
    $('#sign2').modal('hide');
    $('#sign3').modal('show');
});
$('#back').on('click', function() {
    $('#sign2').modal('hide');
    $('#sign1').modal('show');
});
$('#back2').on('click', function() {
    $('#sign3').modal('hide');
    $('#sign2').modal('show');
});