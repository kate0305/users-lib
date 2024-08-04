import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { plainToClass } from 'class-transformer';

import { PrismaService } from 'src/db/prisma.service';
import {
  NUMBER_OF_RESULTS_PER_PAGE,
  RECORD_IN_DB_IS_NOT_FOUND,
} from 'src/shared/constants';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(page: number) {
    const skip = (page - 1) * NUMBER_OF_RESULTS_PER_PAGE;
    const [users, totalUsers] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        skip,
        take: NUMBER_OF_RESULTS_PER_PAGE,
        orderBy: {
          id: 'asc',
        },
      }),
      this.prisma.user.count(),
    ]);

    return {
      users: users.map((user) => plainToClass(User, user)),
      totalUsers,
    };
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }

    return plainToClass(User, user);
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    return plainToClass(User, user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      return null;
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    return plainToClass(User, updatedUser);
  }

  async remove(id: string) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return true;
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === RECORD_IN_DB_IS_NOT_FOUND
      ) {
        return false;
      }
      throw e;
    }
  }
}
