
import { NavLink } from "react-router";
import Partner from "../components/LandingPage/Partner";


import {
  ArrowRight,
  ArrowUpRight,
  Users,
  BookOpen,
  Briefcase,
  Globe,
  CheckCircle,
  Mail,
  Building2,
  GraduationCap,
  Landmark,
  Heart,
} from "lucide-react";
import EyebrowLabel from "../UI/EyebrowLable";

// ─── Types ─────────────────────────────────────────────────────────────────────

type PartnerTier     = "gold" | "silver" | "community";
type PartnerCategory = "all" | "university" | "government" | "company" | "ngo";

interface Partner {
  id:          number;
  name:        string;
  category:    Exclude<PartnerCategory, "all">;
  tier:        PartnerTier;
  description: string;
  website:     string;
  since:       string;
  collab:      string;
  initials:    string;
  bg:          string;
}

// ─── Meta ──────────────────────────────────────────────────────────────────────

const TIER_META: Record<PartnerTier, {
  label: string; border: string; badgeBg: string; badgeText: string; dot: string;
}> = {
  gold:      { label: "Gold Partner",      border: "border-amber-200", badgeBg: "bg-amber-50",  badgeText: "text-amber-700",  dot: "bg-amber-400"  },
  silver:    { label: "Silver Partner",    border: "border-gray-200",  badgeBg: "bg-gray-100",  badgeText: "text-gray-600",   dot: "bg-gray-400"   },
  community: { label: "Community Partner", border: "border-blue-200",  badgeBg: "bg-blue-50",   badgeText: "text-blue-600",   dot: "bg-blue-400"   },
};




const partners: Partner[] = [
  {
    id: 1, name: "University of Rwanda",           category: "university", tier: "gold",
    description: "Rwanda's largest public university. OSK runs regular sessions on campus and channels graduate students directly into open-source contribution.",
    website: "https://ur.ac.rw",          since: "2024", initials: "UR",  bg: "bg-violet-600",
    collab: "Campus sessions, internship pipelines, student contributor programme",
  },
  {
    id: 2, name: "Rwanda Coding Academy",          category: "university", tier: "gold",
    description: "Rwanda's premier coding-focused school. RCA students are among OSK's most active early contributors — many making their first PR before university.",
    website: "https://rca.ac.rw",         since: "2024", initials: "RCA", bg: "bg-indigo-600",
    collab: "Student mentorship, curriculum alignment, project hosting",
  },
  {
    id: 3, name: "MINICT Rwanda",                  category: "government", tier: "gold",
    description: "The Ministry of ICT drives Rwanda's digital transformation. Their backing gives OSK access to policy channels and national visibility.",
    website: "https://minict.gov.rw",     since: "2025", initials: "MIN", bg: "bg-emerald-700",
    collab: "Policy alignment, official recognition, Smart Rwanda agenda support",
  },
  {
    id: 4, name: "Norrsken Kigali",                category: "ngo",        tier: "silver",
    description: "A hub for impact-driven entrepreneurs. Norrsken provides OSK with venue access, an international mentor network, and co-working space for hackathons.",
    website: "https://norrsken.org",      since: "2024", initials: "NK",  bg: "bg-orange-500",
    collab: "Venue hosting, mentor network, impact ecosystem access",
  },
  {
    id: 5, name: "Andela",                         category: "company",    tier: "silver",
    description: "A global tech talent company with deep African roots. Andela engineers mentor contributors, join code reviews, and recruit from the community.",
    website: "https://andela.com",        since: "2025", initials: "AND", bg: "bg-gray-800",
    collab: "Technical mentorship, hiring pipeline, code review sessions",
  },
  {
    id: 6, name: "kLab",                           category: "ngo",        tier: "silver",
    description: "Rwanda's first tech innovation hub. kLab gives OSK physical space, an entrepreneurship network, and bridges into the local startup ecosystem.",
    website: "https://klab.rw",           since: "2024", initials: "kL",  bg: "bg-cyan-600",
    collab: "Co-working space, startup introductions, incubation support",
  },
  {
    id: 7, name: "Carnegie Mellon University Africa", category: "university", tier: "community",
    description: "CMU Africa trains the next generation of African engineers. Graduate students collaborate on OSK projects as part of applied coursework and research.",
    website: "https://africa.cmu.edu",   since: "2025", initials: "CMU", bg: "bg-red-700",
    collab: "Graduate research projects, applied engineering coursework",
  },
  {
    id: 8, name: "Irembo",                         category: "company",    tier: "community",
    description: "Rwanda's e-government platform. Irembo engineers contribute to OSK projects and support our government-focused open data work.",
    website: "https://irembo.com",        since: "2025", initials: "IRE", bg: "bg-teal-600",
    collab: "Engineering contributions, open data, civic tech expertise",
  },
];

const benefits = [
  { icon: <Users size={20} />,     iconBg: "bg-blue-100",   iconColor: "text-blue-500",   title: "Talent pipeline",        body: "Get first access to pre-vetted contributors for internships, full-time roles, and freelance work."         },
  { icon: <BookOpen size={20} />,  iconBg: "bg-violet-100", iconColor: "text-violet-500", title: "Co-brand education",      body: "Your engineers mentor our community. Your name appears on every workshop and resource you contribute to." },
  { icon: <Globe size={20} />,     iconBg: "bg-emerald-100",iconColor: "text-emerald-500",title: "Community visibility",    body: "Logo placement on our site, social media, and at every event. Be part of Rwanda's open-source story."     },
  { icon: <Briefcase size={20} />, iconBg: "bg-orange-100", iconColor: "text-orange-500", title: "Build real products",     body: "Bring a problem. We'll scope, build, and maintain an open-source tool together — you get the asset."        },
  { icon: <Building2 size={20} />, iconBg: "bg-rose-100",   iconColor: "text-rose-500",   title: "Host our events",        body: "Companies that host hackathons and meetups get direct exposure to 100+ engaged developers."                 },
  { icon: <CheckCircle size={20}/>, iconBg: "bg-amber-100",  iconColor: "text-amber-500",  title: "Shape the curriculum",   body: "University partners help co-design contribution tracks that map to real course outcomes."                   },
];

const steps = [
  { n: "01", title: "Reach out",         body: "Send us an email — no formal proposal needed. Just tell us who you are and what you're thinking." },
  { n: "02", title: "We talk",           body: "A 30-minute call. We share what OSK does and what we need. No pitch — just an honest conversation." },
  { n: "03", title: "Agree on scope",    body: "A simple one-page MOU: what each party commits to, what they get, and how long it runs."           },
  { n: "04", title: "Ship together",     body: "Your engineers join sessions, your students get onboarded, your space hosts events."                },
];

const stats = [
  { n: "8+",  label: "Partner organisations",         sub: "Universities, companies, NGOs, and government bodies" },
  { n: "3",   label: "University MOUs signed",         sub: "Formal agreements with Rwanda's leading institutions" },
  { n: "40+", label: "Contributors from partners",    sub: "Students and engineers onboarded through partners"    },
  { n: "2",   label: "Government-backed projects",    sub: "Civic-tech tools recognised at national level"        },
];








const Partners = () => {
  
return (
    <div className="bg-white">

      {/*HERO */}
      <section
        className="relative pt-36 pb-28 px-6 md:px-20 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #f0f4ff 0%, #ffffff 60%)" }}
      >
        {/* blobs */}
        <div className="absolute w-80 h-80 rounded-full -top-16 -left-16 pointer-events-none" style={{ background: "#dbeafe", filter: "blur(60px)", opacity: 0.5 }} />
        <div className="absolute w-60 h-60 rounded-full top-10 right-10 pointer-events-none"  style={{ background: "#ede9fe", filter: "blur(50px)", opacity: 0.4 }} />

        

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
            OSK PARTNER PROGRAMME
          </span>
        </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-950 leading-tight tracking-tight mb-6">
            Turning partnerships into
            <br />
            <span className="text-blue-500">real community impact.</span>
          </h1>

          <p className="text-text-body text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            We collaborate with universities, companies, government bodies, and innovation
            hubs to grow Rwanda's open-source ecosystem and build software that matters.
          </p>

          {/* Two clear CTAs — the primary one is impossible to miss */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#become"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full text-base transition-colors shadow-lg shadow-blue-200"
            >
              Become a Partner <ArrowRight size={16} />
            </a>
            <a
              href="#partners"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-colour text-primary-colour hover:bg-primary-colour font-semibold rounded-full text-base transition-colors hover:text-brand-50"
            >
              View Our Partners
            </a>
          </div>
        </div>
      </section>

      {/* Partners Maarquee */}
      <Partner/>
      

      {/* STAT CARDS */}
      <section className="py-14 px-6 md:px-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl px-6 py-7 hover:border-blue-200 hover:shadow-sm transition-all">
              <p className="text-4xl font-black text-gray-900 mb-1">{s.n}</p>
              <p className="text-base font-bold text-gray-700 mb-1">{s.label}</p>
              <p className="text-sm text-text-supporting leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/*PROGRAMME OVERVIEW  */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex justify-items-center mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-colour/40 bg-primary-colour/10 text-primary-colour text-xs font-semibold tracking-widest uppercase">
            The Program
          </span>
        </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-950 leading-snug mb-5">
              Help us build Rwanda's developer ecosystem.
            </h2>
            <p className="text-text-body text-base leading-relaxed mb-4">
              OSK doesn't grow alone. Our partners provide mentors, space, funding, and the
              real-world problems that make our contributor community thrive. Whether you're
              a university, a company, or a government body — there's a place for you here.
            </p>
            <p className="text-text-body text-base leading-relaxed mb-8">
              We work with <strong className="text-gray-900">{partners.length} organisations</strong> across Rwanda
              and we're actively looking for more. Partnerships are built on genuine
              mutual value — not just logo swaps.
            </p>
            <a
              href="#become"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-blue-500 hover:border-blue-500 transition-colors"
            >
              Find out more about partnering <ArrowRight size={14} />
            </a>
          </div>

          {/* Partner type grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <GraduationCap size={22} className="text-violet-500" />, label: "Universities",  count: partners.filter(p => p.category === "university").length, bg: "bg-violet-50", border: "border-violet-100" },
              { icon: <Building2     size={22} className="text-blue-500" />,   label: "Companies",     count: partners.filter(p => p.category === "company").length,    bg: "bg-blue-50",   border: "border-blue-100"   },
              { icon: <Landmark      size={22} className="text-emerald-500" />,label: "Government",    count: partners.filter(p => p.category === "government").length,  bg: "bg-emerald-50",border: "border-emerald-100" },
              { icon: <Heart         size={22} className="text-rose-500" />,   label: "NGOs & Hubs",  count: partners.filter(p => p.category === "ngo").length,         bg: "bg-rose-50",   border: "border-rose-100"   },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} border ${item.border} rounded-2xl p-6`}>
                <div className="mb-3">{item.icon}</div>
                <p className="text-3xl font-black text-gray-900 mb-1">{item.count}</p>
                <p className="text-sm font-semibold text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INLINE CTA BANNER ─────────────────────────────────────────────── */}
      <div className="px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-500 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-black text-lg leading-snug">Ready to partner with OSK?</p>
              <p className="text-blue-100 text-sm mt-1">We respond to all enquiries within 48 hours.</p>
            </div>
            <a
              href="#become"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-full text-sm hover:bg-blue-50 transition-colors hover:cursor-pointer"
            >
              Get in touch <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      

      {/* ── 8. BENEFITS ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="lg:sticky lg:top-28">
            <EyebrowLabel text="Why Partner with OSK" align="left" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-950 leading-snug mb-5">
              What you get when<br />you build with us.
            </h2>
            <p className="text-text-body text-base leading-relaxed mb-8">
              Partnerships are mutual. We ask for your support and we give something real back —
              every time. We'll work with you to make it valuable on both sides.
            </p>
            <a href="#become"
              className="inline-flex items-center gap-2 text-base font-bold text-primary-colour border-b-2 border-primary-colour pb-0.5 hover:text-brand-800 hover:border-none transition-colors">
              Get in touch about a partnership <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${b.iconBg} ${b.iconColor} mb-4`}>
                  {b.icon}
                </div>
                <h3 className="text-base font-black text-brand-950 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*9. HOW IT WORKS */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="divide-y divide-gray-200">
            <div className="pb-8">
              <EyebrowLabel text="The Process" align="left"/>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-950 leading-snug">
                Four steps.<br />No bureaucracy.
              </h2>
            </div>
            {steps.map((s, i) => (
              <div key={i} className="py-7 flex gap-5">
                <span className="text-2xl font-black text-gray-200 font-mono leading-none w-8 shrink-0">{s.n}</span>
                <div>
                  <h3 className="text-lg font-black text-brand-950 mb-2">{s.title}</h3>
                  <p className="text-text-body text-base leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:pt-24">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <p className="text-sm font-bold text-brand-950 uppercase tracking-widest mb-5">What we look for</p>
              <div className="space-y-4 mb-8">
                {[
                  "Genuine interest in Rwanda's developer ecosystem",
                  "Willingness to commit time, not just logo placement",
                  "Alignment with open source values — transparency, collaboration",
                  "A specific thing you can offer: space, mentors, stipends, or hiring",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-text-body text-base leading-snug ">{item}</p>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Partnerships are open to any organisation — big or small. If you're unsure
                  whether you qualify, just reach out. The worst we can say is <em>not yet.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BECOME A PARTNER — the main CTA*/}
      <section id="become" className="py-20 px-6 md:px-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">

          {/* Section label + headline */}
          <div className="max-w-2xl mb-14">
            <EyebrowLabel text="Become a partner" align="left"/>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-950 leading-tight mb-5">
              Want your organisation<br />
              <span className="text-primary-colour">on this page?</span>
            </h2>
            <p className="text-text-body text-base leading-relaxed">
              We're looking for universities, companies, and government institutions ready to
              invest in Rwanda's open-source ecosystem. No forms. No RFPs. Just a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Contact options — clear and actionable */}
            <div className="space-y-4">
              <a
                href="mailto:opensourcekigali@gmail.com?subject=Partnership Enquiry"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-blue-200 bg-blue-50 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-gray-900 text-base">Email us directly</p>
                  <p className="text-gray-500 text-sm font-mono mt-0.5">opensourcekigali@gmail.com</p>
                </div>
                <ArrowUpRight size={16} className="text-blue-400 group-hover:text-blue-600 transition-colors" />
              </a>

              <NavLink
                to="/contact"
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all group bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shrink-0">
                  <Globe size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-gray-900 text-base">Use the contact form</p>
                  <p className="text-gray-500 text-sm mt-0.5">Takes 2 minutes. We'll route it to the right person.</p>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-gray-700 transition-colors" />
              </NavLink>

              {/* Social proof */}
              <div className="flex items-center gap-3 pt-2 pl-1">
                <div className="flex -space-x-2">
                  {["bg-violet-500","bg-blue-500","bg-emerald-500","bg-orange-500"].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center`}>
                      <Users size={12} className="text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">
                  Joined by <strong className="text-gray-700">{partners.length} organisations</strong> across Rwanda
                </p>
              </div>
            </div>

            {/* Tier guide */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-7">
              <p className="text-sm font-bold text-text-body uppercase tracking-widest mb-5">Not sure which tier fits?</p>
              <div className="space-y-5">
                {(["gold","silver","community"] as PartnerTier[]).map((tier) => (
                  <div key={tier} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${TIER_META[tier].badgeBg}`}>
                      <span className={`w-2.5 h-2.5 rounded-full ${TIER_META[tier].dot}`} />
                    </div>
                    <div>
                      <p className="text-base font-black text-gray-800">{TIER_META[tier].label}</p>
                      <p className="text-sm text-text-supporting mt-0.5 leading-relaxed">
                        {tier === "gold"      ? "Major commitment — deepest collaboration, highest visibility, and strongest mutual benefit."
                        : tier === "silver"   ? "Regular involvement — recurring sessions, mutual visibility, and clear shared deliverables."
                        :                       "Lighter touch — specific shared projects or events, no long-term obligation."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-gray-200">
                <p className="text-sm text-text-supporting">
                  We respond to all partnership enquiries within{" "}
                  <strong className="text-gray-600">48 hours.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. BOTTOM CTA */}
      <section className="py-14 px-6 md:px-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              See what we're building.<br />
              <span className="text-blue-500">Your team could be part of it.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <NavLink to="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-sm transition-colors">
              Browse Projects <ArrowUpRight size={14} />
            </NavLink>
            <NavLink to="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 rounded-full text-sm font-medium transition-colors">
              About OSK
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
