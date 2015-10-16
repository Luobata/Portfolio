($(function(){
    Workspace.start();

    
    $('.mask').on('click', function (e) {
        // $(this).fadeOut(5000, function () {
        //     // $(this).css('display', 'none');
        // });
        if (e.target === $('.mask').get(0)) {
            $('.mask').removeClass('fadeIn');
            $('.center').removeClass('fixed');
        }
    })
    document.body.onmousewheel = function(event) {
        event = event || window.event;
        event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
        if($(document).scrollTop() >= $('.fix').offset().top){
            // $('.fix').addClass('tofix');
        } else {
            // $('.fix').removeClass('tofix');
        }
        // event.preventDefault();
        // console.dir(event.delta); 
    };
}));