import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchCompanyDetails = createAsyncThunk(
  "company/fetchCompanyDetails",
  async (id) => {
    const response = await axios.get(
      `${API_BASE_URL}/company/companyDetails/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const fetchAtsScoreList = createAsyncThunk(
  "company/fetchAtsScoreList",
  async (id) => {
    const response = await axios.get(`${API_BASE_URL}/atsScoreList/${id}`, {
      withCredentials: true,
    });

    return response.data;
  }
);

const companySlice = createSlice({
  name: "company",
  initialState: {
    isAuthenticated: false,
    currentUser: null,
    error: null, // Add error field
    companyDetails: null,
    atsScoreList: [],
    status: "idle",
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      state.error = null; // Reset error state
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = null; // Reset error state
      state.companyDetails = null;
      state.atsScoreList = [];
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompanyDetails.fulfilled, (state, action) => {
        state.companyDetails = action.payload;
        state.status = "idle";
      })
      .addCase(fetchCompanyDetails.rejected, (state, action) => {
        state.error = action.payload.message;
        state.status = "idle";
      })
      .addCase(fetchAtsScoreList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAtsScoreList.fulfilled, (state, action) => {
        state.atsScoreList = action.payload;
        state.status = "idle";
      })
      .addCase(fetchAtsScoreList.rejected, (state, action) => {
        state.error = action.payload.message;
        state.status = "idle";
      });
  },
});

export const { setUser, clearUser } = companySlice.actions;
export default companySlice.reducer;
