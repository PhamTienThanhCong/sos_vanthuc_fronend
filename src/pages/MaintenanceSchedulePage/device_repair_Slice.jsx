import { createSlice } from "@reduxjs/toolkit";
import {
  getAllDeviceRepair,
  getAllMaintenance,
  getAllDevice,
  getAllUser,
  createDeviceRepair,
  putDeviceRepair
} from "./device_repair_Api";

const initialState = {
  maintenanceList: [],
  isGetAll: false,
  deviceCategoryList: [],
  isGetAllMaintenance: false,
  deviceList: [],
  isGetAllDevice: false,
  userList: [],
  isGetAllUser: false,
  createRepair: [],
  isCreate: false,
  updateRepair: [],
  isUpdate: false,
  error: null
};

export const device_repair_Slice = createSlice({
  name: "device_repair",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllDeviceRepair.fulfilled, (state, action) => {
      state.maintenanceList = [...action.payload];
      state.isGetAll = true;
    });
    builder.addCase(getAllMaintenance.fulfilled, (state, action) => {
      state.deviceCategoryList = [...action.payload];
      state.isGetAllDeviceCategory = true;
    });
    builder.addCase(getAllDevice.fulfilled, (state, action) => {
      state.deviceList = [...action.payload];
      state.isGetAllDevice = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.userList = [...action.payload];
      state.isGetAllUser = true;
    });
    builder.addCase(createDeviceRepair.fulfilled, (state, action) => {
      state.deviceList = Array.isArray(action.payload) ? [...action.payload] : [];
    });
    builder.addCase(putDeviceRepair.fulfilled, (state, action) => {
      state.updateRepair = [...state.updateRepair, action.payload];
    });
    builder.addCase(createDeviceRepair.rejected, (state, action) => {
      console.log(action);
      state.error = action.meta.response.data.detail || "Lỗi không xác định";
    });
    builder.addCase(putDeviceRepair.rejected, (state, action) => {
      state.error = action.meta.response.data.detail | "Lỗi không xác định";
    });
  }
  //  trường hợp tạo loại thiết bị
});

export const { clearError } = device_repair_Slice.actions;
export default device_repair_Slice.reducer;
