import { create } from 'zustand'
import { Component } from '@/types/component'
import { createId } from '@/libs/uid'
import {  pick } from 'lodash-es'

type State = {
    components: Component[]
}

type Actions = {
    addComponent: (newComponents: any, parentId: number) => void
}

/**
 * 当前实际添加的components
 */
export const useComponentsStore = create<State&Actions>((set, get) => ({
    components: [
        {
            type: 'page',
            name: 'page',
            id: createId(),
            children:[]
        }
    ],
    addComponent: (newComponent, parentId) => {
        const components = get()?.components
        const parent = getElementById(components, parentId)
        const obj = pick(newComponent, ['type', 'name', 'defaultProps', 'children'])
        if(parent){
            if(parent.children){
                parent.children.push({ ...obj, id: createId()})
            }else {
                parent.children = [{...obj, id: createId()}]
            }
            set({ components: [...components] })
        }else {
            set({ components: [...components, { ...obj, id: createId() }] })
        }
    }
}))


// 根据Id查找元素
const getElementById = (components: Component[], id: number): Component=> {
    if(!components){
        return {} as Component
    }
    for(const component of components){
        if(component.id === id){
            return component
        }
        const result = getElementById(component.children, id)
        if(result){
            return result
        }
    }

    return {} as Component
}
