"use strict";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const ExpansionButton = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            Siirrä valitut tiedostot säilytykseen <FontAwesomeIcon icon="file-export"/>
        </Button>
    );
};

export default ExpansionButton;