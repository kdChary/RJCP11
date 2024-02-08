import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onClickEmoji = () => {
    this.setState(prevState => ({isFeedbackGiven: !prevState.isFeedbackGiven}))
  }

  render() {
    const {isFeedbackGiven} = this.state
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    // console.log(emojis, loveEmojiUrl)

    return (
      <>
        <div className="main-container">
          {!isFeedbackGiven ? (
            <div className="feedback-card">
              <h1 className="feedback-question">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emoji-list">
                {emojis.map(emoji => (
                  <li className="emoji-item" key={emoji.id}>
                    <button
                      className="emoji-btn"
                      type="button"
                      onClick={this.onClickEmoji}
                    >
                      <img
                        src={emoji.imageUrl}
                        alt={emoji.name}
                        className="emoji"
                      />
                      <p className="emoji-name">{emoji.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="feedback-card">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1 className="thanks">Thank You!</h1>
              <p className="statement">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </>
    )
  }
}
export default Feedback
