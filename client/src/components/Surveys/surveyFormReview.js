import React from 'react';
import { connect } from 'react-redux';
import formField from './formField';
import _ from 'lodash';
import * as actions from '../../actions'

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
    
    const reviewFields = _.map(formField, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        )
    })

   



    return (
        <div className="container"><h5>Please confirm your entries</h5>
            {reviewFields}            
            <button className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => actions.submitSurvey(formValues)}
                className="green btn-flat white-text right">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        
        
        </div>
    );

};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps,actions)(SurveyReview);