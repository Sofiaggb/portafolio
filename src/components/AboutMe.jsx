// import Typed from 'react-typed';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';

// const aboutMe = `{ 
//   title: "WEB DEVELOPER",
//   description: "I am a web developer focused on front-end and back-end development",
//   softSkills: ["problem-solving", "communication", "teamwork", "adaptability", "critical thinking", "time management"]
//   hobbies: ["dance", "reading", "crafts"],
//   contact: {
//     email: "sofiaggb@gmail.com",
//     github: "github.com/Sofiaggb"
//   },
//  };`;

const About = () => {
  const {t} = useTranslation()
    
  return (
    <div className="bg-stone-300 whitespace-pre-wrap font-mono p-6 rounded-lg 
      shadow-lg w-full mx-auto">
      <ReactTyped
        strings={[
          t("home.aboutMe"),
        ]}
        typeSpeed={40}
        backSpeed={4000}
        loop
      />
  </div>
  )
}

export default About