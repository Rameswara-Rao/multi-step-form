import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const SideNav = () => {
  const { step, setStep } = useContext(FormContext);
  const steps = [
    { number: 1, label: 'YOUR INFO' },
    { number: 2, label: 'SELECT PLAN' },
    { number: 3, label: 'ADD-ONS' },
    { number: 4, label: 'SUMMARY' },
  ];
  console.log(step)

  return (
    <ul>
      {steps.map(s => (
        <li key={s.number} onClick={()=>setStep(s.number)}>
          <div className="d-flex align-items-center">
            <div className={`circle ${s.number === step ? 'circle-active' : ''}`}>
              {s.number}
            </div>
            <div className="ml-3">
              <div>STEP {s.number}</div>
              <div className="small">{s.label}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SideNav;
