import * as Dialog from "@radix-ui/react-dialog"
import classes from "./_SearchDialog.module.css"
import { IconX } from "@tabler/icons-react"
import { TextField } from "../../components/TextField/Textfield"
import { Button } from "../../components/Button"
import { useState } from "react"

type SearchDialogProps = {
  open: boolean
  onSearch: (val: string) => void
  onClose: () => void
}

const SearchDialog = ({ onSearch, open, onClose }: SearchDialogProps) => {
  const [search, setSearch] = useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    onSearch(search)
  }

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.dialogOverlay} />
        <Dialog.Content className={classes.dialogContent}>
          <form className={classes.form} onSubmit={onSubmit}>
            <h2 className={classes.title}>Search</h2>
            <TextField
              placeholder="Artist / Album / Title"
              onChange={onChange}
            />
            <Button type="submit">Search</Button>
          </form>
          <Dialog.Close asChild>
            <button
              className={classes.closeButton}
              aria-label="close"
              onClick={onClose}
            >
              <IconX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SearchDialog
