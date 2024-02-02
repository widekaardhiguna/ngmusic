import { useSearchParams } from "react-router-dom"
import useGetMusicList from "../../repository/use-get-music-list"
import MusicCard from "./_MusicCard"
import Nav from "./_Nav"
import SearchResult from "./_SearchResult"
import classes from "./MusicListPage.module.css"

const MusicList = () => {
  const [URLSearchParams, setURLSearchParams] = useSearchParams()
  const term = URLSearchParams.get("term")

  const { data } = useGetMusicList({
    term,
  })

  const onSearch = (val: string) => {
    URLSearchParams.set("term", val)
    setURLSearchParams(URLSearchParams)
  }

  return (
    <div className={classes.root}>
      <Nav onSearch={onSearch} />
      <SearchResult term={term} />
      <div className={classes.stack}>
        {data?.results.map((row) => (
          <MusicCard
            key={row.trackId}
            artistName={row.artistName}
            image={row.artworkUrl100}
            primaryGenreName={row.primaryGenreName}
            trackName={row.trackName}
            trackPrice={row.trackPrice}
          />
        ))}
      </div>
    </div>
  )
}

export default MusicList
