export type question = {
  id: number;
  question: string;
  choices: choice[];
};

export type choice = triggerChoice | linkedChoice;

type baseChoice = {
  id: number;
  choice: string;
};

interface triggerChoice extends baseChoice {
  type: 'trigger';
  trigger_q_id: number;
}

interface linkedChoice extends baseChoice {
  type: 'link';
  url: string;
}
