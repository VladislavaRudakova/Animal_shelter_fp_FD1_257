const scrollTopButton = document.getElementById('scroll-top-button');


window.onscroll = function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    console.log('SCROLL TOP!')
    scrollTopButton.style.display = "block";
  } else {
   scrollTopButton.style.display = "none";
  }
};


scrollTopButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
};