class Game {
    constructor() {
        this.rock = document.querySelector(".hands__rock");
        this.paper = document.querySelector(".hands__paper");
        this.scissors = document.querySelector(".hands__scissors");
        this.buttonPlay = document.querySelector(".hands__button");
        this.spanYourChoice = document.querySelector(".info__result-player-choice-span");
        this.spanAiChoice = document.querySelector(".info__result-ai-choice-span");
        this.spanWinner = document.querySelector(".info__result-winner-span");
        this.spanGamesCount = document.querySelector(".info__stats-games-span");
        this.spanWins = document.querySelector(".info__stats-wins-span");
        this.spanLosses = document.querySelector(".info__stats-losses-span");
        this.spanDraws = document.querySelector(".info__stats-draws-span");
    }
    startGame() {

    }
}