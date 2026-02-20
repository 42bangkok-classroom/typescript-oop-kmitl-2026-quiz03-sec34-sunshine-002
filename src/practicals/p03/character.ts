export class Character {
    public name: string = ""
    public health: number = 100
    constructor(name: string, health?: number) {
        this.name = name
        this.health = health ?? 100
    }
    getName() {
        this.name 
    }
     getHealth(): number {
        return this.health
    }
    
    receiveDamage(damage: number) {
        this.health -= damage
    }
}
