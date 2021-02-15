(function () {
  // for(i=1;i++;i<11){
  //   View.displayProgName(i);
  // }
  View.displayProgName(1);
  View.displayProgName(2);
  View.displayProgName(3);
  View.displayProgName(4);
  View.displayProgName(5);
  View.displayProgName(6);
  View.displayProgName(7);
  View.displayProgName(8);
  View.displayProgName(9);
  View.displayProgName(10);

  Store.get(View.displayProg);

  emitter.subscribe("event:onScroll", function (scrollTop) {
    View.scrollHandler(scrollTop);
  });
  emitter.subscribe("event:pressNowBut", function () {
    View.nowLane();
  });
})();
