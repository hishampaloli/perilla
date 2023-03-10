import { schemas } from "../../database/mongo/";

const { Employee } = schemas;

export = {
  createEmployee: async (user: any) => {
    const mongooseObject = Employee.build(user);
    return await mongooseObject.save();
  },

  getEmployee: async (companyName: string, employeeId: string) => {
    const mongooseObj = await Employee.findOne({
      $and: [{ _id: employeeId }, { companyName }],
    });

    return mongooseObj;
  },

  editEmployee: async (company: string, employeeId: string, data: any) => {
    const employee = await Employee.findById(employeeId);
    if (!employee) return null;
    console.log(company, data, employeeId);

    const mongooseObj = await Employee.findOneAndUpdate(
      { $and: [{ _id: employeeId }, { companyName: company }] },
      data,
      {
        new: true,
        runValidators: true,
      }
    );

    return mongooseObj;
  },

  getAllEmployees: async (company: string, role: string) => {
    console.log(company, role);
    const mongooseObj = await Employee.aggregate([
      {
        $match: {
          $and: [
            { companyName: company },
            { role: role },
            { isBlocked: false },
          ],
        },
      },
    ]);
    return mongooseObj;
  },
};
