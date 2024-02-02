import classes from "./_MusicCard.module.css"
import { IconCoin } from "@tabler/icons-react"

type MusicCardProps = {
  artistName: string
  trackName: string
  image: string
  primaryGenreName: string
  trackPrice: number
}

const MusicCard = ({
  artistName,
  image,
  primaryGenreName,
  trackName,
  trackPrice,
}: MusicCardProps) => {
  return (
    <div className={classes.root}>
      <div>
        <img
          className={classes.image}
          src={image}
          alt="music"
          width={130}
          height={130}
        />
      </div>
      <div className={classes.right}>
        <div>
          <p className={classes.author}>{artistName}</p>
        </div>
        <div>
          <p className={classes.title}>{trackName}</p>
        </div>
        <div className={classes.row}>
          <div>
            <span className={classes.chip}>{primaryGenreName}</span>
          </div>
          <div className={classes.price}>
            <IconCoin />
            {trackPrice ?? "- - -"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicCard
