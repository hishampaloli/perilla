import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import employeeRepository from "./employee.repository";
import assetRepository from "./asset.repository";

export { employeeRepository, assetRepository };
