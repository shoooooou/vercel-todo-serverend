import { Task } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TaskService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTask(data: CreateTaskDto): Promise<Task>;
    fetchTask(userId: number): Promise<Task[]>;
}
