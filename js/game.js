const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый
  if ($(".target").length) {
    $(".target").text("").removeClass("target");
  }
  let divSelector = randomDivId();
  $(divSelector).addClass("target");

  $(".target").text(hits + 1);

  // TODO: помечать target текущим номером

  // FIXME: тут надо определять при первом клике firstHitTime

  if (hits === maxHits) {
    endGame();
  } else {

  }
}

function endGame() {
  // FIXME: спрятать игровое поле сначала

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);

  $("#total-time-played").text(totalPlayedSeconds);
  $(".wrapper").addClass('d-none');
  $('#button-reload').attr('disabled', true); 
  $('#button-start').attr('disabled', false); 
  $("#win-message").removeClass('d-none');
}

function handleClick(event) {
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?

  if ($(event.target).hasClass("target")) {
    hits = hits + 1;

    round();
  } else {
    $(event.target).addClass("miss");
    setTimeout(function () {
      $(event.target).removeClass("miss")
    }, 1000)

  }
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {
  //1 TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке


  $("#button-reload").click(function () {
     hits = 0;
     firstHitTime = 0;
    $(".target").text("").removeClass("target");
    firstHitTime = getTimestamp();
    round();
  });

  $(".game-field").click(handleClick);
  $("#button-start").click(function () {
    hits = 0;
    firstHitTime = 0;
   $(".target").text("").removeClass("target");
   $(".wrapper").removeClass('d-none');
   $("#win-message").addClass('d-none');
   $('#button-reload').attr('disabled', false);
   $(this).attr('disabled', true); 

    round();
    firstHitTime = getTimestamp();
  });

}

$(document).ready(init);