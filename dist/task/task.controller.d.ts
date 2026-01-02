import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<{
        user_id: number;
        name: string;
        due_date: Date;
        status: import(".prisma/client").$Enums.TaskStatus;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    fetchTask(userId: number): Promise<{
        user_id: number;
        name: string;
        due_date: Date;
        status: import(".prisma/client").$Enums.TaskStatus;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
