(function (){
  var isHTML5Player = $(".textMarqueeOuter").length === 0;
  // Hide the ad area.
  if (isHTML5Player) {
    $(".Marquee-item").hide();
    console.info("[Niconico Ad Closer] Hiding the ad area for HTML5 Player.");
  } else {
    $(".textMarqueeOuter").hide();
    console.info("[Niconico Ad Closer] Hiding the ad area.");
  }
  // Click "X" button if there is each 500 ms.
  function close() {
    var button, checker;
    if (isHTML5Player) {
      button = $(".DefaultAnimator-excludeButton")[0];
      if (button) {
        button.click();
        console.info("[Niconico Ad Closer] Closed an ad.");
      }
    } else {
      button = $(".excludeReserveButton")[0];
      checker = $(".enableHistory");
      if(checker[0] && !checker.hasClass("excludeReserved") && button){
        button.click();
        console.info("[Niconico Ad Closer] Closed an ad");
      }
    }
    setTimeout(close, 500);
  }

  close();
})();
