/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.MarginTop = - intro.offsetHeight / 1 + 'px';
}, false);

 /**
//    * Hero type effect
//    */
//  const typed = select('.typed')
//  if (typed) {
//    let typed_strings = typed.getAttribute('data-typed-items')
//    typed_strings = typed_strings.split(',')
//    new Typed('.typed', {
//      strings: typed_strings,
//      loop: true,
//      typeSpeed: 100,
//      backSpeed: 50,
//      backDelay: 2000
//    });
//  }


// /*
// jQuery plugin example:
// $(document).ready(function() {
//   $('#particles').particleground({
//     dotColor: '#5cbdaa',
//     lineColor: '#5cbdaa'
//   });
//   $('.intro').css({
//     'margin-top': -($('.intro').height() / 2)
//   });
// });
// */
