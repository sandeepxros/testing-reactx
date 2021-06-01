import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
  }
  formHander = e => e.preventDefault();
  render() {
    return (
      <>
        <h1>Fill This Form To Register</h1>
        <div>
          <label>First Name : </label>
          <input type="text" required style={style} />
          <br />
          <br />
          <label>Middle Name : </label>
          <input type="text" style={style} />
          <br />
          <br />
          <label>Last Name : </label>
          <input type="text" required style={style} />
        </div>
        <br />
        <br />
        <div>
          <label>Mobile No : </label>
          <input type="tel" required style={style} />
        </div>
        <br />
        <br />
        <div>
          <label>Email : </label>
          <input type="email" required style={style} />
        </div>
        <br />
        <br />
        <div>
          <label>Adhar Card No : </label>
          <input type="text" required style={style} />
        </div>
        <br />
        <br />
        <div>
          <label>Driving Licence No : </label>
          <input type="text" required style={style} />
        </div>
        <button type="submit" onSubmit={this.formHander}>
          Submit
        </button>
      </>
    );
  }
}

const style = {
  marginLeft: '10px'
};
