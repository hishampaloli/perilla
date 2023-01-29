export interface TaskData {
  project: string;
  taskName: string;
  taskDescription: string;
  assignedTo: string;
  assignedBy: string;
  startDate: string;
  priority: string;
  deadline: string;
}

export class Task {
  project: string;
  taskName: string;
  taskDescription: string;
  assignedTo: string;
  startDate: string;
  priority: string;
  deadline: string;
  assignedBy: string;

  constructor({
    assignedTo,
    deadline,
    priority,
    project,
    startDate,
    taskDescription,
    assignedBy,
    taskName,
  }: TaskData) {
    this.assignedTo = assignedTo;
    this.deadline = deadline;
    this.priority = priority;
    this.project = project;
    this.startDate = startDate;
    this.taskDescription = taskDescription;
    this.taskName = taskName;
    this.assignedBy = assignedBy;
  }
}
