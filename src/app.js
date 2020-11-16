function fonctionPrincipale() {
    console.log({resultatBabel: fonctionPrincipale.toLocaleString()});

    let n = 0;

    const render = function () {
        const pokemons = [
            'Bulbizarre',
            'Salamèche',
            'Carapuce'
        ]
        const title = <div>
            <h1 className="title" id="title">
                Bonjour tout le monde&nbsp;
                <span>{n}</span>
            </h1>
            <ul>
                {pokemons.map(pokemon => <li>{pokemon}</li>)}
            </ul>
        </div>

        ReactDOM.render(title, document.querySelector('#app'))
    }

    render()

    window.setInterval(function () {
        n++
        render()
    }, 1000)
}

fonctionPrincipale();
