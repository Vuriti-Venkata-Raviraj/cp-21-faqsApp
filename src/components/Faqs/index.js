// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="title">FAQs</h1>
          <ul>
            {faqsList.map(item => (
              <FaqItem faqsList={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
