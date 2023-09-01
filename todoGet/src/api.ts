import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from './model/todoModel';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => 'todos',
        }),
    }),
});
export const { useGetTodosQuery } = api