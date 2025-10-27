import { Card } from "./ui/card";
import { motion } from "motion/react";
import { Code2, Server, Smartphone } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Android Expert",
      description: "Building native Android apps with Kotlin & Java",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Pro",
      description: "Scalable APIs with FastAPI, Flask & PostgreSQL",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack",
      description: "End-to-end mobile & backend integration",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background Gradient Design */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>

              {/* Profile Image */}
              <img
                src="https://raw.githubusercontent.com/NishantK04/NishantK04/main/nishpictur%20(1).jpg"
                alt="Nishant Kumar"
                className="relative z-10 rounded-2xl w-full h-[400px] object-contain bg-white shadow-lg mx-auto"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700">
              I'm a{" "}
              <span className="text-blue-600">Software Engineer</span> and{" "}
              <span className="text-purple-600">B.Tech CSE student</span> at
              Galgotias University (2023–2027), specializing in Android app
              development and backend engineering.
            </p>
            <p className="text-gray-700">
              I build scalable, production-grade mobile and backend solutions —
              including apps published on the Play Store. My expertise spans
              across native Android development with Kotlin and Java, and robust
              backend systems using FastAPI, Flask, and PostgreSQL.
            </p>
            <p className="text-gray-700">
              I collaborate with startups and clients worldwide to build robust,
              reliable digital products. Whether it's crafting intuitive mobile
              experiences or architecting efficient backend systems, I'm
              passionate about turning ideas into reality.
            </p>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 text-center hover:shadow-lg transition-shadow border-gray-200"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
