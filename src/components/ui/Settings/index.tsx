import Select from '../../common/Select';
import {useContext} from 'react';
import {AgentContext} from '../../AgentProvider';
import Range from '../../common/Range';
function Settings() {
  const {state, dispatch} = useContext(AgentContext);

  return (
    <>
      <h1>Settings</h1>
      <p>Current: {state.model}</p>
      <Select
        value={state.model}
        options={[
          {label: 'GPT 3.5 (DEFAULT)', value: 'gpt-3.5-turbo-16k'},
          {label: 'GPT 4', value: 'gpt-4'},
        ]}
        onChange={(val) => dispatch({type: 'set_model', model: val})}
      />
      <Range
        label={`Max Iterations: ${state.maxIterations}`}
        value={state.maxIterations}
        onChange={(val) =>
          dispatch({type: 'set_max_iterations', maxIterations: val})
        }
      />
    </>
  );
}
export default Settings;
