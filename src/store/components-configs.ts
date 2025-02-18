
import { create } from 'zustand'
import { Page, Container, Button } from '@/components'
type State = {
    componentsMap: Record<string, any>
}

/**
 * 存储物料库注册的组件map
 */
export const useComponentsConfigStore = create<State>(()=> ({
    componentsMap: {
        page: {
            name: 'page 页面',
            type: 'page',
            component: Page,
            defaultProps: {
                className: 'test'
            }
        },
       container: {
         name: 'container 容器',
         type: 'container',
         component: Container,
         defaultProps: {
            class: 'test'
         }
       },
        button: {
            name: 'button 按钮',
            type: 'button',
            component: Button,
            defaultProps: {
                class: 'test'
            }
        }
    }
}))