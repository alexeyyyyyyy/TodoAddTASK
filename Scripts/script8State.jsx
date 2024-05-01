class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    handleChangeCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    render() {
        const message =this.state.checked ?"checked":'unchecked';

        return (
            <div>
                <input type={"checkbox"} onClick={this.handleChangeCheck}/>
                <p>{message}</p>
            </div>
        )
    }
}


ReactDOM.render(<CheckBox/>,root);