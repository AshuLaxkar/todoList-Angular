export class Todo {
  id!: number; 
  title: string | undefined;
  description: string | undefined;
  completed: boolean | undefined;
  dueDate: Date | undefined;
}
