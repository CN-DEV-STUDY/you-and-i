import {Card, CardContent, CardHeader} from "@/components/ui/Card.tsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/Select.tsx";
import {Input} from "@/components/ui/Input.tsx";
import {Separator} from "@/components/ui/Separator.tsx";
import {ScrollArea} from "@/components/ui/ScrollArea.tsx";
import SearchUserCard from "@/components/domain/user/SearchUserCard.tsx";
import {Skeleton} from "@/components/ui/Skeleton.tsx";
import {useCallback, useRef, useState} from "react";
import useUserSearch from "@/hooks/useUserSearch.ts";

type User = {
  nickname: string;
  email: string;
}

const FindYouPage = () => {
  const [searchType, setSearchType] = useState("EMAIL");
  const [searchWord, setSearchWord] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const {
    users,
    loading,
    error,
    hasMore
  } = useUserSearch(searchType, searchWord, pageNumber);

  const observer = useRef<IntersectionObserver>();
  const lastUserElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <Card className="sm:max-w-[425px] rounded-none">
      <CardContent>
        <div className="flex flex-col gap-2 pt-8">
          <Select defaultValue="EMAIL" onValueChange={setSearchType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="검색 조건을 선택해주세요." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="EMAIL">이메일</SelectItem>
                <SelectItem value="NAME">이름</SelectItem>
                <SelectItem value="NICKNAME">닉네임</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Input
              id="name"
              placeholder="검색어를 입력해주세요."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
          </div>
          <Separator className="my-1"/>
          <div className="h-screen overflow-hidden">
            <ScrollArea className="h-3/6 w-full">
              <div className="space-y-4">
                {users.map((user: User, index: number) => {
                  return (users.length === index + 1)
                    ? <SearchUserCard key={user.email} user={user} lastUserElementRef={lastUserElementRef} />
                    : <SearchUserCard  key={user.email} user={user}/>
                })}
                {loading &&
                  Array.from({length: 10}).map((_, index) => (
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full"/>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]"/>
                        <Skeleton className="h-4 w-[200px]"/>
                      </div>
                    </div>
                  ))
                }
                {error && <div>Error</div>}
              </div>
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FindYouPage;