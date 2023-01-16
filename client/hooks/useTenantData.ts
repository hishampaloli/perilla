interface TenantInitalData {
  data: {
    adminName: string;
    companyName: string;
    email: string;
    id: string;
    phone: number;
    isPurchased: boolean;
  };
}

let tenantDatas: TenantInitalData;

if (typeof window !== "undefined") {
  const userInfoFromStorage: TenantInitalData = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  tenantDatas = userInfoFromStorage;
}

export const useTenantData = () => {
  return { tenantDatas: tenantDatas?.data };
};
