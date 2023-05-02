let loadCoupon = () => {
    document.getElementById("coupon").style.visibility='visible';
    document.getElementById("main").style.opacity='0.5';
  }
  let closeCoupon= () => {
    document.getElementById("coupon").style.visibility='hidden';
    document.getElementById("main").style.opacity='1';
  }
  window.onload = loadCoupon();
  let switch_theme = () => {
    
    // document.getElementsByClassName("")
    document.body.classList.toggle("dark_mode");
    document.getElementById("theme_mode").innerHTML=(document.body.classList.contains('dark_mode'))?"Light mode":"Dark mode";
    document.getElementById("navbar").style.backgroundColor=(document.body.classList.contains('dark_mode'))?"#303536c7":"#f1f1f1";
    document.getElementById("theme_mode").classList.toggle("btn-light");
    document.getElementById("theme_mode").classList.toggle("btn-dark");
    document.getElementById("navbar").classList.toggle("navbar-light");
    document.getElementById("navbar").classList.toggle("navbar-dark");
    var element=document.getElementById("jumbo_linker");
    element.classList.toggle("jumbo_social_links_toggle");
    document.getElementById("beard_jumbotron_container").style.backgroundColor=(document.body.classList.contains('dark_mode'))?"#303536c7":"#f1f1f1";
    document.getElementById("footer").classList.toggle("footer_toggle");

  }