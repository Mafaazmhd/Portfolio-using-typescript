import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-2">// Experience</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
            Work <span className="font-accent text-primary text-glow">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-2xl"
        >
          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Briefcase className="text-primary" size={20} />
              </div>
              <div>
                <span className="text-xs text-primary font-body">Winter 2025</span>
                <h3 className="font-heading font-bold text-xl mt-1">Intern</h3>
                <p className="text-muted-foreground font-semibold">Melon AI</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Gained exposure to real-world AI and development workflows. Collaborated
                  with the team on practical applications of machine learning and modern
                  development practices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
