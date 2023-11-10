// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)

    this.state = {isDisplay: false}
  }

  toggleDetails = () => {
    const {isDisplay} = this.state
    this.setState({isDisplay: !isDisplay})
  }

  ShowDetails = () => {
    const {faqsList} = this.props
    const {answerText} = faqsList
    return (
      <>
        <hr />
        <p className="answer">{answerText}</p>
      </>
    )
  }

  render() {
    const {faqsList} = this.props
    const {questionText} = faqsList
    const {isDisplay} = this.state
    const plus =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const minus =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const imgUrl = isDisplay ? minus : plus
    const alt = isDisplay ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="item">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="btn" onClick={this.toggleDetails}>
            <img src={imgUrl} alt={alt} />
          </button>
        </div>
        {isDisplay && <this.ShowDetails />}
      </li>
    )
  }
}

export default FaqItem
