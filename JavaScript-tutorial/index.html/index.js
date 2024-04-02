function fun() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  //var randomDiceImage = "Dice" + randomNumber1 + ".png ";

  //var randomImageSource = "images/" + randomDiceImage;

  //var image1 = document.querySelectorAll("img")[0];

  //image1.setAttribute("src", randomImageSource);//
  var randomImageSource1 = "images/Dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  //second random number//

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/Dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins🚩";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
