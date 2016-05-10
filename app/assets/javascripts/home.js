var pokemonId = 6;

function setPokemonData (data) {
  
  $('.loader').hide();
  
  $('.pokemon').attr('src', data.sprites.front_default);
  $('.pokename').text(data.name);
  
  // Make sure to implement some sort of caching!!!!
}

function loadPokemonData () {
  
  $('.loader').show();
  
  $.ajax({
    url: 'http://www.pokeapi.co/api/v2/pokemon/' + pokemonId,
    success: setPokemonData,
    //add failure function
  });
}

loadPokemonData();

