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

export const fetchStudentDetails = createAsyncThunk(
  "company/fetchStudentDetails",
  async (id) => {
    const response = await axios.get(
      `${API_BASE_URL}/student/studentDetails/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

// export const fetchStudentATSScore = createAsyncThunk(
//   "company/fetchStudentATSScore",
//   async (id) => {
//     const response = await axios.get(`${API_BASE_URL}/getAtsScore/${id}`, {
//       withCredentials: true,
//     });

//     return response.data;
//   }
// );

const companySlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    currentUser: null,
    error: null, // Add error field
    companyDetails: null,
    studentDetails: null,
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
      state.studentDetails = null;
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
        state.error = action.payload;
        state.status = "idle";
      })

      .addCase(fetchStudentDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentDetails.fulfilled, (state, action) => {
        state.studentDetails = action.payload;
        state.status = "idle";
      })
      .addCase(fetchStudentDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "idle";
      });
  },
});

export const { setUser, clearUser } = companySlice.actions;
export default companySlice.reducer;
