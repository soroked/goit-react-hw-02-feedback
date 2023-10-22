import { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <ul className={css.feedbackList} onClick={this.props.onLeaveFeedback}>
          {this.props.options.map(option => (
            <li key={option}>
              <button>{option}</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
