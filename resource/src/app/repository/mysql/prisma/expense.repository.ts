// import { ExpenseData } from "../../../../entities/Expense";
// import { prisma } from "./index";

// export = {
//   createAsset: async (asset: ExpenseData) => {
//     const postgresObj = await prisma.employee.create({
//       data: {
//         assetName: asset.assetName,
//         companyName: asset.companyName,
//         price: asset.price,
//         createdBy: { connect: { id: asset.createdBy } },
//       },
//     });

//     return postgresObj;
//   },

//   getAllAssets: async (companyName: string, pageNumber: number) => {
//     const postgresObj = await prisma.asset.findMany({
//       where: { companyName },
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: { createdBy: true },
//     });

//     return postgresObj;
//   },

//   getMyAssetPosts: async (companyName: string, createdBy: string) => {
//     const postgresObj = await prisma.asset.findMany({
//       where: {
//         AND: [{ companyName }, { employeeId: createdBy }],
//       },

//       include: { createdBy: true },
//     });
//     return postgresObj;
//   },

//   getSingleAsset: async (companyName: string, assetId: string) => {
//     const postgresObj = await prisma.asset.findFirst({
//       where: {
//         AND: [{ companyName }, { id: assetId }],
//       },
//       include: { createdBy: true },
//     });

//     return postgresObj;
//   },

//   editAssets: async (
//     companyName: string,
//     assetId: string,
//     createdBy: string,
//     data: any
//   ) => {
//     const postgresObj = await prisma.asset.updateMany({
//       where: {
//         AND: [{ companyName }, { id: assetId }, { employeeId: createdBy }],
//       },
//       data: {
//         price: data.price,
//         assetName: data.assetName,
//       },
//     });

//     const updatedItem = await prisma.asset.findFirst({
//       where: {
//         AND: [{ companyName }, { id: assetId }, { employeeId: createdBy }],
//       },
//     });
//     return updatedItem;
//   },

//   deleteAsset: async (
//     companyName: string,
//     assetId: string,
//     createdBy: string
//   ) => {
//     const postgresObj = await prisma.asset.deleteMany({
//       where: {
//         AND: [
//           { companyName },
//           { id: assetId },
//           { employeeId: { equals: createdBy } },
//         ],
//       },
//     });
//     return postgresObj;
//   },
// };
