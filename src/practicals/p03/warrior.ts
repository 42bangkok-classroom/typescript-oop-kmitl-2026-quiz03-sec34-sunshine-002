import { Character } from "./character";

export class Warrior extends Character {
  public weapon: string = ""
  // TODO: implement class properties, constructor with super(...), and methods
  constructor(name: string, weapon: string, health?: number) {
    super(name, health)
    this.weapon = weapon
  }

  getWeapon(){
    return this.weapon
  }

  receiveDamage(damage:number):number{
    this.health = this.health - (damage * (90 / 100))
    return this.health
  }
}

