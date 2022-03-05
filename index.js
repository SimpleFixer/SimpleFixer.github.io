const driverData = fetch('./Drivers.json')
                  .then(function (response){
                    console.log('success', response.json());
                    value(response);
                    return response;
                  })
                  .catch(function (err){
                    console.warn('Something went wrong', err)
                  });

function value(data){
  return JSON.parse(data);
};

const renderMainMenu = (drivers) => {
    
    console.log(drivers);
    /*
    drivers.forEach(driver => {
        // mainMenu.innerHTML += <p>{driver.firstName}</p>
    });
    console.log(driverData);*/
};

// renderMainMenu(getDriverData("file:///C:/Users/Theodor/Documents/GitHub/SimpleFixer.github.io/Drivers.json"));
