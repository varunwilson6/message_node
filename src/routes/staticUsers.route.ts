import { Router } from 'express';
import StaticUsersController from '@controllers/staticUsers.controller';
import { CreateStaticUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class UsersRoute implements Routes {
  public path = '/staticUsers';
  public router = Router();
  public staticUsersController = new StaticUsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.staticUsersController.getStaticUsers);
    this.router.get(`${this.path}/:id(\\d+)`, this.staticUsersController.getStaticUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreateStaticUserDto, 'body'), this.staticUsersController.createStaticUser);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.staticUsersController.updateUser);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.staticUsersController.deleteUser);
  }
}

export default UsersRoute;
