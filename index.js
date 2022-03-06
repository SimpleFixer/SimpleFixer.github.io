const driverData = fetch('./Drivers.json')
                  .then((response) => response.json())
                  .then((drivers) => {
                    console.log('success', drivers);
                    return drivers;
                  })
                  .catch(function (err){
                    console.warn('Something went wrong', err)
                  });

const mainMenu = document.getElementById("main-menu");

const renderMainMenu = async () => {
    
    const data = await driverData;
    
    drivers.forEach(driver => {
        mainMenu.innerHTML += `<p>${driver.firstName}</p>`;
    });
};

// renderMainMenu(getDriverData("file:///C:/Users/Theodor/Documents/GitHub/SimpleFixer.github.io/Drivers.json"));
