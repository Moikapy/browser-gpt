import {createContext} from 'react';
import {usePersistedReducer} from '../hooks/usePersistedReducer';
import agent_reducer from '../reducer/agent_reducer';
import agent_state from '../state/agent_state';

export const AgentContext = createContext(null);
//
export default function AgentProvider({children}:{children:JSX.Element[]}) {
  const [state, dispatch] = usePersistedReducer(
    agent_reducer,
    agent_state,
    'agent_state'
  );

  return (
    <AgentContext.Provider value={{state, dispatch}}>
      {children}
    </AgentContext.Provider>
  );
}
