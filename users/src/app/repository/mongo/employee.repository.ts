import mongoose from "mongoose";

import { schemas } from "../../database/mongo";

const { Employee, PersonalInfo, EmergencyContact } = schemas;

export = {
  createEmployee: async (user: any) => {
    const mongooseObject = Employee.build(user);
    return await mongooseObject.save();
  },

  editEmployee: async (company: string, employeeId: string, data: any) => {
    const employee = await Employee.findById(employeeId);

    if (!employee) return null;

    const mongooseObj = await Employee.findOneAndUpdate(
      { $and: [{ _id: employeeId }, { company: company }] },
      data,
      {
        new: true,
        runValidators: true,
      }
    );
    return mongooseObj;
  },

  getEmployee: async ({
    company,
    phone,
    email,
  }: {
    company: string;
    phone: number;
    email: string;
  }) => {
    const mongooseObj = await Employee.aggregate([
      {
        $match: {
          $and: [
            { company: company },
            {
              $or: [{ phone: Number(phone) }, { email: email }],
            },
          ],
        },
      },
    ]);
    return mongooseObj;
  },

  createEmployeeDatas: async (employeeId: string, data: any) => {
    const mongooseObj = await Employee.findByIdAndUpdate(employeeId, data, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    return mongooseObj;
  },

  createPersonalInfo: async (employeeId: string) => {
    const mongooseObj = PersonalInfo.build({ employee: employeeId });
    return await mongooseObj.save();
  },

  getPersonalInfo: async (employeeId: string) => {
    const mongooseObj = await PersonalInfo.findOne({ employee: employeeId });
    return mongooseObj;
  },

  createEmergencyContact: async (employeeId: string) => {
    const mongooseObj = EmergencyContact.build({ employee: employeeId });
    return await mongooseObj.save();
  },

  getEmergencyContact: async (employeeId: string) => {
    const mongooseObj = await EmergencyContact.findOne({
      employee: employeeId,
    });
    return mongooseObj;
  },

  getAllEmployees: async (company: string, role: string) => {
    console.log(company, role);
    const mongooseObj = await Employee.aggregate([
      {
        $match: {
          $and: [{ company: company }, { role: role }, { isBlocked: false }],
        },
      },
    ]);
    return mongooseObj;
  },
};
