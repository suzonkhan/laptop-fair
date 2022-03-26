import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='question-answer-wrapper'>
            <h2>Question Answer</h2>

            <div>
                <h3>Question: How react work?</h3>
                <p>Answer: React is a very popular JavaScript library. For best performance and fast render react maintains a tree (virtual DOM)  under the hood. When we change/add new element into react application then react create another virtual DOM with changes/added elements. After creat new  virtual DOM, react compaire both virtual DOM and finally inset/add new element into react application.  </p>
            </div>
            <div>
                <h3>Question: Difference between props and state?</h3>
                <p>Answer: </p>
                <h4>1. Mutable</h4>
                <p>State: State is mutable </p>
                <p>Props: Props are Immutable</p>
                <h4>2. Use Case</h4>
                <p>State: Used within the component. </p>
                <p>Props: Used to passed data from parent to child component.</p>
                <h4>3. Initialize</h4>
                <p>State: Can set default values inside component and can be changed inside component</p>
                <p>Props: Used to passed data from parent to child component. and can't  change data inside child component</p>
            </div>
            <div>
                <h3>Question: how useState works?</h3>
                <p>Answer: useState is a Hook that allows us to set variables into a components. useState used to create an interaction from user to application. State receive initial value as parameter. useState() return two value, first one is initial value and second one is a method to update its data.</p>
            </div>
        </div>
    );
};

export default QuestionAnswer;