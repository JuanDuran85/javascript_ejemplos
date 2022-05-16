/*

    Ejemplos, trucos y tips para trabajar con fechas y horas en JavaScript
    Para Obtener el año, mes y dia:
        - getFullYear()
        - gerMonth()
        - getDate()
        - getDay()
        - getTimezoneOffset()
        - getUTCFullYear()
        - getUTCMonth()
        - getUTCDate()
        - getUTCHDay()
    
    Para obtener las horas, minutos y segundos.
        - getHours()
        - getMinutes()
        - getSeconds()
        - getMilliseconds()
        - getUTCHours()
        - getUTCMinutes()
        - getUTCSeconds()
        - getUTCMilliseconds()

    Para obtener la fecha, tiempo completo y transformar a string.
        - getTime()
        - toDateString()
        - toTimeString()
        - toString()
        - toLocaleDateString()
        - toLocaleTimeString()
        - toLocaleString()
        - toUTCString()
        - toISOString()
*/

// ----------------------------------------------------------------------------------------
//  Obtener el año, mes y dia mediante el DateConstructor
// ----------------------------------------------------------------------------------------

const fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getFullYear()); // get the full year, in yyyy
console.log(fechaActual.getMonth()); // get the month from 0 to 11. Take note that January is 0 and December is 11
console.log(fechaActual.getDate()); // Get the date, from 1 to 31
console.log(fechaActual.getDay()); // Get the day of the week, from 0 to 6. Sunday is 0 and Saturday is 6
console.log(fechaActual.getTimezoneOffset()); // get the difference between UTC and local time. In the number of minutes
console.log(fechaActual.getUTCFullYear()); // Get the UTC full year, in yyyy.
console.log(fechaActual.getUTCMonth()); // Get the UTC month, from 0 to 11
console.log(fechaActual.getUTCDate()); // Get the UTC date, from 1 to 31
console.log(fechaActual.getUTCDay()); // Get the UTC day of the week, from 0 to 6.

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  Obtener el año, mes y dia mediante el DateConstructor
// ----------------------------------------------------------------------------------------

console.log(fechaActual);
console.log(fechaActual.getHours()); // get the hours, from 0 to 23
console.log(fechaActual.getMinutes()); // get the minutes, from 0 to 59
console.log(fechaActual.getSeconds()); // Get the seconds, from 0 to 59
console.log(fechaActual.getMilliseconds()); // Get the milliseconds, from 0 to 999
console.log(fechaActual.getUTCHours()); // get the UTC hours, from 0 to 23
console.log(fechaActual.getUTCMinutes()); // Get the UTC minutes, from 0 to 59
console.log(fechaActual.getUTCSeconds()); // Get the UTC seconds, from 0 to 59
console.log(fechaActual.getUTCMilliseconds()); // Get the UTC milliseconds, from 0 to 999

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  Obtener el la fecha, tiempo completo y transformar a string.
// ----------------------------------------------------------------------------------------

console.log(fechaActual);
console.log(fechaActual.getTime()); // get the Unix timestamp, in milliseconds.
console.log(fechaActual.toDateString()); // get the date, in human legible form.
console.log(fechaActual.toTimeString()); // Get the time, in human legible form.
console.log(fechaActual.toString()); // Pretty much a combination of to date and to time above.
console.log(fechaActual.toLocaleDateString()); // Get the date, formatted according to the current locale.
console.log(fechaActual.toLocaleTimeString()); // Get the time, formatted according to the current locale.
console.log(fechaActual.toLocaleString()); // A combination of get locale date and get locale time.
console.log(fechaActual.toUTCString()); // Get the UTC time, in human legible form.
console.log(fechaActual.toISOString()); // Get the ISO 8601 representation of the date.

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');