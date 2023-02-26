import { PrismaClient, StaticUser } from '@prisma/client';
import { CreateStaticUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class UserService {
  public staticUsers = new PrismaClient().staticUser;

  public async findAllUser(): Promise<StaticUser[]> {
    const allStaticUser: StaticUser[] = await this.staticUsers.findMany();
    return allStaticUser;
  }

  public async findUserById(staticUserId: number): Promise<StaticUser> {
    if (isEmpty(staticUserId)) throw new HttpException(400, 'UserId is empty');

    const findUser: StaticUser = await this.staticUsers.findUnique({ where: { id: staticUserId } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateStaticUserDto): Promise<StaticUser> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const createUserData: StaticUser = await this.staticUsers.create({ data: { ...userData } });
    return createUserData;
  }

  // public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
  //   if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

  //   const findUser: User = await this.users.findUnique({ where: { id: userId } });
  //   if (!findUser) throw new HttpException(409, "User doesn't exist");

  //   const hashedPassword = await hash(userData.password, 10);
  //   const updateUserData = await this.users.update({ where: { id: userId }, data: { ...userData, password: hashedPassword } });
  //   return updateUserData;
  // }

  // public async deleteUser(userId: number): Promise<User> {
  //   if (isEmpty(userId)) throw new HttpException(400, "User doesn't existId");

  //   const findUser: User = await this.users.findUnique({ where: { id: userId } });
  //   if (!findUser) throw new HttpException(409, "User doesn't exist");

  //   const deleteUserData = await this.users.delete({ where: { id: userId } });
  //   return deleteUserData;
  // }
}

export default UserService;
