import React, { createContext } from "react";
import { boxes } from "./boxes";
import Box from "./Box";

const BoxesContext = createContext()

export default function BoxesContextProvider(props) {

    const [boxesData, setBoxesData] = React.useState([])

    const toggle = (id) => {
        setBoxesData(PrevData => {
            return PrevData.map(item => {
                return item.id === id ? { ...item, on: !item.on } : item
            })
        })
        console.log(id)
    }

    React.useEffect(() => {
        setBoxesData(boxes)
    }, [])

    const boxesJsx = boxesData.map(box => (
        <Box
            key={box.id}
            box={box}
            toggle={() => toggle(box.id)}
        />
    ))

    return (
        <BoxesContext.Provider value={ {boxesJsx: boxesJsx} }>
            {props.children}
        </BoxesContext.Provider>
    )
}

export { BoxesContext }