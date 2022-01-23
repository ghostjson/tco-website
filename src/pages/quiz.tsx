import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { questions, results } from 'src/constants/questions';

export default function Quiz() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);

  const getResult: (score: number) => number = (score) => {
    if (score < 25) return 0;
    if (score < 45) return 1;
    else return 2;
  };

  useEffect(() => setLimit(questions.length), []);

  return (
    <div className='h-screen flex flex-col  justify-center px-10 xl:w-1/2 mx-auto'>
      {question < limit ? (
        <>
          <h6 className='text-xl font-agaramondPro'>
            Question {question + 1} of {limit}
          </h6>
          <h4 className='text-3xl mb-6 font-agaramondPro'>
            {questions[question].question}
          </h4>
          <div className='flex flex-col items-stretch xl:items-start space-y-2 font-calibri px-2'>
            {questions[question].choices.map((choice) => {
              return (
                <button
                  className='p-2 px-16 rounded-md border xl:hover:bg-slate-200 xl:hover:border-slate-500 xl:hover:scale-105 transition'
                  onClick={() => {
                    setScore((score) => score + choice.score);
                    setQuestion((question) => question + 1);
                  }}>
                  {choice.choice}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <ReactMarkdown className='flex flex-col items-start space-y-4 font-calibri text-lg'>
          {results[getResult(score)]}
        </ReactMarkdown>
      )}
    </div>
  );
}
