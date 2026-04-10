import { motion } from "framer-motion";
import { Smartphone, Globe, Brain } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using Flutter and React Native with beautiful UI and smooth performance.",
  },
  {
    icon: Globe,
    title: "Frontend Web Development",
    description:
      "Modern, responsive web applications built with React featuring clean code and great user experiences.",
  },
  {
    icon: Brain,
    title: "AI/ML Model Development",
    description:
      "Machine learning models using Python, PyTorch, and NumPy for intelligent data-driven solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-2">// Services</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
            What I <span className="font-accent text-primary text-glow">Offer</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading font-bold text-xl">{service.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
