class Task extends  React.Component{

    constructor(props) {
        super(props);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }
handleCliclkEdit = () => {
        alert(`Pressed edit ${this.props.children}`);
}
handleClickRemove = function () {
        alert(`Pressed remove ${this.props.children}`);
}
render(){
    return(
        <div className={'box'}>
            <div>{this.props.children}</div>
            <button onClick={this.handleCliclkEdit} className={'btn light'}>Edit</button>
            <button onClick={this.handleClickRemove} className={'btn red'}>Remove</button>
        </div>
    )
}
}

ReactDOM.render(<div className={'field'}>
    <Task>Task1</Task>
    <Task>Task2</Task>
    <Task>Task3</Task>
</div>,root)