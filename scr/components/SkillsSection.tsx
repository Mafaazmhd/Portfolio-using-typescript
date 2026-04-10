import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [{ name: "React", level: 85 }],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", level: 80 },
      { name: "React Native", level: 70 },
    ],
  },
  {
    category: "Programming",
    skills: [{ name: "Python", level: 80 }],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "PyTorch", level: 65 },
      { name: "NumPy", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-2">// My Skills</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
            Skills & <span className="font-accent text-primary text-glow">Expertise</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-heading font-bold text-lg mb-4">{cat.category}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1">
                      <span className="text-sm font-body">{skill.name}</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
