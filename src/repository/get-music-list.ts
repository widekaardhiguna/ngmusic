import axios from "axios"
import { GetMusicListParams, GetMusicListResponse } from "./music.types"

const getMusicList = async ({ term = "" }: GetMusicListParams) => {
  const res = await axios.get<GetMusicListResponse>(
    `https://search-itunes.vercel.app/?term=${term}&enitity=album`
  )
  return res.data
}

export default getMusicList
