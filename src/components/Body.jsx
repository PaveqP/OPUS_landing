import '../Styles/Body.css'
import { Meeting } from './body-components/Meeting'
import { Mission } from './body-components/Mission'
import { Author_roadmap } from './body-components/Author_roadmap'
import { ProjectOwner_roadmap } from './body-components/ProjectOwner_roadmap'
import { Owner_map } from './body-components/Owner_map'
import { Feedback } from './body-components/Feedback'
import { Connect } from './body-components/Connect'
import React, {useState} from "react";

function Body(props) {

    const {show} = props;

    return (
        <div className="body">
            <Meeting show={show}/>
            <Mission />
            <Author_roadmap />
            <ProjectOwner_roadmap />
            <Owner_map/>
            <Feedback/>
            <Connect />
        </div>
    )
  }
  
  export {Body}