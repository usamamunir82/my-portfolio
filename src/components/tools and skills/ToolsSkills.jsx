import React from 'react'
import './toolsskills.css'
import tool1 from '../../assets/images/tool1.png'
import tool2 from '../../assets/images/tools2.png'
import tool3 from '../../assets/images/tool3.png'
import tool4 from '../../assets/images/tool4.png'
import tool5 from '../../assets/images/tool5.png'


function ToolsSkills() {
  return (
    <div className='container'>
        <div className='lightTools'><p>TOOLS AND SKILLS</p></div>

<div className='toolsContainer'>
    <div className='toolHeading'><p>Tools and Skills</p></div>
    <div className='toolsContent'>
        <div>
            <p></p>
        </div>
        <div className='toolsBoxContainer'>
            <div className='toolsBox'>
                <img src={tool1}/>
            </div>
            <div className='toolsBox'>
                <img src={tool2}/>
            </div>
            <div className='toolsBox'>
                <img src={tool3}/>
            </div>
            <div className='toolsBox'>
                <img src={tool4}/>
            </div>
            <div className='toolsBox'>
                <img src={tool5}/>
            </div>
        </div>

    </div>

</div>

    </div>
  )
}

export default ToolsSkills