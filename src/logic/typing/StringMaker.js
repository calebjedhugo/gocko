import { randomNumberBetween } from "util/math";

class StringMaker {
    constructor({ typingChars }) {
        this.currentChars = typingChars;
        this.pastChars = "";
        this.generate();
        this.advance();
    }

    parChar = 20;

    get newChar() {
        return this.typingChars[
            randomNumberBetween(0, this.typingChars.length - 1)
        ];
    }

    set currentChars(newChars) {
        this.typingChars = Array.from(new Set(newChars)).join("");
        this.futureChars = "";
        this.generate();
    }

    get spaceBool() {
        if (
            !this.futureChars ||
            this.futureChars?.[this.futureChars.length - 1] === " "
        )
            return false;
        return Math.random() > 0.8;
    }

    generate = () => {
        while (this.futureChars.length < this.parChar) {
            this.futureChars += this.spaceBool ? " " : this.newChar;
        }
    };

    advance = () => {
        this.pastChars += this.currentChar || "";
        this.currentChar = this.futureChars[0];
        this.futureChars = this.futureChars.slice(1);
        this.generate();
    };

    get state() {
        return {
            currentChars: this.typingChars,
            currentChar: this.currentChar,
            pastChars: this.pastChars,
            futureChars: this.futureChars,
        };
    }
}

export default StringMaker;
