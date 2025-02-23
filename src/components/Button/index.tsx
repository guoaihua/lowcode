import { CSSProperties, PropsWithChildren } from "react"
import { Button as AntButton } from "antd";
export const Button = (props: { id: number, styles: CSSProperties }) => {
    const { text, name, id, styles, ...resetProps } = props ?? {}
    console.log('resetProps: ', resetProps);
    return (
        <AntButton {...resetProps} style={styles} data-component-id={id} className="Button">{text ?? name}</AntButton>
    )
}

