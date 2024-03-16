import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-cont">
      <div className="heading-cont">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-cont">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration-p">{duration}</p>
        </div>
      </div>
      <p className="desc-p">{description}</p>
      <div className="ul-cont">
        {tagsList.map(eachItem => (
          <p className="li-item" key={eachItem.id}>
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
