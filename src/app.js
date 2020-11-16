class Formulaire extends React.Component {

    state = {
        nom: undefined,
        prenom: undefined,
        estAbonne: false
    }

    constructor(props) {
        super(props)

        this.handleChangeNom = this.handleChangeNom.bind(this)
        this.handleChangePrenom = this.handleChangePrenom.bind(this)
        this.handleClickEstAbonne = this.handleClickEstAbonne.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleChangeNom (event) {
        this.setState({
            nom: event.target.value
        })
    }


    handleChangePrenom (event) {
        this.setState({
            prenom: event.target.value
        })
    }


    handleClickEstAbonne (event) {
        this.setState({
            estAbonne: event.target.checked
        })
    }


    handleSubmit (event) {
        event.preventDefault()
        console.log('Formulaire soumis !', {state: this.state})
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" placeholder="Jean" onChange={this.handleChangeNom}/>
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" id="prenom" name="prenom" placeholder="Dupont" onChange={this.handleChangePrenom}/>
                </div>
                <div className="form-group">
                    <label htmlFor="estAbonne">S'inscrire à la newletter ?</label>
                    <input type="checkbox" name="estAbonne" id="estAbonne" onClick={this.handleClickEstAbonne} />
                </div>
                <button type="submit">Soumettre le formulaire</button>
            </form>
        )
    }


    componentDidMount() {}


    componentWillUnmount() {}


    componentDidUpdate() {}


}


ReactDOM.render(<Formulaire/>, document.querySelector("#app"))
