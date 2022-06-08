var tasks = {};

var clock = document.getElementById("currentTime");

var date = document.getElementById("todaysDate")

const currentHour = moment().format("H");

function clockTimer() {
    clock.textContent = moment().format("LTS");
}

function todaysDate() {
    date.textContent = moment().format("dddd MMMM Do YYYY");
}

setInterval(todaysDate, 1000);

setInterval(clockTimer, 1000);

function hourTracker() {

$(".taskText").each(function(i) {
    const hour = i + 9;
    if (hour < currentHour) {
        $(this).addClass("past");
    }
    if (hour == currentHour) {
        $(this).addClass("present");
    }
    if (hour > currentHour) {
        $(this).addClass("future");
    }
})
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      tasks = {
        toDo: []
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      console.log(list, arr);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
  };

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// $(".list-group").on("click", "p", function () {
//     // get current text of p element
//     var text = $(this)
//         .text()
//         .trim();
//     var textInput = $("<textarea>").addClass("form-control").val(text);
//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");
// });

$(".list-group").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

    // get status type and position in the list
    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");
    var index = $(this)
        .closest(".list-group-item")
        .index();

    // update task in array and re-save to localstorage
    tasks[status][index].text = text;
    saveTasks();

    // recreate p element
    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});

hourTracker();

