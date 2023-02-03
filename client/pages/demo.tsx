import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Dicd from "../components/Dicd";
import Layout from "../components/layout/Layout";
import MainLayout from "../components/layout/MainLayout";

const validFileType = ["image/jpg", "image/jpeg", "image/png"];
const demo = () => {
  return (
    <div>
      <Dicd />
    </div>
  );
};

export default demo;
