import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img className="project-img" src={imageUrl} alt="project" />
      <div className="heading-cont">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-cont">
          <AiFillCalendar className="calender-icon" />
          <p className="duration-p">{duration}</p>
        </div>
      </div>
      <p className="desc-p">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
