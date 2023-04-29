/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { Icon, ProgressBar } from '@edx/paragon';
import { CheckCircle } from '@edx/paragon/icons';
import { Link } from 'react-router-dom';

const BottomCardSection = ({ courseInfo }) => {
  const courseCompleted = courseInfo?.progress?.complete_count > 0
    && courseInfo?.progress?.incomplete_count === 0;
  const courseInprogress = courseInfo?.resume_course?.has_visited_course;
  const calcProgress = () => {
    if (courseInprogress) {
      const progress = (courseInfo?.progress?.complete_count
          / (courseInfo?.progress?.complete_count
            + courseInfo?.progress?.incomplete_count))
        * 100;
      return Math.round(progress);
    }
    return 0;
  };
  const courseStatus = () => {
    if (courseCompleted) {
      return (
        <div className="complete-wrapper d-flex justify-content-between w-100 align-items-center">
          <div className="d-flex align-items-center ">
            <Icon className="check-circle-icon mr-2.5" src={CheckCircle} />
            <span className="second-title">Completed</span>
          </div>
          <div className="d-flex view-course-btn">
            <a
              target="_blank"
              href="#/certificate"
              rel="noreferrer"
              className="view-btn"
              onClick={(e) => e.preventDefault}
            >
              View certificate
            </a>
          </div>
        </div>
      );
    }
    return (
      <>
        {/* {courseInprogress ? ( */}
        <ProgressBar now={calcProgress()} label={`${calcProgress()}%`} />
        {/* ) : (
          <div className="d-flex align-items-center">
            <Icon className="info-icon mr-2.5" src={Info} />
            <span className="second-title">Not started yet</span>
          </div>
        )} */}
        <Link
          className="view-btn view-course-btn"
          to={`/course/${courseInfo?.course_metadata?.slug}`}
        >
          View Course
        </Link>
      </>
    );
  };

  return (
    <div className="d-flex align-items-center justify-content-between bottom-wrapper">
      {courseStatus()}
    </div>
  );
};

export default BottomCardSection;
