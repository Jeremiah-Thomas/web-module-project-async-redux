import React from "react";
import { connect } from "react-redux";
import { getPrediction, inputName, resetInput } from "../actions";
import styled from "styled-components";

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  text-align: center;
  width: 75%;
  height: 50vh;
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Form = styled.form``;

const AgePrediction = (props) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.getPrediction(props.name);
    props.resetInput();
  };

  const handleChange = (evt) => {
    props.inputName(evt.target.value);
  };

  return (
    <Div>
      <h1>Predict Age Based On Name</h1>
      {props.prediction && (
        <div>
          <p>Name: {props.prediction.name}</p>
          <p>Age: {props.prediction.age}</p>
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholer="Name"
          value={props.name}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </Form>
    </Div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    prediction: state.prediction,
    name: state.name,
  };
};

export default connect(mapStateToProps, {
  getPrediction,
  inputName,
  resetInput,
})(AgePrediction);
