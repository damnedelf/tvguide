//VARS
//rows for progs
let channelLane1 = document.querySelector("#prog-lane1");
let channelLane2 = document.querySelector("#prog-lane2");
let channelLane3 = document.querySelector("#prog-lane3");
let channelLane4 = document.querySelector("#prog-lane4");
let channelLane5 = document.querySelector("#prog-lane5");
let channelLane6 = document.querySelector("#prog-lane6");
let channelLane7 = document.querySelector("#prog-lane7");
let channelLane8 = document.querySelector("#prog-lane8");
let channelLane9 = document.querySelector("#prog-lane9");
let channelLane10 = document.querySelector("#prog-lane10");

//progs rows block
let progLanes = document.querySelector(".prog-lane-wrapper");
//now button
let nowBut = document.querySelector("#now-button");

//all channels column except 1-st title
let channels = document.querySelector(".channels");
//channel column
let channelColumn = document.querySelector(".channel-col");
// channel col title
let channelTitle = document.querySelector(".channel-col-title");
//length of channel title
let fixLength = channelTitle.clientHeight;
//time lane row
let timeLane = document.querySelector(".timelane");
//menu
let menu = document.querySelector(".menu");
//body for lane vertical print
let body = document.querySelector("body");
//VARS FOR LANE HANDLERS
let date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
let timeNow = hours * 60 + mins;
let topMargin = menu.clientHeight;
let channelTitleWidth = channelTitle.offsetWidth;
let leftMargin = channelTitleWidth + (progLanes.offsetWidth / 1440) * timeNow;
// declare event var
const emitter = new EventEmitter();

//looking for 1 min ~length in px
function minLengthFinder() {
  let fullWidth = 0;
  fullWidth = progLanes.clientWidth;
  return fullWidth / 1440;
}
//emits events
//on scroll
window.addEventListener("scroll", function () {
  let scrollLeft = window.pageXOffset;
  emitter.emit("event:onScrollHor", scrollLeft);
});
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset;
  emitter.emit("event:onScrollVer", scrollTop);
});
//on click Now Button
nowBut.addEventListener("click", function () {
  emitter.emit("event:onNowButClick");
});

//print progs lanes handler for View.displayProgs
function showProgs(progs, channelLane, channel_id) {
  progs = progs.filter((item) => item.channel_id == channel_id);
  let minuteWidth = minLengthFinder();

  let todayZero = progs[0].start_stamp;

  for (let prog of progs) {
    let div = document.createElement("div");
    channelLane.append(div);
    div.className = "prog";
    div.innerHTML = prog.name;
    let calculatedWidht =
      minuteWidth * ((+prog.end_stamp - +prog.start_stamp) / 60000);
    div.setAttribute(
      "style",
      `width:${Math.ceil(calculatedWidht)}px;left:${Math.ceil(
        ((prog.start_stamp - todayZero) / 60000) * minuteWidth
      )}px`
    );
    div.setAttribute("data-toggle", "tooltip");
    div.setAttribute(
      "title",
      `${prog.name}
    ${prog.description}
    ${prog.start_time}
    ${prog.end_time}`
    );
  }
}
class View {
  constructor() {}
  //scroll doc if nowBut was clicked
  static nowButScroll() {
    window.scrollTo(leftMargin * 0.7, 0);
  }
  //for event on scroll horizontal. for moving timelane
  static scrollHandlerHor(scrollLeft) {
    if (scrollLeft > 2) {
      timeLane.setAttribute("style", `margin-left:${120 - scrollLeft}px`);
    } else {
      timeLane.setAttribute("style", "margin-left:120px");
    }
  }
  //for event on scroll vertical. for moving channel column
  static scrollHandlerVer(scrollTop) {
    if (scrollTop > 2) {
      channelTitle.setAttribute("style", `position:absolute;  width:100%;`);
      channels.setAttribute("style", `margin-top:${-scrollTop + fixLength}px`);
    } else {
      channels.setAttribute("style", "");
      channelTitle.setAttribute("style", "");
    }
  }
  //print lane
  static nowLane() {
    // leftMargin = leftMargin;
    let presentLane = document.createElement("div");
    body.append(presentLane);
    presentLane.setAttribute(
      "style",
      `height:${
        progLanes.clientHeight + fixLength
      }px; border-left: 6px solid red; position: absolute; top:${topMargin}px; left:${leftMargin}px`
    );
  }
  //print channel names col for DOM
  static displayProgName(channel_id) {
    let span = document.querySelector(`#channel${channel_id}`);
    span.innerHTML = `${channel_id}`;
  }
  //print in DOM progs lanes using handler
  static displayProg(progs) {
    showProgs(progs, channelLane1, 1);
    showProgs(progs, channelLane2, 2);
    showProgs(progs, channelLane3, 3);
    showProgs(progs, channelLane4, 4);
    showProgs(progs, channelLane5, 1);
    showProgs(progs, channelLane6, 2);
    showProgs(progs, channelLane7, 3);
    showProgs(progs, channelLane8, 4);
    showProgs(progs, channelLane9, 1);
    showProgs(progs, channelLane10, 2);
  }
}
