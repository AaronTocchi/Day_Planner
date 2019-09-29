// moment.js variables
let date = moment().format('MMMM Do YYYY');
let day = moment().format('dddd');
let saveButtons = $('.btn');
// use querySelector instead of jQuery.
let input = document.querySelector('.form-control');
let currentHour = moment().hour();
let taskArray = [];

// my header including date
$('#current-day').text(day + ', ' + date);

// for loop to check values of id vs the hour that it is and change color accordingly
for (i = 9; i < 18; i++) {
  if (parseInt($('#' + i).attr('id')) < currentHour) {
    $('#' + i).attr('style', 'background-color: #808080');
  } else if (parseInt($('#' + i).attr('id')) > currentHour) {
    $('#' + i).attr('style', 'background-color: #fff78a');
  } else {
    $('#' + i).attr('style', 'background-color: #F08080');
  }
}

// saveTask(){
//     event.preventDefault()

// itemsArray.push(saveButtons.value);
// localStorage.setItem('items', JSON.stringify(taskArray));

// };
// submit button to save to local storage
saveButtons.on('click', function(e) {
  const value = input.value;
  let taskArray = [];

  taskArray.push(value);
  localStorage.setItem('items', JSON.stringify(taskArray));
  console.log('hello world');
});
// loads data from storage
function loadTasks() {
  let data = JSON.parse(localStorage.getItem('items'));
  console.log(data);
}
// run on page load
loadTasks();
