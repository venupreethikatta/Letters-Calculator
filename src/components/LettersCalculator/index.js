// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange = e => {
    this.setState({count: e.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card">
          <div className="text-container">
            <h1>Calculate the Letters you Enter</h1>
            <div>
              <label htmlFor="letter">Enter the phrase</label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="typing"
                onChange={this.onChange}
              />
            </div>
            <br />
            <p className="button" type="button">
              No.of letters: {count.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
