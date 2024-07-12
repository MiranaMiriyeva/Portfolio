jQuery(document).ready(function($) {
  
  function startAnimations(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        $(entry.target).find('.progress-bar').each(function() {
          var percentage = $(this).attr('data-percentage');

          $(this).find('.progress-content').animate({
            width: percentage
          }, 2000);

          $(this).find('.progress-number-mark').animate({
            left: percentage
          }, {
            duration: 2000,
            step: function(now, fx) {
              var data = Math.round(now);
              $(this).find('.percent').html(data + '%');
            }
          });
        });

        
        observer.unobserve(entry.target);
      }
    });
  }

 
  var options = {
    threshold: 0.5 
  };

  var observer = new IntersectionObserver(startAnimations, options);
  var skillSection = document.getElementById('skills');
  observer.observe(skillSection);
});
