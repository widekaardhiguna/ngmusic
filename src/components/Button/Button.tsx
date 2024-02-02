import { ComponentPropsWithoutRef } from "react"
import classes from "./Button.module.css"

type ButtonProps = ComponentPropsWithoutRef<"button">

export const Button = (props: ButtonProps) => {
  return <button className={classes.root} {...props} />
}
