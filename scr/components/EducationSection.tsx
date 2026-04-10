import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2025 – Present",
    title: "B.Tech in CSE (Business Systems)",
    institution: "Vellore Institute of Technology, Vellore",
    detail: "Currently pursuing",
    sub: null,
  },
  {
    year: "2012 – 2025",
    title: "Unity Public School (CBSE)",
    institution: "",
    detail: null,
    sub: [
      { label: "12th Standard", value: "91%" },
      { label: "10th Standard", value: "84%" },
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-2">// Education</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
            My Academic <span className="font-accent text-primary text-glow">Journey</span>
          </h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                <GraduationCap className="text-primary" size={18} />
              </div>
              <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <span className="text-xs text-primary font-body">{item.year}</span>
                  <h3 className="font-heading font-bold text-lg mt-1">{item.title}</h3>
                  {item.institution && <p className="text-sm text-muted-foreground">{item.institution}</p>}
                  {item.detail && (
                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {item.detail}
                    </span>
                  )}
                  {item.sub && (
                    <div className="mt-2 flex gap-3">
                      {item.sub.map((s, j) => (
                        <span key={j} className="text-xs text-muted-foreground">
                          {s.label}: <span className="text-primary font-semibold">{s.value}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
