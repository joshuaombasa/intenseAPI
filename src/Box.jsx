import React from "react";


export default function Box({box, toggle}) {

    const styles = {
        backgroundColor: box.on ? "black" : "transparent"
    }

    return (
        <div 
           style={styles} 
           className="box"
           onClick={toggle}
        >{box.id}
        </div>
    )
}