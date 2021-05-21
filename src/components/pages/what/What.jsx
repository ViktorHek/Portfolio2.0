import React from 'react'
import ProjectCard from './ProjectCard'
import Data from './projects'

const What = () => {
  let projectList = (
    <ul className="projectList_container">
      {Data.map((project) => {
        return <ProjectCard project={{ ...project }} />
      })}
    </ul>
  )

  return (
    <div id="what">
      <div className="main_what_container">
        <h1 className="what_title">Feel free to checkout the work i've done</h1>
        <h4 className="what_text">
          The link icon will take you to the deployed website. But I saved the
          best for last. if you go all the way down to the Footer, you will find
          a link to my GitHub page. There you will find the codebase for all the
          projects you see here, and a couple other. This involves the projects
          presented here that does not have a deployed website. The projects on
          the first row (first four) are deployed. the ones on the second row
          are not. The links on the second row will take you the the repo on my
          GitHub page.
        </h4>
        <div>
          {projectList ? (
            <div>{projectList}</div>
          ) : (
            <h1>Sorry, something went wrong</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default What
