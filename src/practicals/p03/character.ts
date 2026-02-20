export class Character {
    public name: string = ""
    private health: number = 100
    getName(name: string) {
        this.name = name
    }
    get getHealth(): number {
        return this.health
    }
    set getHealth(age: number) {
        if(age < 100) {
            this.health = 100
        } else {
            this.health = age
        }
    }
    receiveDamage(damage: number) {
        this.health -= damage
    }
}
