$(document).ready(function() {
  let result = {
    you: 0,
    comp: 0
  };
  function winnerIs(winner) {
    setTimeout(function() {
      if (winner == "you") {
        result.you++;
        $(".result p").html("you win");
        $(".r1").html(result.you);
      } else if (winner == "comp") {
        result.comp++;
        $(".result p").html("you lose");
        $(".r2").html(result.comp);
      } else {
        $(".result p").html("draw");
      }
      $(".result").show();
    }, 400);
  }
  const icons = ["rock", "scissors", "paper"];

  $(".circle-option").click(function() {
    if (!$(this).hasClass("picked")) {
      const compPick = icons[Math.floor(Math.random() * 3)];
      const youPick = this.dataset.pick;
      if (compPick == youPick) {
        winnerIs("draw");
      } else if (compPick == "scissors") {
        if (youPick == "rock") {
          winnerIs("you");
        } else {
          winnerIs("comp");
        }
      } else if (compPick == "rock") {
        if (youPick == "paper") {
          winnerIs("you");
        } else {
          winnerIs("comp");
        }
      } else if (compPick == "paper") {
        if (youPick == "scissors") {
          winnerIs("you");
        } else {
          winnerIs("comp");
        }
      }

      console.log(youPick);
      $(".circle-option").hide();
      $(this).addClass("picked");
      $(".picked").css("display", "flex");
      $(".circle-bot").addClass("front");
      $(".you").addClass("small");
      $(".boot").addClass("center");
      $(".boot h3, .you h3").hide();

      setTimeout(function() {
        $(".circle-bot .inner-circle").html(
          "<i class='fas fa-hand-" + compPick + "'></i>"
        );
      }, 400);
    }
  });
  $(".result button").click(function() {
    $(".result").hide();
    $(".circle-option").removeClass("picked");
    $(".you").removeClass("small");
    $(".circle-option").css("display", "flex");
    $(".boot h3, .you h3").show();
    $(".circle-bot").removeClass("front");
    $(".circle-bot .inner-circle").html("");
  });
});
