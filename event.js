document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('viewimgbtn');
    var currentevent=document.getElementsByTagName('h1')
    

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        window.location.href = 'gallery.html'; 
      });
    }
  });