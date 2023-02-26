import { Router } from 'express';
import MessageController from '@controllers/message.controller';
import { CreateMessage } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class MessageRoute implements Routes {
  public path = '/messages';
  public router = Router();
  public messageController = new MessageController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateMessage, 'body'), this.messageController.createUser);
  }
}

export default MessageRoute;
