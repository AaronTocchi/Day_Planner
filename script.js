// moment.js variables
let date = moment().format('MMMM Do YYYY');
let day = moment().format('dddd');
let saveButtons = $('.btn');
// use querySelector instead of jQuery.
let currentHour = moment().hour();
let taskArray = getLocalStorage();

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
  saveButtons.on('click', function (e) {
    console.log(this);
    let time = $(this).attr("id");
    let value = $( '#' + time ).val(); // "id='text-9'"
  // let value = input.value;

  setLocalStorage(time, value);
  

});
// loads data from storage
function loadTasks() {
  let data = JSON.parse(localStorage.getItem('items'));
  console.log(data);
  // data.append(value);


}
// run on page load
loadTasks();

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('items'));

}

function setLocalStorage(time, value){
  console.log(time,value);
  // If 'items' exists in LS
  if (taskArray) {
    // Loop over taskArray to either update or set new task 
    // .forEach() is a for loop that runs a function for each element in array (just like the code block for each iteration in a for loop) 
    taskArray.forEach(function(currentTask) {
      // if task's property/key exists i.e. === 9 then reset value
      // else create new task object and push to taskArray
      if (currentTask[time]) {
        currentTask[time] = value
      } else if (!currentTask[time]) {
        let newTask = {};
        newTask[time] = value;
        taskArray.push(newTask);
        console.log(newTask, taskArray);
      }
    });
  
    // else if nothing saved in LS (i.e. null or does NOT (!) exist or is NOT true)
  } else if (!taskArray) {
    taskArray = [];
    // set taskArray to empty array
    let newTask = {};
    newTask[time] = value;
    taskArray.push(newTask);
  }
    localStorage.setItem('items', JSON.stringify(taskArray));
  };


