(function close(){
  var button = $(".excludeReserveButton")[0],
      chekker = $(".enableHistory");
  if(chekker[0] && !chekker.hasClass("excludeReserved") && button){
    button.click();
    console.info("closed");
  }
  setTimeout(close, 500);
})();
