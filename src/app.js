const render = function () {

    const Welcome = ({name,children}) => {
        return (
            <div>
                <h1>Bonjour {name}</h1>
                <p>{children}</p>
            </div>
        )
    }

    const App = () => (
        <div>
            <Welcome name="John">Bonjour !</Welcome>
            <Welcome name="Emmanuelle"></Welcome>
        </div>
    )

    ReactDOM.render(<App />, document.querySelector('#app'))
}

render()
