import React from 'react';
import '../styles/MeetOurTeam.css';
import govindImage from '../assets/govind.jpeg';
import linkedIcon from '../assets/linkedin.svg';
import instagramIcon from '../assets/instagram.svg';

const teamMembers = [
  {
    name: "Govind Gaur",
    role: "CEO, Founder",
    image: govindImage,
    linkedin: "https://www.linkedin.com/in/govindgaur",
    instagram: "https://www.instagram.com/govindgaur",
    about:
      "Govind is a visionary travelpreneur with experience in over 200 trips. A biker at heart with 30,000+ km logged, he blends business insight with genuine human connection and an unmatched zest for life.",
  },
  {
    name: "Govind Gaur",
    role: "CEO, Founder",
    image: govindImage,
    linkedin: "https://www.linkedin.com/in/govindgaur",
    instagram: "https://www.instagram.com/govindgaur",
    about:
      "Govind is a visionary travelpreneur with experience in over 200 trips. A biker at heart with 30,000+ km logged, he blends business insight with genuine human connection and an unmatched zest for life.",
  },
  {
    name: "Govind Gaur",
    role: "CEO, Founder",
    image: govindImage,
    linkedin: "https://www.linkedin.com/in/govindgaur",
    instagram: "https://www.instagram.com/govindgaur",
    about:
      "Govind is a visionary travelpreneur with experience in over 200 trips. A biker at heart with 30,000+ km logged, he blends business insight with genuine human connection and an unmatched zest for life.",
  },
  {
    name: "Govind Gaur",
    role: "CEO, Founder",
    image: govindImage,
    linkedin: "https://www.linkedin.com/in/govindgaur",
    instagram: "https://www.instagram.com/govindgaur",
    about:
      "Govind is a visionary travelpreneur with experience in over 200 trips. A biker at heart with 30,000+ km logged, he blends business insight with genuine human connection and an unmatched zest for life.",
  },
  {
    name: "Govind Gaur",
    role: "CEO, Founder",
    image: govindImage,
    linkedin: "https://www.linkedin.com/in/govindgaur",
    instagram: "https://www.instagram.com/govindgaur",
    about:
      "Govind is a visionary travelpreneur with experience in over 200 trips. A biker at heart with 30,000+ km logged, he blends business insight with genuine human connection and an unmatched zest for life.",
  },
  {
    name: "Govind Gaur",
    role: "CEO, Founder",
    image: govindImage,
    linkedin: "https://www.linkedin.com/in/govindgaur",
    instagram: "https://www.instagram.com/govindgaur",
    about:
      "Govind is a visionary travelpreneur with experience in over 200 trips. A biker at heart with 30,000+ km logged, he blends business insight with genuine human connection and an unmatched zest for life.",
  },
  {
    name: "Govind Gaur",
    role: "CEO, Founder",
    image: govindImage,
    linkedin: "https://www.linkedin.com/in/govindgaur",
    instagram: "https://www.instagram.com/govindgaur",
    about:
      "Govind is a visionary travelpreneur with experience in over 200 trips. A biker at heart with 30,000+ km logged, he blends business insight with genuine human connection and an unmatched zest for life.",
  },
  
  // Add more objects for other team members if needed
];

const MeetOurTeam = () => {
  return (
    <div className="Our-Team-wrapper">
      <h2>Meet Our Team. The ideal set of extraordinary people</h2>
      <div className="team-card-wrapper">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={member.image} alt={member.name} />
              <div className="team-name">{member.name}</div>
              <div className="team-designation">{member.role}</div>
              <div className="social-media-container">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <img src={linkedIcon} alt="LinkedIn" />
                </a>
                <a href={member.instagram} target="_blank" rel="noreferrer">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </div>
              <div className="about-team">{member.about}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
