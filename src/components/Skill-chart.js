import React from 'react';
import PropTypes from 'prop-types';
import './Skill-chart.css';

export default function SkillChart(props) {
  const {skills} = props;

  return(
    <div>
      {skills.map((skill) => (
        <div className='chart'>
          <span className='skill-name'>{skill.skill}</span>
          <div className='chart-frame'><span className='chart-bar'>test</span></div>
        </div>
      ))}
    </div>
  )
};

SkillChart.propTypes = {
  skills: PropTypes.array,
};
