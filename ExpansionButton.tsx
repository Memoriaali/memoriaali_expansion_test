import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

interface ExpansionButtonProps {
    onClick: () => void;
}

const ExpansionButton: React.FC<ExpansionButtonProps> = ({ onClick }) => {
return (
    <Button onClick={onClick}>
        Siirrä valitut tiedostot säilytykseen <FontAwesomeIcon icon="file-export"/>
    </Button>
);
};

export default ExpansionButton;