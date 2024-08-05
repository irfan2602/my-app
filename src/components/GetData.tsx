import React, { createContext, useState } from 'react'
import ChildComp from './ChildComp'
export const dataContext = createContext([])

export interface datas {
    name: string,
    isActive: boolean
}

const data: datas[] = [
    {
        name: 'irfan',
        isActive: true
    },
    {
        name: 'irfan1',
        isActive: false
    },
    {
        name: 'irfan2',
        isActive: true
    },
    {
        name: 'irfan3',
        isActive: false
    }
]

const GetData = () => {

    const newData = data.filter(el=> el.isActive === true)

    return (
        <div>
            {
                
                newData && newData.map((data:any, i) => {
                    
                    return (
                        <>
                            <strong key={i}> {data.name} </strong><br />

                        </>
                    )
                })
            }
            <dataContext.Provider value={newData as any} >
                <ChildComp />
            </dataContext.Provider>

        </div>
    )
}

export default GetData
