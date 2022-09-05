export class Select {
    constructor(hands) {
        this.hands = hands;
        this.choices = {
            player: "",
            ai: ""
        };
        this.playerSelect()
    }
    playerSelect() {
        this.hands.forEach(hand => {
            hand.addEventListener("click", () => {
                this.hands.forEach(hand => {
                    hand.style.border = "8px solid transparent";
                })
                hand.style.border = "8px solid black";
                this.choices.player = hand.dataset.option;
            })
        });
    }
    aiSelect() {
        const index = Math.floor(Math.random()*3);
        this.choices.ai = this.hands[index].dataset.option;
        
    }
}