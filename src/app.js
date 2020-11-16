class ManuelIncrementer extends React.Component {

    static defaultProps = {
        start: 0,
        step: 1,
        paused: false
    }

    constructor(props) {
        super(props);

        const {start,paused} = props;

        this.state = { value: start, paused }

        this.timer = null
    }

    render() {
        const {start} = this.props
        const {value, paused} = this.state
        return (
            <div>
                <p>Début : {start}</p>
                <p>Valeur actuelle : {value}</p>
                <button onClick={this.pause.bind(this)}>{paused ? "Reprendre" : "Pause"}</button>
            </div>
        )
    }

    componentDidMount() {
        this.timer = window.setInterval(() => {
            return this.increment()
        }, 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    increment() {
        const {paused} = this.state

        if (true === paused) return

        this.setState((state,props) => ({
            value: state.value + props.step
        }))
    }

    pause() {
        this.setState((state,props) => ({
            paused: !state.paused
        }))
    }
}

ReactDOM.render(<ManuelIncrementer/>, document.querySelector("#app"))
