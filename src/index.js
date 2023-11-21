import './component/myCharCard.js'
import './component/myHeader'
import { getChar } from './api/RickAndMortyAPI.js'

async function displayCharacters() {
    const characters = await getChar();
    const container = document.querySelector('.cards-container');
    characters.forEach(character => {
        const card = document.createElement('my-card');
        card.character = character;
        container.appendChild(card);
    });
}

displayCharacters()