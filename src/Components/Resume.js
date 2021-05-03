import React, { Component } from "react";

class Resume extends Component {


  render() {
    if (!this.props.data) return null;

    // const skillmessage = this.props.data.skillmessage;
  

  

    const skills = this.props.data.skills.map(skills => {
      

      return (
        <h2 key={skills.name}>
        
          <p>{skills.name}</p>
        </h2>
      );
    });

    return (
      <section id="resume">

      

        <div className="row skill">
          <div className="header">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="row">
            <ul className="skills">{skills}</ul>
          </div>
          
        </div>
      </section>
    );
  }
}

export default Resume;