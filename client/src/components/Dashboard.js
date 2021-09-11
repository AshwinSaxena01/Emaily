import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './Surveys/SurveyList';


const Dashboard = () => {
    return (
        <div>
            <h4 className="container" style={{
                padding: 20,
                fontWeight:100
            }}> Dashboard </h4>
            <SurveyList/>
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>

            </div>
        </div>
    )


}

export default Dashboard;