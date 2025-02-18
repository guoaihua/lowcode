import { PropsWithChildren } from "react"

export const Container = (props: PropsWithChildren)=> {
    return (
        <div className="Container border-solid border border-indigo-200 h-10">{props?.children}</div>
    )
}

