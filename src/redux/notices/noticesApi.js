import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticesApi = createApi({
  reducerPath: "noticesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/notices",

    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Notices"],
  endpoints: build => ({
    getNoticesByCategory: build.query({
      query: category => ({
        url: `/category/${category}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    getFavoriteNotices: build.query({
      query: () => ({
        url: `/owner/favorite`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    getUserNotices: build.query({
      query: userId => ({
        url: `/owner/${userId}`,
      }),
      providesTags: ["Notices"],
    }),
    getNoticeById: build.query({
      query: id => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    addNotice: build.mutation({
      query: formData => ({
        url: `/`,
        method: "POST",
        body: formData,

        providesTags: ["Notices"],
      }),
    }),
    addNoticeToFavorites: build.mutation({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: "PUT",
      }),
      providesTags: ["Notices"],
    }),
    deleteNotice: build.mutation({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: "DELETE",
      }),
      providesTags: ["Notices"],
    }),
  }),
});

export const {
  useGetNoticesByCategoryQuery,
  useAddNoticeMutation,
  useAddNoticeToFavoritesMutation,
  useGetNoticeByIdQuery,
  useDeleteNoticeMutation,
  useGetFavoriteNoticesQuery,
  useGetUserNoticesQuery,
} = noticesApi;
