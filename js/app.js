const searchCards = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = parseInt(inputField.value);
    inputField.value = '';
    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchCards(data.cards))
}

const displaySearchCards = cards => {
    const cardList = document.getElementById('deck-cards');
    cards.forEach(card => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${card.image}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${card.code}</h5>
                 <h5 class="card-title">${card.suit}</h5>
                 
                   
        </div>
    `;
        cardList.appendChild(div);
    });
    console.log(cards);
}