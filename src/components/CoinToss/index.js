import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onChangeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({
        total: prev.total + 1,
        heads: prev.heads + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prev => ({
        total: prev.total + 1,
        tails: prev.tails + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, image} = this.state
    return (
      <div className="coinToss-app-container">
        <div className="card-container">
          <h1 className="title-header">Coin Toss Game</h1>
          <p className="title-sub-text">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="coin-image" />
          <button type="button" className="button" onClick={this.onChangeToss}>
            {' '}
            Toss Coin
          </button>
          <div className="result-container">
            <p className="coin-result">{`Total:${total}`}</p>
            <p className="coin-result">{`Heads:${heads}`}</p>
            <p className="coin-result">{`Tails:${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
