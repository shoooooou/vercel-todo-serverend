import { TaskStatus } from '@prisma/client';
export declare class CreateTaskDto {
    user_id: number;
    name: string;
    due_date: string;
    status?: TaskStatus;
}
