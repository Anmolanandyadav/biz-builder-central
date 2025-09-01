const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Active Investors", description: "Growing community" },
    { number: "1,200+", label: "Funded Startups", description: "Success stories" },
    { number: "$50M+", label: "Total Investments", description: "Capital deployed" },
    { number: "95%", label: "Success Rate", description: "Investor satisfaction" }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;