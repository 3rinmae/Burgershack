import { fakeDb } from "../db/FakeDb.js"
import { Burger } from "../models/Burger.js"



class BurgersService {
  async getBurgers() {
    const burgers = await fakeDb.burgers
    return burgers
  }

  async createBurger(burgerData) {
    if (fakeDb.burgers.length == 0) {
      burgerData.id = 1
    }
    else {
      const burgerIds = fakeDb.burgers.map(burger => burger.id)
      const largestBurgerId = Math.max(...burgerIds)
      burgerData.id = largestBurgerId + 1
    }
    const newBurger = new Burger(burgerData)
    await fakeDb.burgers.push(newBurger)
    return newBurger
  }
}

export const burgersService = new BurgersService