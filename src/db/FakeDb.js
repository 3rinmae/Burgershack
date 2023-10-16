import { Burger } from "../models/Burger.js";

class FakeDb {
  constructor() {
    this.burgers = [
      new Burger({ id: 1, name: 'gf traditional', price: 5, meat: 'beef', wrap: 'gf', hasCheese: true, hasBacon: false }),
      new Burger({ id: 2, name: 'veggie', price: 4, meat: 'black bean', wrap: 'lettuce', hasCheese: false, hasBacon: false }),
      new Burger({ id: 3, name: 'cobb', price: 3, meat: 'chicken', wrap: 'lettuce', hasCheese: false, hasBacon: true })
    ]
  }
}

export const fakeDb = new FakeDb()