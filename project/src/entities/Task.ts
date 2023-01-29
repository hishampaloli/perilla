export interface TaskData {
  project: string;
  taskName: string;
  taskDescription: string;
  assignedTo: string;
  assignedBy: string;
  startDate: string;
  priority: string;
  deadLine: string;
}

export class Task {
  project: string;
  taskName: string;
  taskDescription: string;
  assignedTo: string;
  startDate: string;
  priority: string;
  deadLine: string;
  assignedBy: string;

  constructor({
    assignedTo,
    deadLine,
    priority,
    project,
    startDate,
    taskDescription,
    assignedBy,
    taskName,
  }: TaskData) {
    this.assignedTo = assignedTo;
    this.deadLine = deadLine;
    this.priority = priority;
    this.project = project;
    this.startDate = startDate;
    this.taskDescription = taskDescription;
    this.taskName = taskName;
    this.assignedBy = assignedBy;
  }
}
