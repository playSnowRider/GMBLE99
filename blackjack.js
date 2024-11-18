let playerHand = [];
let dealerHand = [];

function getRandomCard() {
    const cards = ["🂠", "🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩"];
    return cards[Math.floor(Math.random() * cards.length)];
}

function startGame() {
    playerHand = [getRandomCard(), getRandomCard()];
    dealerHand = [getRandomCard(), getRandomCard()];
    document.getElementById("playerCards").textContent = "Your Cards: " + playerHand.join(" ");
    document.getElementById("dealerCards").textContent = "Dealer's Cards: " + dealerHand[0] + " 🂠";
    document.getElementById("gameResult").textContent = "";
}

function drawCard() {
    playerHand.push(getRandomCard());
    document.getElementById("playerCards").textContent = "Your Cards: " + playerHand.join(" ");
    // You can add scoring logic here
}

function endGame() {
    document.getElementById("dealerCards").textContent = "Dealer's Cards: " + dealerHand.join(" ");
    // Game result logic here (for example, comparing card values)
    document.getElementById("gameResult").textContent = "Game Over! Result shown here.";
}
