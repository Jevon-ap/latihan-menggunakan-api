async function getChar() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

export { getChar };