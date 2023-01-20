import mongoose from "mongoose";

import { schemas } from "../../database/mongo";
import { Password } from "../../externalServices/password";

const {
  Employee,
  PersonalInfo,
  EmergencyContact,
  BankDetails,
  Notification,
  SalaryDetails,
} = schemas;

export = {
  createEmployee: async (user: any) => {
    const mongooseObject = Employee.build(user);
    return await mongooseObject.save();
  },

  editEmployee: async (company: string, employeeId: string, data: any) => {
    const employee = await Employee.findById(employeeId);

    if (!employee) return null;

    if (data.password) {
      employee.password = data.password;
      return await employee?.save();
    }

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

  changePassword: async (company: string, employeeId: string, data: any) => {
    const mongooseObj = await Employee.findById(employeeId);
    if (!mongooseObj) return null;
    mongooseObj.password = data.password;
    return await mongooseObj?.save();
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
    console.log(company, phone, email);

    const mongooseObj = await Employee.aggregate([
      {
        $match: {
          $and: [
            { companyName: company },
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

  getPersonalInfo: async (companyName: string, employeeId: string) => {
    const mongooseObj = await PersonalInfo.findOne({
      $and: [{ employee: employeeId }, { companyName }],
    });
    return mongooseObj;
  },

  editPersonalInfo: async (employeeId: string, data: any) => {
    const mongooseObj = await PersonalInfo.findOneAndUpdate(
      { employee: employeeId },
      data,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    return mongooseObj;
  },

  createEmergencyContact: async (employeeId: string) => {
    const mongooseObj = EmergencyContact.build({ employee: employeeId });
    return await mongooseObj.save();
  },

  getEmergencyContact: async (companyName: string, employeeId: string) => {
    const mongooseObj = await EmergencyContact.findOne({
      $and: [{ employee: employeeId }, { companyName }],
    });
    return mongooseObj;
  },

  editEmergencyContact: async (employeeId: string, data: any) => {
    const mongooseObj = await EmergencyContact.findOneAndUpdate(
      { employee: employeeId },
      data,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    return mongooseObj;
  },

  createBankDetails: async (employeeId: string, companyName: string) => {
    const mongooseObj = BankDetails.build({
      employee: employeeId,
      companyName,
    });
    return await mongooseObj.save();
  },

  getBankDetails: async (companyName: string, employeeId: string) => {
    console.log(employeeId, companyName);

    const mongooseObj = await BankDetails.findOne({
      $and: [{ employee: employeeId }],
    });
    console.log(mongooseObj);

    return mongooseObj;
  },

  reqestedBankDetails: async (companyName: string) => {
    const mongooseObj = await BankDetails.aggregate([
      {
        $match: {
          $and: [
            { companyName: companyName },
            { approvalReq: true },
            { isApproved: false },
          ],
        },
      },
    ]);
    console.log(mongooseObj);

    return mongooseObj;
  },

  editBankDetails: async (employeeId: string, data: any) => {
    const isApproved = await BankDetails.findOne({
      $and: [{ employee: employeeId }, { isApproved: true }],
    });

    if (isApproved) return false;

    const mongooseObj = await BankDetails.findOneAndUpdate(
      { employee: employeeId, isApproved: false },
      data,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
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

  employeeLogin: async (
    companyName: string,
    phone: number,
    password: string
  ) => {
    // console.log(company + "//////////");

    const mongooseObj: any = await Employee.findOne({
      $and: [{ companyName }, { phone }, { isBlocked: false }],
    });

    if (mongooseObj) {
      const passwordsMatch = await Password.compare(
        mongooseObj?.password,
        password
      );
      if (passwordsMatch) {
        return mongooseObj;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  createNotification: async (data: any) => {
    const mongooseObj = Notification.build(data);
    return await mongooseObj.save();
  },

  getMyNotification: async (companyName: string, employee: string) => {
    const mongooseObj = Notification.find({
      $and: [{ companyName }, { employee: employee }],
    });
    return await mongooseObj;
  },

  deleteMyNotification: async (
    companyName: string,
    employee: string,
    id: string
  ) => {
    const mongooseObj = await Notification.findOneAndDelete({
      $and: [{ companyName }, { employee }, { _id: id }],
    });
    return mongooseObj;
  },

  createSalaryDetails: async (data: any) => {
    const mongooseObj = SalaryDetails.build(data);
    return await mongooseObj.save();
  },

  getSalaryDetails: async (companyName: string, employee: string) => {
    const mongooseObj = await SalaryDetails.findOne({
      $and: [{ companyName }, { employee }],
    });
    console.log(mongooseObj);
    
    return mongooseObj;
  },

  editSalaryDetails: async (
    companyName: string,
    employee: string,
    data: any
  ) => {
    const mongooseObj = await SalaryDetails.findOneAndUpdate(
      {
        $and: [{ companyName }, { employee }],
      },
      data,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return mongooseObj
  },
};
