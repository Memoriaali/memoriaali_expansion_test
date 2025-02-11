
const ExpansionButton = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            Siirrä valitut tiedostot säilytykseen <FontAwesomeIcon icon="file-export"/>
        </Button>
    );
};

export default ExpansionButton;