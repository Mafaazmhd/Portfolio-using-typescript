const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Mafaaz Mohammed K. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with <span className="text-primary">React</span> & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
