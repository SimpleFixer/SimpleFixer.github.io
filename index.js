const driverData = fetch('./Drivers.json')
                  .then(function(response){
                    response = response.json();
                    console.log('success', response);
                    renderMainMenu(response);
                    return response;
                  })
                  .catch(function (err){
                    console.warn('Something went wrong', err)
                  });

const mainMenu = document.getElementById("main-menu");

const renderMainMenu = (drivers) => {
    
    console.log(drivers);
    
    drivers.forEach(driver => {
        mainMenu.innerHTML += `<p>${driver.firstName}</p>`;
    });
};

// renderMainMenu(getDriverData("file:///C:/Users/Theodor/Documents/GitHub/SimpleFixer.github.io/Drivers.json"));
