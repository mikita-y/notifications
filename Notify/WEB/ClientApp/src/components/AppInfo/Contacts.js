﻿import React from 'react';
import './About.css'


function Contacts() {

    return (
        <div className="about-contacts">
            <div className="contacts">
                <h2> Contacts: </h2>
                <br/>
                <img className="contacts-picture" src="data:image/png;base64,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"></img>
                <h2> Nuktinov@gmail.com</h2>
            </div>
        </div>
    )
}

export default Contacts