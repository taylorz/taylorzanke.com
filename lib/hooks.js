import useSWR from "swr";
import { getClient } from "./sanity";
import { workQueries, groupQueries } from "./queries";

const fetcher = (query, params) => getClient().fetch(query, params);

export function useWorks() {
  const { data, error, isLoading } = useSWR(workQueries.list, fetcher);

  return {
    works: data,
    isLoading,
    isError: error,
  };
}

export function useWork(slug) {
  const { data, error, isLoading } = useSWR(
    slug ? [workQueries.single, { slug }] : null,
    ([query, params]) => fetcher(query, params)
  );

  return {
    work: data,
    isLoading,
    isError: error,
  };
}

export function useWorksByCategory(category) {
  const { data, error, isLoading } = useSWR(
    category ? [workQueries.byCategory, { category }] : null,
    ([query, params]) => fetcher(query, params)
  );

  return {
    works: data,
    isLoading,
    isError: error,
  };
}

export function useGroups() {
  const { data, error, isLoading } = useSWR(groupQueries.list, fetcher);

  return {
    groups: data,
    isLoading,
    isError: error,
  };
}

export function useGroup(slug) {
  const { data, error, isLoading } = useSWR(
    slug ? [groupQueries.single, { slug }] : null,
    ([query, params]) => fetcher(query, params)
  );

  return {
    group: data,
    isLoading,
    isError: error,
  };
}
