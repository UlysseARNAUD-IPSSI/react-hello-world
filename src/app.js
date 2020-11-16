class ManuelIncrementer extends React.Component {

    static defaultProps = {
        start: 0,
        step: 1,
        paused: false
    }

    
    constructor(props) {
        super(props);

        const {start, paused} = props;

        this.state = {value: start, paused, timer: null}

        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
    }


    render() {
        const {start} = this.props
        const {value, paused} = this.state

        return (
            <div>
                <p>Début : {start}</p>
                <p>Valeur actuelle : {value}</p>
                <button role="button" onClick={this.togglePaused.bind(this)}>{paused ? "Reprendre" : "Pause"}</button>
            </div>
        )
    }


    componentDidMount() {
        const {paused} = this.state

        if (true === paused) return this.pause()
        else return this.play()
    }


    componentWillUnmount() {
        this.pause()
    }


    componentDidUpdate() {}


    increment() {
        this.setState((state, props) => ({
            value: state.value + props.step
        }))
    }


    togglePaused() {
        const {paused} = this.state

        if (false === paused) return this.pause()
        else return this.play()
    }


    pause() {
        window.clearInterval(this.state.timer)

        this.setState((state, props) => ({
            paused: true,
            timer: null
        }))
    }


    play() {
        this.setState((state, props) => ({
            paused: false,
            timer: window.setInterval(() => { this.increment() }, 1000)
        }))
    }
}

ReactDOM.render(<ManuelIncrementer/>, document.querySelector("#app"))
