// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNum = () => {
    const {number} = this.state

    const num = Math.ceil(Math.random() * 100)

    this.setState({number: num})
  }

  render() {
    const {number} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="h1">Random Number</h1>
          <p className="p1">
            Generate a Random Number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.randomNum}>
            Generate
          </button>
          <p className="num">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
