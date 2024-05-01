class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            isEdit: false
        }
    }

    handleClickEdit = () => {
        this.setState({
            isEdit: true
        })
    }
    handleClickRemove = () => {
        alert(`Pressed remove ${this.props.children}`);
    }
    handleClickSave = () => {
        this.setState ({isEdit:false})
    }
    renderView = () => {
        return (
            <div className={'box'}>
                <div>{this.props.children}</div>
                <button onClick={this.handleClickEdit} className={'btn light'}>Edit</button>
                <button onClick={this.handleClickRemove} className={'btn red'}>Remove</button>
            </div>)
    }
    renderEdit = () =>{
        return(
            <div className={'box'}>
                <textarea>New Task</textarea>
                <button onClick={this.handleClickSave}>Save</button>
            </div>
        )
    }
    render() {
      return this.state.isEdit ? this.renderEdit():this.renderView();
    }
}

ReactDOM.render(<div className={'field'}>
    <Task>Task1</Task>
    <Task>Task2</Task>
    <Task>Task3</Task>
</div>, root)