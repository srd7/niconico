(function (){
  // Hide the ad area.
  $(".textMarqueeOuter").hide();
  console.info("[Niconico Ad Closer] Hiding the ad area.")
  // Click "X" button if there is each 100 ms.
  function close() {
    var button = $(".excludeReserveButton")[0],
        chekker = $(".enableHistory");
    if(chekker[0] && !chekker.hasClass("excludeReserved") && button){
      button.click();
      console.info("[Niconico Ad Closer] Closed an ad");
    }
    setTimeout(close, 500);
  }

  close();
})();
