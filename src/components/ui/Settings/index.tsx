import Select from '../../common/Select';
import {useContext} from 'react';
import {AgentContext} from '../../AgentProvider';
function Settings() {
  const {state, dispatch} = useContext(AgentContext);

  return (
    <>
      <h1>Settings</h1>
      <p>Current: {state.model}</p>
      <Select
        value={state.model}
        options={[
          {label: 'GPT 3.5', value: 'gpt-3.5-turbo-16k'},
          {label: 'GPT 4', value: 'gpt-4-0614'},
        ]}
        onChange={(val) => dispatch({type: 'set_model', model: val})}
      />
    </>
  );
}
export default Settings;
