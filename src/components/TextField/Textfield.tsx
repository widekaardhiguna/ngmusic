import { ComponentPropsWithoutRef } from "react"
import classes from "./TextField.module.css"

type TextFieldProps = ComponentPropsWithoutRef<"input">

export const TextField = ({ ...props }: TextFieldProps) => {
  return <input className={classes.root} {...props} />
}
