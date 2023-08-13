import { axiosApi } from "./axiosApi.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApiData = createAsyncThunk(
  "products/fetchApiData",
  async () => {
    const { data } = await axiosApi.get("/products");
    return data;
  }
);
