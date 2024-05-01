class Student extends  React.Component {
    render(){
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Age:{this.props.age}</h2>
            </div>
        )
    }
}
ReactDOM.render(<div>
    <Student name={'Peter'} age={25}/>
    <Student name={'Mary'} age={18}/>
    <Student name={'Tigran'} age={39}/>

</div>,root);