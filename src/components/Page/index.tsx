import { PropsWithChildren } from "react"
import { useDrop } from 'react-dnd'
import { useComponentsStore } from '@/store/components'
import { useComponentsConfigStore } from '@/store/components-configs'

export const Page = (props: PropsWithChildren<{id: number}>)=> {
    const { id } = props
    const { componentsMap } = useComponentsConfigStore()
    const { addComponent } = useComponentsStore()
    // 支持放置组件
    const [collect, drop] = useDrop(()=>({
        accept: ['container', 'button'],
        drop: (item, monitor)=> {
            if(monitor.didDrop()){
                return 
            }
            console.log('item, monitor: ', item, monitor);
            // 添加组件到store中

            // 当前组件的id

            const component = componentsMap[item.type];
            addComponent(component, id)
        }
    }))

    return (
        <div className="page w-full h-full" ref={drop}>{props?.children}</div>
    )
}

