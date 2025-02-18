import { PropsWithChildren } from "react"

export const Button = (props: PropsWithChildren)=> {
    return (
        <div className="Button">{props?.children}</div>
    )
}

