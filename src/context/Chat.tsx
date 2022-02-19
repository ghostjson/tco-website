import React, { createContext, useReducer } from 'react';

import { question } from '@customTypes/Chat';

type initialStateT = {
  active_q: number;
  questions: question[];
};

type ChatContextT = {
  state: initialStateT;
  dispatch: React.Dispatch<{
    type: string;
    payload: number;
  }>;
};

const initialState: initialStateT = {
  active_q: 1,
  questions: [
    {
      id: 1,
      question: 'Hello, How may I help you?',
      choices: {
        intro: 'I want to:',
        choices: [
          {
            id: 0,
            choice: 'View your Portfolio',
            type: 'action',
            action: () => {},
          },
          { id: 1, choice: 'Engage Service', type: 'trigger', trigger_q_id: 2 },
          {
            id: 2,
            choice: 'Browse this site',
            type: 'trigger',
            trigger_q_id: 3,
          },
        ],
      },
    },
    {
      id: 2,
      question:
        'We will be most happy to provide you with the necessary service. What service are you interested in? You can also contact us directly',
      choices: {
        intro: `I'm interested in:`,
        choices: [
          { id: 1, choice: 'Web', type: 'link', url: '/services/web' },
          {
            id: 2,
            choice: 'Branding',
            type: 'link',
            url: '/services/branding',
          },
          {
            id: 3,
            choice: 'Marketing',
            type: 'link',
            url: '/services/marketing',
          },
          {
            id: 4,
            choice: 'Email',
            type: 'link',
            url: 'mailto:sample@email.com',
          },
        ],
      },
    },
    {
      id: 3,
      question: 'What would you like to see?',
      choices: {
        intro: 'I want to find out more about your:',
        choices: [
          {
            id: 1,
            choice: 'Services',
            type: 'link',
            url: '/services',
          },
          {
            id: 2,
            choice: 'Resources',
            type: 'link',
            url: '/resource',
          },
        ],
      },
    },
  ],
};

// chat context
export const ChatContext = createContext<ChatContextT>({} as ChatContextT);

// chat reducer
const ChatReducer = (
  state: initialStateT = initialState,
  action: { type: string; payload: number }
): initialStateT => {
  if (action.type === UPDATE_ACTIVE_QUESTION) {
    return { ...state, active_q: action.payload };
  }
  return state;
};

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ChatReducer, initialState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;

export const UPDATE_ACTIVE_QUESTION = 'UPDATE_ACTIVE_QUESTION';
