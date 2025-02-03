import React from 'react';
import image from '../assets/webpic.png';
const BlogPost = () => {
  return (
    <div className="blog-card">
      <img src={image} alt="Blog Post" className="blog-image" />
      <div className="blog-content">
        <h2 className="blog-title">Why I Want to Be a Front-End Developer and How HNG Will Help Me Achieve My Goals</h2>
        <p className="blog-text">
          I have always been passionate about creating visually appealing and user-friendly interfaces. As a front-end
          developer, I aim to bring my creative vision to life through code. By joining the HNG internship program, I aim to
          gain the skills and experience needed to excel in the industry. The hands-on approach and mentorship at HNG will
          provide invaluable insights into the field of front-end development. I plan to leverage the resources and
          collaboration opportunities at HNG to achieve my goals of becoming a proficient front-end developer.
        </p>
        <a href="https://hng.tech/hire/reactjs-developers" className="cta-link">Hire React.js Developers</a>
      </div>
    </div>
  );
};

export default BlogPost;
