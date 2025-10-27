import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Github, PlayCircle, Smartphone, Server } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "android" | "backend">("all");

  const projects = [
    {
      id: 1,
      title: "GoHabito – Habit & Goal Tracker",
      description:
        "A comprehensive habit tracking app with goal management, streak tracking, and analytics. Published on Google Play Store with 1000+ downloads.",
      category: "android",
      image: "https://raw.githubusercontent.com/NishantK04/GoHabito/master/GoHabito%20(2).png",
      tags: ["Kotlin", "MVVM", "Room DB", "Material Design"],
      github: "https://github.com/NishantK04/GoHabito",
      playStore: "https://play.google.com/store/apps/details?id=com.nishant.gohabito",
    },
    {
      id: 2,
      title: "AI Cancer Scan",
      description:
        "AI-powered cancer detection app with Flask backend integration. Uses machine learning models for medical image analysis and prediction.",
      category: "android",
      images: [
        "https://raw.githubusercontent.com/NishantK04/AI-Cancer-Scan/main/login.jpg",
        "https://raw.githubusercontent.com/NishantK04/AI-Cancer-Scan/main/chatBot.jpg",
        "https://raw.githubusercontent.com/NishantK04/AI-Cancer-Scan/main/home.jpg",
      ],
      tags: ["Kotlin", "Flask", "ML Integration", "Retrofit"],
      github: "https://github.com/NishantK04/AI-Cancer-Scan",
      centerImage: true,
    },
    {
      id: 3,
      title: "TapNShare",
      description:
        "Secure contact sharing app using NFC and BLE technology. Enables instant digital business card exchange with encryption.",
      category: "android",
      image: "https://raw.githubusercontent.com/NishantK04/TapNShare/master/Untitled%20design.png",
      tags: ["Kotlin", "NFC", "BLE", "Firebase"],
      github: "https://github.com/NishantK04/TapNShare",
    },
    {
      id: 4,
      title: "FloatChat ARGO",
      description:
        "FastAPI backend for ocean analytics platform. Real-time data processing with WebSocket support and PostgreSQL database.",
      category: "backend",
      image:
        "https://raw.githubusercontent.com/NishantK04/FloatChat-Argo/main/Dalton-Meereskosmetik-Wirkstoffe-Tiefseewasser.jpg",
      tags: ["FastAPI", "PostgreSQL", "WebSocket", "Redis"],
      github: "https://github.com/NishantK04/FloatChat-Argo",
    },
    {
      id: 5,
      title: "Flask AI Chatbot API",
      description:
        "Real-time medical assistant backend with AI integration. RESTful API with authentication, rate limiting, and comprehensive documentation.",
      category: "backend",
      image:
        "https://images.unsplash.com/photo-1641156803026-0b819059b04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE1NzA2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Flask", "AI Integration", "REST API", "JWT"],
      github: "https://github.com/NishantK04/AI-Cancer-Scan",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            A showcase of my work in Android and Backend development
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={
                activeFilter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : ""
              }
            >
              All Projects
            </Button>
            <Button
              variant={activeFilter === "android" ? "default" : "outline"}
              onClick={() => setActiveFilter("android")}
              className={
                activeFilter === "android"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : ""
              }
            >
              <Smartphone className="h-4 w-4 mr-2" />
              Android
            </Button>
            <Button
              variant={activeFilter === "backend" ? "default" : "outline"}
              onClick={() => setActiveFilter("backend")}
              className={
                activeFilter === "backend"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : ""
              }
            >
              <Server className="h-4 w-4 mr-2" />
              Backend
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-gray-200 h-full flex flex-col">
                <div className="relative overflow-hidden h-48 bg-gray-100">
                  {project.images ? (
                    <div className="flex h-full gap-0.5">
                      {project.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="flex-1">
                          <ImageWithFallback
                            src={img}
                            alt={`${project.title} ${imgIndex + 1}`}
                            className={`w-full h-full ${
                              project.centerImage ? "object-contain" : "object-cover"
                            } group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full ${
                        project.centerImage ? "object-contain" : "object-cover"
                      } group-hover:scale-110 transition-transform duration-300`}
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {project.category === "android" ? (
                        <Smartphone className="h-3 w-3 mr-1" />
                      ) : (
                        <Server className="h-3 w-3 mr-1" />
                      )}
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {/* GitHub Button */}
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>

                    {/* Play Store Button (only if available) */}
                    {project.playStore && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.playStore} target="_blank" rel="noopener noreferrer">
                          <PlayCircle className="h-4 w-4 mr-1" />
                          Play Store
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
