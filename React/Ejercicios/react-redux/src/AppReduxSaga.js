import './App.css';
import LoginUseReducer from './components/LoginUseReducer';
import LoginUseState from './components/LoginUseState';
import LognFormContainer from './components/containers/lognFormContainer';
import Counter from './components/counter';

function AppReduxSaga() {
  return (
    <div className="App">
  {/*    <LognFormContainer></LognFormContainer> */}
    {/** <Counter></Counter> */}
     <LoginUseReducer></LoginUseReducer>
    </div>
  );
}

export default AppReduxSaga;
