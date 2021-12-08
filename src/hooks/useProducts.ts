import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch("https://fakestoreapi.com/products");
  const json = await result.json();
  console.log(json);
  return json;
}

export type Product = {
  id: number;
  image: string;
  price: number;
  title: string;
  category: string;
  description: string;
  rating: {
    count: number;
    rate: number;
  };
};

export type Products = [];

export function useProducts() {
  return useQuery(["products"], fetchData);
}
