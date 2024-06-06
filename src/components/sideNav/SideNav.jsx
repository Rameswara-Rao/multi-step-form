import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import "./SideNavStyle.css";

const SideNav = () => {
  const { step } = useContext(FormContext);
  const steps = [
    { number: 1, label: "YOUR INFO" },
    { number: 2, label: "SELECT PLAN" },
    { number: 3, label: "ADD-ONS" },
    { number: 4, label: "SUMMARY" },
  ];

  return (
    <div className="sidenav-bg">
      <ul className="list py-5">
        {steps.map((s) => (
          <li className="py-3" key={s.number}>
            <div className="d-flex align-items-center">
              <div
                className={`numberCircle me-4 ${
                  s.number === step ? "active" : ""
                }`}
              >
                {s.number}
              </div>

              <div className="ml-3 d-none d-sm-block">
                <div className="step">STEP {s.number}</div>
                <div className="header-name">{s.label}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SideNav);
