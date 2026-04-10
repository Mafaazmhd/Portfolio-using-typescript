import { motion } from "framer-motion";
import { MapPin, Calendar, Code, Brain } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Location", value: "Chennai, India" },
  { icon: Calendar, label: "Born", value: "13 July 2007" },
  { icon: Code, label: "Focus", value: "Web & Mobile Dev" },
  { icon: Brain, label: "Interest", value: "AI/ML" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-2">// About Me</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
            Get to Know <span className="font-accent text-primary text-glow">Me</span>
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer who loves building interactive web and mobile
                applications. With a strong foundation in React, Flutter, and Python, I
                combine modern development practices with AI/ML technologies to create
                impactful solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Currently pursuing my B.Tech in Computer Science and Engineering (Business
                Systems) at Vellore Institute of Technology, I'm constantly learning and
                pushing the boundaries of what's possible with code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <item.icon className="text-primary mb-2" size={20} />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-heading font-semibold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
