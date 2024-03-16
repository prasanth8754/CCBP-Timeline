import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-cont">
      <h1 className="main-h1">
        MY JOURNEY OF <br />
        <br />
        <span className="main-p">CCBP 4.0</span>
      </h1>
      <div className="chrono-cont">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: '#ffffff',
            titleColor: '#0967d2',
            scrollbarColor: '#2b237c',
          }}
        >
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard courseDetails={eachItem} key={eachItem.id} />
            ) : (
              <ProjectTimelineCard
                projectDetails={eachItem}
                key={eachItem.id}
              />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
