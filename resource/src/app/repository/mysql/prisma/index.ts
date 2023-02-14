import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import employeeRepository from "./employee.repository";

export { employeeRepository };
