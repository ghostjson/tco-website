import { question } from '@customTypes/Chat';

export function getElementById(questionList: question[], id: number): question {
  return questionList.filter((question) => question.id === id)[0];
}
