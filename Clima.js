function buscar() {
    var request = new XMLHttpRequest();
    var ciudadElement = document.getElementById("ciudad");
    var tempElement = document.getElementById("temperatura");

    var latElement = document.getElementById("lat");
    var lonElement = document.getElementById("lon");
    
    // Open a new connection, using GET request on the URL endpoint
    // Asincronas
  
    request.onload = function (resp) {
      console.log(resp.target.response);
      console.log(JSON.parse(resp.target.response));

      var data = JSON.parse(resp.target.response);
      ciudadElement.textContent = data.name;
      tempElement.innerHTML = data.main.temp;

    }
  
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+ latElement.value +"&lon="+ lonElement.value +"&appid=22d0d87bfb7c6787203bf0f99fa63d97&units=metric", true);
  
    request.send();
  }