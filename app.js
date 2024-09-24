// Calendar configurations.
const ele = document.getElementById("calendar");
const opts = {
  abbrDay: true,
  abbrMonth: false,
  abbrYear: false,
  onDayClick: dateClicked,
};
const pageCalendar = new calendar(ele, opts);

// Dialog configurations.
$("#dialog").dialog({
  autoOpen: false,
  modal: true,
  show: {
    effect: "fade",
    duration: 300,
  },
  hide: {
    effect: "fade",
    duration: 300,
  },
});

function dateClicked(date) {
  $("#date").text(date.toLocaleDateString("en-US"));
  $("#dialog").dialog("open");
}

$("#user_form").submit((e)=>{
    e.preventDefault();
    fullName = $("#full_name").val();
    appointmentDate = new Date($("#date").text());
    pageCalendar.addEvent({
        desc: fullName,
        startDate: appointmentDate,
        endDate: appointmentDate,
    });

    $("#full_name").val("");
    $("#dialog").dialog("close");
});
