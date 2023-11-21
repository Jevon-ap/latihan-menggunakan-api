class MyCard extends HTMLElement {
    set character(data) {
        this.innerHTML = `
        <div class="character-card">
            <img src="${data.image}" alt="${data.name}" class="character-image">
            <div class="character-info">
                <h2 class="character-name">${data.name}</h2>
                <p class="character-detail">Status: <span>${data.status}</span></p>
                <p class="character-detail">Species: <span>${data.species}</span></p>
                <p class="character-detail">Gender: <span>${data.gender}</span></p>
            </div>
        </div>`;
    }
}

customElements.define('my-card', MyCard);