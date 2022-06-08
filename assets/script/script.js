

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

setInterval(hourTracker, 1000); 

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

$(".list-group").on("blur", "textarea", function () {
    var text = $(this).val();
    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");
    var index = $(this)
        .closest(".list-group-item")
        .index();
    tasks[status][index].text = text;
    saveTasks();
    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);
    $(this).replaceWith(taskP);
});

$(".timeBlock").on("click", ".saveBtn", function () {
    var tasktext = $(this).parent().find(".taskText").val().trim();
    var time = $(this).parent().find(".taskText").attr("id");
    localStorage.setItem(time, tasktext);
  });

