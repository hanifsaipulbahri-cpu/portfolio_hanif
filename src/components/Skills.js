import "../css/Skills.css";
import skills from "../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <h2>Technical Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">

        {skills.map((group, index) => (

          <div className="skill-card" key={index}>

            <h3>{group.category}</h3>

            <div className="badges">

              {group.items.map((item, i) => (

                <span className="badge" key={i}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;