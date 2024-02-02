import { useQuery } from "@tanstack/react-query"
import getMusicList from "./get-music-list"
import { GetMusicListParams } from "./music.types"

const useGetMusicList = (params: GetMusicListParams) => {
  return useQuery({
    queryKey: ["music-list", params],
    queryFn: async () => {
      return getMusicList(params)
    },
  })
}

export default useGetMusicList
