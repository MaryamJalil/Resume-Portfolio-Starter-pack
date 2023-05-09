import React from 'react';

const Achievements = ({ data }) => {
  if (data) {
    console.log(
      '🚀 ~ file: Achievements.js:5 ~ Achievements ~ data:',
      data
    );
    var achievements = data?.map(function (achievement) {
      return (
        <li key={achievement.title}>
          <blockquote>
            <p>{achievement.title}</p>
            <cite>{achievement.user}</cite>
          </blockquote>
        </li>
      );
    });
    console.log(
      '🚀 ~ file: Achievements.js:17 ~ Achievements ~ achievements:',
      achievements
    );
  }

  return (
    <section id="achievements" style={{ backgroundColor: 'white' }}>
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Achievements</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{achievements}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
