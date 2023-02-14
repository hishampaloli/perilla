import { EmployeeAttrs } from "../../../database/mongo/models/employee.schema";
import { prisma } from "./index";

export = {
  createEmployee: async (data: EmployeeAttrs) => {
    const postgresObj = await prisma.employee.create({
      data: {
        companyName: data.companyName,
        email: data.email,
        employeeId: data.employeeId,
        id: data.id,
        image: data.image,
        name: data.name,
        phone: data.phone,
        role: data.role,
      },
    });

    return postgresObj;
  },
  getEmployee: async (companyName: string, employeeId: string) => {
    const postgresObj = await prisma.employee.findFirst({
      where: {
        AND: [
          { id: { equals: employeeId } },
          { companyName: { equals: companyName } },
        ],
      },
    });
    return postgresObj;
  },

  editEmployee: async (companyName: string, employeeId: string, data: any) => {
    const updated = await prisma.employee.updateMany({
      where: {
        AND: [{ companyName }, { id: employeeId }],
      },
      data: {
        email: data.email,
        employeeId: data.employeeId,
        image: data.image,
        name: data.name,
        phone: data.phone,
        role: data.role,
      },
    });

    const postgresObj = await prisma.employee.findFirst({
      where: {
        AND: [{ companyName: "hp" }, { id: employeeId }],
      },
    });
    return postgresObj;
  },

  getAllEmployees: async (companyName: string, role: string) => {
    const postgresObj = await prisma.employee.findMany({
      where: { AND: [{ companyName }, { role }] },
    });
    return postgresObj;
  },
};
