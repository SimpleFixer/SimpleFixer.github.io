let request = fetch('https://formula1-a0ece-default-rtdb.europe-west1.firebasedatabase.app/Drivers/')
              .then(request => request.json())
              .then(request => console.log(request));

const mainMenu = document.getElementById("main-menu");

const renderMainMenu = (drivers) => {
    
    console.log(drivers);
    /*
    drivers.forEach(driver => {
        // mainMenu.innerHTML += <p>{driver.firstName}</p>
    });
    console.log(driverData);*/
}

// renderMainMenu(getDriverData("file:///C:/Users/Theodor/Documents/GitHub/SimpleFixer.github.io/Drivers.json"));
