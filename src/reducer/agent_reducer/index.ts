export default function agent_reducer(state, action) {
  switch (action.type) {
    case 'active_tab':
      return {...state, active_tab: action.active_tab};
    case 'new_message':
      return {...state, messages: [...state.messages, action.message]};
    case 'user_input':
      return {...state, user_input: action.user_input};
    case 'total_tokens_used':
      return {...state, tokens_used: state.tokens_used + action.tokens_used};
    case 'completion_tokens_used':
      return {
        ...state,
        completion_tokens_used: action.completion_tokens_used,
      };
    case 'prompt_tokens_used':
      return {...state, prompt_tokens_used: action.prompt_tokens_used};
    case 'tokens_used':
      return {...state, tokens_used: action.tokens_used};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
