import React, {PropTypes} from 'react';
import * as courseActions from '../../actions/courseAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: " English"

    };
  }

  render() {

    return (
      <div className="jumbotron">
        <h1>Courses </h1>

        <p>{ this.state.course}</p>


      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {

  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

