import classes from "./_Nav.module.css"
import { IconSearch, IconMenu2 } from "@tabler/icons-react"
import SearchDialog from "./_SearchDialog"
import { useState } from "react"

type NavProps = {
  onSearch: (val: string) => void
}

const Nav = ({ onSearch }: NavProps) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen((prev) => !prev)
  }
  const onClose = () => {
    setOpen(false)
  }

  const _onSearch = (val: string) => {
    onSearch(val)
    onClose()
  }

  return (
    <nav className={classes.root}>
      <div className={classes.grid}>
        <div>
          <IconMenu2 />
        </div>
        <h1 className={classes.title}>ngmusic</h1>
        <div>
          <IconSearch className={classes.searchIcon} onClick={onOpen} />
          <SearchDialog open={open} onClose={onClose} onSearch={_onSearch} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
