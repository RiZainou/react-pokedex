import PropTypes from "prop-types"

function Navbar ({pokemonList, pokemonIndex, prevButton, plusButton}) {
    return (
        <>
        <p>
        {pokemonIndex > 0 ? <button onClick={prevButton}>Précédent</button>  : null } 
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={plusButton}>Suivant</button> : null}
        </p>
       
      
        </>
        
    )

}

Navbar.propTypes = {
        plusButton : PropTypes.func.isRequired,
        prevButton : PropTypes.func.isRequired,
        pokemonList: PropTypes.array.isRequired,
        pokemonIndex: PropTypes.number.isRequired
    
    }


export default Navbar