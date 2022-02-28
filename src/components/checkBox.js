//named as such both for what it creates and what it does as a grade
import React from "react";


class CheckBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       checked: false,
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is checked:
            <input
              name="check"
              type="checkbox"
              data-testid="check"
              checked={this.state.check}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Is also checked:
            <input
              name="alsoCheck"
              type="checkbox"
              data-testid="checkPlease"
              checked={this.state.alsoCheck}
              onChange={this.handleInputChange} />
          </label>
          <br />
        </form>
      );
    }
  }

  export default CheckBox;