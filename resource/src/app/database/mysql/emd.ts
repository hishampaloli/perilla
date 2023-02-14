
const prisma: { employee: any } = { employee: "" };
const { employee } = prisma;

export = {
  createEmployee: async (data: any) => {
    console.log(data);
    const postgresObj = await employee.create({
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
    console.log(postgresObj);
    return postgresObj;
  },
  getEmployee: async (companyName: string, employeeId: string) => {
    const postgresObj = await employee.findFirst({
      where: {
        AND: [
          { id: { equals: employeeId } },
          { companyName: { equals: companyName } },
        ],
      },
    });
    return postgresObj;
  },
};
