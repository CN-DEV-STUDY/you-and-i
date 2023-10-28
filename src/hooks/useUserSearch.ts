import {useEffect, useState} from "react";
import axios from "axios";
import {SearchUserResponse} from "@/services/types/user/types.ts";


const useUserSearch = (searchType: string, searchWord: string, pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<SearchUserResponse[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setUsers([]);
  }, [searchType, searchWord]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;
    axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/search`,
      {
      params: {
        searchType: searchType,
        searchWord: searchWord,
        page: pageNumber
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((response) => {
      setUsers(prevUsers =>[...prevUsers, ...response.data.data]);
      setHasMore(!response.data.pagination.last);
      setLoading(false);
      console.log(response.data);
    }).catch((error) => {
      if (error.isCancel) return;
      setError(true);
    })
    return () => cancel();
  }, [searchType, searchWord, pageNumber])

  return {loading, error, users, hasMore}
}

export default useUserSearch;