import React from "react";
import { Field, reduxForm } from "redux-form";

export class StreamCreate extends React.Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        {label}
        <input {...input} />
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render = () => {
    return (
      <div>
        <form className="ui form">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button
            onClick={this.props.handleSubmit(this.onSubmit)}
            className="ui button primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
