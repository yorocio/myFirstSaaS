import React from 'react'
import FaqListItems from './FaqListItems'

const FaqSection = () => {
    return (
        <div className="font-sans divide-y rounded-lg max-w-4xl mx-auto px-4">
            <div className="my-10">
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            {[
                {
                    question: "Question 1",
                    answer: "Answer 1"
                },
                {
                    question: "Question 2",
                    answer: "Answer 2"
                },
                {
                    question: "Question 3",
                    answer: "Answer 3"
                },
                {
                    question: "Question 4",
                    answer: "Answer 4"
                }
            ].map((qa) => (
                <FaqListItems key={qa.question} qa={qa} />
            ))}

        </div>
    )
}

export default FaqSection