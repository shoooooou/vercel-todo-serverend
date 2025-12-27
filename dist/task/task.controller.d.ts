import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<{
        name: string;
        id: number;
        user_id: number;
        status: import(".prisma/client").$Enums.TaskStatus;
        due_date: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    fetchTask(userId: number): Promise<{
        name: string;
        id: number;
        user_id: number;
        status: import(".prisma/client").$Enums.TaskStatus;
        due_date: Date;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
