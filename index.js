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
                            <h3>${driver.firstName} <span class="txt-bold">${driver.lastName}.</span> ${driver.number}</h3>
                          </div>
                        </div>
                        <div class="driver-card_right">
                          <div class="driver-stats">

                          </div>
                          <div class="driver-current">

                          </div>
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
