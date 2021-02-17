(function () {
  for (i = 1; i < 11; i++) {
    View.displayProgName(i);
  }
  Store.get(View.displayProg);
  View.nowLane();
  emitter.subscribe("event:onNowButClick", function () {
    View.nowButScroll();
  });

  emitter.subscribe("event:onScrollHor", function (scrollRight) {
    View.scrollHandlerHor(scrollRight);
  });
  emitter.subscribe("event:onScrollVer", function (scrollTop) {
    View.scrollHandlerVer(scrollTop);
  });
})();
