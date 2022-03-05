var request = new XMLHttpRequest();
request.open("GET", "./Drivers.json", false);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);
  }
}

const mainMenu = document.getElementById("main-menu");

const renderMainMenu = (drivers) => {
    
    console.log(drivers);
    /*
    drivers.forEach(driver => {
        // mainMenu.innerHTML += <p>{driver.firstName}</p>
    });
    console.log(driverData);*/
}

renderMainMenu(getDriverData("file:///C:/Users/Theodor/Documents/GitHub/SimpleFixer.github.io/Drivers.json"));
