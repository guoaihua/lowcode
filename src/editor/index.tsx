
import { useComponentsStore } from '@/store/components'
import { useComponentsConfigStore } from '@/store/components-configs';
import React, { ReactNode } from 'react';
import { Component } from '@/types/component'


const Editor = () => {

    const { components } = useComponentsStore()
    console.log('components: ', components);
    const { componentsMap } = useComponentsConfigStore()
    const renderComponent = (components: Component[]): ReactNode[] => {
        if (components?.length <= 0 || !components) {
            return [];
        }
        return components.map(component => {
            // 从配置中获取组件
            const Component = componentsMap[component.type]
            console.log('Component: ', Component);
            return React.createElement(Component?.component, {
            key: component.id,
            id: component.id,
              ...Component?.defaultProps
          }, [...renderComponent(component.children)])
        })
    }


    return (
        <>
            {renderComponent(components)}
        </>
    )
}

export default Editor;