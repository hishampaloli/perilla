import { schemas } from "../../database/mongo";

const { DashBoard } = schemas;

export = {
  createDashBoardData: async (dashboardData: any) => {
    console.log(dashboardData);

    const mongooseObj = DashBoard.build(dashboardData);
    return await mongooseObj.save();
  },

  editDashBoardData: async (companyName: string, data: string) => {
    console.log(data);
    console.log('????????????????????/');
    

    let increment: any = { $inc: {} };
    increment.$inc[data] = 1;

    console.log(increment);

    const mongooseObj = await DashBoard.findOneAndUpdate(
      { companyName },
      increment,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(mongooseObj);

    return mongooseObj;
  },
};
