/// <reference path="gameobject.ts" /> 
// ref typen en dan tab, control spatie dan gaat hij zoeken naar map

class Trash extends GameObject {

    constructor(x : number, y : number, garbageClass : string) {
        super(x, y, 1, 0, "trash") // refereert naar de class die boven jou zit, geeft de x en y van hier door naar gameobjects
        this.div.classList.add(garbageClass)
        this.update() 
    }
    
    public getFutureRectangle(){
        let rect = this.div.getBoundingClientRect()
        return rect
    }

    public update(): void {

        // update loop
        this.x += this.speedX
        this.y += this.speedY   
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }

    public removeMe() {
        this.div.remove()
    }
}