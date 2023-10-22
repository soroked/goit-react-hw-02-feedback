import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  // ?? 1. Вішати слухача на кожну кнопку чи на ul в FeedbackOptions ??
  // ?? 2. перевірка на хоч один фідбек. перевірка на тотал не проходить бо він вираховкється в компоненті Statistics
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    if (e.target.nodeName !== 'BUTTON') return;

    const option = e.target.innerHTML.toLowerCase();
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          paddingLeft: 40,
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
