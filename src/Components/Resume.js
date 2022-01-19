import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description} <span>&bull; <b>{education.grade}</b></span></p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p> 
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

          <p><b>Programming Languages:</b> Java, C#, JavaScript, Python, PHP, C, C++</p>
          <p><b>Web:</b> ASP.NET, Java EE, SpringBoot, RESTful API, JSON, jQuery, React, Angular, HTML, CSS, Bootstrap, MySQL, MongoDB</p>
          <p><b>Tools:</b> NUnit, Postman, RabbitMQ, Jenkins, Bamboo, AWS, Azure, Kibana, SVN, Git, WildFly, Docker, Kubernetes, Microservices</p>
          <p><b>ML Libraries:</b> Scikit-learn, NumPy, Pandas, SciPy, Matplotlib, NLTK, TensorFlow, Keras, PyTorch</p>
          <p><b>Others:</b> Agile, Scrum, JIRA, Confluence, Windows, Linux, Figma, SQL Server</p>
          <p><b>Soft Skills:</b> Strong Communication skills, Leadership, Problem-solving skills, Critical thinking</p>
          
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
