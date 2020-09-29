// sticky menu background opacity
window.addEventListener('scroll', function(){
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

//smooth scrolling
$('#navbar a').on('click', function(event){
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 20
    },
    800
    );
  }
});

$('#welcome-section a').on('click', function(event){
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 20
    },
    800
    );
  }
});