let loadCoupon = () => {
    document.getElementById("coupon").style.visibility='visible';
    document.getElementById("main").style.opacity='0.5';
  }
  let closeCoupon= () => {
    document.getElementById("coupon").style.visibility='hidden';
    document.getElementById("main").style.opacity='1';
  }
  let x = document.getElementById('location');
  let temperature = document.getElementById('temperature');
  let weat = document.getElementById('icon-weat');
  function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText="Geo Not Supported"
    }
}
function showPosition(data){
  let lat = data.coords.latitude
  let lon = data.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  console.log(url);
  //api calling
  fetch(url,{method: 'GET'})
  //return promise
  .then((res) =>res.json())
  //resolve the promise
  .then((data) => {
    console.log(data)
      let cityName = data.city.name;
      x.innerHTML =`${cityName}<i class="bi bi-pin-map"></i>`;
      let temp = data.list[0].temp.day+" °C"
      temperature.innerText = `${temp}`
      var iconcode = data.list[0].weather[0].icon;
      let weather ="http://openweathermap.org/img/w/" + iconcode + ".png";
      temperature.classList.add("temperature-style-toggle");
      document.getElementById('left-nav').classList.toggle('left_nav');
      weat.src= weather;
  })
}
let onloaders=() => {
  geolocation();
  loadCoupon() ;


}
  window.onload = onloaders();
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