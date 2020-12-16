//
var container = $(".container");

//sets todays date using moment.js
var todaysDate = $("#currentDay");
todaysDate.text(moment().format("dddd, MMMM, Do YYYY"));

//create time blocks for each hour 9-5pm and style them
var timeOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < timeOfDay.length; i++){
 var row = $("<div>").addClass("row time-block");
 
 var hour = $("<div>").addClass("hour col-1");
 hour.text(moment().set('hour', timeOfDay[i]).format("hA"));
 row.append(hour);

 var textArea = $("<textarea>").addClass("description col-10");
 if (moment().hour() === timeOfDay[i]){
     textArea.addClass("present");
 } else if (moment().hour() < timeOfDay[i]){
     textArea.addClass("future");
 } else if (moment().hour() > timeOfDay[i]){
     textArea.addClass("past");
 }
 
console.log(moment().hour());
 row.append(textArea);

 var button = $("<button>").addClass("saveBtn col-1 fas fa-save");
 row.append(button);

 $(".container").append(row);

}
function saveInput(event){
    var siblingTextArea = $(this).siblings(".description").val();
    console.log(siblingTextArea);

    localStorage.setItem("siblingTextArea", siblingTextArea);
    
}

container.on("click", "button", saveInput);






