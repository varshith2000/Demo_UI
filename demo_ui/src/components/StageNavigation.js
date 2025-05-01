import React from 'react';
import '../styles/StageNavigation.css';


const StageNavigation = ({ step, numStages, onPrev, onNext, onFinish, disableNext, disableFinish }) => (
  <div className="stage-navigation">
    {step > 1 && <button onClick={onPrev}>Previous</button>}
    {step < numStages && <button onClick={onNext} style={{ marginLeft: 10 }} disabled={disableNext}>Next</button>}
    {step === numStages && <button style={{ marginLeft: 10 }} onClick={onFinish} disabled={disableFinish}>Finish</button>}
  </div>
);

export default StageNavigation;
