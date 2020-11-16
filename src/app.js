class Incrementer extends React.Component {

    static defaultProps = {
        start: 0,
        step: 1
    }

    constructor(props) {
        super(props);

        const {start, step} = props;

        this.state = { value: start }

        this.timer = null
    }

    render() {
        const {start} = this.props
        const {value} = this.state
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
        this.setState((state,props) => ({
            value: state.value + props.step
        }))
    }
}

ReactDOM.render(<Incrementer/>, document.querySelector("#app"))
