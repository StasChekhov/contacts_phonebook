import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
 reducerPath: "contacts",
 baseQuery: fetchBaseQuery({
  baseUrl: "https://6298a13ade3d7eea3c6c6089.mockapi.io/api/contacts",
 }),
 endpoints: (builder) => ({
  getContacts: builder.query({
   query: () => `/contacts`,
  }),
  addContact: builder.mutation({}),
 }),
});

export const { useGetContactsQuery } = contactsApi;
