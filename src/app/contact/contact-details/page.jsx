import Eyebrow from '../../../components/ui/Eyebrow';
import SubnavTabs from '../../../components/ui/SubnavTabs';
import ContactInquiryForm from '../../../components/contact/ContactInquiryForm';
import { site } from '../../../data/site.ts';

export const metadata = {
  title: 'Contact Details & Corporate Offices | BluEnergies Ltd.',
  description: 'Corporate headquarters, international offices, investor relations contacts, and executive inquiry directory for BluEnergies Ltd.'
};

export default function ContactDetailsPage() {
  const contactTabs = [
    { label: 'Corporate Offices & Directory', href: '/contact/contact-details/' },
    { label: 'Request for Information Form', href: '/contact/request-for-information/' }
  ];

  return (
    <div className="page-light-wrapper">
      {/* =========================================================
         1. CONTACT HERO & SUBNAV (WARM IVORY TONE)
         Restrained editorial heading, avoiding large dark hero
         ========================================================= */}
      <section className="contact-hero-section tone-ivory" aria-label="Contact Hero">
        <div className="container">
          <SubnavTabs items={contactTabs} activeHref="/contact/contact-details/" theme="light" ariaLabel="Contact Sections" />

          <div className="contact-hero-intro motion-fade-up">
            <Eyebrow text="Get in Touch" theme="light" />
            <h1 className="contact-hero-title">
              Get in Touch with BluEnergies
            </h1>
            <div className="inv-accent-bar" aria-hidden="true"></div>
            <p className="contact-hero-lede">
              Connect directly with corporate management, investor relations, and our registered executive offices in Vancouver and London.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. BALANCED 2-COLUMN CONTACT EXPERIENCE (WARM IVORY TONE)
         Left: Corporate Directory / Right: Clean White Inquiry Form Card
         ========================================================= */}
      <section className="contact-content-section tone-ivory" aria-label="Contact Information and Inquiry Form">
        <div className="container">
          <div className="contact-split-grid motion-fade-up">
            {/* Left Column: Verified Corporate Directory */}
            <div className="contact-directory-panel">
              <div className="contact-dir-block">
                <span className="contact-dir-kicker">CANADIAN HEADQUARTERS</span>
                <h2 className="contact-dir-heading">Corporate Head Office</h2>
                <div className="contact-dir-address">
                  <strong>BluEnergies Ltd.</strong><br />
                  Suite 2200 - 885 West Georgia Street<br />
                  Vancouver, British Columbia, V6C 3E8<br />
                  Canada
                </div>
              </div>

              <div className="contact-dir-divider" aria-hidden="true"></div>

              <div className="contact-dir-block">
                <span className="contact-dir-kicker">UNITED KINGDOM LIAISON</span>
                <h3 className="contact-dir-subheading">European Office</h3>
                <div className="contact-dir-address">
                  Level 1, Devonshire House<br />
                  One Mayfair Place, Mayfair<br />
                  London, W1J 8AJ<br />
                  United Kingdom
                </div>
              </div>

              <div className="contact-dir-divider" aria-hidden="true"></div>

              <div className="contact-dir-block">
                <span className="contact-dir-kicker">EXECUTIVE &amp; INVESTOR COMMUNICATIONS</span>
                <h3 className="contact-dir-subheading">Investor Relations Direct</h3>
                <p className="contact-dir-text">
                  Executive management welcomes inquiries from institutional shareholders, research analysts, and prospective joint-venture partners.
                </p>
                <div className="contact-dir-address">
                  <strong>Primary IR Email:</strong> <a href="mailto:info@blu-energies.com" className="contact-dir-link">info@blu-energies.com</a><br />
                  <strong>Executive Contact:</strong> Craig Steinke (CEO &amp; Executive Chairman)
                </div>
              </div>

              <div className="contact-dir-divider" aria-hidden="true"></div>

              <div className="contact-dir-block">
                <span className="contact-dir-kicker">REGISTRAR &amp; TRANSFER AGENT</span>
                <h3 className="contact-dir-subheading">Computershare Investor Services</h3>
                <p className="contact-dir-text">
                  For inquiries concerning share certificates, DRS statements, change of address, or transfers:
                </p>
                <div className="contact-dir-address">
                  510 Burrard Street, 3rd Floor, Vancouver, BC, V6C 3B9<br />
                  Toll-Free (North America): 1-800-564-6253<br />
                  <a href="https://www.computershare.com" target="_blank" rel="noopener noreferrer" className="contact-dir-link">www.computershare.com &rarr;</a>
                </div>
              </div>

              {/* Verified Digital Profiles */}
              <div className="contact-social-pills">
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                  LinkedIn &rarr;
                </a>
                <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                  X (Twitter) &rarr;
                </a>
                <a href="https://money.tmx.com/en/quote/BLU" target="_blank" rel="noopener noreferrer" className="contact-social-pill">
                  TMX Quote &rarr;
                </a>
              </div>
            </div>

            {/* Right Column: Clean White Form Card */}
            <div className="contact-form-panel">
              <ContactInquiryForm sourcePage="Contact Details" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
