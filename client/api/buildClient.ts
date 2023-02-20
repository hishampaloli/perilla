import axios from "axios";

const buildClient = ({ req }: { req: any }) => {
  if (typeof window === "undefined") {
    
    console.log("SERVER***to***SERVER");
    
    return axios.create({
      baseURL:
        "http://www.perilla-app-prod.shop/",
      headers: req.headers,
    });
  } else {    
    return axios.create({
      baseURL: "/",
    });
  }
};


export default buildClient;
