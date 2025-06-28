import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <section>
      <Header/>
      <Sheader/>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Privacy Policy
        </h2>
        <div className="privacy-content">
          <p className="font-inter mb-4" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            This Privacy Policy governs the use of the website{" "}
            <a href="https://www.padmasai.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)" }}>
              www.padmasai.in
            </a>{" "}
            (referred to as “Website” or “Site”), owned and operated by Padma Sai Finance Pvt. Ltd. (“we”, “us”, “our”, or “Company”). By accessing and using the Website, you (“User”) agree to be bound by the terms and conditions outlined herein.
          </p>

          {/* Section 1: User Consent */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            1. User Consent
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            By visiting our Website, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy. If you do not agree, please refrain from using the Site.
          </p>

          {/* Section 2: Information Collection */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            2. Information Collection
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            We do not collect personal information unless you voluntarily provide it. Any personal information shared by you will not be sold or transferred to unaffiliated third parties without your consent, except as explicitly stated at the time of collection or as required under law.
          </p>

          {/* Section 3: Use and Disclosure of Information */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            3. Use and Disclosure of Information
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            Your personal information will be treated as confidential. We do not monitor, edit, or disclose such information to third parties unless:
          </p>
          <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            <li>Required by law, regulation, or legal process.</li>
            <li>Necessary to enforce our terms of use or protect our rights and interests.</li>
            <li>
              Part of a business reorganization, amalgamation, merger, acquisition, or restructuring, in which case the receiving entity will be bound by this Privacy Policy.
            </li>
          </ul>

          {/* Section 4: Communication and Marketing */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            4. Communication and Marketing
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            We will not send unsolicited information unless required for operational, legal, or regulatory reasons. By not opting out, you authorize us to contact you via email regarding updates, services, or promotional material. You may unsubscribe at any time by following the instructions provided in such communications.
          </p>

          {/* Section 5: Statistical Data */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            5. Statistical Data
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            We may collect anonymous statistics that do not personally identify you, to understand user behavior and enhance user experience. Aggregated data may be shared with third parties such as advertisers, without revealing any personal identity.
          </p>

          {/* Section 6: Use by Children and Ineligible Users */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            6. Use by Children and Ineligible Users
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            The Website is intended for use by individuals legally capable of entering into binding contracts under Indian law. Individuals who are legally incompetent (e.g., minors, undischarged insolvents) are not permitted to use this Website.
          </p>

          {/* Section 7: Cookies */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            7. Cookies
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            We may use cookies to enhance your browsing experience. Cookies are stored temporarily during active sessions and do not access any data on your computer. Third-party cookies may also be present, and we are not responsible for their use.
          </p>

          {/* Section 8: No Warranty */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            8. No Warranty
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            All content on the Website is provided on an “as is” and “as available” basis. We do not guarantee the accuracy, completeness, or reliability of any content. We disclaim all warranties, express or implied, including but not limited to fitness for a particular purpose and non-infringement.
          </p>

          {/* Section 9: Limitation of Liability */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            9. Limitation of Liability
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            Padma Sai Finance Pvt. Ltd. shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:
          </p>
          <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            <li>Use or inability to use the Website.</li>
            <li>Errors, omissions, interruptions, defects, or delays.</li>
            <li>Computer viruses or system failures.</li>
          </ul>

          {/* Section 10: External Links */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            10. External Links
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            The Website may contain links to third-party websites for your convenience. We are not responsible for the content, accuracy, legality, or privacy practices of these external sites. Your use of such websites is at your own risk.
          </p>

          {/* Section 11: Information Submission */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            11. Information Submission
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            Any information submitted to us through the Website will become our property. While we endeavor to maintain security, we do not guarantee the safety of email transmissions over the Internet.
          </p>

          {/* Section 12: User Responsibility */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            12. User Responsibility
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            Users are advised to be cautious while entering personal data online and ensure it is not viewable by third parties. This includes, but is not limited to, submitting personal details while applying for our services.
          </p>

          {/* Section 13: Use of Content and Intellectual Property */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            13. Use of Content and Intellectual Property
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            All content, including the company logo, is protected by intellectual property laws. You may not reproduce, modify, distribute, or display any content from the Website without our prior written consent. Any unauthorized use is strictly prohibited and may result in legal action.
          </p>

          {/* Section 14: Product Information and Disclaimer */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            14. Product Information and Disclaimer
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            All information, tools, and product descriptions on the Website are provided for general informational purposes only and are not intended to serve as financial advice. Please contact one of our branches for any specific financial needs or concerns.
          </p>

          {/* Section 15: Hyperlinking and Framing */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            15. Hyperlinking and Framing
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            You may not create a hyperlink to any part of the Website or frame it on any other site without prior written consent from Padma Sai Finance Pvt. Ltd.
          </p>

          {/* Section 16: Changes to the Privacy Policy */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            16. Changes to the Privacy Policy
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            We reserve the right to update or amend this Privacy Policy at any time without notice. Users are encouraged to review this page periodically. Continued use of the Website after such changes constitutes acceptance of the updated policy.
          </p>

          {/* Section 17: Aadhaar Privacy */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            17. Aadhaar Privacy
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            We adhere to the privacy provisions of the Aadhaar Act and related regulations. All Aadhaar-related information, if collected, will be handled with the highest level of confidentiality and security.
          </p>

          {/* Section 18: Location Data */}
          <h3 className="font-montserrat fw-bold mt-5 mb-3" style={{ color: "var(--navy)" }}>
            18. Location Data
          </h3>
          <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            Our app may request access to your location data to provide certain features or functionality such as location-based services, map support. This information is used solely to enhance user experience and is not shared with third parties without your consent. You may choose to enable or disable location services through your device settings at any time.
          </p>
        </div>
      </Container>
      <Footer/>
    </section>
  );
};

export default PrivacyPolicy;