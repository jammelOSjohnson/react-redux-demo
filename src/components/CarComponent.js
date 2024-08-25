import React from "react";
import { buyCar } from "../redux";
import { connect } from "react-redux";

function CarComponent(props) {
  return (
    <div>
      <h1>Number of cars - {props.numOfCars}</h1>
      <button onClick={() => props.buyCar()}>Buy Car</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCars: state.car.numOfCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCar: () => dispatch(buyCar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarComponent);
