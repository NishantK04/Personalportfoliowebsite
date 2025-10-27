import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Smartphone, Server, Wrench } from "lucide-react";

export function Skills() {
  const androidSkills = [
    "Kotlin", "Java", "XML", "Jetpack Compose", "Room DB",
    "Firebase", "MVVM", "Retrofit", "Material Design", "LiveData",
    "Coroutines", "Dagger/Hilt", "Navigation Component"
  ];

  const backendSkills = [
    "FastAPI", "Flask", "PostgreSQL", "REST APIs", "WebSocket",
    "SQLAlchemy", "Firebase Auth", "JWT", "Redis", "Docker",
    "API Design", "Database Design", "Authentication"
  ];

  const toolsSkills = [
    "Git", "GitHub", "Postman", "Figma", "Android Studio",
    "VS Code", "Pytest", "Unit Testing", "CI/CD", "Linux",
    "Jira", "Swagger", "JSON"
  ];

  const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Badge
        variant="secondary"
        className="px-4 py-2 text-sm bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-gray-800 border border-gray-200 cursor-pointer transition-all hover:scale-105"
      >
        {skill}
      </Badge>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to build exceptional digital products
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="android" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="android" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">Android Development</span>
                <span className="sm:hidden">Android</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <Server className="h-4 w-4" />
                <span className="hidden sm:inline">Backend Development</span>
                <span className="sm:hidden">Backend</span>
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span className="hidden sm:inline">Tools & Others</span>
                <span className="sm:hidden">Tools</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="android" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3>Android Development</h3>
                    <p className="text-sm text-gray-600">Native mobile app development</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {androidSkills.map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    <Server className="h-6 w-6" />
                  </div>
                  <div>
                    <h3>Backend Development</h3>
                    <p className="text-sm text-gray-600">Scalable APIs and databases</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <h3>Tools & Others</h3>
                    <p className="text-sm text-gray-600">Development tools and platforms</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {toolsSkills.map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
