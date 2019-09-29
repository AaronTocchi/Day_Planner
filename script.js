
// moment.js variables
let date = moment().format('MMMM Do YYYY');
let day = moment().format("dddd")
let taskArray =[]


// my header including date
$("#current-day").text(day + ", " + date);

saveTask() {
}