interface agent_state_type {
  active_tab: string;
  messages: any[];
  user_input: string;
  total_tokens_used: number;
  completion_tokens_used: number;
  prompt_tokens_used: number;
  tokens_used: number;
  model: string;
}

const agent_state = {
  active_tab: '',
  messages: [],
  user_input: '',
  total_tokens_used: 0,
  completion_tokens_used: 0,
  prompt_tokens_used: 0,
  tokens_used: 0,
  model: 'gpt-3.5-turbo-0613',
} as agent_state_type;

export default agent_state;
export type {agent_state_type};
