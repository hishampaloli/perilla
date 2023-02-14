-- CreateEnum
CREATE TYPE "LeaveAcceptance" AS ENUM ('peniding', 'accepted', 'rejected');

-- CreateTable
CREATE TABLE "Leave" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "leaveDuration" INTEGER NOT NULL,
    "statingDate" TIMESTAMP(3) NOT NULL,
    "isApproved" "LeaveAcceptance" NOT NULL DEFAULT 'peniding',

    CONSTRAINT "Leave_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Leave" ADD CONSTRAINT "Leave_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
