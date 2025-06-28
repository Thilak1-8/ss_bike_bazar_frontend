import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { Container, Row, Col, Accordion  } from "react-bootstrap";

const InvestorInfo = () => {
  const investors = [
    {
      name: "Khusbhu Auto Finance Ltd",
      description: "Khushbu Auto Finance Limited (KAFL) is a leading NBFC, registered since 1999 with RBI, currently having status as Asset Finance Company. KAFL is promoted by Atul Auto Limited (AAL), Public Listed Company. The company is rated CARE A (Credit Enhancement) with Stable Outlook from CARE Ratings.",
      image: `${process.env.PUBLIC_URL}/images/logo.png`,
    },
    {
      name: "Muthoot Money Ltd",
      description: "Muthoot Money Limited (MML) is 100% subsidiary of Muthoot Finance. We are one of the fastest emerging companies of the group with a legacy of serving customers over five years. We currently serve through 226 branches. We are a non-deposit taking finance company registered with RBI on 16.05.2007 with head office at Ernakulam and Corporate Office based out of Hyderabad.",
      image: `${process.env.PUBLIC_URL}/images/muthoot-money.png`,
    },
    {
      name: "Shriram Transport Finance Company Ltd",
      description: "Shriram Transport Finance Company Limited (STFC) is an asset financing non-banking finance company. The Company is engaged in providing finance for commercial vehicles and other loans",
      image: `${process.env.PUBLIC_URL}/images/Shriram-Transport-Finance-.jpg`,
    },
    {
      name: "Bajaj Finance Limited",
      description: "Bajaj Finance Limited is a non-banking finance company (NBFC). The Company is engaged in lending and allied activities. Its consumer lending products include two-wheelers and three-wheelers finance, consumer durables finance, digital products finance, retailer finance, salaried personal loans, e-commerce consumer finance, e-commerce seller finance and home loan.",
      image: `${process.env.PUBLIC_URL}/images/bajaj-finance-squarelogo.png`,
    },
    {
      name: "Hero Fincorp",
      description: "Hero FinCorp. Incorporated in December 1991 as Hero Honda FinLease Limited; the restructuring of their parent company Hero MotoCorp Limited, led to their present form as Hero FinCorp Limited. They are present at close to 2000 retail financing touch-points across Hero MotoCorp's network, and have partnered with over 2000 satisfied corporate clients. Going forward, they plan to continuously expand their offerings and geographic presence, whilst offering class leading financial services to all sections of our society.",
      image: `${process.env.PUBLIC_URL}/images/HERO-FINCORP-LIMITED-1024x576.jpg`,
    },
    {
      name: "Bike Bazar Finance",
      description: "Bike Bazar Finance is the India-based non-banking finance companies, Bike Bazar Finance is a specialist in financing pre-owned Two Wheelers.",
      image: `${process.env.PUBLIC_URL}/images/bike_bazaar_logo.png`,
    },
    {
      name: "Vardhaman Bank",
      description: "Vardhaman Bank commenced its operations on 05-04-1990, at Edenbagh, Ramkote, Hyderabad. Over the years the bank has grown in size, strength and in volume of business. Vardhaman Bank believe in excellence in customer service and introduced many customer friendly measures. Today we are one of the top ranking UCB’s in the state of Telangana.",
      image: `${process.env.PUBLIC_URL}/images/vardhaman-Bank.jpeg`,
    },
  ];

  return (
    <section>
      <Header/>
      <Sheader/>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Investor Info
        </h2>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--red)" }}>
          Channel Partners
        </h2>
        <Row>
          {investors.map((investor, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <div className="investor-item text-center">
                <img
                  src={investor.image}
                  alt={`${investor.name} logo`}
                  className="img-fluid rounded mb-3"
                  loading="lazy"
                  style={{ width: "150px", height: "150px", objectFit: "contain" }}
                />
                <h5 className="font-inter fw-bold mb-2" style={{ color: "var(--dark)" }}>
                  {investor.name}
                </h5>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6", fontSize: "0.9rem" }}>
                  {investor.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
          <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--red)" }}>
          Bankers
        </h2>
        <img src="/images/kotak.png" alt="kotakbank" />
        
        {/* Code of Conduct Section */}
        <div className="code-of-conduct-section mt-5">
          <h2 className="font-montserrat fw-bold mb-4 text-center" style={{ color: "var(--navy)" }}>
            Code of Conduct
          </h2>
          <Accordion defaultActiveKey="0">
            {/* Telemarketing Etiquettes */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Telemarketing Etiquettes
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Customers are contacted for undertaking services and other tasks as communicated by the company.
                </p>
                <h4 className="font-montserrat fw-bold mt-4" style={{ color: "var(--dark)" }}>
                  Pre-Call
                </h4>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>No calls prior to 09:30 AM or post 07:00 PM unless specifically requested.</li>
                  <li>No serial dialing.</li>
                  <li>No calling on lists unless cleared by the team leader.</li>
                </ul>
                <h4 className="font-montserrat fw-bold mt-4" style={{ color: "var(--dark)" }}>
                  During Call
                </h4>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Identify ourselves, our company, and our principal.</li>
                  <li>Request permission to proceed; if denied, apologize and politely disconnect.</li>
                  <li>State the reason for the call.</li>
                  <li>Offer to call back on a landline if the call is made to a cell number.</li>
                  <li>Never interrupt or argue.</li>
                  <li>Talk in the language most comfortable to the prospect, if possible.</li>
                  <li>Keep the conversation limited to business matters.</li>
                  <li>Check for understanding of "Most Important Terms and Conditions" if the customer plans to buy the product.</li>
                  <li>Reconfirm next call or visit details.</li>
                  <li>Provide our telephone number, supervisor's name, or bank officer's contact details if requested.</li>
                  <li>Thank the customer for their time.</li>
                </ul>
                <h4 className="font-montserrat fw-bold mt-4" style={{ color: "var(--dark)" }}>
                  Post-Call
                </h4>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Do not call customers who expressed lack of interest for the same offer for the next 3 months.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* Gifts or Bribes and Unethical Behaviour */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Gifts, Bribes, and Unethical Behaviour
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  We must not accept gifts from prospects or bribes of any kind. Any unethical behaviour is strictly prohibited.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Precautions on Visits/Contacts */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Precautions on Visits/Contacts
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <h4 className="font-montserrat fw-bold mt-4" style={{ color: "var(--dark)" }}>
                  General Guidelines
                </h4>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Contact customers at an appropriate time, ordinarily at their place of choice, or at their residence if no place is specified, and at their place of business/occupation if unavailable at residence.</li>
                  <li>Respect customer privacy and their requests to avoid calls at specific times or places.</li>
                  <li>Provide accurate information regarding dues and loan details.</li>
                  <li>Give reasonable notice before repossession of security and its realization.</li>
                  <li>Assist in resolving disputes or differences in a mutually acceptable manner.</li>
                  <li>Maintain decency and decorum during visits for collection of dues.</li>
                  <li>Avoid inappropriate occasions (e.g., bereavement) for making calls/visits to collect dues.</li>
                  <li>Strictly avoid any appearance of criminal intimidation, threats, or violence.</li>
                  <li>Do not falsely represent affiliation with governmental or judicial authorities (e.g., Police, Advocate).</li>
                  <li>Service Providers and employees must be appropriately dressed and well-groomed.</li>
                </ul>
                <h4 className="font-montserrat fw-bold mt-4" style={{ color: "var(--dark)" }}>
                  During Visits
                </h4>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Respect personal space and maintain adequate distance from the prospect.</li>
                  <li>Do not enter the prospect’s residence/office against their wishes.</li>
                  <li>Do not visit in large numbers—maximum one agent and one supervisor, if required.</li>
                  <li>Respect the prospect’s privacy.</li>
                  <li>If the prospect is not present, end the visit and request a call back from the prospect.</li>
                  <li>Provide contact details (telephone number, supervisor’s name, or bank officer’s details) if requested.</li>
                  <li>Limit discussions to business matters and maintain a professional distance.</li>
                </ul>
                <h4 className="font-montserrat fw-bold mt-4" style={{ color: "var(--dark)" }}>
                  While Collecting Payments
                </h4>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Collect payments only through authorized payment channels.</li>
                  <li>Provide authorized payment acknowledgment.</li>
                  <li>Remit collected amounts to the company within 24 hours of payment.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* Do's and Don'ts of Communication */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Do's and Don'ts of Communication
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={6}>
                    <h4 className="font-montserrat fw-bold mt-4" style={{ color: "var(--dark)" }}>
                      Do's
                    </h4>
                    <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                      <li><strong>Appearance:</strong> Well-groomed with a proper haircut, clean shave, or well-maintained beard.</li>
                      <li><strong>Dress Codes:</strong>
                        <ul>
                          <li>Light-colored, well-ironed shirts with sleeves preferably buttoned down.</li>
                          <li>Well-ironed, creased trousers of a dark shade.</li>
                          <li>In winter, a coat or plain pullover.</li>
                          <li>Formal shoes.</li>
                        </ul>
                      </li>
                      <li><strong>Belongings:</strong> Carry Daily Collection Run Rate (DCR) Sheet, Receipt Book, minimal stationery, and Code of Conduct.</li>
                      <li><strong>Ethics:</strong> Do not make verbal or written promises outside your purview without supervisor/company approval.</li>
                      <li><strong>Confidentiality:</strong> Do not divulge unauthorized information (e.g., photocopies of stat cards or previous customer trails) to customers, competitors, or others.</li>
                      <li><strong>Process/Product Discipline:</strong> Perform roles within the framework of issued instructions and specifics of collection actions.</li>
                      <li><strong>Maximize Effectiveness:</strong> Prepare for visits to improve results and document actions taken.</li>
                      <li><strong>Proximity:</strong> Maintain a reasonable distance from the customer, avoid physical contact, and do not obstruct their movement.</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h4 className="font-montserrat fw-bold mt-4" style={{ color: "var(--dark)" }}>
                      Don'ts
                    </h4>
                    <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                      <li><strong>Appearance:</strong> Avoid unkempt appearances (e.g., untidy hair, unshaved look unless well-maintained).</li>
                      <li><strong>Dress Codes:</strong> Do not wear jeans, T-shirts, or open sandals—they are not considered appropriate.</li>
                      <li><strong>Belongings:</strong> Do not carry unnecessary items beyond the specified belongings.</li>
                      <li><strong>Ethics:</strong> Avoid making ad-hoc settlements or promises about product features without authorization.</li>
                      <li><strong>Confidentiality:</strong> Never share sensitive customer data with unauthorized parties.</li>
                      <li><strong>Process/Product Discipline:</strong> Do not deviate from company instructions or processes.</li>
                      <li><strong>Maximize Effectiveness:</strong> Avoid unprepared visits; always document results.</li>
                      <li><strong>Proximity:</strong> Do not invade personal space, make physical contact, or obstruct customer movement.</li>
                    </ul>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Other Important Aspects */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Other Important Aspects
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Always interact with customers and third parties in a polite, civilized, and professional manner, treating them with dignity.</li>
                  <li>Take special care when dealing with female and elderly customers.</li>
                  <li>Do not be accompanied by unauthorized persons during visits.</li>
                  <li>Honor customer requests to avoid calls at specific times or places as far as possible.</li>
                  <li>Service Providers and agents are not allowed to send communications via SMS, Email, WhatsApp, or other social media networks unless through the authorized company communication desk.</li>
                  <li>Provide accurate information regarding dues and loan details.</li>
                  <li>No written or verbal threats, abuse, or rudeness is permitted during interactions with customers or third parties (e.g., family members, relatives, friends).</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* Handling of Letters & Other Communication */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Handling of Letters & Other Communication
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Service Providers and agents are not allowed to send communications via SMS, Email, WhatsApp, or other social media networks unless through the authorized company communication desk.</li>
                  <li>All emails, letters, or electronic messages to customers must be sent through the authorized company communication desk.</li>
                  <li>Ensure accurate information is provided regarding dues and loan details in all communications.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
      <Footer/>
    </section>
  );
};

export default InvestorInfo;