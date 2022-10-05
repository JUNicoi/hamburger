$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //.openbtnに.activeを付与
  $("#gnav").toggleClass("panelactive"); //#gnaveに.panelactiveを付与
});

$("#gnav a").click(function () {
  //リンクがクリックされたら
  $(".openbtn").removeClass("active"); //.openbtnから.activeを削除
  $("#gnav").removeClass("panelactive"); //#gnavから.panelactiveも削除
});
