import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">👋 Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight">
            Mafaaz
            <br />
            <span className="text-primary">Mohammed</span>{" "}
            <span className="font-accent text-primary text-glow">K</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg font-body">
            Frontend Developer | Flutter & React Developer | Machine Learning Enthusiast
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            18-year-old developer from Chennai, India. B.Tech CSE student at VIT.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:box-glow transition-shadow flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-heading font-semibold hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
