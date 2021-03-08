import React from "react";

import "./about.page.styles.scss";
import aboutImage from "../../assets/images/portrait0.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="about-title box-shadow">About</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="about pic" />
        </div>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            efficitur enim ac est finibus mollis. Vivamus in porttitor est.
            Vivamus cursus lobortis mi, vel pellentesque est tincidunt sed.
            Aenean imperdiet eget tortor vitae tempor. Vestibulum a est vitae
            diam maximus consequat nec et lectus. Vivamus justo nisi, fringilla
            in ex malesuada, tincidunt imperdiet odio. Vivamus eget enim dolor.
            Sed eget pharetra neque. Suspendisse imperdiet augue id placerat
            commodo. Sed odio sapien, congue at lacus vestibulum, luctus feugiat
            neque. Quisque pharetra vulputate euismod. Nulla non convallis odio.
            Curabitur quis mi libero. Nam justo sapien, laoreet aliquet est a,
            egestas maximus libero. Maecenas porttitor malesuada dapibus. Donec
            cursus sodales turpis vel aliquet.
          </p>
          <p>
            Nulla facilisi. Nam placerat enim quis tempus condimentum.
            Vestibulum fermentum, massa ut vulputate consequat, nunc velit
            vulputate orci, quis accumsan nisl tortor sed odio. Nullam in dui et
            eros consequat gravida. Mauris nec interdum odio. Ut porttitor
            consectetur tortor, eget eleifend lorem ullamcorper tristique. Sed
            sit amet sollicitudin magna. Nulla vel sodales turpis. Duis pharetra
            egestas turpis, faucibus accumsan neque vestibulum sit amet. In
            auctor odio nunc, dignissim molestie velit sodales ut. Duis vehicula
            eros id euismod lacinia. Maecenas id aliquet turpis. Etiam id enim
            lacinia, fermentum lacus nec, iaculis mi. Fusce sit amet dui est.
          </p>
          <p>
            Sed odio sapien, congue at lacus vestibulum, luctus feugiat neque.
            Quisque pharetra vulputate euismod. Nulla non convallis odio.
            Curabitur quis mi libero. Nam justo sapien, laoreet aliquet est a,
            egestas maximus libero. Maecenas porttitor malesuada dapibus. Donec
            cursus sodales turpis vel aliquet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
