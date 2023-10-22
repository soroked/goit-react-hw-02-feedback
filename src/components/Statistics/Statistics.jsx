import { Component } from "react";
import css from "./Statistics.module.css"

export class Statistics extends Component {

  countTotalFeedback() {
    return this.props.good + this.props.neutral + this.props.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.ceil(this.props.good / (this.props.good + this.props.neutral + this.props.bad) * 100);
  }

  render() {
    return (
      <>
        <ul className={css.statisticsList}>
          <li>
            <p className={css.statisticsText}>Good: {this.props.good}</p>
          </li>
          <li>
            <p className={css.statisticsText}>Neutral: {this.props.neutral}</p>
          </li>
          <li>
            <p className={css.statisticsText}>Bad: {this.props.bad}</p>
          </li>
          <li>
            <p className={css.statisticsText}>Total: {this.countTotalFeedback()}</p>
          </li>
          <li>
            <p className={css.statisticsText}>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </li>
        </ul>
      </>
    )
  }
}