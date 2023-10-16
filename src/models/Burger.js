export class Burger {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.meat = data.meat
    this.wrap = data.bun
    this.hasCheese = data.hasCheese
    this.hasBacon = data.hasBacon
  }
}