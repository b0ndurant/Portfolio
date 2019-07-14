import React from 'react';

const NotFound = () => {
    const style = {
        textAlign: "center",
        padding: "15rem",
    }
    return (
        <div className="notFound">
            <h1 style={style}>404<br />Désolé page introuvable</h1>
        </div>
    )
}

export default NotFound;