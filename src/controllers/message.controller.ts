import { NextFunction, Request, Response } from 'express';
import { message } from '@prisma/client';
import { CreateMessage } from '@dtos/users.dto';
import MessageService from '@services/message.service';

class MessageController {
  public messageService = new MessageService();

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const messageData: CreateMessage = req.body;
      const createUserData: message = await this.messageService.createMessage(messageData);
      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default MessageController;
