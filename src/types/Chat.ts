export type question = {
  id: number;
  question: string;
  choices: {
    intro: string;
    choices: choice[];
  };
};

export type choice = triggerChoice | linkedChoice | actionChoice;

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

interface actionChoice extends baseChoice {
  type: 'action';
  action: () => void;
}
