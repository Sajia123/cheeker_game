// Function to generate a random card value (2-11)
function generateCard() {
    return Math.floor(Math.random() * 10) + 2;
  }
  
  // Function to calculate the total value of a hand
  function calculateHandValue(hand) {
    return hand.reduce((sum, card) => sum + card, 0);
  }
  
  // Function to check if a hand has blackjack (21 points)
  function hasBlackjack(hand) {
    return calculateHandValue(hand) === 21;
  }
  
  // Function to deal three cards to a player
  function dealCards() {
    return [generateCard(), generateCard(), generateCard()];
  }
  
  // Main function to play the game
  function playGame() {
    // Deal three cards to each player
    const player1Hand = dealCards();
    const player2Hand = dealCards();
  
    // Display the hands
    console.log('Player 1 Hand:', player1Hand);
    console.log('Player 2 Hand:', player2Hand);
  
    // Check for blackjack
    if (hasBlackjack(player1Hand) && hasBlackjack(player2Hand)) {
      console.log('Both players have blackjack! It\'s a tie.');
    } else if (hasBlackjack(player1Hand)) {
      console.log('Player 1 has blackjack! Player 1 wins.');
    } else if (hasBlackjack(player2Hand)) {
      console.log('Player 2 has blackjack! Player 2 wins.');
    } else {
      console.log('No one has blackjack. Keep playing!');
    }
  }
  
  // Start the game
  playGame();