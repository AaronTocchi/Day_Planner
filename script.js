
// moment.js variables
let date = moment().format('MMMM Do YYYY');
let day = moment().format("dddd");
let saveButtons = $(".button-addon2");
let input = $(".form-control").val();
let currentHour = moment().hour();
let taskArray = [];


// my header including date
$("#current-day").text(day + ", " + date);

// for loop to check values of id vs the hour that it is and change color accordingly
for (i = 9; i < 18; i++) {
    if (parseInt($('#' + i).attr('id')) < currentHour) {
        $('#' + i).attr('style', 'background-color: #808080');
    } else if (parseInt($('#' + i).attr('id')) > currentHour) {
        $('#' + i).attr('style', 'background-color: #ffd4da');
    } else {
        $('#' + i).attr('style', 'background-color: #F08080')
    }
}


// saveTask(){
//     event.preventDefault()

// itemsArray.push(saveButtons.value);
// localStorage.setItem('items', JSON.stringify(taskArray));

// };
// submit button to save to local storage
saveButtons.on("click", function(){
let taskArray =[];
taskArray.push(input.value);
localStorage.setItem('items', JSON.stringify(taskArray));
console.log(taskArray)

})
// loads data from storage
function loadTasks() {
    let data = JSON.parse(localStorage.getItem('items'));
    console.log(data)
};
// run on page load
loadTasks();