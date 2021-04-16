import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">

           <div className="item-wrap">
           <img alt={projects.title} src={projectImage} />
                  <div className="portfolio-item-meta">
                    <h5>{ projects.title }</h5>
                     <p>{ projects.category }</p>
                     <div className="portfolio-links">
                     <a href={ projects.url } ><i className="fa fa-github"></i></a>
                     <a href={ projects.website } ><i className="fa fa-link"></i></a>
                     </div>
                  </div>
            </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>My Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
