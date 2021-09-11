import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import _ from 'lodash';
import validateEmails from '../../utils/vaildateEmails';
import formField from './formField';


class SurveyForm extends Component{

    renderFields() {
        return _.map(formField, ({label,name}) => {
            return <Field key={ name} component={SurveyField} type="text" label={label} name={name}/>
        }
           
        )
    }



    render() {
        return (
            <div className="container">
                <h3 style={{fontWeight:50}}> Create survey </h3>
                <form
                    onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
                >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                
                    <button
                        className="teal btn-flat right white-text"
                        type="submit"
                    >Next
                        <i className="material-icons right">done</i>
                    </button>
                    </form>
    </div>
        )
    }
}

function validate(values) {
    const errors = {};
    _.each(formField, ({ name }) => {
        errors.recipients = validateEmails(values.recipients || '');
        if (!values[name]) {
          errors[name]='You must provide a value'
      }
  })

    
    
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);