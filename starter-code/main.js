// 201701121608L EL JUEVES GIRO
// console.log("JS file is connected to HTML! Woo!")
var elementIdBoard;
var cardElement;

var cardsInPlay = [];
var cards       = ["queen", "queen", "king", "king"];


var createCards = function() {
              // var cards =["queen", "queen", "king", "king"];
              // var cardElement = document.querySelector(".card")
              for(var i = 0; i<cards.length; i++){
                  boardElementId = document.getElementById("game-board");
                  cardElement = document.createElement("div");
                  cardElement.setAttribute('class',"card");
                  cardElement.setAttribute("data-card", cards[i]);
                  console.log("in createCards, we are at array cards[] idx of i: " + i);
                //   if (cardElement.getAttribute("data-card") == "queen") {
                //                     // this.innerHTML = '<img src='path/img1.jpg'><img src='path/img2.jpg'>';
                //                     // this.innerHTML ='<img src='+'bee-1096917_640.png'+'>';
                //                     cardElement.innerHTML = '<img src=\'bee-1096917_640.png\'>';
                //                     // cardElement.innerHTML = '<img src=\'bee-1096917_640.png\'><img src=\'path/img2.jpg\'>';
                //                     // cardElement.setAttribute('innerHTML', "<img src='+'path/bee-1096917_640.png'+'>;'");
                //             }
                //             else {
                //                     cardElement.innerHTML = '<img src=\'lion-1451768_640.jpg\'>';
                //                     // cardElement.setAttribute('innerHTML',"<img src='+'path/bee-1096917_640.png'+'>;'");
                //             }
                // console.log('createCards says innerHTML is: ' + cardElement.innerHTML )
                // console.log('getAttribute.innerHTML: '    + cardElement.getAttribute("innerHTML") )
                boardElementId.appendChild(cardElement);
                cardElement.addEventListener('click', isTwoCards);
              }
            }
createCards();


    // 5) Create a function called isMatch to test if two cards in play are a match.
    // Hint: We can then configure our previous game logic code to access the cards!
var isMatch = function() {
                          for(var i = 0; i<cardsInPlay.length; i++){
                                // console.log("isMatch says, array cardsInPlay idx i: " + cardsInPlay[i]);
                              if (cardsInPlay[0].getAttribute("data-card") == cardsInPlay[1].getAttribute("data-card")) {
                                    alert('YEP YOU GOT A MATCH COWBOY');
                                    // cardsInPlay[0].innerHTML = '<img src=\'bee-1096917_640.png\'>';
                                    cardsInPlay[1].innerHTML = cardsInPlay[0].innerHTML;
                                }
                                else {
                                  alert('NOPE, AINT NO MATCH, BUCKAROO');
                                  cardsInPlay[0].innerHTML = '';
                                  cardsInPlay[1].innerHTML = '';
                                }
                          for(var i = 0; i<cards.length; i++){
                                console.log('isMatch says innerHTML for card: ' + i + ' is ' + cards.innerHTML);
                                  cards.innerHTML = '';
                                  console.log('isMatch says innerHTML for card: ' + i + 'is ' + cards.innerHTML);
                                }
                              }
                          cardsInPlay = [];
                        }
    // 6) Create a function called isTwoCards to check if two cards are in play.
    //checks to see if there are cards in play
function isTwoCards() {
          if (this.getAttribute("data-card") == "queen") {
                            this.innerHTML = '<img src=\'bee-1096917_640.png\'>';
                    }
                    else {
                            this.innerHTML = '<img src=\'lion-1451768_640.jpg\'>';
                    }
          cardsInPlay.push(this);
          if (cardsInPlay.length === 2) {
            isMatch(cardsInPlay);
            cardsInPlay = [];
          }
}
