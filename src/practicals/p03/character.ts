export class Character {
    public name: string = "".trim()
    public health: number = 100
    getName() {}
    getHealth() {}
    receiveDamage(damage: number) {
        this.health -= damage
    }
}
