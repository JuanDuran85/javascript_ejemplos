/*

Ejemplos, trucos y tips para trabajar con clases en JavaScript

*/


// ----------------------------------------------------------------------------------------
//  Request for GPS location
// ----------------------------------------------------------------------------------------

const succeed = (posCoor) => {
    console.log(posCoor.coords.latitude);
    console.log(posCoor.coords.longitude);
}

const failure = (error) => console.log(error);

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

navigator.geolocation.getCurrentPosition(
    succeed, failure, options
)