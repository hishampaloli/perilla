import { useRouter } from "next/router";
import React from "react";

const client = () => {
  const router = useRouter();
  const { client } = router.query;

  return <div>{client}</div>;
};

export default client;
