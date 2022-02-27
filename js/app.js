const searchCards = () => {
    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=10`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
