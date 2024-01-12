/** @format */

import {
  MutationFunction,
  QueryClient,
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export function useGetData<T>(querykey: QueryKey, queryfn: () => Promise<any>) {
  const { data, isLoading } = useQuery<T>(querykey, queryfn);
  return { data, isLoading };
}

export function usePostData<T>(querykey: QueryKey, url: string) {
  const queryClient = useQueryClient();

  const mutaion = useMutation({
    mutationFn: (data: T) => {
      return fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(querykey);
    },
  });

  return mutaion;
}
