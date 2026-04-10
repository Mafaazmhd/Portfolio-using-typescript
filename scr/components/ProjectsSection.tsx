import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import flutterLogo from "@/assets/flutter-logo.png";
import djangoLogo from "@/assets/django-logo.png";
import pytorchLogo from "@/assets/pytorch-logo.png";

const projects = [
  {
    title: "One-to-One Chat App",
    tech: "Flutter · Firebase",
    description:
      "Real-time messaging application with interactive UI, built with Flutter frontend and Firebase backend for seamless communication.",
    color: "from-primary/20 to-primary/5",
    logo: flutterLogo,
  },
  {
    title: "AI Chatbot Application",
    tech: "Flutter · Python · Django",
    description:
      "Intelligent conversational interface powered by a Python Django backend, featuring a polished Flutter frontend.",
    color: "from-primary/15 to-primary/5",
    logo: djangoLogo,
  },
  {
    title: "Animal Classification ML Model",
    tech: "Python · Google Colab",
    description:
      "Machine learning model that classifies and differentiates animals using image recognition techniques.",
    color: "from-primary/10 to-primary/5",
    logo: pytorchLogo,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-2">// Projects</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
            Featured <span className="font-accent text-primary text-glow">Projects</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center p-6`}>
                <img src={project.logo} alt={project.title} className="max-h-20 max-w-[80%] object-contain" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg">{project.title}</h3>
                    <p className="text-xs text-primary mt-1">{project.tech}</p>
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" size={16} />
                </div>
                <p className="text-sm text-muted-foreground mt-3">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
