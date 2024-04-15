document.addEventListener('DOMContentLoaded', function() {
    const pokedexContainer = document.getElementById('pokedex-container');

    function fetchPokemons() {
        for (let i = 1; i <= 100; i++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                .then(response => response.json())
                .then(data => createPokemonCard(data));
        }
    }

    function createPokemonCard(pokemon) {
        const card = document.createElement('div');
        card.classList.add('card', pokemon.types[0].type.name);

        const img = document.createElement('img');
        img.setAttribute('src', pokemon.sprites.front_default);

        const name = document.createElement('h3');
        name.textContent = pokemon.name;

        card.appendChild(img);
        card.appendChild(name);
        pokedexContainer.appendChild(card);
    }

    fetchPokemons();
});