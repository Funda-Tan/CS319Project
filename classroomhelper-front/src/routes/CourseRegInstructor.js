import React from 'react';
import "./AllGroups.css"
import AllCoursesTable from "../AllCourses/AllCoursesTable"

export default class CourseRegInstructor extends React.Component {
    componentDidMount() {
        this.props.history.push('/CourseRegInstructor');
    }



    render() {
        return (
            <>

                <div className="AllGroups">

                    <h1>
                        All Courses
                    </h1>

                    <AllCoursesTable></AllCoursesTable>

                </div>
            </>
        )
    }
}