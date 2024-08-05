import { useContext } from 'react'
import { dataContext } from './GetData'
import {datas} from './GetData'

const ChildComp = () => {
    const data: datas[] = useContext(dataContext)
    return (
        <div>
            <hr />
            <strong>{`Data coming from GetData Component is: `}</strong><br />
            {
                data.map((el) => {
                    return (
                        <>
                            <strong>{el.name}</strong><br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default ChildComp
