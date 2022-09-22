import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

const initialState = {
  category: {
    loading: false,
    data: [],
    error: "",
  },
  categoryCollection: {
    loading: false,
    data: [],
    error: "",
  },
  mainCategoryCollection: {
    loading: false,
    data: [],
    error: "",
  },
};

export const getCategory = createAsyncThunk("get/category", async (id) => {
  try {
    const res = await instance("/categories");
    return res.data.data;
  } catch (error) {
    return error.message;
  }
});

export const getCategoryCollection = createAsyncThunk(
  "get/categoryCollection",
  async (id) => {
    try {
      const res = await instance(
        `/collections?category_id=${id}&offset=0&limit=20`
      );
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const getMainCategoryCollection = createAsyncThunk(
  "get/mainCategoryCollection",
  async (id) => {
    // console.log(id);
    try {
      const res = await instance(
        `/collections?category_id=${id}&offset=0&limit=10`
      );
      // console.log(res.data);
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //!getCategory
    builder.addCase(getCategory.pending, (state) => {
      state.category.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category.loading = false;
      state.category.data = action.payload;
      state.category.error = "";
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.category.loading = false;
      state.category.data = "";
      state.category.error = action.error.message;
    });
    //!getCategoryCollection
    builder.addCase(getCategoryCollection.pending, (state) => {
      state.categoryCollection.loading = true;
    });
    builder.addCase(getCategoryCollection.fulfilled, (state, action) => {
      state.categoryCollection.loading = false;
      state.categoryCollection.data = action.payload;
      state.categoryCollection.error = "";
    });
    builder.addCase(getCategoryCollection.rejected, (state, action) => {
      state.categoryCollection.loading = false;
      state.categoryCollection.success = "";
      state.categoryCollection.error = action.error.message;
    });
    //!getMainCategoryCollection
    builder.addCase(getMainCategoryCollection.pending, (state) => {
      state.mainCategoryCollection.loading = true;
    });
    builder.addCase(getMainCategoryCollection.fulfilled, (state, action) => {
      state.mainCategoryCollection.loading = false;
      state.mainCategoryCollection.data = [
        ...state.mainCategoryCollection.data,
        ...action.payload,
      ];
      state.mainCategoryCollection.error = "";
    });
    builder.addCase(getMainCategoryCollection.rejected, (state, action) => {
      state.mainCategoryCollection.loading = false;
      state.mainCategoryCollection.success = "";
      state.mainCategoryCollection.error = action.error.message;
    });
  },
});