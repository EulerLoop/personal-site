import React from 'react'

class Project extends React.Component {
  render() {
    return (
      <div className='btn'>
        <a href={this.props.href} target='_blank'>
          <div className="link-box">
            <span className='project-span'></span>
            <span className='project-name'>{this.props.name}</span>
            <span className='caption'>{this.props.caption}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default Project
