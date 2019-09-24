import React, { Component } from 'react';
import './App.css';
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Employee Details Application',
      act: 0,
      index: '',
      employeeData: []
    }
  }

  SubmitFunction = (e) =>{
    e.preventDefault();
    let name = this.state.data;
  }
    componentDidMount(){
    this.refs.name.focus();
  }
  SubmitFunction = (e) =>{
    e.preventDefault();
    let edata = this.state.employeeData;
    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let phone = this.refs.phone.value;
    let address = this.refs.address.value;

    // if(isNaN(age)){
    //  window.alert(age + " AGE is not a number ");
    // }

    if (this.state.act === 0) { //new
      let data = {
        name, age,phone,address
      }
  
      edata.push(data); 
    } else {                    //update
      let index = this.state.index;
      edata[index].name = name;
      edata[index].age = age;
      edata[index].phone = phone;
      edata[index].address = address;
    }

    this.setState({
      employeeData: edata
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  Remove = (i) => {
    let edata  = this.state.employeeData;
    edata.splice(i,1);
    this.setState({
      employeeData:edata
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  
  Edit = (i) => {
    let data = this.state.employeeData[i];
    this.refs.name.value = data.name;
    this.refs.age.value = data.age;
    this.refs.phone.value = data.phone;
    this.refs.address.value = data.address;
    

    this.setState({
      act: 1,
      index: i 
    })

    this.refs.name.focus();
  }
  
  render() {
    let edata = this.state.employeeData;
    // const { showing } = this.state;
    return (
      <div className="App-header ">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="App-Details">
         Employee Name: <input type="text"  ref="name" placeholder="Employee Name" className="App-Fields" />
         Age: <input type="text" ref="age" placeholder="Age " className="App-Fields" />
         Phone Number:<input type="text" ref="phone" placeholder="PhoneNumber" className="App-Fields" />
         Address:<input type="text" ref="address" placeholder="Employee Details " className="App-Fields" />
         <button onClick={(e)=>this.SubmitFunction(e)} className="myButton">Submit</button>
          </form>
        
        <pre className ="App-body">          
          {edata.map((data, i) =>
            <li key={i} >
              {i+1} {data.name},{data.age},{data.phone}, {data.address } {" "}
              
              <button onClick={()=>this.Remove(i)} className="App-Remove">Remove</button>
              <button onClick={()=>this.Edit(i)} className="App-Edit">Edit</button>
            </li>
          )}
            </pre>

      </div>
    
    );
  }
}

export default App;