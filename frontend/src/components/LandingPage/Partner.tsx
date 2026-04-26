

import ictChamber    from "../../assets/images/p6.jpeg";
import digitalTransform from '../../assets/images/p2.png';
import giz             from '../../assets/images/p3.png';
import millionCoders   from "../../assets/images/p4.png";
import rwandaGovt      from "../../assets/images/p7.png";
import EyebrowLabel from "../../UI/EyebrowLable";
import PrimaryButton from "../../UI/PrimaryButton";
import SecondaryButton from "../../UI/SecondaryButton";

// ─── Data 

const partners = [
  { name: "ICT Chamber",                      logo: ictChamber,       bg: "#ffffff" },
  { name: "Digital Transformation Center RW", logo: digitalTransform, bg: "#ffffff" },
  { name: "GIZ German Cooperation",           logo: giz,              bg: "#ffffff" },
  { name: "1 Million Rwandan Coders",         logo: millionCoders,    bg: "#f0f4f8" },
  { name: "Republic of Rwanda",               logo: rwandaGovt,       bg: "#ffffff" },
];

// Duplicate the array so the marquee loops seamlessly
const track = [...partners, ...partners, ...partners];

// ─── Component 

const Partner = () => {
  return (
    <section className="py-20 overflow-hidden" >
      <div className="max-w-7xl  px-6 md:px-20 mb-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <EyebrowLabel text=" Trusted by" align="left"/>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
              Organisations that believe
              <br />
              <span style={{ color: "#2b7fff" }}>in Rwanda's builders.</span>
            </h2>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Primary */}
            <PrimaryButton to="/partners">
              Become a partner
            </PrimaryButton>

            {/* Secondary */}
            <SecondaryButton to="/partners">
              Learn more
            </SecondaryButton>
          </div>
        </div>
      </div>

      {/* ── Marquee track ── */}
      <div className="relative">

        {/* Scrolling wrapper */}
        <div
          className="flex gap-5 w-max"
          style={{ animation: "osk-marquee 30s linear infinite" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {track.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="shrink-0 flex items-center justify-center px-6 py-3 transition-all duration-300 cursor-default"
              style={{
                width: "200px",
                height: "90px",
              }}
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-14 max-w-full w-auto object-contain transition-all duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

    
      

      {/* Keyframe injected once */}
      <style>{`
        @keyframes osk-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default Partner;