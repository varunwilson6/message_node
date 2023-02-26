import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail(undefined, {
    message: 'Email should be in valid format',
  })
  public email: string;

  @IsString()
  public password: string;

  @IsOptional()
  @IsString()
  public firstName?: string;

  @IsOptional()
  @IsString()
  public lastName?: string;

  @IsOptional()
  @IsString()
  public fullName?: string;
}

export class CreateStaticUserDto {
  @IsString()
  public name: string;
}

export class CreateMessage {
  @IsString()
  public message: string;
}
