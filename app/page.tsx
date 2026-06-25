import {
  ArrowRight,
  ChevronRight,
  Droplets,
  Leaf,
  Instagram,
  Linkedin,
  Recycle,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import Navbar from "@/components/Navbar";
import { PortfolioCards } from "@/components/PortfolioCards";
import { Reveal } from "@/components/Reveal";
import SmoothScroll from "@/components/SmoothScroll";

const partners = [
  "Bacardi",
  "Diageo",
  "Pernod Ricard",
  "Campari Group",
  "Molson Coors",
  "Brown-Forman",
  "Amrut Distilleries"
];

const awards = [
  {
    image: "/images/award-grand-gold.png",
    level: "Grand Gold",
    detail: "Best Quality & Packaging in the 1001-2000 INR range",
    year: "2024"
  },
  {
    image: "/images/award-gold.png",
    level: "Gold",
    detail: "Best Whisky in the 1001-2000 INR range",
    year: "2024"
  },
  {
    image: "/images/award-gold.png",
    level: "Gold",
    detail: "Best Vodka in the 501-1000 INR range",
    year: "2024"
  },
  {
    image: "/images/award-bronze.png",
    level: "Bronze",
    detail: "One of the best rums in the 501-1000 INR range",
    year: "2024"
  }
];

const portfolio = [
  {
    eyebrow: "Flagship",
    title: "Whisky",
    body: "Soulmate Blu, Single Reserve, Amazing Whisky and Amrut partnership labels built for premiumisation.",
    brands: "Soulmate Blu / Amazing / MaQintosh"
  },
  {
    eyebrow: "Five times filtered",
    title: "Vodka",
    body: "Amazing Vodka with imported German flavours and fast-growing market traction.",
    brands: "Amazing Vodka"
  },
  {
    eyebrow: "Dark and citrus",
    title: "Rum",
    body: "Zumba, Zumba Lemoni and Old Port Rum extend IGL into characterful rum occasions.",
    brands: "Zumba / Old Port"
  },
  {
    eyebrow: "Scale",
    title: "Economy Range",
    body: "High-volume alcobev leadership across Uttar Pradesh and Uttarakhand.",
    brands: "Bunty Bubbly"
  }
];

const metrics = [
  {
    value: <>14<span className="metric-unit">M+</span></>,
    label: "Cases sold — Bunty Bubbly alone, FY 2023–24. Largest selling alcobev brand in India."
  },
  {
    value: "#1",
    label: "Market position in both Uttar Pradesh & Uttarakhand alcobev category. Double-digit share sustained for years."
  },
  {
    value: <><span className="metric-prefix">More than</span> 50%</>,
    label: "Share in Uttarakhand — more than 1 in 2 alcobev bottles sold in the state belongs to IGL."
  },
  {
    value: <>2.1<span className="metric-unit">M</span></>,
    label: "Cases of Old Port Rum sold globally in 2023 — the world's 6th largest selling rum brand."
  }
];

const facilities = [
  {
    title: "Kashipur Distillery",
    location: "Uttarakhand, India",
    image: "/images/manufacturing-kashipur.jpg",
    points: [
      "85,000 BL/PD continuous distillation — commissioned 1999",
      "ENA / Ethanol plant commissioned 2003",
      "IMFL bottling plant operational since 2002",
      "Rum maturation plant for Bacardi (as per MNC SOP) — 2014",
      "New grain-based ENA plant — 2022",
      "Bacardi co-packing — all brands, since 2010"
    ]
  },
  {
    title: "Gorakhpur Plant",
    location: "Uttar Pradesh, India",
    image: "/images/manufacturing-gorakhpur.png",
    points: [
      "Commissioned 2006; expanded significantly over two decades",
      "New grain-based ENA plant commissioned 2022",
      "IMFL production: Single Reserve Whisky & Amazing Vodka — 2021",
      "Zumba Rum series production — 2023",
      "Supplies North & East India markets at scale",
      "1M+ RTD cases capacity per year"
    ]
  }
];

const journey = [
  ["1999", "85,000 BL/PD continuous distillery at Kashipur commissioned"],
  ["2002", "Bottling plant established; IMFL & Alcobev business commenced"],
  ["2003", "ENA / Ethanol plant commissioned at Kashipur"],
  ["2006", "Gorakhpur plant commissioned — North India footprint expands"],
  ["2010", "Bacardi co-packing partnership begins across all brands"],
  ["2014", "Rum maturation plant for Bacardi at Kashipur (MNC SOP standard)"],
  ["2021", "Single Reserve Whisky & Amazing Vodka (plain + flavours) launched"],
  ["2022", "New grain-based ENA plants at Kashipur & Gorakhpur"],
  ["2023", "Zumba Rum series launched. Bunty Bubbly enters India Book of Records"],
  ["2024", "Amrut–IGL partnership. Amazing Whisky & Old Port Rum added to portfolio"]
].map(([year, fact]) => ({ year, fact }));

export default function Home() {
  return (
    <main id="top">
      <SmoothScroll />
      <Navbar />

      <section className="hero-section" id="overview" aria-label="IGL Potable Spirits">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-glass.png"
        >
          <source src="/videos/whiskey-glass.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <Reveal>
            <p className="eyebrow">Potable Spirits Division</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Where Smooth
              <br />
              Meets <span>Sophistication.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-copy">
              Crafting premium spirits with the precision, heritage, and responsibility of a global leader.
              Four decades of excellence powering India&apos;s fastest-growing alcobev portfolio.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="hero-actions">
            <a className="button primary" href="#portfolio">
              Explore Portfolio <ArrowRight size={16} />
            </a>
            <a className="button secondary" href="#investors">
              Investor Overview <ChevronRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="partners-section section-pad" id="partners">
        <div className="page-width section-intro centered">
          <Reveal>
            <p className="eyebrow">Our Partners</p>
            <h2>Global Associations. Trusted Collaborations.</h2>
          </Reveal>
        </div>
        <Reveal className="ticker-shell" aria-label="Partner ticker">
          <div className="ticker-track">
            {[...partners, ...partners].map((partner, index) => (
              <span key={`${partner}-${index}`}>{partner}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="partners-note">
          <p>
            IGL makes over <strong>one million cases</strong> of high-quality IMFL brands for a top multinational
            company, supported by captive ENA and world-class maturation standards.
          </p>
          <a className="text-link" href="#investors">
            Know More <ArrowRight size={14} />
          </a>
        </Reveal>
      </section>

      <section className="recognition-section section-pad" id="recognitions">
        <div className="page-width awards-layout">
          <Reveal className="awards-copy">
            <p className="eyebrow">Recognitions & Accreditations</p>
            <h2>Certified excellence, recognised by the industry.</h2>
            <a className="text-link" href="#portfolio">
              Know More <ArrowRight size={14} />
            </a>
          </Reveal>
          <Reveal delay={0.08} className="awards-bento">
            {awards.map(({ image, level, detail, year }) => (
                <article className="award-card" key={`${level}-${detail}`}>
                  <div className="award-visual" aria-hidden="true">
                    <Image src={image} alt="" width={120} height={260} />
                  </div>
                  <div className="award-copy">
                    <p>{level}</p>
                    <h3>{detail}</h3>
                    <small>{year}</small>
                  </div>
                </article>
              ))}
          </Reveal>
        </div>
      </section>

      <section className="portfolio-section section-pad" id="portfolio">
        <video
          className="portfolio-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/whiskey-on-ice.mp4" type="video/mp4" />
        </video>
        <div className="portfolio-shade" />
        <div className="page-width portfolio-content">
          <Reveal className="portfolio-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Crafted for Every <span>Occasion</span>.</h2>
            <p>A curated portfolio of premium spirits — each a testament to IGL&apos;s legacy of quality and continuous innovation.</p>
          </Reveal>
          <Reveal delay={0.08} className="view-products-card">
            <a className="button secondary" href="#contact">View All Products <ArrowRight size={16} /></a>
          </Reveal>
        </div>
        <PortfolioCards items={portfolio} />
      </section>

      <section className="manufacturing-section section-pad" id="manufacturing">
        <div className="page-width manufacturing-intro">
          <Reveal>
            <p className="eyebrow">Manufacturing Excellence</p>
            <h2>Precision in Every Process. Perfection in Every Drop.</h2>
            <p>
              Two world-class distilleries form the backbone of IGL&apos;s spirits capability — with state-of-the-art
              continuous distillation, rum maturation, and captive grain ENA production.
            </p>
          </Reveal>
        </div>
        <div className="page-width facility-stack">
          {facilities.map((facility, index) => (
            <Reveal delay={index * 0.08} className={`facility-card ${index % 2 === 1 ? "is-reversed" : ""}`} key={facility.title}>
              <div className="facility-copy">
                <p className="facility-location">{facility.location}</p>
                <h3>{facility.title}</h3>
                <ul>
                  {facility.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="facility-media">
                <Image src={facility.image} alt={`${facility.title} manufacturing facility`} width={720} height={480} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="journey-section section-pad" aria-label="Our Journey">
        <div className="page-width journey-intro">
          <Reveal>
            <p className="eyebrow">Our Journey</p>
            <h2>Four Decades of <span>Craft &amp; Growth.</span></h2>
          </Reveal>
        </div>
        <div className="journey-shell">
          <Reveal delay={0.08}>
            <JourneyTimeline items={journey} />
          </Reveal>
        </div>
      </section>

      <section className="investor-section section-pad" id="investors">
        <div className="page-width investor-wrap">
          <Reveal className="investor-heading">
            <p className="eyebrow">Investor Metrics</p>
            <h2>
              <span>Scale. Leadership.</span>
              <br />
              Growth Trajectory.
            </h2>
            <p className="investor-copy">
              India&apos;s young demographic — 60% of the population between 20–35, with 20 million new consumers
              entering annually — provides a structurally favourable backdrop for premium spirits growth. IGL is
              positioned at the centre of this opportunity.
            </p>
            <a className="text-link investor-link" href="#contact">
              Know More <ArrowRight size={14} />
            </a>
          </Reveal>
          <div className="metrics-grid">
            {metrics.map(({ value, label }, index) => (
              <Reveal delay={index * 0.05} className="metric-cell" key={label}>
                <strong>{value}</strong>
                <span className="metric-divider" />
                <p>{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sustainability-section section-pad" aria-label="Sustainability">
        <div className="page-width sustainability-wrap">
          <Reveal className="sustainability-intro">
            <div className="sustainability-copy">
              <p className="eyebrow">Sustainability</p>
              <h2>Responsibility Distilled Into Every Drop.</h2>
            </div>
            <p>
              Sustainable manufacturing practices are embedded across our operations, helping create long-term value
              for both business and society.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="sustainability-cards">
            <div className="sustainability-item">
              <Leaf size={24} />
              <p><strong>65%</strong> Renewable Resource Heritage</p>
            </div>
            <div className="sustainability-item">
              <Zap size={24} />
              <p><strong>30%</strong> Energy Efficiency Initiatives</p>
            </div>
            <div className="sustainability-item">
              <Droplets size={24} />
              <p><strong>50%</strong> Water Stewardship</p>
            </div>
            <div className="sustainability-item">
              <Recycle size={24} />
              <p><strong>90%</strong> Responsible Manufacturing</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="connect-section section-pad" id="contact">
        <div className="page-width connect-wrap">
          <Reveal>
            <h2>Ready to Explore a Partnership?</h2>
            <p>
              Whether you&apos;re an investor, distributor, or brand partner — IGL&apos;s Potable Spirits division has
              the scale, infrastructure, and vision to create exceptional value together.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="connect-actions">
            <a className="button primary" href="mailto:info@indiaglycols.com">
              Contact Investor Relations <ArrowRight size={16} />
            </a>
            <a className="button secondary" href="https://www.indiaglycols.com/" target="_blank" rel="noreferrer">
              Visit IGL Corporate <ChevronRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="page-width disclaimer-strip">
          Alcohol is for adults of legal drinking age only. Please drink responsibly. Do not drink and drive.
        </div>
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Image src="/images/brand-mark-white.png" alt="IGL Potable Spirits" width={58} height={58} />
            <p>India Glycols Limited Potable Spirits Division.</p>
            <div className="socials" aria-label="Social links">
              <a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="https://in.linkedin.com/company/india-glycols-limited" aria-label="LinkedIn"><Linkedin size={16} /></a>
            </div>
          </div>
          <div>
            <h3>Potable Spirits</h3>
            <a href="#overview">Overview</a>
            <a href="#partners">Partners</a>
            <a href="#recognitions">Recognitions</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#manufacturing">Manufacturing</a>
          </div>
          <div>
            <h3>Investor Relations</h3>
            <a href="#investors">Investor Metrics</a>
            <a href="https://www.indiaglycols.com/investors/" target="_blank" rel="noreferrer">Investor Centre</a>
            <a href="https://www.indiaglycols.com/wp-content/uploads/IGL_Spirits_PPT_update.pdf" target="_blank" rel="noreferrer">Spirits Presentation</a>
            <a href="https://www.indiaglycols.com/" target="_blank" rel="noreferrer">Corporate Site</a>
          </div>
          <div>
            <h3>Contact</h3>
            <p>2B, Sector-126, Noida<br />Gautam Budh Nagar<br />Uttar Pradesh 201304</p>
            <a href="tel:+911203096000">+91 120 309 6000</a>
            <a href="mailto:info@indiaglycols.com">info@indiaglycols.com</a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>Copyright {new Date().getFullYear()} India Glycols Limited</span>
          <span><a href="https://www.indiaglycols.com/legal-disclaimer/" target="_blank" rel="noreferrer">Legal Disclaimer</a> / Privacy Policy / Terms</span>
        </div>
      </footer>
    </main>
  );
}
