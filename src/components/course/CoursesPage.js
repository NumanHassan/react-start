import React, {PropTypes} from 'react';
import * as courseActions from '../../actions/courseAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    debugger;
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        {this.props.courses}
        /*<h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" onClick={this.onClickSave} value="save"/>*/
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  debugger;
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
