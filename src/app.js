class Incrementer extends React.Component {

    constructor(props) {
        super(props);

        const {start} = props;

        this.state = { start, value: start }

        this.timer = null
    }

    render() {
        const {start, value} = this.state
        return (
            <div>
                <p>Début : {start}</p>
                <p>Valeur actuelle : {value}</p>
            </div>
        )
    }

    componentDidMount() {
        this.timer = window.setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.state.value++
        this.setState(this.state)
    }
}

ReactDOM.render(<Incrementer start={10} />, document.querySelector("#app"))
