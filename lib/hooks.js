import useSWR from "swr";
import { getClient } from "./sanity";
import { workImageQueries, portfolioImageQueries } from "./queries";

const fetcher = (query, params) => getClient().fetch(query, params);

export function useWorkImages() {
  const { data, error, isLoading } = useSWR(workImageQueries.list, fetcher);

  return {
    images: data,
    isLoading,
    isError: error,
  };
}

export function usePortfolioImages() {
  const { data, error, isLoading } = useSWR(
    portfolioImageQueries.list,
    fetcher
  );

  return {
    images: data,
    isLoading,
    isError: error,
  };
}

export function usePortfolioImage(slug) {
  const { data, error, isLoading } = useSWR(
    slug ? [portfolioImageQueries.single, { slug }] : null,
    ([query, params]) => fetcher(query, params)
  );

  return {
    image: data,
    isLoading,
    isError: error,
  };
}

export function useWorkImagesByCategory(category) {
  const { data, error, isLoading } = useSWR(
    category ? [workImageQueries.byCategory, { category }] : null,
    ([query, params]) => fetcher(query, params)
  );

  return {
    images: data,
    isLoading,
    isError: error,
  };
}

export function useWorkImageYears() {
  const { data, error, isLoading } = useSWR(workImageQueries.allYears, fetcher);

  const years = data ? [...new Set(data)].sort((a, b) => b - a) : [];

  return {
    years,
    isLoading,
    isError: error,
  };
}

export function useWorkImagesByYear(year) {
  const { data, error, isLoading } = useSWR(
    year ? [workImageQueries.byYear, { year: Number(year) }] : null,
    ([query, params]) => fetcher(query, params)
  );

  return {
    images: data,
    isLoading,
    isError: error,
  };
}
