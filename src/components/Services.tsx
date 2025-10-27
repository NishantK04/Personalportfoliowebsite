import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Smartphone, Server, Code2, Settings, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Android App Development",
      description: "Native Android applications built with Kotlin and Java. Play Store-ready apps with modern UI/UX, following Material Design guidelines and best practices.",
      features: [
        "Native Kotlin/Java development",
        "Jetpack Compose & XML layouts",
        "Play Store deployment",
        "MVVM architecture",
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description: "Scalable and secure REST APIs with FastAPI and Flask. Complete backend solutions with database design, authentication, and cloud deployment.",
      features: [
        "FastAPI & Flask APIs",
        "PostgreSQL & Firebase",
        "Authentication & Security",
        "API documentation",
      ],
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Full App Integration",
      description: "End-to-end mobile solutions combining Android frontend with powerful backend APIs. Complete integration from database to user interface.",
      features: [
        "Android + Backend integration",
        "Real-time data sync",
        "Cloud deployment",
        "Third-party API integration",
      ],
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Maintenance & Optimization",
      description: "Ongoing support for existing applications. Performance optimization, bug fixes, feature additions, and keeping apps up-to-date with latest technologies.",
      features: [
        "Bug fixes & updates",
        "Performance optimization",
        "Feature enhancements",
        "Technical support",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            What I Can Build <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">For You</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional services tailored to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-gray-200">
            <div className="text-left">
              <h3 className="mb-2">Ready to start your project?</h3>
              <p className="text-gray-600">
                Let's discuss how I can help bring your ideas to life
              </p>
            </div>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 whitespace-nowrap"
            >
              Hire Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
