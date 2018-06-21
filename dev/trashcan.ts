/// <reference path="gameobject.ts" /> 
 // ref typen en dan tab, control spatie dan gaat hij zoeken naar map

class Trashcan extends GameObject {

    private downkey: number
    private upkey: number

    constructor(x : number, y : number, upkey : number, downkey : number) {
        super(x, y, 0, 0, "trashcan") // refereert naar de class die boven jou zit, geeft de x en y van hier door naar gameobjects

        this.upkey = upkey
        this.downkey = downkey

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.speedX = -5
                break
            case this.downkey:
                this.speedX = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:
                this.speedX = 0
                break
            case this.downkey:
                this.speedX = 0
                break
        } 
    }

    public update() {
        // check of de vuilnisbak binnen beeld blijft
        if (this.x > window.innerWidth - 100){ 
        this.x = window.innerWidth - 100;
        }
        if (this.x < 0 ){
        this.x = 1
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}