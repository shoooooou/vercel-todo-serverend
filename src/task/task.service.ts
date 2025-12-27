import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(data: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({
      data: {
        user_id: data.user_id,
        name: data.name,
        due_date: new Date(data.due_date),
        status: data.status,
      },
    });
  }

  async fetchTask(userId: number): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        user_id: userId,
      },
    });
  }
}
