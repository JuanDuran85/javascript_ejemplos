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

    Para formatear fechas con Intl.
        The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The Intl object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.
        - Intl.DateTimeFormat()
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

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  Intl.DateTimeFormat() Constructor for objects that enable language-sensitive date and time formatting.
// ----------------------------------------------------------------------------------------
    
const actualDate = new Date();
const shortDateFormat = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
};
const shotDate = new Intl.DateTimeFormat('es',shortDateFormat).format(actualDate);
console.log({shotDate});

const largeDateFormat = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
const largeDate = new Intl.DateTimeFormat('es',largeDateFormat).format(actualDate);
console.log({largeDate});

const completeFormat = {
    // Values can be 'long', 'short', ot 'numeric'
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long',
    // 12 or 24 hours time
    hour12: true
};
const completeDate = new Intl.DateTimeFormat('en-GB',completeFormat).format(actualDate);
console.log({completeDate});

const reduceDateStyleForm = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(actualDate);
console.log({reduceDateStyleForm});

const reduceTimeStyleForm = new Intl.DateTimeFormat('en-US', {timeStyle: 'medium'}).format(actualDate);
console.log({reduceTimeStyleForm});
// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');

console.log('-----------------------------------------------------------------------------------------');

// ----------------------------------------------------------------------------------------
//  Formato de horas y fechas mediante una funcion con Intl.DateTimeFormat()
// ----------------------------------------------------------------------------------------

const formatDateTime = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);

const nowDate = new Date();

console.log(formatDateTime(nowDate, 'en-US', {timeStyle: 'medium'}));
console.log(formatDateTime(nowDate, 'es'));
console.log(formatDateTime(nowDate, 'es', {timeStyle: 'short'}));
console.log(formatDateTime(nowDate, 'ko'));
console.log(formatDateTime(nowDate, 'en', {timeStyle: 'short', day: 'numeric'}));

// ----------------------------------------------------------------------------------------

console.log('-----------------------------------------------------------------------------------------');