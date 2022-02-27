const cardList = document.getElementById('deck-cards');
const searchCards = () => {
    const inputField = document.getElementById('input-field');
    const error = document.getElementById('error');
    const inputValue = parseInt(inputField.value);
    inputField.value = '';
    error.textContent = '';
    if (isNaN(inputValue)) {
        error.innerText = 'Please give a number';
    }
    else if (inputValue <= 0) {
        error.innerText = 'Please give a positive number'
    }
    else {
        const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchCards(data.cards))
    }

}

const displaySearchCards = cards => {
    cards.forEach(card => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${card.image}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${card.code}</h5>
                 <h5 class="card-title">${card.suit}</h5>
                 <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>                                
        </div>
    `;
        cardList.appendChild(div);
    });
    console.log(cards);
}

const cardDetails = code => {
    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=52`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const showDetails = allCards.find(card => card.code === code)

            const div = document.createElement('div');
            div.classList.add('col');
            cardList.textContent = '';
            div.innerHTML = `
            <div class="card h-100">
                <img src="${showDetails.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${showDetails.code}</h5>
                     <h5 class="card-title">${showDetails.suit}</h5>
                     <h5 class="card-title">${showDetails.value}</h5>
                     <button onclick="cardDetails('${showDetails.code}')" class="btn btn-primary">See Details</button>                                    
            </div>
        `;
            cardList.appendChild(div);
        })
}