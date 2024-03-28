import PropTypes from "prop-types"

function Navbar ({pokemonList, pokemonIndex, setPokemonIndex, prevButton, plusButton}) {

    const handlePokemonClick = (index) => {
        setPokemonIndex(index);
      };

    return (
        <div>
            
                {pokemonList.map((pokemon, index) =>  (
                    <button key = {index} onClick={() => handlePokemonClick(index)}>
                        {pokemon.name}
                    </button>
                ))}
            

        </div>
       
        
    );

}

Navbar.propTypes = {
        plusButton : PropTypes.func.isRequired,
        prevButton : PropTypes.func.isRequired,
        pokemonList: PropTypes.array.isRequired,
        pokemonIndex: PropTypes.number.isRequired,
        setPokemonIndex: PropTypes.func.isRequired,
    
    }


export default Navbar