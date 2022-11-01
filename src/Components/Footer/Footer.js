import React from 'react';
import './Footer.css';
import Slack from '../../Images/slack.png';
import Github from '../../Images/github.png';
import Zuri from '../../Images/zuri.png';
import I4G from '../../Images/I4G.png';
export default function Footer() {
  return (
    <div>
        <div className='icon'>
            <img src={Slack} />
            <img src={Github} className='git'/>
        </div>
        <hr/>
        <div className='foot'>
            <div className='zuri'>
                <img width={130} src={Zuri}/>
            </div>
            <div className='hng'>
                <span className='intern'>
                    HNG Internship 9 Frontend Task
                </span>
            </div>
            <div className='i4g'>
                <img width={100} src={I4G} />
            </div>
        </div>
    </div>
  )
}
