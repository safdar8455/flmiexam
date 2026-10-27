import { Question } from '../../types';

export interface TPGChapter {
  id: number;
  title: string;
  questions: Question[];
}

export const loma290TpgChapters: TPGChapter[] = [
  // ==========================================
  // CHAPTER 1: Organization and Operations
  // ==========================================
  {
    id: 1,
    title: "Chapter 1: Organization and Operations",
    questions: [
      {
        id: 1,
        lo: "1A. Identify and describe stakeholder groups associated with an insurance company.",
        question: "Hammond Mutual Life Insurance Company is organized as a mutual insurance company. This information indicates that Hammond is owned by its",
        options: [
          "stockholders",
          "members",
          "policyowners",
          "board of directors"
        ],
        answer: 2,
        explanation: "A mutual insurance company is owned by its policyowners (contract holders), whereas a stock insurance company is owned by its stockholders (shareholders)."
      },
      {
        id: 2,
        lo: "1A. Identify and describe stakeholder groups associated with an insurance company.",
        question: "An insurance company has many stakeholders, including financial professionals, regulators, reinsurers, and employees. Of these stakeholders, one who also is considered to be a customer of the insurance company is",
        options: [
          "a financial professional",
          "a regulator",
          "a reinsurer",
          "an employee"
        ],
        answer: 0,
        explanation: "In modern insurance operations, financial professionals (agents, brokers, advisors) are internal/distribution customers of the insurer because the insurer provides them with products, services, commissions, and technological tools."
      },
      {
        id: 3,
        lo: "1B. Distinguish between solvency laws and market conduct laws.",
        question: "Two broad categories of insurance regulations are solvency laws and market conduct laws. In general, solvency laws focus on ensuring that insurance companies",
        options: [
          "handle insurance claims in accordance with regulatory requirements",
          "employ fair marketing and sales practices",
          "are able to pay their debts, contractual obligations, and operating expenses on time",
          "address customer complaints in a timely manner"
        ],
        answer: 2,
        explanation: "Solvency laws focus on an insurer's financial stability and capital adequacy so that the insurer remains financially capable of paying all valid claims, contractual benefits, debts, and operating expenses as they come due. Market conduct laws focus on how insurers treat consumers."
      },
      {
        id: 4,
        lo: "1C. Describe the basic levels of management and list the four functions of management.",
        question: "The top level of management in a company is the board of directors. Usually, the chief executive officer (CEO) of a company (is / is not) a member of the company's board of directors. The board of directors usually includes inside directors and outside directors. Outside directors are board members who (hold / do not hold) positions within the company.",
        options: [
          "is / hold",
          "is / do not hold",
          "is not / hold",
          "is not / do not hold"
        ],
        answer: 1,
        explanation: "The CEO almost always serves on the board of directors as an inside director. Outside directors are independent board members who do not hold corporate management positions within the company, providing objective governance."
      },
      {
        id: 5,
        lo: "1C. Describe the basic levels of management and list the four functions of management.",
        question: "The following statement(s) can correctly be made about the levels of management and management functions in a company:\n\nA. Supervisors generally have more freedom in interpreting the directives of top-level management than do middle-level managers.\nB. Typically, the higher the level of management, the less time the manager spends engaging in planning and organizing activities.",
        options: [
          "Both A and B",
          "A only",
          "B only",
          "Neither A nor B"
        ],
        answer: 3,
        explanation: "Both statements are false: (A) Middle managers have more latitude and discretion interpreting top-level strategies into operational plans than front-line supervisors; (B) Higher levels of management spend substantially more time on planning and organizing, while lower levels spend more time directing and leading daily operational activities."
      },
      {
        id: 6,
        lo: "1C. Describe the basic levels of management and list the four functions of management.",
        question: "The management function of planning includes strategic planning and operational planning. Of these types of planning, the one that covers a longer time period is (strategic / operational) planning. The level of management that focuses primarily on operational planning is represented by (company officers / middle-level managers).",
        options: [
          "strategic / company officers",
          "strategic / middle-level managers",
          "operational / company officers",
          "operational / middle-level managers"
        ],
        answer: 1,
        explanation: "Strategic planning spans multi-year horizons (3-5+ years) and is established by senior executive officers. Operational planning covers shorter periods (annual or quarterly) and is led by middle-level managers to implement tactical departmental goals."
      },
      {
        id: 7,
        lo: "1D. Describe organizational concepts such as authority, responsibility, accountability, chain of command, delegation, centralized organizations, and decentralized organizations.",
        question: "In management terminology, accountability refers to",
        options: [
          "an employee's right to make decisions, take action, and direct others to fulfill responsibilities",
          "a duty or a task that has been assigned to an employee",
          "an employee's obligation to answer to the employer for how well he carries out his responsibilities",
          "the process of assigning to another employee the responsibility for completing a specific task"
        ],
        answer: 2,
        explanation: "Accountability is an employee's obligation to answer for the outcomes and performance of assigned duties. Authority is the right to make decisions and direct others; responsibility is the assigned duty itself."
      },
      {
        id: 8,
        lo: "1D. Describe organizational concepts such as authority, responsibility, accountability, chain of command, delegation, centralized organizations, and decentralized organizations.",
        question: "A company can be a centralized organization or a decentralized organization. Compared to a centralized organization, a decentralized organization generally will",
        options: [
          "retain most of the decision-making authority at the top levels of management",
          "have more consistent policies and actions across the organization",
          "take longer to respond to unexpected situations",
          "delegate more authority to middle-level and first-level managers"
        ],
        answer: 3,
        explanation: "Decentralized organizations delegate substantial operational and decision-making authority down to lower-level and field managers, allowing faster and more flexible responsiveness to localized situations."
      },
      {
        id: 9,
        lo: "1E. Recognize typical functional areas for insurance operations and classify functional units as line functions or support functions.",
        question: "The functional areas in an insurance company can be categorized as line functions or support functions. One function that typically is classified as a line function is",
        options: [
          "claim administration",
          "accounting",
          "investments",
          "compliance"
        ],
        answer: 0,
        explanation: "Line functions directly produce, sell, or deliver an insurer's primary core products and contractual promises: product development, marketing/sales, underwriting, and claim administration. Accounting, legal, compliance, and IT are support functions."
      },
      {
        id: 10,
        lo: "1E. Recognize typical functional areas for insurance operations and classify functional units as line functions or support functions.",
        question: "One functional area typically found in insurance companies is the actuarial function. The actuarial staff of a life insurance company primarily is responsible for",
        options: [
          "managing the company's investments according to the guidelines set by the company's management",
          "maintaining the financial records of each of the company's businesses, preparing reports on the company's financial condition, and filing required financial statements",
          "ensuring that the company conducts its operations on a mathematically sound basis, assisting with product development and financial design, and setting the company's reserve liabilities and policy dividend amounts",
          "ensuring that the company classifies proposed life insureds so that their mortality experience falls within the range of the mortality rates assumed at the time of the product's financial design"
        ],
        answer: 2,
        explanation: "Actuaries use mathematical and statistical principles to calculate premium rates, evaluate mortality/morbidity risks, determine required statutory reserve liabilities, and calculate dividend distributions."
      },
      {
        id: 11,
        lo: "1F. Describe traditional ways that insurers organize operations.",
        question: "The following statements are about the advantages and disadvantages of organization by product and organization by function. Select the answer choice containing the correct statement.",
        options: [
          "Organization by function alone becomes more effective as the number of different products a company offers and the size and diversity of the company's markets increase.",
          "One major advantage of organizing operations by function is its simplicity and its focus on the development of managerial and technical skills in each functional area.",
          "One disadvantage of organization by product is that it makes it more difficult for a company to compare different product lines.",
          "Organization by product tends to centralize an organization because it requires product decisions to be made by managers who may not specialize in that product line."
        ],
        answer: 1,
        explanation: "Organizing by function clusters individuals with shared professional disciplines (e.g. all underwriters together, all accountants together), fostering technical depth, specialization, and departmental operational efficiency."
      },
      {
        id: 12,
        lo: "1F. Describe traditional ways that insurers organize operations.",
        question: "At the Cadence Insurance Company, work is distributed according to the company's lines of business: Individual Life, Group Life, and Annuities. Each line of business is responsible for performing actuarial, marketing, and other administration activities for that line of business. A few functions, such as information technology, legal/compliance, and human resources, are handled through centrally administered units. This information indicates that Cadence uses an organizational structure known as organization by",
        options: [
          "distribution system",
          "function",
          "territory",
          "product"
        ],
        answer: 3,
        explanation: "Structuring operations around specific product lines of business (Individual Life, Group Life, Annuities) with dedicated cross-functional units represents organization by product."
      },
      {
        id: 13,
        lo: "1G. Identify the primary characteristics of a profit center and a strategic business unit (SBU).",
        question: "Some insurance companies organize their operations using strategic business units (SBUs). One true statement about this form of organization is that it",
        options: [
          "creates profit centers that generate their own identifiable profits",
          "requires a company to use centralized decision making",
          "allows a company to eliminate the costly duplication of support functions",
          "makes it difficult to identify lines of business that are performing below expectations"
        ],
        answer: 0,
        explanation: "An SBU is an organizational division with its own distinct mission, competitors, and customer base that is treated as a profit center responsible for generating identifiable revenues and profits."
      },
      {
        id: 14,
        lo: "1H. Identify different types of committees and describe the role that committees play in a company's operations.",
        question: "The following statements describe various committees at the Rainbow Insurance Company. Select the answer choice that best describes an ad hoc committee.",
        options: [
          "Rainbow's board of directors formed an investment committee to continually monitor the broad investment policy of the company.",
          "Rainbow's information technology (IT) committee is an interdepartmental committee whose purpose is to oversee IT projects on an ongoing basis and to serve as a source of continuing advice on IT matters.",
          "Rainbow's budget committee is a permanent interdepartmental committee that oversees the annual budget for Rainbow's estimated operating revenues and expenses.",
          "Rainbow's management team formed a temporary committee for the specific purpose of designing a new claim administration system."
        ],
        answer: 3,
        explanation: "An ad hoc committee is a temporary committee convened for a specific, singular purpose or task (such as designing a new system) and disbanded once the project is finished, unlike standing permanent committees."
      },
      {
        id: 15,
        lo: "1I. Explain the holding company structure and list four advantages to insurers of creating such structures.",
        question: "The Dutton Life Insurance Company created the Sandbar Holding Company. Dutton owns and controls Sandbar, which, in turn, owns and controls the Victor Company. One correct statement about this situation is that Sandbar",
        options: [
          "is a subsidiary of Victor",
          "is a downstream holding company",
          "has a controlling interest in Dutton",
          "is an upstream holding company"
        ],
        answer: 1,
        explanation: "Because the parent operating insurer (Dutton) owns the holding company (Sandbar), Sandbar is a downstream holding company situated beneath Dutton in the corporate ownership hierarchy."
      }
    ]
  },

  // ==========================================
  // CHAPTER 2: Corporate Governance, Ethics, and Control
  // ==========================================
  {
    id: 2,
    title: "Chapter 2: Corporate Governance, Ethics, and Control",
    questions: [
      {
        id: 1,
        lo: "2A. Identify laws related to corporate governance; 2E. Define the control function and goals.",
        question: "It is important for companies to have a good system of corporate governance. Elements that are required for good corporate governance include:\n(1) control systems at all levels of the company that provide transparency and accountability to stakeholders\n(2) strategic plans that focus on balancing the needs of all stakeholders\n(3) leadership and an ethical organizational culture that balances risk and rewards\n(4) all of the above",
        options: [
          "control systems at all levels of the company that provide transparency and accountability to stakeholders",
          "strategic plans that focus on balancing the needs of all stakeholders",
          "leadership and an ethical organizational culture that balances risk and rewards",
          "all of the above"
        ],
        answer: 3,
        explanation: "Effective corporate governance requires robust internal controls, stakeholder-balanced strategic planning, and leadership that models an ethical culture balancing risks against rewards."
      },
      {
        id: 2,
        lo: "2B. Identify the managerial activities associated with the management function of directing.",
        question: "Leading and motivating employees are management activities most closely associated with the management function known as",
        options: [
          "planning",
          "organizing",
          "directing",
          "controlling"
        ],
        answer: 2,
        explanation: "Directing (also called leading) involves guiding, supervising, motivating, and communicating with team members so they perform their jobs effectively toward company objectives."
      },
      {
        id: 3,
        lo: "2C. Define ethics and identify ways in which insurers foster a culture of ethical behavior.",
        question: "The following statements are about ways that companies foster an ethical environment that promotes good corporate governance and compliance with laws and regulations. Select the answer choice containing the correct statement.",
        options: [
          "A code of conduct should provide broad guidelines and avoid referring to specific practices that may be encountered in the course of the company's work.",
          "One disadvantage of using a corporate ethics office is that employees who report ethics violations cannot remain anonymous.",
          "To maintain neutrality, an ombudsman typically reports to the board of directors or to the CEO of the company.",
          "Companies should discourage the practice of involving employees in the process of reviewing and revising a code of conduct."
        ],
        answer: 2,
        explanation: "An ombudsman (or ombudsperson) is an impartial, confidential dispute-resolver who reports directly to the board of directors or CEO to preserve independence from operational hierarchy."
      },
      {
        id: 4,
        lo: "2D. Explain how insurers use ethics training to address insider trading, privacy, and confidentiality.",
        question: "The following statement(s) can correctly be made about ethics in the context of education and professional associations:\n\nA. Companies generally do not use education and training to promote ethical behavior to employees.\nB. Professional associations often have codes of conduct or codes of ethics for their members.",
        options: [
          "Both A and B",
          "A only",
          "B only",
          "Neither A nor B"
        ],
        answer: 2,
        explanation: "Statement A is false because companies invest heavily in ethics education. Statement B is true: professional bodies (such as LOMA, SOA, AICPA) enforce codes of conduct for certified practitioners."
      },
      {
        id: 5,
        lo: "2D. Explain how insurers use ethics training to address insider trading, privacy, and confidentiality.",
        question: "Alan Fisher is an employee of the Stance Company, which is based in the United States. Mr. Fisher learned that Stance planned to settle a major lawsuit before Stance released this information to the public. Because the announcement of this news most likely would cause a drop in Stance's stock price, Mr. Fisher sold the shares of Stance stock that he owned. The following statements are about this situation. Three statements are true, and one statement is false. Select the answer choice containing the FALSE statement.",
        options: [
          "Mr. Fisher was engaging in insider trading when he sold his Stance stock based on this information before it was made public.",
          "The information Mr. Fisher acquired is considered to be inside information.",
          "The information Mr. Fisher acquired is considered to be material information.",
          "Although selling his shares of Stance stock was unethical, Mr. Fisher most likely did not commit an illegal act."
        ],
        answer: 3,
        explanation: "Selling stock based on material, nonpublic inside information constitutes illegal insider trading under U.S. federal securities laws; it is both unethical and a serious criminal violation."
      },
      {
        id: 6,
        lo: "2D. Explain how insurers use ethics training to address insider trading, privacy, and confidentiality.",
        question: "Insurance companies have a responsibility to train employees to handle customer-related information in a confidential manner that complies with relevant privacy laws. For example, employees should treat information that they transmit through emails or over the internet as (public / confidential) communications. Employees should consider personally identifiable information (PII) about customers to be (public / confidential) information.",
        options: [
          "public / public",
          "public / confidential",
          "confidential / public",
          "confidential / confidential"
        ],
        answer: 1,
        explanation: "Unencrypted email and open internet channels travel across public networks and should be treated cautiously as public channels, whereas Personally Identifiable Information (PII) is strictly confidential."
      },
      {
        id: 7,
        lo: "2F. Describe the three primary types of control mechanisms in an insurance company and identify examples of each type.",
        question: "Insurance companies use three primary types of control mechanisms: steering controls, concurrent controls, and feedback controls. The type of control that a company applies before a business process begins is known as a (steering / concurrent) control. One example of a feedback control is an (audit / operating manual).",
        options: [
          "steering / audit",
          "steering / operating manual",
          "concurrent / audit",
          "concurrent / operating manual"
        ],
        answer: 0,
        explanation: "Steering (feedforward) controls are proactive policies, rules, and procedures established before a process begins. Feedback controls evaluate results after activities conclude; an audit is a prime example."
      },
      {
        id: 8,
        lo: "2G. Explain how insurers establish performance standards and use control tools to measure performance.",
        question: "The following statement(s) can correctly be made about how companies use performance standards to measure performance:\n\nA. Management must establish valid performance standards for all processes and behaviors that contribute to company goals.\nB. Benchmarking is an activity that requires insurance companies to use only internal performance standards.",
        options: [
          "Both A and B",
          "A only",
          "B only",
          "Neither A nor B"
        ],
        answer: 1,
        explanation: "Statement A is correct. Statement B is false because benchmarking frequently uses external standards to compare performance against industry best practices and peer competitors."
      },
      {
        id: 9,
        lo: "2G. Explain how insurers establish performance standards and use control tools to measure performance.",
        question: "The following statements are about control tools that insurance companies use to measure performance. Select the answer choice containing the correct statement.",
        options: [
          "Companies can use budgets as steering controls, concurrent controls, or feedback controls.",
          "Although audits are useful for evaluating a company's financial information, they cannot be used to evaluate nonfinancial conditions.",
          "Management typically establishes a specific performance level for a performance standard rather than establishing a range of acceptable performance.",
          "Companies typically use exception reports only as a steering control for results that fall within a range of acceptable performance."
        ],
        answer: 0,
        explanation: "Budgets serve as steering controls (initial spending plans), concurrent controls (monitoring ongoing expenses), and feedback controls (post-period variance analyses comparing actual vs. budgeted results)."
      }
    ]
  },

  // ==========================================
  // CHAPTER 3: Legal and Compliance
  // ==========================================
  {
    id: 3,
    title: "Chapter 3: Legal and Compliance",
    questions: [
      {
        id: 1,
        lo: "3A. Distinguish an insurer's legal function from its compliance function.",
        question: "Once an insurance company is incorporated, the company's legal department must obtain a document that grants the insurer the legal authority to conduct insurance business. This document is known as a",
        options: [
          "certificate of authority, and an insurer usually must obtain this document from each jurisdiction in which it plans to conduct business",
          "certificate of authority, and an insurer usually must obtain this document only from the jurisdiction in which it incorporates, even if it plans to conduct business in another jurisdiction",
          "security, and an insurer usually must obtain this document from each jurisdiction in which it plans to conduct business",
          "security, and an insurer usually must obtain this document only from the jurisdiction in which it incorporates, even if it plans to conduct business in another jurisdiction"
        ],
        answer: 0,
        explanation: "A Certificate of Authority licenses an insurer to operate in a jurisdiction. An insurer must obtain a Certificate of Authority from every state/jurisdiction where it plans to conduct business."
      },
      {
        id: 2,
        lo: "3C. List the characteristics of a corporation.",
        question: "Insurance laws in the United States and Canada typically require that insurance companies organize and operate as corporations. One characteristic of a corporation is that the",
        options: [
          "corporation is not a legal entity",
          "corporation cannot be a party in a legal action",
          "corporation continues to exist beyond the death of any or all of its owners",
          "corporation's owners are personally responsible for the debts of the corporation"
        ],
        answer: 2,
        explanation: "A corporation has perpetual succession—it is a legal entity distinct from its owners and continues to exist indefinitely regardless of changes in or the death of its shareholders."
      },
      {
        id: 3,
        lo: "3D. Define a multinational corporation and identify three ways an insurer may enter a foreign market.",
        question: "The Mosaic Insurance Company began business operations in a particular foreign country by entering into an arrangement with a local insurance company in that country. Both companies are otherwise independent businesses that have agreed to undertake a specific project together for a specified time period. This arrangement is known as",
        options: [
          "demutualization",
          "mutualization",
          "a strategic business unit (SBU)",
          "a joint venture"
        ],
        answer: 3,
        explanation: "A joint venture is a collaborative business arrangement where two separate independent entities partner to share capital, risks, and local market expertise for a specific project or timeframe."
      },
      {
        id: 4,
        lo: "3E. Describe the litigation process and the legal department's responsibilities during litigation.",
        question: "(A lawsuit / An audit) is an action brought before a court of law by a party claiming that they have been harmed in some way by another party. At times, a person or organization may initiate this action against a life insurance company. In such a situation, the insurer's legal department may arrange for an independent law firm, often known as (outside counsel / general counsel), to represent the insurer in the legal proceeding.",
        options: [
          "A lawsuit / outside counsel",
          "A lawsuit / general counsel",
          "An audit / outside counsel",
          "An audit / general counsel"
        ],
        answer: 0,
        explanation: "A lawsuit is a formal judicial proceeding. Insurers retain outside counsel (independent litigation law firms) to represent them in specialized courtroom trials."
      },
      {
        id: 5,
        lo: "3F. Explain two alternative dispute resolution (ADR) methods the legal department uses to settle legal disputes.",
        question: "An insurance company's legal department typically tries to settle legal disputes without going to court if at all possible. One common alternative dispute resolution (ADR) method the legal department may use to settle a dispute is one in which an impartial third party evaluates the facts in the dispute and renders a decision that usually is binding on the parties. By definition, this ADR method is known as",
        options: [
          "litigation",
          "conciliation",
          "mediation",
          "arbitration"
        ],
        answer: 3,
        explanation: "In arbitration, an impartial arbitrator hears evidence and issues a formal, legally binding award. In mediation, the mediator merely facilitates voluntary negotiation without binding authority."
      },
      {
        id: 6,
        lo: "3G. Describe typical compliance activities and the three components of a regulatory compliance management program.",
        question: "An insurance company's compliance department employees generally are responsible for ensuring that the company complies with market conduct laws. Typical compliance activities include:\n(1) overseeing the licensing, training, and conduct of financial professionals\n(2) managing a fraud prevention unit\n(3) approving advertisements and sales literature\n(4) all of the above",
        options: [
          "overseeing the licensing, training, and conduct of financial professionals",
          "managing a fraud prevention unit",
          "approving advertisements and sales literature",
          "all of the above"
        ],
        answer: 3,
        explanation: "Compliance functions oversee producer licensing and conduct, combat fraud, and review advertising materials to ensure strict compliance with insurance regulations."
      },
      {
        id: 7,
        lo: "3G. Describe typical compliance activities and the three components of a regulatory compliance management program.",
        question: "An insurance company must establish internal control systems that can assess how well employees are adhering to the company's compliance policies and procedures. Examples of an insurer's internal controls include:\n\nA. Establishing a procedure for a compliance officer to sign off on marketing materials before they are used\nB. Installing a computer program that can detect confidential information in an employee's email",
        options: [
          "Both A and B",
          "A only",
          "B only",
          "Neither A nor B"
        ],
        answer: 0,
        explanation: "Both pre-approval of marketing literature (sign-off control) and automated data-loss prevention software monitoring emails are classic examples of internal compliance controls."
      },
      {
        id: 8,
        lo: "3G. Describe typical compliance activities and the three components of a regulatory compliance management program.",
        question: "A compliance department employee at the Canyon Insurance Company conducted an audit of the records, policies, and procedures of Canyon's claim department. The results of the examination were reported to the audit committee of Canyon's board of directors. The type of audit that Canyon's compliance department employee conducted is known as an",
        options: [
          "ombudsman audit",
          "independent audit",
          "internal audit",
          "external audit"
        ],
        answer: 2,
        explanation: "An internal audit is conducted by an insurer's own staff members to evaluate internal controls and operational compliance, reporting findings to senior leadership or the board's audit committee."
      },
      {
        id: 9,
        lo: "3H. Describe the purpose of a market conduct examination and distinguish between two types in the U.S.",
        question: "The following statements are about the National Association of Insurance Commissioners (NAIC) in the United States. Three statements are true, and one statement is false. Select the answer choice containing the FALSE statement.",
        options: [
          "The NAIC encourages multistate examinations as a way for state insurance departments to share costs.",
          "The NAIC is a public, for-profit association.",
          "The NAIC promotes uniformity of state insurance regulation.",
          "One primary role of the NAIC is to advise state insurance regulators on the most effective and efficient methods for overseeing the market conduct of insurance companies."
        ],
        answer: 1,
        explanation: "The NAIC is a non-governmental, non-profit voluntary association comprising chief insurance regulators from the 50 states, DC, and five U.S. territories; it is NOT a for-profit organization."
      },
      {
        id: 10,
        lo: "3H. Describe the purpose of a market conduct examination and distinguish between two types in the U.S.",
        question: "A market conduct examination of an insurance company determines whether the insurer's market conduct is in compliance with applicable laws and regulations. In the United States, the type of market conduct examination known as a target examination is a",
        options: [
          "limited-scope examination of an insurance company's accounting records",
          "limited-scope examination of one or more specific areas of an insurance company's nonfinancial operations",
          "full-scope examination of all nonfinancial aspects of an insurance company's operations",
          "full-scope examination of all financial aspects of an insurance company's operations"
        ],
        answer: 1,
        explanation: "A target market conduct examination focuses on specific, limited nonfinancial operational areas (such as claims handling or advertising) triggered by consumer complaints or compliance red flags."
      },
      {
        id: 11,
        lo: "3H. Describe the purpose of a market conduct examination and distinguish between two types in the U.S.",
        question: "The following statements are about market conduct examinations in the United States. Select the answer choice containing the correct statement.",
        options: [
          "Most market conduct examinations are comprehensive examinations rather than target examinations.",
          "Target examinations often result from recent changes in applicable regulations but never result from customer complaints.",
          "At the completion of a market conduct examination, the lead examiner prepares a draft report and gives the insurer an opportunity to respond before the examiner prepares a final report.",
          "If sanctions are necessary, the NAIC rather than the state insurance department sanctions the insurer and/or imposes a compliance action plan."
        ],
        answer: 2,
        explanation: "State regulators follow due process: examiners issue a preliminary draft report, giving the insurer a statutory period to review, correct factual errors, or file formal written responses before the final report is published."
      }
    ]
  },

  // ==========================================
  // CHAPTER 4: Human Resources Management
  // ==========================================
  {
    id: 4,
    title: "Chapter 4: Human Resources Management",
    questions: [
      {
        id: 1,
        lo: "4A. Describe how human resources (HR) departments are typically organized and their primary responsibilities.",
        question: "Although the organizational structure of human resources (HR) departments can vary from company to company, functions for which HR typically is responsible include:\nA. Recruitment and selection\nB. Training and development\nC. Compensation and employee benefits\nD. Performance evaluation",
        options: [
          "A, B, C, and D",
          "A, B, and D only",
          "A and C only",
          "B and D only"
        ],
        answer: 0,
        explanation: "HR departments manage the entire employee life cycle, encompassing recruitment/selection, training/development, total rewards (compensation and benefits), and performance evaluation systems."
      },
      {
        id: 2,
        lo: "4B. Describe the HR planning process and factors to consider when staffing multinational companies and outsourcing.",
        question: "A multinational insurance company must decide whether to use home country staffing, host country staffing, or staffing with third-country nationals. One result of using host country staffing to staff an international office is that host country staffing",
        options: [
          "brings in employees who are already familiar with the local culture, customs, and ways of doing business",
          "eliminates the need for training employees on the insurance company's policies and procedures",
          "eliminates communication barriers between the home office and international office",
          "creates an additional expense burden related to moving staff and filling staff openings in the insurance company's home office"
        ],
        answer: 0,
        explanation: "Host country staffing employs citizens of the country where the branch is located. A key advantage is their deep, native familiarity with local language, cultural norms, business practices, and customer expectations."
      },
      {
        id: 3,
        lo: "4B. Describe the HR planning process and factors to consider when staffing multinational companies and outsourcing.",
        question: "The Meriwether Insurance Company has plans for a new call center and is considering outsourcing the entire operation to a service provider, or vendor. Reasons for Meriwether to pursue such an outsourcing arrangement include all of the following EXCEPT",
        options: [
          "taking advantage of the resources the service provider may already possess",
          "avoiding the substantial start-up costs associated with a new call center operation",
          "allowing Meriwether to react swiftly to changing market conditions",
          "increasing Meriwether's control over the operation of the new call center"
        ],
        answer: 3,
        explanation: "Outsourcing typically reduces an insurer's direct operational control over day-to-day call center staffing, processes, and service quality."
      },
      {
        id: 4,
        lo: "4B. Describe the HR planning process and factors to consider when staffing multinational companies and outsourcing.",
        question: "The human resources (HR) department of a life insurance company often uses a tool known as a skills inventory. A skills inventory is defined correctly as a",
        options: [
          "projection of staffing needs that each department provides and that a company integrates into its long-range corporate plans",
          "listing of the various positions in the company that need to be filled, including a description of the duties, responsibilities, and accountabilities for each position",
          "database that contains information about the education, training, and work experience of each employee",
          "record of employee turnover arising from resignations, retirements, and other voluntary and involuntary employee terminations"
        ],
        answer: 2,
        explanation: "A skills inventory is an internal database cataloging current employees' professional competencies, education, certifications, language abilities, and work background to facilitate internal promotion and succession planning."
      },
      {
        id: 5,
        lo: "4C. Describe the steps involved in the employee selection process.",
        question: "Companies may use internal or external sourcing to fill job openings. Compared to internal sourcing, external sourcing typically will result in",
        options: [
          "a decrease in the cost of identifying and hiring new employees",
          "an increase in the level of employee morale",
          "a decreased need for onboarding or orientation",
          "an increase in the potential for the company to develop new ideas"
        ],
        answer: 3,
        explanation: "External sourcing introduces external talent with new perspectives, specialized competencies, and innovative ideas into the organization, though it often costs more and takes longer to onboard."
      },
      {
        id: 6,
        lo: "4D. Identify different types of pre-employment tests.",
        question: "Consider the following information about a pre-employment test that the Victory Company uses for customer service positions:\n• The test measures job-related skills, and applicants who score well on the test tend to do well in the position.\n• Applicants who re-take the same test tend to have different scores on each administration.\nWith regard to the validity and reliability of the test, this information indicates that Victory's pre-employment test is",
        options: [
          "both valid and reliable",
          "valid, but not reliable",
          "reliable, but not valid",
          "neither valid nor reliable"
        ],
        answer: 1,
        explanation: "The test is valid because it measures what it claims to measure and predicts job success; however, because repeated administrations produce inconsistent scores, it lacks reliability."
      },
      {
        id: 7,
        lo: "4D. Identify different types of pre-employment tests.",
        question: "Employers use a variety of pre-employment tests to help them select the best candidate for a job. The type of pre-employment test that attempts to evaluate how well an applicant has mastered the specific skills needed to perform well in a particular position is known as",
        options: [
          "a performance test",
          "an aptitude test",
          "a behavioral tendencies test",
          "a cognitive abilities test"
        ],
        answer: 0,
        explanation: "A performance test (or work sample test) directly assesses an applicant's ability to execute specific hands-on tasks required by the position (e.g. typing speed or processing a sample transaction)."
      },
      {
        id: 8,
        lo: "4E. Compare the advantages and disadvantages of different types of employee training and development programs.",
        question: "The Galloway Insurance Company has a process for introducing a new employee to the company's procedures, policies, culture, and other employees. During the employee's first week on the job, HR staff members present an overview of company policies and the company as a whole. The employee's manager orients the new employee to her workspace, coworkers, departmental procedures, and job responsibilities. This process, which is part of a company's employee training program, is best described as",
        options: [
          "benchmarking",
          "screening",
          "onboarding",
          "mentoring"
        ],
        answer: 2,
        explanation: "Onboarding (also known as orientation) is the systematic process of welcoming, integrating, and acclimating new hires into the company's culture, organizational expectations, and daily job duties."
      },
      {
        id: 9,
        lo: "4E. Compare the advantages and disadvantages of different types of employee training and development programs.",
        question: "The following statements are about the benefits and limitations of various employee training programs. Select the answer choice containing the correct statement.",
        options: [
          "The benefits of self-study training include that it provides each trainee with experience in a real work setting and personalized attention.",
          "One benefit associated with self-study training is that it helps the trainee build relationships with coworkers.",
          "One limitation of on-the-job training is that trainees who make errors may create problems that the trainer must correct.",
          "One limitation of classroom training is that its informal structure can lead to inconsistencies in training."
        ],
        answer: 2,
        explanation: "A key limitation of On-the-Job Training (OJT) is that errors made by trainees during live work must be corrected by supervisors, potentially slowing production and risking service mistakes."
      },
      {
        id: 10,
        lo: "4F. Describe the performance evaluation process and distinguish among various performance evaluation tools that insurers use.",
        question: "The following statements describe situations in which a life insurance company uses a particular performance evaluation method. Select the answer choice that correctly describes the use of the graphic rating scale method.",
        options: [
          "Supervisors at the Kingston Life Insurance Company record examples of positive and negative employee behavior in the workplace—including dates, people involved, and actions taken—and use these examples to evaluate an employee's performance.",
          "At the Windmill Life Insurance Company, supervisors rate each employee's work during the evaluation period based on a number of job-related factors—such as \"is a team player\"—that were identified at the beginning of the period.",
          "The manager of each department at the Maple Life Insurance Company compares department employees with one another and places them in order, from best to worst, based on specific characteristics of their work behavior.",
          "Supervisors at the Custom Life Insurance Company write a description of each employee's job performance during the evaluation period."
        ],
        answer: 1,
        explanation: "Under a graphic rating scale, employees are rated along a graduated continuum (e.g. 1 to 5) across predefined job factors or behavioral attributes (e.g. teamwork, communication)."
      },
      {
        id: 11,
        lo: "4G. Explain HR's role in establishing and administering an insurer's compensation and employee benefits programs.",
        question: "The Diamond Insurance Company offers profit-sharing to its employees. The amount Diamond distributes to employees is based on company profits for the year and is paid (in addition to / instead of) each employee's annual salary. Diamond compensates its financial professionals with (commissions / bonuses), which consist of a fixed percentage of the premium income the financial professionals generate.",
        options: [
          "in addition to / commissions",
          "in addition to / bonuses",
          "instead of / commissions",
          "instead of / bonuses"
        ],
        answer: 0,
        explanation: "Profit-sharing is an incentive distributed in addition to regular base salary. Commissions are production-based compensation paid to agents as a percentage of generated premium income."
      },
      {
        id: 12,
        lo: "4H. Identify specific compliance concerns for HR activities.",
        question: "An HR department typically manages employee separations from the company. Under one type of separation, an employer permanently terminates the employment relationship for cause. This type of separation is known as",
        options: [
          "a layoff",
          "a discharge",
          "an outplacement",
          "job rotation"
        ],
        answer: 1,
        explanation: "A discharge (or firing) is an involuntary, permanent separation initiated by the employer for cause (such as serious misconduct, policy violations, or chronic underperformance)."
      }
    ]
  },

  // ==========================================
  // CHAPTER 5: Information and Technology
  // ==========================================
  {
    id: 5,
    title: "Chapter 5: Information and Technology",
    questions: [
      {
        id: 1,
        lo: "5A. Describe the responsibilities and organization of IT; 5B. Explain how insurers use technology for internal operations.",
        question: "The Pointe Insurance Company recently developed a workflow management system for the claim processing function. Sally Ladd, an information technology (IT) staff member, worked with claim department employees to identify their IT needs and determine the most effective and efficient IT solution for those needs. After Pointe developed the workflow management system, Ms. Ladd performed testing for the new system in the claim environment. With regard to Ms. Ladd's IT role in this situation and the purpose of the workflow management system, Ms. Ladd is best described as a",
        options: [
          "security analyst, and the purpose of the system is to retrieve information from Pointe's transaction processing systems and databases and use the information to support decision making",
          "security analyst, and the purpose of the system is to allow Pointe to control the documents and work activities associated with claim processing",
          "business analyst, and the purpose of the system is to retrieve information from Pointe's transaction processing systems and databases and use the information to support decision making",
          "business analyst, and the purpose of the system is to allow Pointe to control the documents and work activities associated with claim processing"
        ],
        answer: 3,
        explanation: "A business analyst acts as the liaison between business operations and technical developers. A workflow management system automates and controls the sequence of documents and tasks through a business process."
      },
      {
        id: 2,
        lo: "5B. Explain how insurers use technology for internal operations.",
        question: "The following statements describe types of technology that insurance companies use for their internal operations. Select the answer choice that describes an insurer's use of a transaction processing system.",
        options: [
          "The Able Insurance Company's underwriting department uses a knowledge-based computer system that provides expert consultation to underwriters and suggests specific underwriting decisions for specific types of cases.",
          "The Eager Insurance Company's information system includes an organized collection of procedures, software, databases, and devices that Eager uses to perform high-volume, routine, repetitive, and often highly complex business activities.",
          "In its underwriting department, the Heavenly Insurance Company uses a technology that captures, stores, organizes, and retrieves documents that have been created electronically or created on paper and converted to digital images through imaging.",
          "The Ingersoll Insurance Company's databases include software that organizes the data in a database and allows users to obtain the information they need."
        ],
        answer: 1,
        explanation: "A transaction processing system (TPS) processes routine, high-volume daily business transactions (such as premium collections, policy changes, and automated disbursements)."
      },
      {
        id: 3,
        lo: "5B. Explain how insurers use technology for internal operations.",
        question: "One reason for an insurance company to continue to use legacy systems is that such systems typically",
        options: [
          "can be expensive to replace",
          "are easy to maintain without requiring IT staff to have special skills to maintain the systems",
          "increase an insurer's ability to meet consumer expectations of round-the-clock access to policy information and self-service capabilities",
          "provide more contemporary technologies with easy access to the data in the legacy system"
        ],
        answer: 0,
        explanation: "Replacing deeply integrated core legacy administration platforms can cost hundreds of millions of dollars and disrupt ongoing operations, prompting insurers to maintain them via middleware."
      },
      {
        id: 4,
        lo: "5B. Explain how insurers use technology for internal operations.",
        question: "Business intelligence (BI) systems typically provide insurance companies with a number of reports, including exception reports, which are generated when an established performance standard (is / is not) met. Some BI systems use an application that combines information from multiple BI sources into a single, easy-to-read electronic format that identifies positive and negative trends. This application, known as a (screen pop / dashboard), allows managers to constantly monitor key performance indicators (KPIs) and proactively manage the processes associated with the indicators.",
        options: [
          "is / screen pop",
          "is / dashboard",
          "is not / screen pop",
          "is not / dashboard"
        ],
        answer: 3,
        explanation: "Exception reports highlight anomalies where performance standards are NOT met. A dashboard visualizes multi-source data and KPIs on a single graphical display."
      },
      {
        id: 5,
        lo: "5B. Explain how insurers use technology for internal operations.",
        question: "The following statements are about cloud computing and the benefits it offers to insurance companies. Three statements are true, and one statement is false. Select the answer choice containing the FALSE statement.",
        options: [
          "Cloud computing provides an insurer with access to networks, platforms, applications, or other IT elements that can extend the company's existing IT capabilities.",
          "Cloud computing offers insurers massive computing power at historically low cost.",
          "Cloud computing eliminates the data security, compliance, and other risks that are present when insurers operate and maintain their computing resources in-house.",
          "Cloud computing provides an insurer with a subscription-based or pay-per-use service that is delivered in real time over the internet."
        ],
        answer: 2,
        explanation: "Cloud computing does NOT eliminate security, compliance, or privacy risks; in fact, relying on third-party cloud hosting introduces new vendor governance and regulatory compliance responsibilities."
      },
      {
        id: 6,
        lo: "5B. Explain how insurers use technology for internal operations.",
        question: "Consider the role of technology in the following situations in which Nathan Boyd used the internet and the telephone to obtain information from the Starry Life Insurance Company:\n• Mr. Boyd visited Starry's website to obtain information about his insurance policy. To log in to his account, Mr. Boyd had to enter his username and password and then answer a security question correctly.\n• A computer-based technology answered Mr. Boyd's telephone call, greeted him with a recorded message, and prompted him to enter his policy number using the telephone keypad. After the system presented several options, Mr. Boyd used the keypad to select the option to request a payment history. The system retrieved the information and provided it to Mr. Boyd.\nSelect the answer choice that correctly identifies the security feature on Starry's website that verified Mr. Boyd's identity and the type of computer telephony integration (CTI) that answered Mr. Boyd's call and provided him with information.",
        options: [
          "intrusion detection software / a chatbot",
          "intrusion detection software / an interactive voice response (IVR) system",
          "two-factor authentication / a chatbot",
          "two-factor authentication / an interactive voice response (IVR) system"
        ],
        answer: 3,
        explanation: "Entering credentials plus answering security challenges exemplifies multi-factor/two-factor verification. Automated telephony answering with touch-tone menu navigation is an Interactive Voice Response (IVR) system."
      },
      {
        id: 7,
        lo: "5D. Explain how insurers manage data and use data analytics to obtain meaningful information.",
        question: "Insurance companies that possess large quantities of high quality, enterprise-wide data can engage in data analytics, which is the",
        options: [
          "process of using technology to convert printed characters or graphics into digital images that can be stored electronically",
          "computer-aided application of mathematical and statistical methods to data to uncover previously unknown trends and patterns in the data",
          "process of screening data from various sources for duplications and editing the data into a standard format",
          "consolidation of data from data warehouses and operational systems across lines of business, geographies, or operations"
        ],
        answer: 1,
        explanation: "Data analytics applies statistical and mathematical algorithms to structured and unstructured corporate data to discover actionable insights, predictive trends, and behavioral patterns."
      },
      {
        id: 8,
        lo: "5E. Describe the threat of cybercrime and provide examples of cybersecurity tools that insurers use.",
        question: "The Concord Insurance Company protects the information in its information systems by means of encryption. The function of encryption is to",
        options: [
          "encode data so that only an authorized person possessing a required tool can decode the data",
          "monitor system traffic and identify sequences of commands indicating that an unauthorized user is attempting to access Concord's systems",
          "install security patches on Concord's software to correct any security issues",
          "create an electronic barrier between the public and private areas of Concord's information systems"
        ],
        answer: 0,
        explanation: "Encryption transforms readable plaintext into encoded ciphertext using cryptographic algorithms so that only authorized parties with the decryption key can access it."
      },
      {
        id: 9,
        lo: "5E. Describe the threat of cybercrime and provide examples of cybersecurity tools that insurers use.",
        question: "Trudy Wyler received an email message that purported to be from the Vector Bank, though actually the email was sent by a cybercriminal. Ms. Wyler clicked on a link in the email and was directed to a website that appeared to be Vector's legitimate website, but was in fact fake. When Ms. Wyler entered the user name and password for her Vector bank account on the fake website, the criminal used this information to steal money from Ms. Wyler's account. In this situation, Ms. Wyler was the victim of a type of cybercrime known as",
        options: [
          "hacking",
          "malware",
          "phishing",
          "ransomware"
        ],
        answer: 2,
        explanation: "Phishing involves sending deceptive emails masquerading as reputable organizations to trick individuals into disclosing confidential credentials on fraudulent websites."
      }
    ]
  },

  // ==========================================
  // CHAPTER 6: Financial Management
  // ==========================================
  {
    id: 6,
    title: "Chapter 6: Financial Management",
    questions: [
      {
        id: 1,
        lo: "6A. Describe how insurers organize their financial operations.",
        question: "An insurance company's financial management starts with its board of directors. The two standing committees of an insurer's board of directors that directly affect the financial management of the company are the",
        options: [
          "investment committee and the corporate communications committee",
          "investment committee and the audit committee",
          "product development committee and the corporate communications committee",
          "product development committee and the audit committee"
        ],
        answer: 1,
        explanation: "The investment committee (guiding portfolio asset allocation and risk parameters) and the audit committee (overseeing financial reporting accuracy and internal controls) directly steer financial governance."
      },
      {
        id: 2,
        lo: "6A. Describe how insurers organize their financial operations.",
        question: "The Gardenia Life Insurance Company has four departments that contribute to Gardenia's financial management: accounting and financial reporting, treasury operations, investment management, and auditing. If Gardenia is typical of most insurance companies, the title of the person who heads the accounting and financial reporting function is",
        options: [
          "treasurer, and the person in this position oversees internal controls for Gardenia's financial operations",
          "treasurer, and the person in this position oversees the maintenance and management of records and reports for all of Gardenia's cash transactions",
          "controller, and the person in this position oversees the timely and accurate collection and reporting of Gardenia's financial data",
          "controller, and the person in this position monitors the investments for a specific line of Gardenia's business and makes sure funds are available when needed to support that line of business"
        ],
        answer: 2,
        explanation: "The corporate controller (comptroller) leads accounting and financial reporting, ensuring accurate ledger maintenance, statutory filings, and GAAP statements. The treasurer manages cash flow and bank liquidity."
      },
      {
        id: 3,
        lo: "6B. Distinguish among basic types of financial strategies.",
        question: "Financial strategies may be characterized as aggressive strategies, conservative strategies, or a combination of aggressive and conservative strategies. One activity that is consistent with a relatively aggressive financial strategy is",
        options: [
          "investing in relatively low-risk assets",
          "expanding into new lines of business",
          "developing traditional products for existing markets",
          "using existing distribution systems"
        ],
        answer: 1,
        explanation: "Aggressive financial strategies pursue higher growth and profit targets by entering new lines of business, launching innovative complex products, or investing in higher-yielding volatile assets."
      },
      {
        id: 4,
        lo: "6C. Identify and describe common risks that life insurance companies face.",
        question: "The Remembrance Insurance Company recently discovered that a flaw in its claim fraud detection system allowed several fraudulent claims to go undetected. Remembrance had mistakenly paid these fraudulent claims, which increased its expenses. Remembrance addressed this situation by improving its claim fraud detection system and providing claim analysts with additional training. The type of risk that Remembrance faced in this situation is known as",
        options: [
          "default risk",
          "liquidity risk",
          "market risk",
          "operational risk"
        ],
        answer: 3,
        explanation: "Operational risk is the risk of financial loss resulting from inadequate or failed internal processes, people, systems, or external operational disruptions."
      },
      {
        id: 5,
        lo: "6C. Identify and describe common risks that life insurance companies face.",
        question: "Insurance companies encounter risks in every aspect of conducting business. One common risk that insurers face is policyholder behavior risk, which is a type of",
        options: [
          "product risk that arises from the choices that policyowners make, such as the risk that surrender patterns will be higher than an insurer anticipated",
          "product risk associated with the risk that an insurer's actual experience with an insurance product will be significantly worse than expected when the product was priced",
          "investment risk related to the uncertainty arising from fluctuations in market interest rates",
          "investment risk arising from changes in currency exchange rates"
        ],
        answer: 0,
        explanation: "Policyholder behavior risk is a product risk stemming from decisions contract owners make regarding lapses, premature surrenders, policy loans, or payout option elections."
      },
      {
        id: 6,
        lo: "6D. Explain how insurers manage risk through diversification, hedging, expense management, and ERM.",
        question: "Insurance companies use various techniques to manage risks, including expense management, hedging, and diversification. The following statements are about these risk management techniques. Select the answer choice containing the correct statement.",
        options: [
          "Generally, the lower an insurer's expenses in relation to its revenues, the greater the risk that the insurer will fail to achieve its financial goals.",
          "An insurer can hedge product risk by buying and selling investments and products that have similar, rather than complementary, risks.",
          "An insurer can achieve diversification by spreading a portfolio of risks across many risk characteristics to reduce the effect of any one risk.",
          "Although expense management is one way that insurers manage risks, regulators and other external stakeholders do not measure how insurers manage their expenses."
        ],
        answer: 2,
        explanation: "Diversification spreads risk across diverse asset classes, geographic regions, industries, and product lines so that an adverse event in one area does not threaten overall solvency."
      },
      {
        id: 7,
        lo: "6D. Explain how insurers manage risk through diversification, hedging, expense management, and ERM.",
        question: "The following statements describe various risk management techniques. Select the answer choice that best represents an insurance company's use of a risk management technique known as hedging.",
        options: [
          "The Alistair Life Insurance Company places reinsurance with several reinsurers to reduce its dependence on any one reinsurance company.",
          "The Brumby Life Insurance Company analyzes costs and establishes cost-effective policies and procedures.",
          "The Charm Life Insurance Company stores backups of data in several places so that Charm can continue operating in the event of an emergency, such as a natural disaster, in one location.",
          "The Dodgen Life Insurance Company sells one type of life insurance product that tends to offset the potential loss from the sale of another life insurance product."
        ],
        answer: 3,
        explanation: "Hedging involves taking an offsetting position in an asset, derivative, or product whose financial outcome moves opposite to another, counterbalancing potential losses (e.g., life insurance and annuities offsetting mortality/longevity risks)."
      },
      {
        id: 8,
        lo: "6D. Explain how insurers manage risk through diversification, hedging, expense management, and ERM.",
        question: "To minimize the negative impact of various risks, most insurance companies practice enterprise risk management (ERM). ERM is, by definition, a system that",
        options: [
          "coordinates the administration of an insurer's asset portfolio and its liability portfolio so as to manage risk and still earn an adequate level of return",
          "identifies, quantifies, and manages risks from both potential threats and potential opportunities",
          "manages an insurer's resources to meet the company's financial goals, especially the overall goals of solvency and profitability",
          "consists of all the activities an insurer undertakes to use its capital to generate profits while managing risk"
        ],
        answer: 1,
        explanation: "Enterprise Risk Management (ERM) is a comprehensive, organization-wide framework that identifies, quantifies, and holistically manages risks from both potential hazards and strategic opportunities across all silos."
      },
      {
        id: 9,
        lo: "6E. Explain the importance of capital management and list ways an insurer raises and uses capital.",
        question: "Increasing profitability is a major financial goal of most companies. For an insurance company, profitability is best described as a measure of the company's",
        options: [
          "financial success—when its revenues exceed its expenses—during a relatively short period of time",
          "ability to maintain capital and surplus at or above the minimum standard amount required by law",
          "overall success in generating positive returns for its owners and its ability to increase the wealth or value of the company over time",
          "ability to convert its assets to cash for an approximation of their underlying value"
        ],
        answer: 2,
        explanation: "Profitability measures an insurer's long-term capability to generate competitive financial returns for shareholders/members and steadily enhance enterprise value and equity."
      },
      {
        id: 10,
        lo: "6E. Explain the importance of capital management and list ways an insurer raises and uses capital.",
        question: "The following statements are about managing an insurance company's capital. Three statements are true, and one statement is false. Select the answer choice containing the FALSE statement.",
        options: [
          "If an insurer's assets decrease or its liabilities increase, then the company's capital increases.",
          "Generally, an insurer can reduce its risk of insolvency by holding a large amount of capital relative to its financial obligations.",
          "A company's capital is equal to the amount by which the company's assets exceed its liabilities.",
          "By maintaining a strong capital position, an insurer can obtain benefits such as potential brand enhancement."
        ],
        answer: 0,
        explanation: "Capital equals Assets minus Liabilities. If assets decrease or liabilities increase, capital DECREASES, not increases."
      },
      {
        id: 11,
        lo: "6E. Explain the importance of capital management and list ways an insurer raises and uses capital.",
        question: "The Solidarity Insurance Company recently sold part of its business and used the sale proceeds to buy back shares of its own stock. With regard to using and raising capital, it is correct to say that Solidarity's selling part of its business was a way to",
        options: [
          "use capital, and buying back shares of Solidarity stock also was a way to use capital",
          "use capital, and buying back shares of Solidarity stock was a way to raise capital",
          "raise capital, and buying back shares of Solidarity stock was a way to use capital",
          "raise capital, and buying back shares of Solidarity stock also was a way to raise capital"
        ],
        answer: 2,
        explanation: "Divesting a business line generates cash proceeds, which raises capital. Repurchasing company shares distributes cash back to investors, which uses capital."
      },
      {
        id: 12,
        lo: "6F. Identify the basic cash inflows and cash outflows for an insurance company.",
        question: "Financial managers at the Snapdragon Life Insurance Company recorded the following cash flow activities:\n• Cash Flow A: Snapdragon paid policy benefits to policyowners and beneficiaries\n• Cash Flow B: Snapdragon purchased stocks for its investment portfolios\n• Cash Flow C: Snapdragon made payments for utility expenses for its home office\n• Cash Flow D: Snapdragon obtained external financing to expand into new markets\nOf these four activities, the one that resulted in a cash inflow for Snapdragon was",
        options: [
          "Cash Flow A",
          "Cash Flow B",
          "Cash Flow C",
          "Cash Flow D"
        ],
        answer: 3,
        explanation: "Securing external financing (borrowing or issuing equity) brings cash into the insurer (cash inflow). Paying benefits, buying securities, and paying operating expenses are cash outflows."
      },
      {
        id: 13,
        lo: "6G. Identify primary sources of financial info; 6J. Describe financial reporting to monitor solvency.",
        question: "In the United States, most insurance companies prepare both an Annual Statement and an annual report. The (Annual Statement / annual report) is designed to meet the specific requirements of insurance regulators. The accounting requirements for the Annual Statement are (stricter / more lenient) than the accounting requirements for preparing the insurer's annual report.",
        options: [
          "Annual Statement / stricter",
          "Annual Statement / more lenient",
          "annual report / stricter",
          "annual report / more lenient"
        ],
        answer: 0,
        explanation: "The NAIC Annual Statement is prepared strictly for state regulators under Statutory Accounting Principles (SAP), which enforce much stricter, highly conservative solvency standards than general public annual reports."
      },
      {
        id: 14,
        lo: "6H. Describe an income statement and a balance sheet and show how it relates to the basic equation.",
        question: "Wanda Crew, an accountant for the Terra Insurance Company, is preparing the company's year-end financial statements. One of the values Ms. Crew will report is Terra's premium income. With regard to whether Ms. Crew will report premium income as a revenue or an expense on Terra's balance sheet or income statement, it is correct to say that premium income is classified as",
        options: [
          "a revenue, which Ms. Crew will report on Terra's balance sheet",
          "a revenue, which Ms. Crew will report on Terra's income statement",
          "an expense, which Ms. Crew will report on Terra's balance sheet",
          "an expense, which Ms. Crew will report on Terra's income statement"
        ],
        answer: 1,
        explanation: "Premium income is an insurer's primary revenue source and is reported on the Income Statement (Statement of Operations), showing earnings across the accounting period."
      },
      {
        id: 15,
        lo: "6H. Describe an income statement and a balance sheet and show how it relates to the basic equation.",
        question: "The basic accounting equation expresses the relationship between a company's assets, liabilities, and capital and surplus. This equation states that a company's",
        options: [
          "Assets = Liabilities + Capital and surplus",
          "Assets = Capital and surplus – Liabilities",
          "Capital and surplus = Liabilities + Assets",
          "Liabilities = Capital and surplus – Assets"
        ],
        answer: 0,
        explanation: "The universal accounting equation is: Assets = Liabilities + Capital and Surplus (or Owner's Equity)."
      },
      {
        id: 16,
        lo: "6I. Explain how insurance regulators use current ratio and capital and surplus ratio.",
        question: "One tool that insurance regulators use to monitor insurer solvency over the short term is the current ratio, which is calculated as",
        options: [
          "capital and surplus divided by total liabilities",
          "total liabilities divided by capital and surplus",
          "current liabilities divided by current assets",
          "current assets divided by current liabilities"
        ],
        answer: 3,
        explanation: "The Current Ratio = Current Assets / Current Liabilities. It evaluates short-term liquidity by assessing whether liquid assets can cover upcoming obligations."
      }
    ]
  },

  // ==========================================
  // CHAPTER 7: Accounting, Treasury Operations, and Auditing
  // ==========================================
  {
    id: 7,
    title: "Chapter 7: Accounting, Treasury Operations, and Auditing",
    questions: [
      {
        id: 1,
        lo: "7A. Explain how the organization of accounting, treasury, and auditing is based on segregation of duties.",
        question: "The following statements are about ways in which employees at the Hunter Life Insurance Company use accounting information and interact with the accounting department. Select the answer choice that correctly describes how Hunter uses a principle known as segregation of duties for its accounting function.",
        options: [
          "Hunter's internal stakeholders, such as its officers and directors, use accounting information to conduct strategic planning and financial management.",
          "Hunter's accounting department works with actuaries to complete the financial statements the company must file with insurance regulators.",
          "Hunter employees in underwriting, claims, and customer service evaluate accounting information and use it as a guide for day-to-day operations and for long-term planning.",
          "Hunter employees in accounting approve payments for expenses and contractual benefits, and employees in treasury operations disburse those payments."
        ],
        answer: 3,
        explanation: "Segregation of duties separates authorization, recording, and custody. Having accounting approve payouts while treasury disburses the funds prevents unauthorized payments and fraud."
      },
      {
        id: 2,
        lo: "7B. Give examples of how internal and external stakeholders use an insurer's financial information.",
        question: "The users of an insurance company's accounting information generally fall into two groups: internal stakeholders and external stakeholders. One example of an external stakeholder who uses an insurer's accounting information is",
        options: [
          "a policyowner of the insurer",
          "a company-affiliated financial professional of the insurer",
          "a member of the insurer's board of directors",
          "the insurer's manager of product development"
        ],
        answer: 0,
        explanation: "Policyowners, independent rating agencies, regulators, and creditors are external stakeholders who review published financial statements to judge financial strength."
      },
      {
        id: 3,
        lo: "7C. Distinguish between financial accounting and management accounting.",
        question: "One difference between financial accounting and management accounting is that management accounting",
        options: [
          "reports only on the business as a whole, whereas financial accounting can focus on the business as a whole or on individual parts of the business",
          "is not subject to specific accounting principles, whereas financial accounting is subject to specific accounting principles",
          "is required by law, whereas financial accounting is not required by law",
          "provides data for an insurer's external stakeholders, whereas financial accounting provides data for the insurer's internal stakeholders"
        ],
        answer: 1,
        explanation: "Financial accounting must strictly adhere to regulatory accounting frameworks (GAAP, SAP, IFRS) for external reporting. Management accounting is designed for internal decision-making and is not mandated by statutory rules."
      },
      {
        id: 4,
        lo: "7C. Distinguish between financial accounting and management accounting.",
        question: "The following statements are about types of financial accounting in life insurance companies. Select the answer choice containing the correct statement.",
        options: [
          "General accounting includes the basic accounting operations that all businesses undertake, including payroll accounting and disbursement accounting.",
          "General accounting involves only the financial transactions related to the policies an insurer has issued, such as accounting for policy loans and claim payments.",
          "Investment accounting includes transactions related to premium taxes that are calculated on premium income an insurer earns.",
          "Premium accounting systems are used only for policy transactions, such as premium payments, and do not include accounting for commissions paid to financial professionals."
        ],
        answer: 0,
        explanation: "General accounting covers universal administrative accounting operations common to all enterprises (e.g. general ledger, accounts payable, payroll, vendor disbursements)."
      },
      {
        id: 5,
        lo: "7D. Distinguish among accounting standards: GAAP, SAP, and IFRS.",
        question: "In accounting, the process of (1) classifying items in a transaction as assets, liabilities, capital, surplus, revenues, or expenses, and (2) recording the transaction in a company's accounting records is known as",
        options: [
          "recognition",
          "auditing",
          "budgeting",
          "valuation"
        ],
        answer: 0,
        explanation: "Recognition is the formal recording of an economic item into financial statements under its appropriate financial classification."
      },
      {
        id: 6,
        lo: "7D. Distinguish among accounting standards: GAAP, SAP, and IFRS.",
        question: "The following statements are about financial accounting standards that insurance companies use when conducting their financial accounting activities, including generally accepted accounting principles (GAAP), statutory accounting practices, and international financial reporting standards (IFRS). Select the answer choice containing the correct statement.",
        options: [
          "All life insurance companies in the United States must follow GAAP when preparing the Annual Statement and other financial reports they must submit to state regulators.",
          "GAAP focuses on demonstrating to regulators that an insurer is able to meet its policy obligations even under adverse circumstances, whereas statutory accounting practices focus on demonstrating the insurer's profitability.",
          "Foreign companies whose stock is traded in the United States are required to use IFRS when preparing their financial statements.",
          "GAAP-based financial statements use standardized definitions, valuation methods, and formats, which allow interested stakeholders to evaluate the financial performance of one company from year to year and to compare the financial performance of several companies that use GAAP."
        ],
        answer: 3,
        explanation: "GAAP standardizes accounting metrics so that investors, analysts, and public markets can compare financial performance and profitability across companies and over time."
      },
      {
        id: 7,
        lo: "7D. Distinguish among accounting standards: GAAP, SAP, and IFRS.",
        question: "Financial accounting standards vary according to whether they are based on an accounting principle known as the going-concern concept or whether they follow accounting conservatism. Select the answer choice that correctly identifies whether the underlying premise of generally accepted accounting principles (GAAP) and statutory accounting practices is the going-concern concept or accounting conservatism.",
        options: [
          "GAAP: going-concern concept / Statutory: accounting conservatism",
          "GAAP: going-concern concept / Statutory: going-concern concept",
          "GAAP: accounting conservatism / Statutory: accounting conservatism",
          "GAAP: accounting conservatism / Statutory: going-concern concept"
        ],
        answer: 0,
        explanation: "GAAP assumes the business is a going concern that will operate indefinitely into the future. Statutory Accounting Practices (SAP) emphasize conservatism, focusing on immediate liquidation solvency to protect policyholders."
      },
      {
        id: 8,
        lo: "7E. Describe primary components of financial statements.",
        question: "One financial statement that insurance companies prepare for financial reporting purposes provides information about the insurer's cash receipts (inflows), cash disbursements (outflows), and the net change in cash during a specified accounting period. This type of financial statement is known as",
        options: [
          "a balance sheet",
          "an income statement",
          "a cash flow statement",
          "a statement of owners' equity"
        ],
        answer: 2,
        explanation: "The Cash Flow Statement reports cash inflows from operations, investments, and financing, subtracting cash outflows to show the net change in liquid cash over the period."
      },
      {
        id: 9,
        lo: "7F. Describe the categories of assets in a life insurer's Annual Statement.",
        question: "For purposes of reporting assets on the Annual Statement, life insurance companies in the United States divide their assets into three categories: admitted assets, partially admitted assets, and nonadmitted assets. Select the answer choice that correctly identifies the asset classification of investment-grade securities and premiums over 90 days overdue.",
        options: [
          "admitted assets / partially admitted assets",
          "admitted assets / nonadmitted assets",
          "partially admitted assets / partially admitted assets",
          "partially admitted assets / nonadmitted assets"
        ],
        answer: 1,
        explanation: "Under SAP, investment-grade securities are admitted assets included on the statutory Balance Sheet. Overdue premiums beyond 90 days cannot be liquidated readily and are classified as nonadmitted assets."
      },
      {
        id: 10,
        lo: "7G. Explain how insurance companies use budgeting and cost accounting as control mechanisms.",
        question: "The Harmony Life Insurance Company conducted a variance analysis of its budget at the end of the accounting period. In comparing actual amounts to budgeted amounts, Harmony discovered the following information about premium income and operating expenses:\n• Premium Income: Budgeted $10.0M | Actual $10.5M\n• Operating Expenses: Budgeted $8.3M | Actual $8.8M\nWith regard to favorable variances and unfavorable variances, it is correct to say that Harmony's premium income for the accounting period experienced",
        options: [
          "a favorable variance, and Harmony's operating expenses also experienced a favorable variance",
          "a favorable variance, and Harmony's operating expenses experienced an unfavorable variance",
          "an unfavorable variance, and Harmony's operating expenses experienced a favorable variance",
          "an unfavorable variance, and Harmony's operating expenses also experienced an unfavorable variance"
        ],
        answer: 1,
        explanation: "Higher revenue than budgeted ($10.5M vs $10.0M) is a favorable variance. Higher expenses than budgeted ($8.8M vs $8.3M) represents an unfavorable expense variance."
      },
      {
        id: 11,
        lo: "7H. Describe treasury operations activities of cash management and liquidity management.",
        question: "Staff in treasury operations at most insurance companies typically perform all of the following activities EXCEPT",
        options: [
          "managing the risks associated with foreign exchange rates",
          "uncovering and tracking fraudulent activities in cash transactions",
          "purchasing and selling long-term investments",
          "ensuring that cash is available to pay obligations on time"
        ],
        answer: 2,
        explanation: "Purchasing and selling long-term investment assets (such as corporate bonds, equities, and real estate) is managed by the Investment Management department, not treasury operations."
      },
      {
        id: 12,
        lo: "7I. Describe the purpose of auditing and identify examples of internal controls.",
        question: "One example of a typical internal control in a life insurance company is",
        options: [
          "the receipt and recording of cash by a single employee in treasury operations",
          "the purchase and reporting of an investment by a single employee in investment operations",
          "the processing of a claim and disbursement of a claim payment by a claim analyst in claim administration",
          "an internal audit conducted by an auditor to evaluate the adequacy of controls over cash and other assets"
        ],
        answer: 3,
        explanation: "Internal audits systematically evaluate internal controls, test segregation of duties, and detect process vulnerabilities across the organization."
      }
    ]
  },

  // ==========================================
  // CHAPTER 8: Investment Management
  // ==========================================
  {
    id: 8,
    title: "Chapter 8: Investment Management",
    questions: [
      {
        id: 1,
        lo: "8A. Describe necessary elements in an insurer's investment policy.",
        question: "An insurance company's investment policy typically incorporates the insurer's investment objectives, which include maintaining an adequate interest spread. By definition, an insurer's interest spread is the",
        options: [
          "return the insurer earns on an investment when it sells the investment for more than its purchase price",
          "difference between the rate of return the insurer earns on its investments and the interest rate credited to products on behalf of customers",
          "measure of the insurer's financial success during a relatively short period of time",
          "excess of the insurer's revenues over its expenses during a defined period"
        ],
        answer: 1,
        explanation: "The interest spread is the margin between the yield earned on the insurer's asset portfolio and the rate credited to policyowners' accumulated cash values and annuity contracts."
      },
      {
        id: 2,
        lo: "8B. Explain the risk-return trade-off and the risk premium.",
        question: "Generally, there is (a direct / an inverse) relationship between risk and potential return. According to the risk-return trade-off, all other factors remaining equal, the greater the risk associated with an investment, the (lower / greater) the potential return on the investment.",
        options: [
          "a direct / lower",
          "a direct / greater",
          "an inverse / lower",
          "an inverse / greater"
        ],
        answer: 1,
        explanation: "The risk-return trade-off reflects a direct relationship: investors demand higher potential returns as compensation for accepting higher levels of investment risk."
      },
      {
        id: 3,
        lo: "8B. Explain the risk-return trade-off and the risk premium.",
        question: "For a specific investment, the risk-free rate of return is equal to 2%, and the insurer's risk premium for this investment is 5%. This information indicates that the insurer's required rate of return on this investment is equal to",
        options: [
          "2%",
          "3%",
          "5%",
          "7%"
        ],
        answer: 3,
        explanation: "Required Rate of Return = Risk-Free Rate + Risk Premium = 2% + 5% = 7%."
      },
      {
        id: 4,
        lo: "8C. Describe how diversification decreases investment risk.",
        question: "The following statements are about ways in which insurance companies manage their investments. Select the answer choice containing the correct statement.",
        options: [
          "When an insurer has a diversified investment portfolio, a low return from one type of investment may have only a minimal effect on the return of the insurer's entire portfolio.",
          "Insurance companies diversify their investments by investing in a single type of asset or in a single type of industry within an investment portfolio.",
          "Because of the relationship between risk and return, an insurer that takes on considerable risk when making an investment can expect to earn a relatively low return on the investment.",
          "Insurance companies can avoid risk entirely by holding onto their funds instead of investing their funds."
        ],
        answer: 0,
        explanation: "Diversification mitigates unsystematic risk: losses in one asset or industry sector are counterbalanced by steady returns in other uncorrelated asset classes."
      },
      {
        id: 5,
        lo: "8D. Explain the potential advantages and drawbacks to insurers of various types of investments.",
        question: "The Journey Insurance Company purchased a newly issued bond with a 6 percent coupon rate. The bond will mature in 30 years, at which time the bond issuer will pay the bondholder $1,000. The following statements are about the bond that Journey purchased. Select the answer choice containing the correct statement.",
        options: [
          "Journey's bond will provide an annual income of $600.",
          "The par value of Journey's bond equals $1,000.",
          "If market interest rates fall to 5 percent one year after the bond was issued, the coupon rate on Journey's bond most likely would fall to 5 percent.",
          "A rise in market interest rates one year after the bond was issued would make Journey's bond more valuable in the marketplace."
        ],
        answer: 1,
        explanation: "The maturity payment specified on the face of the bond ($1,000) is the par (face) value. The 6% annual coupon provides $60 per year ($1,000 × 0.06), which does not change if market rates fluctuate."
      },
      {
        id: 6,
        lo: "8D. Explain the potential advantages and drawbacks to insurers of various types of investments.",
        question: "Many life insurance companies invest in mortgages. One characteristic of mortgages as an investment is that mortgages typically are",
        options: [
          "a more liquid investment than are bonds",
          "rated by a mortgage rating agency, which makes it relatively easy for insurers to evaluate the default risk a mortgage presents",
          "considered to be variable-income investments because an insurer receives an unpredictable stream of payments",
          "secured debt instruments that tend to protect an insurer's investment in the event of a default"
        ],
        answer: 3,
        explanation: "Mortgages are secured loans backed by collateral (real estate property). In the event of borrower default, the lender can foreclose on the pledged property to recover the investment."
      },
      {
        id: 7,
        lo: "8D. Explain the potential advantages and drawbacks to insurers of various types of investments.",
        question: "Two types of investments that insurance companies purchase are stocks and bonds. With respect to how stock investments compare to bond investments, it generally is correct to say that",
        options: [
          "stock prices tend to fluctuate far less than do bond prices",
          "stocks are considered to be a way for the issuing companies to raise money to fund operations, whereas bonds are not considered to be a way for the issuing companies to raise money",
          "stockholders have a lower priority claim than do bondholders on the issuing company's assets if the issuing company goes out of business",
          "the cash flows associated with stocks are more regular than the cash flows of bonds"
        ],
        answer: 2,
        explanation: "Bondholders hold debt obligations and have higher liquidation priority than equity shareholders if the issuing corporation dissolves."
      },
      {
        id: 8,
        lo: "8D. Explain the potential advantages and drawbacks to insurers of various types of investments.",
        question: "The following statements are about life insurance policy loans. Select the answer choice containing the correct statement.",
        options: [
          "When an insured person dies, insurers deduct any outstanding policy loan and accrued interest from the benefit payable.",
          "Policy loans require the borrower to make systematic payments to repay the loans.",
          "Policy loans generally have contractual maturity dates.",
          "Insurers charge an interest rate on policy loans that is higher than the rates of interest they earn on their other investments."
        ],
        answer: 0,
        explanation: "Policy loans do not require mandatory repayments or have maturity dates; if unpaid, the outstanding principal plus accrued interest is subtracted directly from death proceeds or surrender payouts."
      },
      {
        id: 9,
        lo: "8E. Describe characteristics that determine the degree of risk associated with a bond.",
        question: "Consider the following types of bonds that the Barfield Life Insurance Company and the Garrison Life Insurance Company purchased:\n• Barfield purchased a bond that allows Barfield to exchange the bond for shares of the issuing company's common stock if Barfield chooses to do so.\n• Garrison purchased a bond that is backed only by the full faith and credit of the bond issuer.\nSelect the answer choice that correctly identifies the types of bonds that Barfield and Garrison purchased.",
        options: [
          "bond with a call provision / debenture",
          "debenture / bond with a call provision",
          "convertible bond / debenture",
          "convertible bond / bond with a call provision"
        ],
        answer: 2,
        explanation: "A convertible bond allows the holder to convert debt into common stock. An unsecured bond backed solely by the issuer's general creditworthiness without pledged collateral is a debenture."
      },
      {
        id: 10,
        lo: "8F. Explain the differences between an active and a passive management strategy.",
        question: "Consider the following investment strategies that a company might use:\n• Investment Strategy 1—A company carefully selects securities and plans to hold them for long periods, or until they mature, are called, or default.\n• Investment Strategy 2—A company considers every investment in the investment portfolio as potentially tradable, if trading the investment would improve the portfolio's performance.\nSelect the answer choice that correctly identifies each type of investment strategy.",
        options: [
          "active management strategy / passive management strategy",
          "active management strategy / active management strategy",
          "passive management strategy / passive management strategy",
          "passive management strategy / active management strategy"
        ],
        answer: 3,
        explanation: "Strategy 1 is a buy-and-hold passive management strategy. Strategy 2 represents active management seeking to outperform benchmarks through tactical trading."
      },
      {
        id: 11,
        lo: "8G. Distinguish between debt and equity securities and primary vs secondary markets.",
        question: "The following statements relate to how insurance companies evaluate and manage investments. Three statements are true, and one statement is false. Select the answer choice containing the FALSE statement.",
        options: [
          "An investment's rate of return incorporates both the gain in the value of the asset and any income earned on the asset.",
          "When evaluating a specific investment, a portfolio manager typically considers the investment's cash flow patterns and the liquidity of the investment.",
          "An insurer's investment management system generates various asset/liability management reports that provide feedback on investment performance.",
          "After making a decision to buy or sell an investment, a portfolio manager handles the actual purchase or sale transaction."
        ],
        answer: 3,
        explanation: "Portfolio managers make strategic asset allocation decisions, but specialized securities traders execute the actual buy/sell orders in the marketplace."
      },
      {
        id: 12,
        lo: "8G. Distinguish between debt and equity securities and primary vs secondary markets.",
        question: "Portfolio managers at the Violet Life Insurance Company purchased securities issued by the Meteor Corporation that represent a debt owed by Meteor. With regard to types of securities, this information indicates that Violet's portfolio managers most likely purchased Meteor Corporation",
        options: [
          "stocks, which are a type of debt security",
          "stocks, which are a type of equity security",
          "bonds, which are a type of debt security",
          "bonds, which are a type of equity security"
        ],
        answer: 2,
        explanation: "Bonds are debt securities representing borrowed money that the issuer is obligated to repay with interest. Stocks represent equity ownership."
      },
      {
        id: 13,
        lo: "8G. Distinguish between debt and equity securities and primary vs secondary markets.",
        question: "Insurance companies and other large investors can purchase new issues of securities through a method in which the issuer of the security sells the security directly to a limited number of investors, typically institutional investors. In this type of transaction, the issuer and the investors negotiate the price and terms of the sale. This method of issuing new securities is known as a",
        options: [
          "private placement, which takes place in the primary market",
          "private placement, which takes place in the secondary market",
          "public offering, which takes place in the primary market",
          "public offering, which takes place in the secondary market"
        ],
        answer: 0,
        explanation: "Direct negotiated sales of newly issued securities to institutional investors without public registration constitute private placements, which occur in the primary capital market."
      },
      {
        id: 14,
        lo: "8H. Distinguish between an insurer's general account and separate account portfolios.",
        question: "Insurance companies maintain their assets in two primary types of investment portfolios: a general account portfolio and separate account portfolios. A life insurance company maintains a separate account in order to",
        options: [
          "support its contractual obligations to owners of guaranteed products, such as traditional whole life insurance and fixed annuities",
          "maintain a portfolio of low-risk investments that provide a predictable stream of income",
          "support its variable products, such as variable life insurance policies and variable annuities",
          "comply with regulations that impose a prudent person approach to making decisions about which assets to include in its investment portfolio"
        ],
        answer: 2,
        explanation: "Separate accounts hold assets funding non-guaranteed variable contracts (such as variable universal life and variable annuities) where investment performance and market risk pass through directly to the policyowner."
      }
    ]
  },

  // ==========================================
  // CHAPTER 9: Marketing
  // ==========================================
  {
    id: 9,
    title: "Chapter 9: Marketing",
    questions: [
      {
        id: 1,
        lo: "9A. Identify and describe the essential elements of a marketing plan.",
        question: "With regard to a company that divides its marketing activities between corporate marketing and agency marketing, it most likely is correct to say that corporate marketing oversees marketing campaigns directed primarily to (external customers / financial professionals). It is also correct to say that representatives from marketing typically (participate / do not participate) in product development.",
        options: [
          "external customers / participate",
          "external customers / do not participate",
          "financial professionals / participate",
          "financial professionals / do not participate"
        ],
        answer: 0,
        explanation: "Corporate marketing targets the broader consumer public and brand image, while agency marketing supports financial professionals. Marketing specialists actively participate in cross-functional product development teams."
      },
      {
        id: 2,
        lo: "9A. Identify and describe the essential elements of a marketing plan.",
        question: "Most marketing plans include the following essential elements: tactical/action programs, an executive summary, a situation analysis, marketing objectives, marketing strategies, budgets, and evaluation and control methodology. A tactical/action program is best described as",
        options: [
          "an evaluation of the internal and external environmental factors that affect the insurer's marketing operations",
          "a summary of the plan's proposed actions, the costs associated with these actions, and the intended results of the actions",
          "a description of the marketing activities that are to be performed, the people who are responsible for performing the activities, and the results that the activities are expected to produce",
          "a schedule of projected expenses and revenues that shows how funds will be allocated to various elements of the marketing mix and how funds will be divided among the activities associated with each element"
        ],
        answer: 2,
        explanation: "A tactical/action program outlines specific operational marketing tasks: what activities will be performed, who will perform them, completion deadlines, and expected measurable results."
      },
      {
        id: 3,
        lo: "9B. Identify and describe the four variables of the marketing mix and the Four Cs model.",
        question: "An insurance company's marketing goals typically involve managing four primary marketing variables—promotion, price, product, and distribution—which are collectively known as the marketing mix. The marketing mix variable known as promotion is correctly described as the",
        options: [
          "collection of activities and resources involved in making products available for customers to buy",
          "goods, services, or ideas that a seller offers to customers to satisfy a need",
          "collection of activities that companies use to make customers aware of their product offerings and to influence customers to purchase, and distributors to sell, a product",
          "monetary value of whatever customers give in exchange for a product"
        ],
        answer: 2,
        explanation: "Promotion encompasses advertising, personal selling, sales promotion, and public relations designed to communicate value and persuade customers and intermediaries."
      },
      {
        id: 4,
        lo: "9C. Distinguish among three promotional tools insurers use to convey messages.",
        question: "Many insurance companies use both institutional advertising and product advertising. Consider the following television advertisements of the Granby Insurance Company:\n• Advertisement A promotes Granby's pre-need funeral insurance policy that is designed for senior citizens.\n• Advertisement B portrays hikers in a dense forest relying on a compass to find their way to safety. Granby compares its financial strength and stability to the compass by assuring customers they can rely on Granby to help them reach a secure financial future.\nWith regard to the type of advertising Granby is using in these advertisements, it is correct to say that",
        options: [
          "both Advertisement A and Advertisement B are examples of product advertising",
          "Advertisement A is an example of product advertising, and Advertisement B is an example of institutional advertising",
          "Advertisement A is an example of institutional advertising, and Advertisement B is an example of product advertising",
          "both Advertisement A and Advertisement B are examples of institutional advertising"
        ],
        answer: 1,
        explanation: "Ad A promotes a specific insurance contract (pre-need policy = product advertising). Ad B builds corporate goodwill, financial strength, and overall brand identity (institutional advertising)."
      },
      {
        id: 5,
        lo: "9D. Explain positioning and branding and identify the bases on which insurers distinguish themselves.",
        question: "The Idlewood Insurance Company established a distinct place for itself in customers' minds by building its image as \"the highest-rated insurance company in customer service.\" Idlewood supports this image in its marketing campaign and promotional materials. This information indicates that Idlewood established a distinct place for itself through a process known as",
        options: [
          "positioning",
          "market intelligence",
          "competitive intelligence",
          "market identification"
        ],
        answer: 0,
        explanation: "Positioning is the strategic process of creating and maintaining a distinct, compelling image and value proposition for an organization or product in the minds of target customers relative to competitors."
      },
      {
        id: 6,
        lo: "9E. Describe how insurers use market segmentation and target marketing.",
        question: "(Market segmentation / Target marketing) is the process of dividing large, diverse markets into smaller submarkets that are more alike and need similar products or marketing mixes. One such submarket for insurance products is the (organizational / consumer) market, which consists of individuals who buy insurance products and services for personal or family use.",
        options: [
          "Market segmentation / organizational",
          "Market segmentation / consumer",
          "Target marketing / organizational",
          "Target marketing / consumer"
        ],
        answer: 1,
        explanation: "Market segmentation divides a broad heterogeneous market into homogeneous segments. The consumer market consists of retail individuals purchasing protection for family or personal security."
      },
      {
        id: 7,
        lo: "9E. Describe how insurers use market segmentation and target marketing.",
        question: "The Lakeview Insurance Company divided the market for insurance products into smaller submarkets. One submarket that Lakeview identified consists of 35- to 45-year-old divorced single mothers who earn more than $60,000 per year. This information indicates that Lakeview used a type of market segmentation known as",
        options: [
          "single-variable segmentation based on purchase behaviors",
          "single-variable segmentation based on demographics",
          "multivariable segmentation based on purchase behaviors",
          "multivariable segmentation based on demographics"
        ],
        answer: 3,
        explanation: "Age (35-45), gender/family status (divorced single mothers), and annual income (>$60,000) are multiple demographic characteristics, representing multivariable demographic segmentation."
      },
      {
        id: 8,
        lo: "9F. Distinguish among three primary types of target marketing strategies.",
        question: "The Tally Insurance Company offers a number of life insurance products designed to appeal to different segments of the total market for life insurance. Tally uses a separate marketing mix for each market segment. This information indicates that Tally uses a target marketing strategy known as",
        options: [
          "mass marketing",
          "concentrated marketing",
          "differentiated marketing",
          "undifferentiated marketing"
        ],
        answer: 2,
        explanation: "Differentiated marketing (multisegment strategy) targets multiple distinct market segments, formulating tailored marketing mixes and customized products for each."
      },
      {
        id: 9,
        lo: "9G. Describe different sources that insurers use for obtaining marketing information.",
        question: "The following statements are about sources that insurance companies use to obtain marketing information. Select the answer choice containing the correct statement.",
        options: [
          "An insurer generally is prohibited from collecting clickstream data from its website for the purpose of analyzing customer behavior on the website.",
          "Information obtained from internal databases generally costs more than information an insurer obtains from other sources.",
          "Insurers can apply data analytics to information that was collected for purposes other than marketing to provide marketing managers with information they can use for a variety of purposes.",
          "Insurers obtain most of their competitive and market intelligence from private sources rather than from public sources."
        ],
        answer: 2,
        explanation: "Insurers leverage administrative data originally collected for billing, underwriting, or customer service to perform predictive marketing analytics, cross-sell modeling, and retention tracking."
      },
      {
        id: 10,
        lo: "9H. Identify elements in the internal and external marketing environments.",
        question: "An insurance company's marketing environment consists of all the elements in the company's internal and external environments that directly or indirectly affect the company's ability to carry out its marketing activities. Factors found in an insurer's internal environment include",
        options: [
          "a change in economic factors",
          "the insurer's financial resources",
          "an increase in competition",
          "regulatory changes"
        ],
        answer: 1,
        explanation: "An insurer's financial resources, capital, corporate culture, technological capabilities, and personnel are internal environmental factors controlled by the company."
      },
      {
        id: 11,
        lo: "9I. Describe marketing control tools.",
        question: "Insurance companies use control tools such as profitability analysis to measure marketing performance. By definition, profitability analysis is the process of",
        options: [
          "examining sales numbers to evaluate a company's current performance",
          "tying marketing costs to particular marketing activities to help managers decide if a cost is worth the value of the activity",
          "systematically examining and appraising a company's marketing goals, strategies, tactical/action programs, organizational structure, and personnel on a broad basis",
          "determining which company operations are losing or making money by comparing the sales an activity generates with the expenses incurred to make those sales"
        ],
        answer: 3,
        explanation: "Profitability analysis evaluates the financial returns of specific distribution channels, product lines, marketing campaigns, or territories by comparing generated revenues against incurred costs."
      }
    ]
  },

  // ==========================================
  // CHAPTER 10: Product Development
  // ==========================================
  {
    id: 10,
    title: "Chapter 10: Product Development",
    questions: [
      {
        id: 1,
        lo: "10A. Describe three product development strategies.",
        question: "The Bounty Life Insurance Company is developing a product that is new to Bounty's product mix, but is similar to a popular product that the Haddon Insurance Company sells. By seeking to simulate Haddon's successful product, Bounty is using a product development strategy known as a",
        options: [
          "product innovation strategy",
          "product implementation strategy",
          "product improvement strategy",
          "product imitation strategy"
        ],
        answer: 3,
        explanation: "A product imitation strategy (fast-follower strategy) analyzes a competitor's already proven product and develops a comparable product to capitalize on demonstrated consumer demand."
      },
      {
        id: 2,
        lo: "10B. Describe the steps in the product development process.",
        question: "The following statement(s) can correctly be made about the product development process for insurance companies:\n\nA. Most insurance companies have a dedicated product development team.\nB. Product development may encompass anything from a small change in an existing product to the development of a completely new product.",
        options: [
          "Both A and B",
          "A only",
          "B only",
          "Neither A nor B"
        ],
        answer: 0,
        explanation: "Both statements are true: Insurers maintain cross-functional product development teams, and product development projects range from minor feature/rider updates to completely novel contracts."
      },
      {
        id: 3,
        lo: "10C. Explain how insurers generate and screen ideas for new products and use concept testing.",
        question: "One activity in the product development process is a weeding-out process designed to evaluate new product ideas quickly and inexpensively and to select those ideas that warrant further investigation. This quick evaluation of new product ideas is known, by definition, as",
        options: [
          "concept testing",
          "screening",
          "idea generation",
          "market analysis"
        ],
        answer: 1,
        explanation: "Idea screening is the preliminary filter that rapidly discards unfeasible, unviable, or strategically misaligned concepts before committing substantial analytical resources."
      },
      {
        id: 4,
        lo: "10D. Describe the five elements of comprehensive business analysis.",
        question: "One element of a comprehensive business analysis is a feasibility study. During a feasibility study, an insurance company's product development team typically",
        options: [
          "evaluates all of the environmental factors that might affect sales of a product",
          "conducts research to determine from an operational and technical viewpoint how viable it would be for the company to produce and offer a product and how the new product would impact the company's existing products",
          "specifies a product's basic characteristics, features, benefits, issue limits, age limits, commission and premium structure, and operational and administrative requirements",
          "develops preliminary sales and financial forecasts that include estimates of potential unit sales, revenues, costs, and profits for a proposed product"
        ],
        answer: 1,
        explanation: "A feasibility study examines operational, technical, systems, and administrative capabilities to confirm whether the company can realistically build, underwrite, and service the product."
      },
      {
        id: 5,
        lo: "10E. Explain the design and development stage of product development.",
        question: "During the design and development of a new product, an insurance company may establish a field advisory council to provide feedback on the product's design. A typical field advisory council is composed primarily of",
        options: [
          "the insurer's financial professionals",
          "the insurer's policyowners",
          "consumers in the target market who are not customers of the insurer",
          "insurance regulators and state insurance department employees"
        ],
        answer: 0,
        explanation: "A field advisory council gathers top-performing agents, brokers, and sales managers to provide frontline feedback on marketability, competitiveness, and client acceptance of proposed features."
      },
      {
        id: 6,
        lo: "10F. Describe the actions insurers take during the implementation and launch stage.",
        question: "The following statements are about policy filing requirements in Canada and in the United States. Select the answer choice containing the correct statement.",
        options: [
          "In the United States, an insurance company is not required to obtain approval for any life insurance or annuity product from the state insurance department where the insurer intends to offer the product.",
          "In the United States, insurance companies who sell variable insurance products must register new variable products with the National Association of Insurance Commissioners (NAIC) and obtain the NAIC's approval before offering the product for sale.",
          "In Canada, provincial policy filing requirements for life insurance products apply only when an insurance company first obtains a license to sell insurance products in a province.",
          "Policy filing typically takes place before the design and development stage of the new product development process."
        ],
        answer: 2,
        explanation: "In Canada, life insurance contracts are generally not subject to prior approval of policy forms in each province; provincial filing applies during initial corporate licensing, unlike the strict state-by-state prior approval in the U.S."
      },
      {
        id: 7,
        lo: "10F. Describe the actions insurers take during the implementation and launch stage.",
        question: "The Vogel Life Insurance Company, a United States company, operates in a state that has a law requiring Vogel to provide prospective buyers of life insurance, other than credit life insurance or variable life insurance, with a particular publication. This publication explains to customers how to determine how much life insurance coverage they need, describes the various types of life insurance policies, and educates customers about how to compare the costs of similar types of policies. This publication is known, by definition, as a",
        options: [
          "prospectus",
          "policy summary",
          "disclosure document",
          "Buyer's Guide"
        ],
        answer: 3,
        explanation: "A Life Insurance Buyer's Guide is a consumer education booklet mandated by state insurance regulations explaining life insurance types, needs calculation, and cost comparison indexes."
      },
      {
        id: 8,
        lo: "10G. Describe Day 1 and Day 2 functionalities that must be put into place during implementation.",
        question: "The Tartan Insurance Company divided the implementation activities for a new product into two categories: Day 1 functionality and Day 2 functionality. Day 2 functionality refers to the",
        options: [
          "administrative and systems processes that Tartan has determined must be in place and functioning when the product is launched",
          "marketing goals and strategies for the product, including specific, detailed activities for how Tartan will price, promote, and distribute the product",
          "processes that are necessary at some future date for Tartan to service and administer the product, but which can be implemented after the product is launched",
          "guidelines showing the policy forms approved for use in each jurisdiction and the requirements that Tartan's various functional areas need to follow when selling or administering the product"
        ],
        answer: 2,
        explanation: "Day 1 functionality covers essential capabilities required at product launch (taking applications, underwriting, premium billing). Day 2 functionality includes downstream processes (such as annual statements, policy loans, surrenders) that can be implemented post-launch before policies mature."
      },
      {
        id: 9,
        lo: "10H. Describe how insurers monitor, evaluate, and use feedback to improve product offerings.",
        question: "After a new insurance product is launched, an insurance company monitors the new product's performance to measure its success. The following statements are about performance monitoring and review. Select the answer choice containing the correct statement.",
        options: [
          "An insurance company rarely monitors the initial sales activity of a new insurance product during the first few months after the product's launch.",
          "If an insurance company cannot effectively or efficiently modify a poorly performing insurance product, the insurer will always channel more resources to the weak product rather than withdraw the product from the market.",
          "If a new insurance product's sales fail to meet expectations, an insurance company investigates to determine possible reasons for the poor sales and often takes steps to modify the product's design.",
          "If an insurance company withdraws a new insurance product from the market, the insurer must cancel all of the policies issued for the product."
        ],
        answer: 2,
        explanation: "When post-launch sales deviate from actuarial expectations, insurers analyze producer feedback, pricing competitiveness, and market conditions to redesign features or recalibrate compensation."
      }
    ]
  },

  // ==========================================
  // CHAPTER 11: Product Distribution
  // ==========================================
  {
    id: 11,
    title: "Chapter 11: Product Distribution",
    questions: [
      {
        id: 1,
        lo: "11A. Distinguish direct from intermediary distribution; 11C. Describe direct sales force.",
        question: "Malcolm Rose is an insurance agent who sells life insurance, health insurance, annuities, and property-casualty products only for the Impala Insurance Company, with the majority of his sales being property-casualty products. Impala exercises considerable control over how Mr. Rose and other agents conduct their work, including imposing minimum sales production requirements that agents must satisfy to continue their agency relationship with Impala. This information indicates that Mr. Rose is a type of agent known as",
        options: [
          "an insurance broker-dealer, and he most likely is part of Impala's direct distribution system",
          "an insurance broker-dealer, and he most likely is part of Impala's intermediary distribution system",
          "a multiple-line exclusive agent (MLEA), and he most likely is part of Impala's direct distribution system",
          "a multiple-line exclusive agent (MLEA), and he most likely is part of Impala's intermediary distribution system"
        ],
        answer: 2,
        explanation: "A multiple-line exclusive agent (MLEA) represents only one insurer across personal lines (auto, home, life, health) under company control, operating as part of the insurer's direct distribution system."
      },
      {
        id: 2,
        lo: "11B. Describe the various engagement methods insurers and financial professionals can use.",
        question: "The Milton Insurance Company is sending insurance sales materials directly to people on a list of prospective customers. The sales materials consist of an introduction letter, a brochure describing Milton's guaranteed term life insurance product, and an insurance application. In this situation, the engagement method that Milton is using to interact with customers is known as",
        options: [
          "print media",
          "direct mail",
          "omnichannel distribution",
          "broadcast media"
        ],
        answer: 1,
        explanation: "Direct mail sends targeted physical marketing packages (letters, brochures, applications) directly to addressed individuals on a prospective customer list."
      },
      {
        id: 3,
        lo: "11B. Describe engagement methods; 11F. Describe intermediary sales force.",
        question: "The Pratt Life Insurance Company uses an employee benefits broker to distribute voluntary benefits, including individual life insurance and disability income insurance policies, to employees of the Wicker Company. With regard to this method of distributing voluntary benefits, it most likely is correct to say that",
        options: [
          "Pratt's distribution and administration costs for the products it sells to Wicker's employees are eliminated",
          "Pratt collects premium payments directly from Wicker's participating employees",
          "Wicker's participating employees own their insurance policies and can continue the coverage even if their employment with Wicker terminates",
          "Pratt's use of an employee benefits broker to distribute voluntary benefits to Wicker's employees is known as a location-selling system"
        ],
        answer: 2,
        explanation: "Voluntary benefits are individual policies purchased by employees via payroll deduction. Because employees own their individual policies, coverage is portable if employment ends."
      },
      {
        id: 4,
        lo: "11C. Describe the characteristics of a direct sales force.",
        question: "Miranda Harper, an insurance agent for the Bonsai Insurance Company, has a typical agency contract that describes her authority to represent Bonsai. Consider the following actions Ms. Harper took while representing Bonsai:\n• Action A—Solicited applications for insurance\n• Action B—Accepted initial premium payments\n• Action C—Accepted renewal premium payments\n• Action D—Entered into a binding contract on Bonsai's behalf, other than temporarily in connection with a premium receipt\nWith regard to the extent of Ms. Harper's authority to represent Bonsai, it is correct to say that the agency contract most likely granted her the authority to perform",
        options: [
          "Actions A, B, C, and D",
          "Actions A, B, and C only",
          "Actions A and B only",
          "Action D only"
        ],
        answer: 2,
        explanation: "Life insurance agents are soliciting agents authorized to solicit applications (A) and collect initial premiums (B). They lack legal authority to accept renewal premiums (which must go to the home office) or modify contracts (D)."
      },
      {
        id: 5,
        lo: "11D. Explain how insurers provide sales support to different types of agents.",
        question: "The following statements are about agent compensation. Select the answer choice containing the correct statement.",
        options: [
          "Service fees typically are paid to the agent who is currently providing service to the customer, even if that agent did not originally sell the policy.",
          "Renewal commissions are designed to encourage new sales, and first-year commissions are designed to encourage agents to sell quality business that will remain in force.",
          "Renewal commissions are always paid to the agent who is currently providing service to the customer, even if that agent is not the one who sold the policy.",
          "Commission rates for financial professionals who are not part of a direct field force typically are lower than the commission rates for direct field force agents."
        ],
        answer: 0,
        explanation: "Service fees compensate servicing agents who provide ongoing customer support to orphan policyowners, even if another agent originally wrote the policy."
      },
      {
        id: 6,
        lo: "11D. Explain how insurers provide sales support to different types of agents.",
        question: "The following statements are about home office support for an insurer's agents. Select the answer choice containing the correct statement.",
        options: [
          "Insurers that use the direct sales distribution system spend relatively little money hiring, training, and retaining their career agents and multiple-line exclusive agents (MLEAs).",
          "Many jurisdictions require that, before an insurance agent begins to solicit insurance product sales on behalf of an insurer, the insurer must appoint that person to sell insurance on its behalf.",
          "Regulations requiring insurers to provide agents with training on market conduct laws and acceptable sales practices apply to new agents but not to experienced agents.",
          "Market conduct laws apply to advertisements and sales aids provided by an insurer's home office but do not apply to sales materials agents use when selling an insurer's products."
        ],
        answer: 1,
        explanation: "In most U.S. jurisdictions, a licensed producer cannot solicit business for an insurer until the insurer officially files an appointment document with the state insurance department."
      },
      {
        id: 7,
        lo: "11E. List three unfair sales practices and describe how insurers monitor market conduct.",
        question: "Consider the following situations in which agents are engaging in sales practices that are prohibited in most jurisdictions:\n• Situation A: An agent for an insurer induced a customer to replace one life insurance policy with another life insurance policy, multiple times, so that the agent could earn a series of first-year commissions on the replacements.\n• Situation B: An agent for an insurer offered a prospect for life insurance a cash payment as an inducement for the prospect to purchase a life insurance policy from him. The agent does not offer the inducement to all applicants in similar situations, and the inducement is not stated in the policy itself.\nSelect the answer choice that correctly identifies the unfair sales practice described in each situation.",
        options: [
          "churning / twisting",
          "churning / rebating",
          "rebating / twisting",
          "rebating / rebating"
        ],
        answer: 1,
        explanation: "Inducing repeated internal policy replacements to generate first-year commissions is churning. Offering an unapproved cash incentive or portion of commission to buy is illegal rebating."
      },
      {
        id: 8,
        lo: "11F. Describe the characteristics of an intermediary sales force.",
        question: "The following statements are about distributing insurance products through broker-dealers and banks. Select the answer choice containing the correct statement.",
        options: [
          "In the United States, securities can only be distributed through broker-dealers that are registered with the Securities and Exchange Commission (SEC) and are members of the Financial Industry Regulatory Authority (FINRA).",
          "An insurance company can market variable life insurance and variable annuity products only if the insurer is a subsidiary of a registered broker-dealer.",
          "Insurance companies typically pay commissions on insurance product sales directly to the bank employees who sold the products, rather than to the banks.",
          "Banks are permitted to make the purchase of an insurance product a condition for a customer's obtaining a loan from the bank."
        ],
        answer: 0,
        explanation: "Variable life insurance and variable annuities are legally classified as securities, requiring distribution through broker-dealers registered with the SEC and members of FINRA."
      },
      {
        id: 9,
        lo: "11F. Describe the characteristics of an intermediary sales force.",
        question: "An insurance company can distribute its products through brokers or personal-producing general agents (PPGAs). With regard to using brokers to distribute an insurer's products, it is correct to say that brokers",
        options: [
          "have an exclusive contract with a single insurer",
          "must satisfy an insurer's minimum sales production requirements to continue their agency relationship with that insurer",
          "have the option of recruiting and training full-time subagents",
          "are responsible for all of their own business expenses, including office expenses, training expenses, marketing expenses, and security benefits"
        ],
        answer: 3,
        explanation: "Brokers are independent business operators who represent their clients, contract with multiple insurers without production quotas, and pay all of their own operating overhead."
      },
      {
        id: 10,
        lo: "11F. Describe the characteristics of an intermediary sales force.",
        question: "The Danube Bank distributes life insurance and annuity products to its customers through platform employees. By definition, platform employees are",
        options: [
          "individuals who are registered with the Securities and Exchange Commission (SEC) or with a state's securities agency and provide advice on investing in securities",
          "individuals who are employed by an insurance company to promote the insurer's products to banks and to provide banks with marketing support",
          "bank employees whose primary function is to handle customer service issues and sell traditional bank products but who are also licensed to sell insurance",
          "salaried insurance company employees who are specifically trained in the techniques of assessing and meeting the needs of groups and servicing group products"
        ],
        answer: 2,
        explanation: "Platform employees are retail branch banking personnel (e.g., personal bankers, loan officers) who also hold state insurance licenses to cross-sell straightforward annuities and life policies."
      },
      {
        id: 11,
        lo: "11F. Describe the characteristics of an intermediary sales force.",
        question: "An insurance company can act as an intermediary distribution channel by selling insurance products that are developed by another insurance company. By definition, these types of products are known as",
        options: [
          "estate planning products",
          "subagent products",
          "wholesaler products",
          "nonproprietary products"
        ],
        answer: 3,
        explanation: "Nonproprietary products are insurance contracts manufactured by a third-party company and distributed through another insurer's sales force to expand available product offerings."
      },
      {
        id: 12,
        lo: "11G. Identify and describe factors an insurer considers when selecting distribution systems.",
        question: "Insurers consider several factors when making distribution decisions, including the costs associated with each system, the degree of control over distribution activities, customers' characteristics, and the characteristics of the product the insurer is selling. With regard to these factors, it generally is correct to say that",
        options: [
          "staffing and training costs typically are lower for direct-to-consumer (D2C) distribution than for other distribution channels",
          "insurers have less control over distribution activities when they use a direct distribution system rather than an intermediary distribution system",
          "customers who prefer to compare products and prices over the internet at their own convenience are likely to prefer purchasing insurance products through a direct sales force",
          "insurers typically use a direct sales force to distribute simpler products, such as term life insurance"
        ],
        answer: 0,
        explanation: "D2C distribution utilizes automated web and digital sales channels, avoiding large agent sales forces and drastically reducing ongoing field training and agency overhead costs."
      }
    ]
  },

  // ==========================================
  // CHAPTER 12: Underwriting
  // ==========================================
  {
    id: 12,
    title: "Chapter 12: Underwriting",
    questions: [
      {
        id: 1,
        lo: "12A. Define underwriting and explain relationship with new business processing.",
        question: "The following statements are about underwriting and new business operations in life insurance companies. Select the answer choice containing the correct statement.",
        options: [
          "By definition, underwriting is the process of assessing and classifying the degree of risk a proposed insured or group represents and making a decision to accept or decline that risk.",
          "For both life insurance products and annuity products, mortality risk is the likelihood that a proposed insured will live longer than statistically expected.",
          "Life insurance applications and annuity applications typically go through the same underwriting process.",
          "Regardless of the risk class of the proposed insured, insurers charge all applicants for the same insurance product the same premium rate."
        ],
        answer: 0,
        explanation: "Underwriting is the systematic evaluation and risk classification of proposed insureds to decide acceptance terms and appropriate premium pricing."
      },
      {
        id: 2,
        lo: "12B. Describe the role of automation in new business processing.",
        question: "The Derby Life Insurance Company has automated its underwriting process using a business rules engine (BRE) that automatically applies rules to data to reach an underwriting decision. The BRE automatically accepts life insurance applications that meet certain well-defined criteria and refers the rest to Derby's underwriters for further evaluation. This information indicates that Derby uses a BRE in its automated underwriting system to perform",
        options: [
          "jet unit underwriting",
          "teleunderwriting",
          "straight-through processing",
          "exception-based underwriting"
        ],
        answer: 3,
        explanation: "In exception-based underwriting, automated business rules engines approve routine applications that fit clean parameters and flag only complex or high-risk exceptions for manual human review."
      },
      {
        id: 3,
        lo: "12B. Describe the role of automation in new business processing.",
        question: "Edward Yung works in the new business processing department of a life insurance company. One of Mr. Yung's responsibilities is to perform suitability checks on all annuity applications submitted to the insurer. The primary purpose of a suitability check is for Mr. Yung to verify that the",
        options: [
          "annuity application is the proper form for the jurisdiction in which the insurer will issue the contract",
          "financial professional who submitted the annuity application is licensed and appointed to sell the annuity product in the applicable jurisdiction",
          "annuity product is an appropriate purchase for the applicant based on the applicant's needs and financial condition",
          "applicant has completed all required sections of the application and has provided all the required signatures"
        ],
        answer: 2,
        explanation: "Suitability reviews ensure that the financial product, liquidity profile, and risk horizon align appropriately with the customer's age, investment objectives, and financial situation."
      },
      {
        id: 4,
        lo: "12C. Identify and describe key underwriting job positions.",
        question: "Kyra Haney works in the underwriting department at a life insurance company. Her responsibilities include establishing the company's underwriting philosophy, guidelines, and procedures; monitoring the cost and quality of underwriting; and overseeing the underwriting of large or complex applications. This information indicates that Ms. Haney's job position most likely is that of",
        options: [
          "a field underwriter",
          "a chief underwriter",
          "a medical underwriting director",
          "an underwriting manager"
        ],
        answer: 1,
        explanation: "The chief underwriter sets overall corporate risk philosophy, establishes technical guidelines, monitors underwriting quality and audits, and approves complex jumbo policies."
      },
      {
        id: 5,
        lo: "12D. Distinguish between underwriting philosophy and underwriting guidelines.",
        question: "An insurer's underwriting (guidelines / philosophy) are standards that specify the limits within which proposed insureds may be assigned to one of an insurer's risk classes established for each insurance product. These standards take into account the tendency of people who believe they have a greater-than-average likelihood of loss to seek insurance protection to a greater extent than do those who believe they have an average or a less-than-average likelihood of loss—a concept known as (antiselection / persistency).",
        options: [
          "guidelines / antiselection",
          "guidelines / persistency",
          "philosophy / antiselection",
          "philosophy / persistency"
        ],
        answer: 0,
        explanation: "Underwriting guidelines are operational rules defining medical and financial thresholds for each risk class. Antiselection (adverse selection) is the tendency of higher-risk individuals to seek coverage."
      },
      {
        id: 6,
        lo: "12E. Describe underwriting process and medical information sources.",
        question: "The Trefoil Life Insurance Company received applications for life insurance from Jeffrey Otto and Malathi Gupta. After reviewing the applications, a Trefoil underwriter approved Mr. Otto's coverage, but charged him a substandard premium rate. The underwriter approved coverage for Ms. Gupta at a standard premium rate, but reduced the amount of coverage the policy provided. With regard to the underwriting decisions on these applications, it is correct to say that Trefoil's underwriter rated",
        options: [
          "both Mr. Otto's application and Ms. Gupta's application",
          "Mr. Otto's application only",
          "Ms. Gupta's application only",
          "neither Mr. Otto's application nor Ms. Gupta's application"
        ],
        answer: 0,
        explanation: "According to LOMA terminology, 'rating' an application includes both assigning a substandard extra premium rate and issuing a policy on modified terms/restricted coverage."
      },
      {
        id: 7,
        lo: "12E. Describe underwriting process and medical information sources.",
        question: "Jin Xiao, a financial professional, recently helped a proposed insured complete an application for life insurance. Before submitting the application to an insurer, Mr. Xiao used a portion of the insurance application to report additional information about the proposed insured that he thinks could affect the underwriting decision. The portion of the insurance application in which Mr. Xiao reported the additional information is known as",
        options: [
          "a field underwriting manual",
          "a table of underwriting requirements",
          "an agent's statement",
          "an age and amount requirements chart"
        ],
        answer: 2,
        explanation: "The agent's statement (producer's report) is the section of the application where the agent provides personal observations regarding the applicant's identity, finances, and habits."
      },
      {
        id: 8,
        lo: "12E. Describe underwriting process and medical information sources.",
        question: "Teleunderwriting is a method by which life insurance companies gather underwriting information through telephone or videochat interviews. One true statement about the teleunderwriting process is that",
        options: [
          "this method completely eliminates the need for an applicant to complete an application or meet with a financial professional",
          "privacy laws prohibit insurers from recording telephone interviews conducted for underwriting purposes",
          "financial professionals gather most or all of the information needed for underwriting",
          "this method often provides more complete and thorough information than does an application that the applicant completes with a financial professional"
        ],
        answer: 3,
        explanation: "Trained medical teleunderwriters conduct structured interviews directly with the applicant, yielding higher data accuracy and detailed medical disclosures than paper forms."
      },
      {
        id: 9,
        lo: "12E. Describe underwriting process and medical information sources.",
        question: "Before making an underwriting decision, an insurer sometimes obtains additional medical information about the proposed insured, such as a paramedical report or a medical report. One characteristic of a paramedical report is that the",
        options: [
          "results of the paramedical examination, which include the insured's height, weight, blood pressure, and pulse, become part of the insurance contract",
          "report contains detailed information about a specific illness or condition from a proposed insured's attending physician",
          "report contains the proposed insured's answers to medical history questions and a record of the proposed insured's height, weight, blood pressure, and pulse",
          "proposed insured completes the medical questionnaire, and a physician records the results of a physical examination of the proposed insured"
        ],
        answer: 2,
        explanation: "A paramedical examination is conducted by a trained health professional (not a physician) who records medical history, takes physical measurements (height, weight, BP, pulse), and collects fluids."
      },
      {
        id: 10,
        lo: "12F. Define financial underwriting and personal underwriting.",
        question: "Insurers may engage in financial underwriting and personal underwriting when making an underwriting decision. In assessing an application for life insurance on Samara Hardy's life, an underwriter compared Ms. Hardy's current income with the amount of coverage applied for. The underwriter also reviewed Ms. Hardy's motor vehicle report. Select the answer choice that correctly identifies whether Ms. Hardy's current income and motor vehicle report are factors that relate to financial underwriting or to personal underwriting.",
        options: [
          "financial underwriting / financial underwriting",
          "financial underwriting / personal underwriting",
          "personal underwriting / financial underwriting",
          "personal underwriting / personal underwriting"
        ],
        answer: 1,
        explanation: "Current income evaluates insurable value and premium affordability (financial underwriting). Driving records, hobbies, and aviation represent lifestyle factors (personal underwriting)."
      },
      {
        id: 11,
        lo: "12G. Explain how underwriters use the numerical rating system.",
        question: "The Poplar Life Insurance Company assigns proposed insureds to one of four risk classes: preferred, standard, substandard, and declined. Consider the following proposed insureds who applied to Poplar for life insurance coverage:\n• Mandy Jensen has an anticipated mortality that is lower than average.\n• Steven Lu has an anticipated mortality that is higher than average, but Poplar's underwriters consider him to be insurable.\nSelect the answer choice that correctly identifies the risk class to which Poplar most likely assigned Ms. Jensen and Mr. Lu.",
        options: [
          "standard / substandard",
          "standard / declined",
          "preferred / substandard",
          "preferred / declined"
        ],
        answer: 2,
        explanation: "Mandy has lower-than-average expected mortality (preferred risk class). Steven has higher-than-average mortality but is still insurable (substandard risk class)."
      },
      {
        id: 12,
        lo: "12G. Explain how underwriters use the numerical rating system.",
        question: "The following statements are about the numerical rating system. Select the answer choice containing the correct statement.",
        options: [
          "A higher numerical rating for a proposed insured is better than a lower numerical rating because negative numbers are assigned to factors that have been determined statistically to increase a proposed insured's mortality risk.",
          "Insurers use the numerical rating assigned to a proposed insured to determine the appropriate risk class in which to place the proposed insured.",
          "To calculate a proposed insured's total mortality risk, insurers start with a base of 0, which most insurers use for standard mortality.",
          "Insurers use only medical risk factors to calculate a numerical rating for a proposed insured's mortality risk, and those risk factors that have an unfavorable effect on mortality are assigned \"minus\" values (such as –25) that are called credits."
        ],
        answer: 1,
        explanation: "The numerical rating system assigns debits (positive values increasing expected mortality) and credits (negative values decreasing mortality) to a standard base of 100, placing the applicant in the matching risk class."
      },
      {
        id: 13,
        lo: "12G. Explain how underwriters use the numerical rating system.",
        question: "A life insurance underwriter at the Troy Life Insurance Company is using a numerical rating system with a base of 100 to assess the risk that a proposed insured represents to Troy. The underwriter assigned a total of 50 debits and 10 credits for the proposed insured's medical and personal risk factors. This information indicates that the proposed insured's total numerical rating equals",
        options: [
          "40",
          "60",
          "140",
          "160"
        ],
        answer: 2,
        explanation: "Numerical Rating = Base (100) + Debits (50) - Credits (10) = 140."
      },
      {
        id: 14,
        lo: "12H. Describe how underwriters use numerical rating in applying premium rates.",
        question: "An underwriter at the Orchid Insurance Company is determining premium rates for the following proposed insureds for individual life insurance who are classified as substandard risks:\n• Fred Bowen presents an extra mortality risk that is expected to remain constant or decrease with age.\n• Darcy Odom is diabetic and presents an extra mortality risk that is expected to increase with age.\nOrchid uses the table rating method and the flat extra premium method to determine premium rates for substandard risks. Select the answer choice that identifies the most appropriate method for Orchid to use to determine the premium rate to charge Mr. Bowen and Ms. Odom.",
        options: [
          "table rating method / flat extra premium method",
          "table rating method / table rating method",
          "flat extra premium method / flat extra premium method",
          "flat extra premium method / table rating method"
        ],
        answer: 3,
        explanation: "A flat extra premium is suited for hazardous occupations or risks that remain constant/decrease over time. Table rating is used when extra mortality risk increases with advancing age (such as chronic medical conditions like diabetes)."
      },
      {
        id: 15,
        lo: "12I. Explain relationships between underwriting and other organizational functions.",
        question: "The Magnet Insurance Company has an automated workflow system in its underwriting department that routes documents automatically to staff members for underwriting. An important control feature of the system is that it creates a record of work completed. Magnet reviews these records to check whether underwriting employees followed the proper procedures on each case. With regard to control mechanisms for underwriting operations, the records of the work completed on Magnet's underwriting cases are known as",
        options: [
          "audit logs, which are a concurrent control",
          "audit logs, which are a feedback control",
          "productivity metrics, which are a concurrent control",
          "productivity metrics, which are a feedback control"
        ],
        answer: 1,
        explanation: "Audit logs document historical actions and decisions, reviewed retrospectively by management as a feedback control mechanism."
      },
      {
        id: 16,
        lo: "12J. Describe group insurance underwriting process and risk factors.",
        question: "Cara Booth, a group representative at the Tremont Insurance Company, sold a group life insurance policy that covers a company's eligible employees. Ms. Booth prepared a document that describes the coverage that the group contract provides to the group insureds and the group insureds' rights under the contract. This document, which Tremont distributed to each group insured, is known as a",
        options: [
          "certificate of insurance",
          "master application",
          "master group insurance contract",
          "request for proposal (RFP)"
        ],
        answer: 0,
        explanation: "In group insurance, the employer holds the master contract, while individual insured employees receive a Certificate of Insurance summarizing coverage benefits and rights."
      },
      {
        id: 17,
        lo: "12K. Identify and describe laws and regulations that affect the underwriting process.",
        question: "One law that affects life insurance underwriting in the United States is the Fair Credit Reporting Act (FCRA). The primary purpose of the FCRA is to",
        options: [
          "prohibit insurers from basing underwriting decisions on factors such as a proposed insured's sex, race, marital status, national origin, or religion",
          "prohibit insurers from declining an application for insurance based on information in a consumer report",
          "require insurers to disclose their policies for obtaining and sharing customers' nonpublic personal information at the beginning of the relationship and at least once a year afterwards, and to allow customers to opt out of information sharing with unaffiliated third parties",
          "regulate the reporting and use of consumer information and ensure that consumer reports contain only accurate, relevant, and recent information"
        ],
        answer: 3,
        explanation: "The Fair Credit Reporting Act (FCRA) regulates consumer reporting agencies, safeguarding consumer privacy and mandating that consumer credit/investigative reports are fair, accurate, and confidential."
      }
    ]
  },

  // ==========================================
  // CHAPTER 13: Claim and Annuity Benefit Administration
  // ==========================================
  {
    id: 13,
    title: "Chapter 13: Claim and Annuity Benefit Administration",
    questions: [
      {
        id: 1,
        lo: "13A. Describe organization of claim department; claim philosophy vs practices.",
        question: "The following statements are about effective claim administration in a life insurance company. Three statements are true, and one statement is false. Select the answer choice containing the FALSE statement.",
        options: [
          "As a primary contact point with customers, claim administration greatly impacts customer loyalty and retention.",
          "Processing claims quickly is the most important aspect of effective claim administration.",
          "By reducing or eliminating mistaken or fraudulent claims, effective claim administration helps a company control expenses.",
          "Insurers use the data obtained from claim administration in determining the accuracy of underwriting decisions."
        ],
        answer: 1,
        explanation: "While promptness is vital, paying only valid claims in exact accordance with contractual provisions and statutory requirements is the primary obligation of claim administration."
      },
      {
        id: 2,
        lo: "13A. Describe organization of claim department; claim philosophy vs practices.",
        question: "Sophia Clark has worked as a claim analyst at a large life insurance company for less than two years. She does not manage other employees. If Ms. Clark's job duties are typical, then her job duties as a claim analyst most likely include",
        options: [
          "reviewing individual claims up to $200,000 that are not filed during the policy's contestable period and determining the company's liability under each claim",
          "approving the payment of a $1,000,000 death claim that was filed during the policy's contestable period",
          "determining the company's liability for claims that involve suspicion of fraud or unusual legal complications",
          "overseeing claims for all lines of business, such as individual claims and group claims"
        ],
        answer: 0,
        explanation: "Entry-to-midlevel claim analysts are granted monetary approval limits (e.g. up to $200,000) for clean, uncontestable claims. High-dollar, contestable, or fraudulent cases require senior manager approval."
      },
      {
        id: 3,
        lo: "13A. Describe organization of claim department; claim philosophy vs practices.",
        question: "Claim department managers in a life insurance company develop statements that guide claim department employees in the day-to-day handling of claims. These statements, which usually include commitments to process claims on a timely and cost-efficient basis, are best known as a company's",
        options: [
          "claim philosophy",
          "claim practices",
          "claim forms",
          "claimant's statements"
        ],
        answer: 1,
        explanation: "Claim practices are detailed operational guidelines for day-to-day claim processing that translate broad claim philosophy into specific administrative workflows."
      },
      {
        id: 4,
        lo: "13B. List and describe steps in claim decision process; 13H. Uncovering fraud.",
        question: "The following statements are about the life insurance claim decision process. Select the answer choice containing the correct statement.",
        options: [
          "If a claim analyst discovers the insurance policy was not in force at the time of the loss, the claim analyst will notify the claimant that the claim is denied.",
          "A mistaken claim is considered to be a type of claim fraud in which the claimant intentionally uses false information to collect benefits under an insurance policy.",
          "Claim analysts typically will deny a claim if the insured's name changed after the policy was issued, and the insured's name on the claim form is different than the name in the insurer's policy records.",
          "Most life insurance claims require claim analysts to conduct an investigation and obtain information in addition to the claim form and proof-of-loss documents to verify that a loss occurred."
        ],
        answer: 0,
        explanation: "Coverage must be in force on the date of loss; if the policy had lapsed prior to death without nonforfeiture value, the claim must be denied."
      },
      {
        id: 5,
        lo: "13B. List and describe basic steps in life insurance claim decision process.",
        question: "The following statements are about claims on reinsured life insurance policies. Select the answer choice containing the correct statement.",
        options: [
          "Because the reinsurer is a party to the underlying insurance policy, the reinsurer has the authority to approve or deny a claim on the policy.",
          "When a direct writer receives a claim on a reinsured policy, the direct writer must receive payment from the reinsurer for the reinsured amount before it pays the policy proceeds to the beneficiary.",
          "Although a reinsurer can make claim decision recommendations to the direct writer, the direct writer is not required to follow these recommendations.",
          "The beneficiary of a reinsured life insurance policy is required to file a claim with the reinsurance company rather than the direct writer."
        ],
        answer: 2,
        explanation: "Privity of contract exists solely between the policyowner and direct writer. The direct writer makes the final legal claim decision and is not bound by the reinsurer's advisory opinion."
      },
      {
        id: 6,
        lo: "13C. Evaluate material misrepresentation in life insurance applications.",
        question: "Arlene Hahn, a policyowner-insured, died during the contestable period of her life insurance policy, and her policy beneficiary filed a claim for the policy proceeds. While investigating the claim, a claim analyst discovered that Ms. Hahn stated in the insurance application that she had broken her right leg in an automobile accident when it was, in fact, her left leg. With respect to the claim decision in this case, the insurer most likely will",
        options: [
          "rescind the policy because of a material misrepresentation in the insurance application and will pay the policy proceeds to the beneficiary",
          "rescind the policy because of a material misrepresentation in the insurance application and will refund the premiums paid on the policy, minus any outstanding policy loan amounts",
          "pay the policy proceeds to the beneficiary because Ms. Hahn's mistake in the insurance application is not a material misrepresentation",
          "refund the premiums paid on the policy, minus any outstanding policy loan amounts, because Ms. Hahn's mistake in the insurance application is not a material misrepresentation"
        ],
        answer: 2,
        explanation: "A misstatement is material only if accurate knowledge would have caused the insurer to decline the risk or charge a higher rate. Confusing left leg with right leg is immaterial; full benefits are paid."
      },
      {
        id: 7,
        lo: "13C. Evaluate material misrepresentation in life insurance applications.",
        question: "Hector Garcia, a United States resident, purchased a variable life insurance policy on his life. The policy included a typical two-year contestable period. Mr. Garcia died during the policy's contestable period. Shortly thereafter, the policy beneficiary filed a claim for the policy's death benefit. At the time of Mr. Garcia's death, the policy was still in force and there were no outstanding policy loans. While reviewing the claim, a claim analyst discovered that Mr. Garcia had made a material misrepresentation on his application. In this situation, the insurer is liable for paying",
        options: [
          "nothing",
          "the policy's net cash surrender value",
          "the premiums paid for the policy",
          "the policy's face amount"
        ],
        answer: 2,
        explanation: "Upon discovering a material misrepresentation during the contestable period, the insurer rescinds the contract from inception and refunds all paid premiums."
      },
      {
        id: 8,
        lo: "13D. Identify documents commonly accepted as proof of death.",
        question: "Molly Henner, a United States resident, was the policyowner-insured of a $250,000 life insurance policy that named her husband, Cedric, as the beneficiary. Twenty years after the policy was issued, Molly died of natural causes. When Cedric notified the insurer of Molly's death, the insurer requested that he submit a document showing proof of loss. If the insurer follows common industry practice, the document requested most likely was a",
        options: [
          "death certificate signed by an authorized official",
          "claim form signed by Cedric",
          "statement signed by Molly's attending physician",
          "funeral director's certificate"
        ],
        answer: 0,
        explanation: "A certified official death certificate issued by a government vital statistics registrar is the universal legal proof of death required by life insurers."
      },
      {
        id: 9,
        lo: "13D. Identify documents commonly accepted as proof of death.",
        question: "Although verifying that a loss occurred is routine for most life insurance claims, a claim analyst typically would conduct further investigation in a situation in which the insured",
        options: [
          "was a passenger aboard a commercial airplane that crashed into the ocean and no bodies were recovered",
          "disappeared under unexplainable circumstances, and the claimant submits as proof of loss a court order presuming the insured's death",
          "died outside of the country in which the policy was issued",
          "died by suicide after the policy's suicide exclusion period expired"
        ],
        answer: 2,
        explanation: "Deaths occurring overseas typically require special investigation through international consular channels or independent agencies to verify identity and authenticity of foreign certificates."
      },
      {
        id: 10,
        lo: "13E. Describe the suicide exclusion and how exclusions affect claim decisions.",
        question: "Becky Dixon purchased a whole life insurance policy on her life. The policy contained a typical two-year suicide exclusion period. Ms. Dixon committed suicide 22 months after the policy was issued. At the time of her death, there were no outstanding policy loans. In this situation, the beneficiary of Ms. Dixon's policy was entitled to receive",
        options: [
          "the policy's full death benefit",
          "the policy's net cash surrender value only",
          "no payment of any kind",
          "the amount of the premiums paid for the insurance coverage only"
        ],
        answer: 3,
        explanation: "If the insured dies by suicide within the suicide exclusion period (typically 2 years from issue), the insurer is not liable for death benefits but must refund all premiums paid."
      },
      {
        id: 11,
        lo: "13F. Calculate benefit amount payable and explain misstatement of age or sex.",
        question: "Carlton Dole, the beneficiary of a $100,000 traditional life insurance policy, submitted a claim for the policy proceeds. The claim analyst reviewing Mr. Dole's claim noted that the policyowner had paid $200 in premiums in advance and that the policy had an unpaid policy loan of $4,000. Accrued interest on the policy loan was $50. This information indicates that the correct benefit amount payable to Mr. Dole is",
        options: [
          "$95,950",
          "$96,150",
          "$100,000",
          "$100,250"
        ],
        answer: 1,
        explanation: "Net Death Benefit = Face Amount ($100,000) + Advance Premiums ($200) - Policy Loan Principal ($4,000) - Accrued Loan Interest ($50) = $96,150."
      },
      {
        id: 12,
        lo: "13F. Calculate benefit amount payable and explain accidental death exclusions.",
        question: "A claim analyst examined the following life insurance claims to determine whether both the basic death benefit and the accidental death benefit are payable for each policy:\n• Four years after her policy was issued, Audrey Sloan, age 37, was skiing near the edge of a trail when she was involved in a fatal collision with a tree. A claim investigation revealed that Ms. Sloan's death was caused directly by injuries she sustained in the skiing accident.\n• Nine years after his policy was issued, Manuel Fiore, age 58, had a mild heart attack that resulted in a fatal automobile accident. A claim investigation revealed that Mr. Fiore's death was caused directly by the injuries he sustained in the automobile accident.\nThe claim analyst determined that the basic death benefit was payable in both cases. In addition to paying the basic death benefit, the insurer most likely is liable to pay the accidental death benefit to",
        options: [
          "both Ms. Sloan's beneficiary and Mr. Fiore's beneficiary",
          "Ms. Sloan's beneficiary only",
          "Mr. Fiore's beneficiary only",
          "neither Ms. Sloan's beneficiary nor Mr. Fiore's beneficiary"
        ],
        answer: 0,
        explanation: "Both beneficiaries receive the accidental death benefit: Ms. Sloan died directly from accidental trauma. For Mr. Fiore, although a mild heart attack preceded the crash, the investigation confirmed his death was caused directly by crash injuries."
      },
      {
        id: 13,
        lo: "13F. Calculate benefit amount payable and explain misstatement of age or sex.",
        question: "When Cecil Massey applied to the Amity Life Insurance Company for an insurance policy on his father's life, he mistakenly stated that his father was age 48 when, in fact, his father was 54 years old. The mistake resulted in Amity's issuing the policy at an incorrect premium rate. The policy contained a typical misstatement of age or sex provision. Amity discovered the misstatement of age when processing a claim for the death benefit. The policy was in force at the time of the claim. In this situation, Amity most likely will",
        options: [
          "void the policy and keep the premiums paid",
          "void the policy and return the premiums paid",
          "pay a benefit amount that is based on the age stated in the policy",
          "adjust the benefit amount to the amount the premiums actually paid would have purchased at the insured's correct age"
        ],
        answer: 3,
        explanation: "Under the standard misstatement of age provision, the policy is never voided; the benefit payable is adjusted to what the premium paid would have purchased at the true age."
      },
      {
        id: 14,
        lo: "13G. Describe common settlement options for life insurance policies.",
        question: "As the beneficiary of a life insurance policy, Kendra Reese selected a settlement option in which the insurer paid the policy proceeds into an interest-bearing account in her name. Ms. Reese can withdraw a portion or the entire amount of the policy proceeds at any time. This information indicates that Ms. Reese selected a policy settlement option known as the",
        options: [
          "fixed-period option",
          "retained asset account (RAA) option",
          "fixed-amount option",
          "interest option"
        ],
        answer: 1,
        explanation: "Under a Retained Asset Account (RAA), death proceeds are deposited into a draft-accessible, interest-bearing account, giving the beneficiary check-writing privileges and immediate liquidity."
      },
      {
        id: 15,
        lo: "13I. Describe laws and regulations with which claim administration staff must comply.",
        question: "The following statements describe various claim processing actions at a life insurance company. Select the answer choice describing an action that most likely would be considered an unfair claim practice under the National Association of Insurance Commissioners (NAIC) Unfair Claims Settlement Practices Act.",
        options: [
          "After investigating a claim for accidental death benefits, a claim analyst determined that the accidental death benefit was not payable because the insured had not died as a result of an accident.",
          "A claim analyst hired an independent investigator to investigate a claim because there were unusual circumstances surrounding the insured's death.",
          "An analyst trainee who was conducting his first claim investigation mistakenly paid the beneficiary only the basic death benefit, and not the accidental death benefit that also was supposed to be paid.",
          "The insurance company frequently pays claimants a death benefit amount that is substantially less than the amount due based on the policy."
        ],
        answer: 3,
        explanation: "Systematically compelling claimants to accept settlements substantially less than amounts due constitutes a flagrant unfair claim settlement practice under NAIC model laws."
      },
      {
        id: 16,
        lo: "13J. Describe common annuity payout options.",
        question: "The following statements are about annuity death benefit administration. Select the answer choice containing the correct statement.",
        options: [
          "Insurers typically do not require the beneficiary of an annuity contract to provide proof of loss to claim the annuity death benefit.",
          "The terms of deferred annuity contracts require the insurer to pay a specified death benefit if the annuitant dies before scheduled annuity income payments begin.",
          "The beneficiary of an annuity contract is responsible for calculating the taxable amount of the death benefit payment and for reporting that amount to the appropriate tax authorities.",
          "Unlike life insurance benefits, annuity death benefits are only payable in a lump sum to the beneficiary."
        ],
        answer: 1,
        explanation: "Deferred annuity contracts guarantee that if the owner/annuitant dies during the accumulation phase prior to annuitization, the designated beneficiary receives the accumulated account value or guaranteed minimum death benefit."
      },
      {
        id: 17,
        lo: "13J. Describe common annuity payout options.",
        question: "Common annuity payout options can be classified as options that are based on the life expectancy of the annuitant or options that are not based on life expectancy. An example of an option based on the life expectancy of the annuitant is a",
        options: [
          "fixed-period distribution",
          "lump-sum distribution",
          "fixed-amount distribution",
          "joint and survivor life annuity"
        ],
        answer: 3,
        explanation: "A joint and survivor life annuity provides income payments continuing for the joint lifetimes of two individuals, making payment duration contingent on human life contingencies."
      }
    ]
  },

  // ==========================================
  // CHAPTER 14: Customer Service
  // ==========================================
  {
    id: 14,
    title: "Chapter 14: Customer Service",
    questions: [
      {
        id: 1,
        lo: "14A. Explain the place of customer service in CEM strategy.",
        question: "The following statements are about factors relating to customer experience. Select the answer choice containing the correct statement.",
        options: [
          "Customer experience is best described as the impression of a company that a customer forms during the customer's first encounter with the company.",
          "Only customer-facing employees who interact directly with a company's external customers are responsible for providing customer service.",
          "Customer personas depict customers' typical touchpoints with a company throughout their customer journeys and match each touchpoint with the possible communication channels through which customers might experience each touchpoint.",
          "To understand their customers, companies capture and analyze voice of the customer (VOC) data, which is data about all the stated or unstated attitudes, needs, preferences, and behaviors of customers."
        ],
        answer: 3,
        explanation: "Voice of the Customer (VOC) data captures customer feedback, expectations, sentiments, and experiences across all touchpoints to guide strategic customer experience management (CEM)."
      },
      {
        id: 2,
        lo: "14B. Define work team and explain the purpose of a customer contact center.",
        question: "The Piper Life Insurance Company assigns customer service employees to specific groups in which the employees work together on a regular basis and coordinate their activities to accomplish common goals. These employees receive requests from customers through a variety of channels, including the telephone, email, web chat, social media, and traditional mail, and they handle all customer requests relating to individual insurance products. With regard to the organization of Piper's customer service department, customer service employees most likely are assigned to",
        options: [
          "member services, and they work in a customer contact center",
          "member services, and they work in a processing center",
          "work teams, and they work in a customer contact center",
          "work teams, and they work in a processing center"
        ],
        answer: 2,
        explanation: "Groups collaborating to achieve common service goals are work teams. An omni-channel unit handling phone, web chat, email, and social media is a customer contact center."
      },
      {
        id: 3,
        lo: "14C. Identify customer service job positions.",
        question: "Bonnie Garvin, a senior customer service representative (CSR) at the Cannon Life Insurance Company, has more than eight years of experience in customer service. Navdeep Singh has been a CSR at Cannon for less than a year. Cannon most likely assigns more complex customer requests and transactions such as policy surrenders and reinstatements to",
        options: [
          "both Ms. Garvin and Mr. Singh",
          "Ms. Garvin only",
          "Mr. Singh only",
          "neither Ms. Garvin nor Mr. Singh"
        ],
        answer: 1,
        explanation: "Senior CSRs possess the technical background, regulatory understanding, and higher job authorization limits required for intricate transactions such as reinstatements and full cash surrenders."
      },
      {
        id: 4,
        lo: "14D. List characteristics of effective customer service.",
        question: "To be effective, the customer service a company provides to its customers must be complete, prompt, accurate, courteous, confidential, and convenient. Generally, customer service is considered complete if it",
        options: [
          "is delivered to the customer in a timely manner",
          "allows only authorized staff to access customer information and perform transactions",
          "allows customers to get the services they need whenever and wherever they need them",
          "resolves every aspect of a customer's problem or inquiry to the customer's satisfaction"
        ],
        answer: 3,
        explanation: "Customer service is 'complete' when it fully addresses and resolves all dimensions of the customer's request so no unresolved issues or unneeded repeat contacts remain."
      },
      {
        id: 5,
        lo: "14E. Describe technology role in balancing self-service and human-assisted service.",
        question: "In a customer service context, a seamless process is defined as",
        options: [
          "a business strategy through which a company manages all aspects of its interactions with current and potential customers",
          "the path each customer travels with a company, including every interaction across every touchpoint and every communication channel",
          "the process of ensuring that insurance policies do not lapse but remain in force as long as possible",
          "a smooth process designed so that a customer is not inconvenienced by—or even aware of—the steps involved in fulfilling the customer's request"
        ],
        answer: 3,
        explanation: "A seamless process executes background handoffs and system workflows smoothly without forcing the customer to repeat information or navigate internal operational complexities."
      },
      {
        id: 6,
        lo: "14E. Describe technology role in balancing self-service and human-assisted service.",
        question: "Kaya Olsen, a customer of the Roswell Life Insurance Company, contacted Roswell by telephone with a request about her life insurance policy. Roswell's automatic call distributor answered and transferred her telephone call to the most appropriate CSR based on Ms. Olsen's answers to specific questions. This information indicates that Roswell uses a process known as",
        options: [
          "skill-based routing (SBR)",
          "responsive design",
          "omnichannel service",
          "speech analytics"
        ],
        answer: 0,
        explanation: "Skill-Based Routing (SBR) matches an incoming customer call to the specific representative who possesses the best language, product, or licensing skill set to handle that inquiry."
      },
      {
        id: 7,
        lo: "14F. Describe customer service processes for fulfilling requests.",
        question: "The following statements are about customer service processes for fulfilling customer requests. Select the answer choice containing the correct statement.",
        options: [
          "CSRs routinely provide tax and investment advice to customers.",
          "Most insurers allow policyowners to request name changes by telephone or over the internet as long as they provide the correct identifying information.",
          "Insurance companies typically assign unassigned policyowners to CSRs rather than to licensed financial professionals.",
          "All beneficiary changes must be made in writing by the policyowner and must be signed by any irrevocable beneficiaries."
        ],
        answer: 3,
        explanation: "A beneficiary change alters contract rights; it requires written policyowner authorization and the formal written signature of any existing irrevocable beneficiary."
      },
      {
        id: 8,
        lo: "14F. Describe customer service processes for fulfilling requests.",
        question: "Nadia Decker, a CSR at an insurance company, received a request from a policyowner to decrease the amount of his life insurance coverage. Ms. Decker sent the policyowner the forms necessary to make the change. When she received the completed forms, Ms. Decker added an amendment to the policy that limited the benefits payable under the policy. The method by which Ms. Decker changed the amount of the policyowner's coverage is known as",
        options: [
          "a partial surrender",
          "a policy rider",
          "a policy dividend",
          "an automatic payment plan"
        ],
        answer: 1,
        explanation: "A policy endorsement or rider is an amendment attached to the primary policy document that formally alters, limits, or expands contractual provisions and benefit amounts."
      },
      {
        id: 9,
        lo: "14F. Describe customer service processes for fulfilling requests.",
        question: "Audra Bell, an insurance company CSR, received a notice that an annuity contract owner wanted to surrender his annuity and use the money from the surrender to purchase a new annuity contract from a different insurer. Ms. Bell updated the insurer's records to reflect the terminated annuity contract, calculated the contract's net cash surrender value, and transferred the funds to the contract owner. This information indicates that Ms. Bell performed a type of transaction known as",
        options: [
          "a conservation",
          "a reinstatement",
          "an external replacement",
          "an internal replacement"
        ],
        answer: 2,
        explanation: "Surrendering a policy with one company to purchase a replacement contract with a completely different insurance company is an external replacement (often executed as a tax-free 1035 exchange)."
      },
      {
        id: 10,
        lo: "14G. Describe differences between customer service for group vs individual products.",
        question: "The following statements are about customer service processes for group insurance products. Three statements are true, and one statement is false. Select the answer choice containing the FALSE statement.",
        options: [
          "Insurance companies that sell group insurance products typically devote a segment of the customer service unit exclusively to group products, and this unit engages in extensive recordkeeping activities.",
          "When a group policyholder does not renew its group insurance contract with the insurer, the group plan terminates.",
          "Most insurers require that a group insurance product be administered by the group itself or by a third-party administrator.",
          "A group member loses eligibility for participation in a group insurance plan if he terminates his employment or is no longer a member of an eligible class of employees."
        ],
        answer: 2,
        explanation: "Statement 3 is false: many group insurance plans are directly insurer-administered, where the insurance carrier maintains all individual participant records, billings, and member enrollments."
      },
      {
        id: 11,
        lo: "14H. Identify mechanisms and performance measurements for customer service.",
        question: "Customer service managers at the Dorian Life Insurance Company regularly measure service levels and use monitoring in the customer contact center to evaluate Dorian's customer service performance. Select the answer choice that correctly identifies service levels and monitoring as primarily quantitative performance measurements or qualitative performance measurements.",
        options: [
          "quantitative / quantitative",
          "quantitative / qualitative",
          "qualitative / quantitative",
          "qualitative / qualitative"
        ],
        answer: 1,
        explanation: "Service level (e.g. 80% of calls answered in 20 seconds) is a mathematical numerical metric (quantitative). Call monitoring (evaluating courtesy, accuracy, tone) is qualitative."
      },
      {
        id: 12,
        lo: "14H. Identify mechanisms and performance measurements for customer service.",
        question: "Customer service managers at the Sturdy Insurance Company set a performance standard of connecting all inbound telephone callers with a CSR in an average of 30 seconds. When Sturdy compares its actual performance to the 30-second performance standard, Sturdy is using a performance measure known as",
        options: [
          "average speed of answer",
          "first-contact resolution",
          "turnaround time",
          "abandonment rate"
        ],
        answer: 0,
        explanation: "Average Speed of Answer (ASA) measures the average queue wait time before an inbound call is connected to a live customer service representative."
      }
    ]
  }
];
