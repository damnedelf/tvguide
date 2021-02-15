let channelLane0 = document.querySelector("#channel-0");
let channelLane1 = document.querySelector("#channel-1");
let channelLane2 = document.querySelector("#channel-2");
let channelLane3 = document.querySelector("#channel-3");
let channelLane4 = document.querySelector("#channel-4");
let channelLane5 = document.querySelector("#channel-5");
let channelLane6 = document.querySelector("#channel-6");
let channelLane7 = document.querySelector("#channel-7");
let channelLane8 = document.querySelector("#channel-8");
let channelLane9 = document.querySelector("#channel-9");
const emitter = new EventEmitter();
let channelName = document.querySelector("#am");
let menu = document.querySelector("#menu");
let channelColumn = document.querySelector("#channel-column");
let nowButton = document.querySelector("#now-button");
//looking for 1 min ~length in px
function minLengthFinder() {
  let fullWidth = 0;
  let row = document.querySelector("#channel-0");

  fullWidth = row.offsetWidth;
  console.log(row.offsetWidth);
  return fullWidth / 1440;
}
//emits events
//on scroll
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset;
  emitter.emit("event:onScroll", scrollTop);
});
//on press button now
nowButton.addEventListener("click", function () {
  emitter.emit("event:pressNowBut");
});
//print progs lanes handler for View.displayProgs
function showProgs(progs, channelLane, channel_id) {
  progs = progs.filter((item) => item.channel_id == channel_id);
  let minuteWidth =minLengthFinder();
  for (let prog of progs) {
    let div = document.createElement("div");
    channelLane.append(div);
    div.className = "programms-row-name  bg-success";
    div.innerHTML = prog.name;
    let calculatedWidht = minuteWidth * ((+prog.end_stamp - +prog.start_stamp) / 60000);
    div.setAttribute(
      "style",
      `width:${calculatedWidht}px`
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
  //for event on scroll  for static column channel name
  static scrollHandler(scrollTop) {
    if (scrollTop > 3) {
      channelColumn.setAttribute("style", `margin-top:-${scrollTop}px`);
    } else {
      channelColumn.setAttribute("style", ``);
    }
  }
  //print lane
  static nowLane() {
    let channelTitle = document.querySelector("#channel-title");
    let timeLane = document.querySelector("#time-lane-part1");
    let body = document.querySelector("body");
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let timeNow = hours * 60 + mins;
    let topMargin = menu.clientHeight;
    let channelTitleWidth = channelTitle.clientWidth;
    let leftMargin =
      channelTitleWidth + (timeLane.clientWidth / 1440) * timeNow;
    leftMargin = leftMargin * 0.946;
let presentLane = document.createElement("div");
    body.append(presentLane);
    presentLane.setAttribute(
      "style",
      `height:1100px; border-left: 6px solid red; position: absolute; top:${topMargin}px; left:${leftMargin}px`
    );
  }
  //print channel names col for DOM
  static displayProgName(channel_id) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    channelColumn.append(div);
    div.id = "test";
    div.append(p);
    div.className = "channel-column-name";
    p.innerHTML = `channel ${channel_id}`;
    div.setAttribute("style", `height:${channelLane1.clientHeight}px`);
  }
  //print in DOM progs lanes using handler
  static displayProg(progs) {
    showProgs(progs, channelLane0, 1);
    showProgs(progs, channelLane1, 2);
    showProgs(progs, channelLane2, 3);
    showProgs(progs, channelLane3, 4);
    showProgs(progs, channelLane4, 1);
    showProgs(progs, channelLane5, 2);
    showProgs(progs, channelLane6, 3);
    showProgs(progs, channelLane7, 4);
    showProgs(progs, channelLane8, 1);
    showProgs(progs, channelLane9, 2);
  }
}
