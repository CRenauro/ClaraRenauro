import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;


    const networks = this.props.data.social.map(function(network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <section id="contact">
        <div>
          <div className="twelve columns">
          {/* <ul className="social-links">{networks}</ul> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
