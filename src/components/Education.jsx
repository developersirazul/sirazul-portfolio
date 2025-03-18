import React from 'react'
const education = [
    {
      degree: "Bachelor of Business Studies (BBs)",
      institution: "Gov't Hazi Mohammad Mohsin college",
      year: "2018 - 2021",
      description: "Graduated with a strong foundation in marketting and client satisfaction.",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary (11th-12th) ",
      institution: "Anowara College",
      year: "2016 - 2018",
      description: "Having good command in English",
      icon: "🎓",
    },
    {
      degree: "Secondary (10th)",
      institution: "KBM",
      year: "2016",
      description: "with a strong foundation in basic English",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Shopify Store Designer and Developer",
      Institution: "Js Academy",
      year: "2024 -2025 Present",
      description: "store designer Landing page with pagefly and Gempages.Replo Expert",
      icon: "💼",
    },
    {
      role: "MERN Stack Developer (Front End)",
      Institution: "Programming Hero",
      year: "2021",
      description: "Developed and optimized MERN stack applications, enhancing user experience.",
      icon: "💻",
    },
  ];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Skills</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Experience Section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Skills</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.company}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education
