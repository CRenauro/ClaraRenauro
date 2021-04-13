import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    // const name = this.props.data.name;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    // const message = this.props.data.contactmessage;

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
          <ul className="social-links">{networks}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
