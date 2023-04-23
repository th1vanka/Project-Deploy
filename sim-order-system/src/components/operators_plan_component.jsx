import React from "react";
import "../css/operators_plan_component.css";
import Operator from "./operator/operator";
import Plan from "./service_plan/plan";

function OperatorsAndPlans() {
  return (
    <div>
      <div className="operators-group-main-container">
        <div className="operators-group-title-wrapper">
          <label className="operators-group-title">
            <span className="operators-group-title-special">Choose by </span>
            Operator
          </label>
        </div>
        <div className="operators-group-wrapper">
          <Operator />
          <Operator />
          <Operator />
          <Operator />
          <Operator />
        </div>
      </div>
      <div className="plans-group-main-container">
        <div className="plans-group-title-wrapper">
          <label className="plans-group-title">
            <span className="plans-group-title-special">10digi's </span>
            Popular Plans
          </label>
          <div className="plans-group-sub-title-wrapper">
            <label className="plans-group-sub-title-01">
              Get mobile numbers from our premium section!
            </label>
            <label className="plans-group-sub-title-02">
              Showing New Connection Plans for{" "}
              <span className="plans-group-sub-title-special"> Mumbai</span>
            </label>
          </div>
        </div>
        <div className="plans-group-wrapper">
          <Plan />
          <Plan />
          <Plan />
          <Plan />
          <Plan />
          <Plan />
          <Plan />
        </div>
      </div>
    </div>
  );
}

export default OperatorsAndPlans;
