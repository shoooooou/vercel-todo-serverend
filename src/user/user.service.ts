import { Injectable } from '@nestjs/common';
import { hashString } from '../common/utils/hash.util';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(data: CreateUserDto) {
    const hashedPassword = await hashString(data.password);
    return this.prisma.user.create({
      data: {
        email: data.email,
        password_hash: hashedPassword,
        name: data.name,
      },
    });
  }
}
