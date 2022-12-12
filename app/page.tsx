import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

type Props = {};

export default async function Homepage({}: Props) {

  // fetch the new data
  const news: NewsResponse = await fetchNews(categories.join(","))
  
  return <div>
    {/* NewList */}
  </div>;
}
