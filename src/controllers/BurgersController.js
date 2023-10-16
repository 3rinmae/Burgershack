import { response } from "express";
import BaseController from "../utils/BaseController.js";
import { burgersService } from "../services/BurgersService.js";



export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers');
    this.router
      .get('/test', this.test)
      .get('', this.getBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.removeBurger)
  }

  test(req, res, next) {
    res.send('here is your response')
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const burgerData = req.body
      const burger = await burgersService.createBurger(burgerData)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      await burgersService.removeBurger(burgerId)
      res.send('the burger has been deleted')
    } catch (error) {
      next(error)
    }
  }
}