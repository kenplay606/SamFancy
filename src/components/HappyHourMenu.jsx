// HappyHourMenu.jsx
// A sleek, "zoomed-in" happy hour card for Sam Fancy

const HappyHourMenu = () => {
  const tiers = [
    { price: "$30", time: "6–7 PM", description: "Kickoff" },
    { price: "$40", time: "7–8 PM", description: "Flow" },
    { price: "$50", time: "8–9 PM", description: "Peak" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-8 px-4">
      {/* Main card – dark, premium, with subtle glow */}
      <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-3xl border border-[#2a2a2a] shadow-2xl overflow-hidden">
        {/* Red accent bar top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E31B23] to-[#D4AF37]" />

        <div className="p-6 md:p-10">
          {/* Headline – stacked, bold, zoomed-in feel */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              HAPPY
            </h2>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#E31B23] leading-none mt-[-0.1em]">
              HOUR
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mt-3 font-medium">
              Every night • 6–9 PM
            </p>
          </div>

          {/* Price/Time grid – zoomed in, easy to read */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10 hover:border-[#E31B23]/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-1">
                  {tier.price}
                </div>
                <div className="text-xl md:text-2xl font-semibold text-[#D4AF37] mb-2">
                  {tier.time}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  {tier.description}
                </div>
              </div>
            ))}
          </div>

          {/* Small footnote */}
          <div className="text-center mt-8 text-xs text-gray-500">
            *Select beers, house wines & chosen cocktails
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyHourMenu;
