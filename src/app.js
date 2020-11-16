class ManuelIncrementer extends React.Component {

    static defaultProps = {
        start: 0,
        step: 1,
        paused: true
    }

    constructor(props) {
        super(props);

        const {start, paused} = props;

        this.state = {value: start, paused}
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
        this.callPauseOrPlay()
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    increment() {
        this.setState((state, props) => ({
            value: state.value + props.step
        }))
    }


    togglePaused() {
        const {paused} = this.state

        this.state.paused = !paused
        this.forceUpdate()

        this.callPauseOrPlay.bind(this)
    }


    componentDidUpdate() {
        console.log(this.state)
    }


    callPauseOrPlay() {
        console.log('callPauseOrPlay')

        const {paused} = this.state

        if (true === paused) this.pause.bind(this)
        else this.play.bind(this)
    }


    pause() {
        console.log('pause')

        window.clearInterval(this.state.timer)

        this.setState((state, props) => ({
            timer: null,
            paused: true
        }))
    }


    play() {
        console.log('play')

        this.setState((state, props) => ({
            timer: window.setInterval(() => {
                return this.increment()
            }, 1000),
            paused: false
        }))
    }
}

ReactDOM.render(<ManuelIncrementer/>, document.querySelector("#app"))
