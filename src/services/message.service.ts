import { hash } from 'bcrypt';
import { message, PrismaClient, User } from '@prisma/client';
import { CreateMessage } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
const fs = require('fs').promises;

async function appendToFile(currentMessage) {
  try {
    await fs.appendFile('file.txt', currentMessage + "'\n'");
    console.log('The text has been appended to file.txt');
  } catch (err) {
    console.error(err);
  }
}

class MessageService {
  public messages = new PrismaClient().message;

  public async createMessage(messageData: CreateMessage): Promise<message> {
    if (isEmpty(messageData)) throw new HttpException(400, 'userData is empty');
    await appendToFile(messageData.message);
    return {
      id: 1,
      message: '',
      createdAt: new Date(),
    };
  }
}

export default MessageService;
