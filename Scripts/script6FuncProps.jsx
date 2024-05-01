const Student = ({ name, age }) => {
    let ageDisplay = 'Unknown';
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {ageDisplay}</h2>
        </div>
    );
};

ReactDOM.render(
    <div>
        <Student name={'Peter'} age={25}/>
        <Student name={'Mary'} age={'18'}/>
        <Student name={'Tigran'} age={39}/>
    </div>,
    root
);