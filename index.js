const driverCarousel = document.getElementById("driver-carousel");

const driverData = fetch('./Drivers.json')
                  .then((response) => response.json())
                  .then((drivers) => {
                    console.log('success', drivers);
                    drivers.drivers.forEach(driver =>{
                      driverCarousel.innerHTML += `
                      <div class="driver-card margin-top">
                        <div class="driver-card_left">
                          <div class="center-image">
                            <img class="driver-portrait" src="./images/${driver.lastName}.jpg" />
                          </div>
                          <div class="bg-red-driver">
                            <p>${driver.firstName} ${driver.lastName}</p></br>
                          </div>
                        </div>
                        <div class="driver-card_right">

                        </div>
                      </div>`
                    })
                    return drivers;
                  })
                  .catch(function (err){
                    console.warn('Something went wrong', err)
                  });

/*

const renderMainMenu = async () => {
    
    const data = await driverData;
    
    drivers.forEach(driver => {
        mainMenu.innerHTML += `<p>${driver.firstName}</p>`;
    });
};

*/

// renderMainMenu(getDriverData("file:///C:/Users/Theodor/Documents/GitHub/SimpleFixer.github.io/Drivers.json"));
