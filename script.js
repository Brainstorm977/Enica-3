window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "40px";
  } else {
    document.getElementById("header").style.padding = "50px 10px";
    document.getElementById("logo").style.width = "67px";
  }
}

new WOW().init();