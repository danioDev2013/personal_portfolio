$(document).ready(() => {
    window.scrollTo(0,0);
  
    var content = 'Hi, my name is Danielle!';
    
    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
    
    
    $(ele).hide().appendTo('h5').each(function (i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });
    $(function() {
      $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
      });
    });
  
  });
  