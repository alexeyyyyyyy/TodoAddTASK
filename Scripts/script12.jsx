class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        }
        this.textId = React.createRef();
    }

    handleClickEdit = () => {
        this.setState({
            isEdit: true
        })
    }
    handleClickRemove = () => {
        this.props.deleteTask(this.props.index);
    }
    handleClickSave = () => {
        const taskName = this.textId.current.value;
        this.props.UpdateTask(this.props.index,taskName);
        this.setState({isEdit: false})
    }
    renderView = () => {
        return (
            <div className={'box'}>
                <div>{this.props.children}</div>
                <button onClick={this.handleClickEdit} className={'btn light'}>Edit</button>
                <button onClick={this.handleClickRemove} className={'btn red'}>Remove</button>
            </div>)
    }
    renderEdit = () => {
        return (
            <div className={'box'}>
                <textarea ref={this.textId}>New Task</textarea>
                <button onClick={this.handleClickSave} className={'btn success'}>Save</button>
            </div>
        )
    }


    render() {
        return this.state.isEdit ? this.renderEdit() : this.renderView();
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['Task1', 'Task2', 'Task3']
        }
    }

    deleteTask = index => {
        let tasks = [...this.state.tasks]
        tasks.splice(index, 1);
        this.setState({tasks: tasks})
    }
    UpdateTask = (index, content) => {
        let tasks = [...this.state.tasks]
        tasks[index] = content;
        this.setState({tasks: tasks})
    }

    addTask = () => {
      const newTask = 'Task' + (this.state.tasks.length+1);
      this.setState(prevState => ({
          tasks:[...prevState.tasks,newTask]
      }))
    }


    render() {
        return (
            <div className={'field'}>
                <button onClick={this.addTask} className={'btn new'}>Add Task</button>
                {this.state.tasks.map((t, i) => <Task key={i + 1}
                                                      index={i}
                                                                    UpdateTask={this.UpdateTask}
                                                                    deleteTask={this.deleteTask}>{t}</Task>)


            }</div>
        )
    }
}
ReactDOM.render(<TaskList/>, root)