const driverData = fetch('https://formula1-a0ece-default-rtdb.europe-west1.firebasedatabase.app/', { headers: { 'mode': 'no-cors' }})
                  .then(function (response){
                    console.log('success', response);
                    return response.json();
                  })
                  .catch(function (err){
                    console.warn('Something went wrong', err)
                  });

const renderMainMenu = (drivers) => {
    
    console.log(drivers);
    /*
    drivers.forEach(driver => {
        // mainMenu.innerHTML += <p>{driver.firstName}</p>
    });
    console.log(driverData);*/
}

// renderMainMenu(getDriverData("file:///C:/Users/Theodor/Documents/GitHub/SimpleFixer.github.io/Drivers.json"));
