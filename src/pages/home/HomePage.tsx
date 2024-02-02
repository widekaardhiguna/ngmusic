import { useState } from "react"
import appLogoSVG from "../../assets/logo.svg"
import { TextField } from "../../components/TextField/Textfield"
import { Button } from "../../components/Button"
import classes from "./HomePage.module.css"
import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()

  const [term, setTerm] = useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  const onSearch = () => {
    navigate(`result?term=${term}`)
  }

  return (
    <div className={classes.root}>
      <div className={classes.logoWrapper}>
        <img src={appLogoSVG} alt="ngmusic logo" />
      </div>
      <form className={classes.stack} onSubmit={onSearch}>
        <TextField placeholder="Artist / Album / Title" onChange={onChange} />
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}

export default HomePage
