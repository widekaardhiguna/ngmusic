import { ComponentPropsWithoutRef } from "react"
import classes from "./ScreenWrapper.module.css"

type ScreenWrapper = ComponentPropsWithoutRef<"div">

export const ScreenWrapper = ({ children, ...props }: ScreenWrapper) => {
  return (
    <div className={classes.root} {...props}>
      <div className={classes.child}>{children}</div>
    </div>
  )
}
