export const useTenantRegisterValidator = ({
  companyName,
  adminName,
  phone,
  email,
  country,
  city,
  address,
  password,
  postalCode,
}: {
  companyName: string;
  adminName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  address: string;
  password: string;
  postalCode: string;
}) => {
  if (!companyName) return "Please provide a valid company name";
  if (!adminName) return "Please provide a valid admin name";
  if (!phone || phone.length !== 10) return "Please provide a valid phone number with 10-digit";
  if (!email) return "Please provide a valid email";
  if (!country) return "Please provide a Country";
  if (!city) return "Please provide a City";
  if (!address) return "Please provide a address";
  if (!password) return "Please provide a password";
  if (!postalCode) return "Please password a postalCode";

};
