class GuessGame {
    constructor(start, end) {
        this.attempts = [];
        this.number = Math.floor(Math.random() * (end - start) + start);
        this.message = {
            text: "",
            color: "black"
        };
        this.gameOver = false;
        this.progress = 0;
    }

    playGame(guess) {
        if (typeof guess != "number" || isNaN(guess))
            throw new Error("please provide a number.");

        if (this.gameOver) {
            this.message.text = "Game over. Please refresh the page.";
            this.message.color = "Gray";
            return;
        }
        this.attempts.push(guess);
        if (this.number < guess) {
            this.message.text = "Aim lower";
            this.progress = -1;
        } else if (this.number > guess) {
            this.message.text = "Aim higher";
            this.progress = 1;
        } else {
            this.message.text = "You've got it.";
            this.message.color = "green";
            this.gameOver = true;
            this.progress = 0;
        }
    }
}

export default GuessGame;
