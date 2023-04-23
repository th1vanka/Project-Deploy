import React from "react";
import "../css/home_page.css";
import ServicesCardsComponent from "../components/services_cards_component";
import SlideShow from "../components/slide_show/slide_show";
import OperatorsAndPlans from "../components/operators_plan_component";

function HomePage() {
  return (
    <div className="home-page-main-container clearfix">
      <SlideShow />
      <div className="home-service-component-container">
        <ServicesCardsComponent />
      </div>
      <div className="home-operator-plan-component-container">
        <OperatorsAndPlans/>
      </div>
    </div>
  );
}

export default HomePage;
