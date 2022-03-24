
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': '669895f063mshed9c9f8f95ade53p12c0f8jsn9d020e952469'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory,count}) => createRequest(`news/search?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${Number(count)}`)
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;