import { Card } from "./ui/card";
import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Chamberly AB",
      role: "Android Developer Intern",
      period: "2025 – Present",
      description: "Building AI-powered mental health application with Firebase integration, Kotlin, and modern Android development practices. Implementing MVVM architecture and Jetpack Compose for seamless user experience.",
      achievements: [
        "Developed core features for AI mental health app",
        "Implemented Firebase authentication and real-time database",
        "Created responsive UI with Jetpack Compose",
      ],
    },
    {
      company: "AICTE–EduSkills",
      role: "Android Developer Virtual Intern",
      period: "2024",
      description: "Hands-on experience with Kotlin, API integration, and UI/UX design. Worked on multiple Android projects focusing on best practices and industry standards.",
      achievements: [
        "Completed 5+ Android development projects",
        "Mastered Retrofit for API integration",
        "Learned Material Design principles and implementation",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional journey and contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white hidden md:block"></div>

                  <Card className="md:ml-20 p-6 hover:shadow-xl transition-shadow border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-blue-600">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Key Achievements:</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
