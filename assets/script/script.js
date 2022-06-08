

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

function loadTasks() {
    var text9 = localStorage.getItem(9);
    var text10 = localStorage.getItem(10);
    var text11 = localStorage.getItem(11);
    var text12 = localStorage.getItem(12);
    var text13 = localStorage.getItem(13);
    var text14 = localStorage.getItem(14);
    var text15 = localStorage.getItem(15);
    var text16 = localStorage.getItem(16);
    var text17 = localStorage.getItem(17);
    $("#9").val(text9);
    $("#10").val(text10);
    $("#11").val(text11);
    $("#12").val(text12);
    $("#13").val(text13);
    $("#14").val(text14);
    $("#15").val(text15);
    $("#16").val(text16);
    $("#17").val(text17);
}

loadTasks();

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
    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);
    $(this).replaceWith(taskP);
});

$(".saveBtn").on("click", function () {
    var tasktext = $(this).parent().find(".taskText")
    .val()
    .trim();
    var time = $(this).parent().find(".taskText").attr("id");
    localStorage.setItem(time, tasktext);
  });

