class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date
        }
        this.timer = null
    }

    render() {
        const {date} = this.state
        return (
            <p>Il est {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
        )
    }

    tick() {
        this.setState({
            date: new Date
        })
    }

    componentDidMount() {
        this.timer = window.setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }
}

ReactDOM.render(<Clock/>, document.querySelector("#app"))
