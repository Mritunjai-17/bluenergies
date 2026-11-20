import Eyebrow from '../../../components/ui/Eyebrow';
import SubnavTabs from '../../../components/ui/SubnavTabs';
import ContactInquiryForm from '../../../components/contact/ContactInquiryForm';

export const metadata = {
  title: 'Request for Information | Investor & Analyst Inquiries | BluEnergies Ltd.',
  description: 'Submit an official information request or investor inquiry to BluEnergies Ltd. executive management and exploration leadership.'
};

export default function RequestForInformationPage() {
  const contactTabs = [
    { label: 'Corporate Offices & Directory', href: '/contact/contact-details/' },
    { label: 'Request for Information Form', href: '/contact/request-for-information/' }
  ];

  return (
    <div className="page-light-wrapper">
      {/* =========================================================
         1. REQUEST HERO & SUBNAV (WARM IVORY TONE)
         ========================================================= */}
      <section className="contact-hero-section tone-ivory" aria-label="Request Information Hero">
        <div className="container">
          <SubnavTabs items={contactTabs} activeHref="/contact/request-for-information/" theme="light" ariaLabel="Contact Sections" />

          <div className="contact-hero-intro motion-fade-up">
            <Eyebrow text="Information Requests" theme="light" />
            <h1 className="contact-hero-title">
              Request Corporate &amp; Technical Information
            </h1>
            <div className="inv-accent-bar" aria-hidden="true"></div>
            <p className="contact-hero-lede">
              Institutional investors, energy sector analysts, and media representatives may request specific exploration documentation, financial materials, and corporate briefings.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
         2. BALANCED 2-COLUMN EXPERIENCE (WARM IVORY TONE)
         ========================================================= */}
      <section className="contact-content-section tone-ivory" aria-label="Information Request Form and Guidelines">
        <div className="container">
          <div className="contact-split-grid motion-fade-up">
            {/* Left Column: Guidelines & Direct Materials */}
            <div className="contact-directory-panel">
              <div className="contact-dir-block">
                <span className="contact-dir-kicker">INQUIRY GUIDELINES</span>
                <h2 className="contact-dir-heading">Analyst &amp; Institutional Protocol</h2>
                <p className="contact-dir-text">
                  To ensure a prompt response, please select the most relevant subject classification from the inquiry menu and indicate whether you are a registered shareholder, securities analyst, media representative, or potential commercial partner.
                </p>
              </div>

              <div className="contact-dir-divider" aria-hidden="true"></div>

              <div className="contact-dir-block">
                <span className="contact-dir-kicker">INSTANT DOCUMENT DOWNLOADS</span>
                <h3 className="contact-dir-subheading">Pre-Packaged Corporate Materials</h3>
                <p className="contact-dir-text">
                  For immediate access, the following core investor documents are available for direct digital download:
                </p>
                <div className="contact-quick-docs">
                  <a
                    href="/resources/presentations/corporate-presentation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-quick-doc-link"
                  >
                    <span>Corporate Presentation (PDF &bull; 4.2 MB)</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href="/resources/factsheets/Blu-Energies-Fact-Sheet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-quick-doc-link"
                  >
                    <span>Investor Fact Sheet (PDF &bull; 1.1 MB)</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href="/resources/reports/research-report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-quick-doc-link"
                  >
                    <span>Independent Research Report (PDF &bull; 1.8 MB)</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <div className="contact-dir-divider" aria-hidden="true"></div>

              <div className="contact-dir-block">
                <span className="contact-dir-kicker">REGULATORY COMPLIANCE NOTE</span>
                <h3 className="contact-dir-subheading">Selective Disclosure Policy</h3>
                <p className="contact-dir-text" style={{ fontSize: '0.84rem', color: '#4A6372', lineHeight: '1.6' }}>
                  BluEnergies adheres strictly to Canadian securities laws governing continuous disclosure and fair disclosure practices. All material exploration and financial information is disseminated simultaneously to the public via SEDAR+ and wire services before being addressed in private correspondence.
                </p>
              </div>
            </div>

            {/* Right Column: Clean White Form Card */}
            <div className="contact-form-panel">
              <ContactInquiryForm sourcePage="Request for Information" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
