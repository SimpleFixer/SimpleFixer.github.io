const driverData = fetch('./Drivers.json')
                  .then(response => response.json())
                  .then(data => {
                    console.log('success', data.drivers);
                    renderMainMenu(data.drivers);
                    return data;
                  })
                  .catch(function (err){
                    console.warn('Something went wrong', err)
                  });


const renderMainMenu = (drivers) => {
    
    console.log(drivers);
    
    drivers.forEach(driver => {
        mainMenu.innerHTML += <p>{driver.firstName}</p>
    });
};

// renderMainMenu(getDriverData("file:///C:/Users/Theodor/Documents/GitHub/SimpleFixer.github.io/Drivers.json"));
