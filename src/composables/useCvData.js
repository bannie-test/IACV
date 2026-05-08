import { reactive } from 'vue'

let _id = 0
export const uid = () => ++_id

const cv = reactive({
  name: 'NGUYEN THI NGOC ANH',
  title: 'Manual Tester | Middle Level',

  sectionTitles: {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    experience: 'Work Experience',
    projects: 'Project Portfolio',
    education: 'Education & Certifications',
  },

  contacts: [
    { id: uid(), icon: '✉', text: 'ntnanhtester0910@gmail.com' },
    { id: uid(), icon: '🎂', text: '09/10/2001' },
    { id: uid(), icon: '☎', text: '0865838618' },
  ],
  avatar: 'https://i.imgur.com/1n9Xh7s.jpg',

  summary:
    'Middle-level Manual Tester with 3+ years of experience in SIT, UAT, and regression testing across Agile Scrum projects. Proven track record of collaborating with both national and international clients in teams of 12–40 members. Skilled in end-to-end test cycle management — from requirements analysis and test case design to defect tracking, reporting, and knowledge transfer. Hands-on experience with database verification (DBeaver, SSMS, MySQL Workbench), API testing (Postman, Swagger), and UI inspection (Figma, DevTools).',

  skills: [
    { id: uid(), label: 'Testing Types', value: 'Functional Testing, System Integration Testing (SIT), UAT, Regression Testing, Smoke Testing, API Testing, UI/UX Testing' },
    { id: uid(), label: 'Test Activities', value: 'Test Plan, Test Case Design, Test Data Preparation, Defect Report, Sprint Test Result Report, Knowledge Transfer Documentation' },
    { id: uid(), label: 'Test Management Tools', value: 'Azure DevOps, Jira, Backlog, Redmine' },
    { id: uid(), label: 'API & Database Tools', value: 'Postman, Swagger, DBeaver, SSMS, MySQL Workbench' },
    { id: uid(), label: 'UI Inspection Tools', value: 'Figma, Chrome DevTools, Visbug' },
    { id: uid(), label: 'Test Case Writing', value: 'Excel, Google Sheets' },
    { id: uid(), label: 'Automation', value: 'Selenium IDE' },
    { id: uid(), label: 'Documentation', value: 'Microsoft Office, Confluence, GitHub' },
  ],

  experience: [
    { id: uid(), title: 'Manual Tester — TDT Asia', date: 'Dec 2024 – Present' },
    { id: uid(), title: 'Manual Tester — LTS Group', date: 'Aug 2022 – Dec 2024' },
  ],

  projects: [
    {
      id: uid(),
      name: 'IFS Monday — Loan Management System (LMS)',
      date: 'Jun 2023 – Dec 2024 (18 months)',
      team: '25',
      client: 'Singapore',
      tools: 'Redmine, DBeaver, Postman, Selenium IDE',
      description:
        'Digital financial service for Secured and Unsecured Loans, focused on streamlining loan application processes and ensuring compliance with Singaporean financial regulations.',
      respTitle: 'Responsibilities',
      responsibilities: [
        { id: uid(), text: 'Owned test coverage for the Loan Origination and Repayment modules: reviewed BRD, FSD, and technical design documents to identify testable requirements.' },
        { id: uid(), text: 'Executed main flow, regression, and release testing; coordinated test rounds with team via Redmine.' },
        { id: uid(), text: 'Performed database verification using DBeaver to validate loan calculation logic, status transitions, and data integrity across tables.' },
        { id: uid(), text: 'Conducted API testing with Postman to verify loan submission endpoints, parameter validation, and error responses.' },
        { id: uid(), text: 'Prepared test data for UAT; supported demo sessions with the client.' },
        { id: uid(), text: 'Mentored 2 new team members on project domain knowledge and test standards.' },
        { id: uid(), text: 'Delivered Sprint Test Result Reports after each sprint cycle.' },
      ],
    },
    {
      id: uid(),
      name: 'Osaka Exchange (OSE)',
      date: 'Oct 2022 – May 2023 (8 months)',
      team: '38',
      client: 'Japan',
      tools: 'Redmine, DBeaver, Selenium IDE',
      description:
        'UI/UX redesign and feature development for the Osaka Exchange, a licensed financial instruments exchange for trading core financial derivatives.',
      respTitle: 'Responsibilities',
      responsibilities: [
        { id: uid(), text: 'Responsible for testing the Order Management and Trade History screens; studied product workflows thoroughly to ensure full test coverage.' },
        { id: uid(), text: 'Designed test cases for SIT and UAT; estimated effort and coordinated test scheduling with the Japanese client team.' },
        { id: uid(), text: 'Executed main flow, regression, rush test, and rehearsal testing prior to go-live; validated DB records via DBeaver after each build.' },
        { id: uid(), text: 'Inspected UI screens using Chrome DevTools to verify layout consistency, API response payloads, and error handling.' },
        { id: uid(), text: 'Logged, tracked, and verified defects; participated in weekly status meetings to report testing progress.' },
        { id: uid(), text: 'Proposed improvements to test coverage strategy, reducing missed regression cases in the final release cycle.' },
      ],
    },
    {
      id: uid(),
      name: 'Public Procurement System (National eTendering Network — VNPT eProcurement)',
      date: 'Aug 2022 – Feb 2023 (7 months)',
      team: '30',
      client: 'Ministry of Finance, Vietnam',
      tools: 'Jira, SSMS, Postman, Chrome DevTools',
      description:
        "A full modernization of Vietnam's National eTendering Network under the Ministry of Finance, migrating from a legacy Internet Explorer-only system (2009) to a modern cross-browser platform. The rebuilt system covers the complete public procurement lifecycle — from contractor registration and online bidding to contract management and electronic payment.",
      respTitle: 'Responsibilities',
      responsibilities: [
        { id: uid(), text: 'Analyzed business requirements and studied relevant legal regulations applied in the project to define test scope and acceptance criteria.' },
        { id: uid(), text: 'Performed feature integration testing and cross-browser testing across Chrome, Edge, and Safari to eliminate dependency on Internet Explorer from the legacy system (2009).' },
        { id: uid(), text: 'Reported defects and regularly updated testing progress to the Test Leader.' },
      ],
    },
    {
      id: uid(),
      name: 'Bizbone',
      date: 'Feb 2022 – Sep 2022 (8 months)',
      team: '40',
      client: 'US',
      tools: 'Azure DevOps, MySQL Workbench, Postman',
      description:
        'A comprehensive ERP solution that unifies business development, administration, accounting, and operations in one platform. It optimizes workflows, centralizes processes, and supports businesses of all types through role-based access and automation.',
      respTitle: 'Responsibilities',
      responsibilities: [
        { id: uid(), text: 'Covered the Business Development and Administration modules; reviewed ticket specs and designed integration and system test cases for each feature.' },
        { id: uid(), text: 'Estimated testing effort per ticket; coordinated with team via Azure DevOps throughout the sprint.' },
        { id: uid(), text: 'Performed database validation using MySQL Workbench to verify data integrity.' },
        { id: uid(), text: 'Executed tests, documented evidence, and prepared defect lists and test result reports for the PM.' },
        { id: uid(), text: 'Led business knowledge transfer and produced handover materials for the US customer service team.' },
      ],
    },
    {
      id: uid(),
      name: 'Apollo App (Aeon Mall)',
      date: 'Apr 2023 – Oct 2023 (7 months)',
      team: '18',
      client: 'Japan',
      tools: 'Azure DevOps, Swagger, Figma, VMware',
      description: "Mobile app integrating Aeon Mall's payment methods including cash, credit card, Aeon gift card payments and more.",
      respTitle: 'Responsibilities',
      responsibilities: [
        { id: uid(), text: 'Tested the Payment Flow with cash and Gift Card Redemption; used Figma for UI spec inspection and confirmed design discrepancies with the Japanese client.' },
        { id: uid(), text: 'Created detailed matrix test cases for SIT and UAT phases; executed tests and documented results with evidence screenshots.' },
        { id: uid(), text: 'Validated API responses via Swagger for payment processing endpoints; verified correct status codes and payload structure.' },
        { id: uid(), text: 'Tested new features, updates, and hotfixes across release cycles; attended daily standups to report progress.' },
        { id: uid(), text: 'Used Chrome DevTools to inspect network requests and validate UI rendering across device viewports.' },
      ],
    },
    {
      id: uid(),
      name: 'Digitori 360 Digital Solution',
      date: 'Jan 2024 – Jun 2024 (6 months)',
      team: '12',
      client: 'Japan',
      tools: 'Backlog, DBeaver, Postman',
      description:
        'An architectural modeling solution that leverages 360° imaging technology to create immersive 3D maps, enabling businesses and individuals in architecture and construction to visualize, manage, and present spaces more effectively.',
      respTitle: 'Responsibilities',
      responsibilities: [
        { id: uid(), text: 'Covered all main features; analyzed and clarified requirements with the BA and Japanese client team.' },
        { id: uid(), text: 'Designed and executed test cases for all functional requirements; performed smoke and regression testing per build.' },
        { id: uid(), text: 'Verified backend data integrity with DBeaver; validated API responses via Postman for data endpoints.' },
        { id: uid(), text: 'Reviewed UI/UX consistency using Figma and DevTools to catch display discrepancies.' },
        { id: uid(), text: 'Confirmed and logged customer-reported defects; prepared Sprint Test Result Reports after each sprint.' },
      ],
    },
    {
      id: uid(),
      name: 'HHLL (ハハロる)',
      date: 'Jul 2024 – Dec 2024 (6 months)',
      team: '15',
      client: 'Japan',
      tools: 'Jira, DBeaver, Swagger',
      description: 'Online social network for Japanese users to interact, share information, photos, and connect with friends and family.',
      respTitle: 'Responsibilities',
      responsibilities: [
        { id: uid(), text: 'Responsible for all main modules; analyzed requirements and created comprehensive test cases for all functional scenarios.' },
        { id: uid(), text: 'Executed UAT and regression testing per sprint; ensured smooth feature rollout for each build and release.' },
        { id: uid(), text: 'Validated database records via DBeaver.' },
        { id: uid(), text: 'Tested social graph API endpoints via Swagger to verify business flows.' },
        { id: uid(), text: 'Coordinated directly with the Japanese client to address questions, clarify acceptance criteria, and propose product improvements.' },
        { id: uid(), text: 'Logged and tracked defects throughout the testing lifecycle; provided detailed reproduction steps and severity assessments.' },
      ],
    },
  ],

  education: [
    { id: uid(), name: 'ISTQB Foundation Level', detail: 'Issued July 2023' },
    { id: uid(), name: 'Japanese Language Proficiency — N3', detail: 'Vietnam College of Foreign Languages and Technology, 2019–2022' },
    { id: uid(), name: 'Software Testing Certificate', detail: 'Tester Hanoi, 2022' },
  ],
})

export function useCvData() {
  return cv
}
