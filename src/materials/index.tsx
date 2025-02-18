import { useComponentsStore } from '@/sotre/components'
import { useComponentsConfigStore } from "@/store/components-configs";
import { keys  } from "lodash-es";
import React, { useMemo } from 'react';
import MaterialItem from "./materialItem";

const Materials = ()=> {
    const { componentsMap } = useComponentsConfigStore()

    const materials = useMemo(() => {
        return keys(componentsMap)
    }, [componentsMap])

    console.log('materials: ', materials);

    return (
        <div className='flex gap-2 flex-wrap mt-2.5'>
            {
                materials?.map((key)=> {
                    const component = componentsMap[key]
                    return <MaterialItem component={component}/>
                })
            }
        </div>
    )
}

export default Materials;