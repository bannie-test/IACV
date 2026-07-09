export function enData(uid) {
  return {
    name: "NGUYEN THI NGOC ANH",
    title: "Manual Tester | Middle Level",

    sectionTitles: {
      summary: "Professional Summary",
      skills: "Core Skills",
      experience: "Work Experience",
      projects: "Project Portfolio",
      education: "Education & Certifications",
    },

    contacts: [
      { id: uid(), icon: "✉", text: "ntnanhtester0910@gmail.com" },
      { id: uid(), icon: "🎂", text: "09/10/2001" },
      { id: uid(), icon: "☎", text: "0865838618" },
    ],

    summary:
      "Middle-level Manual Tester with 3+ years of experience in SIT, UAT, and regression testing across Agile Scrum projects. Proven track record of collaborating with both national and international clients in teams of 12–40 members. Skilled in end-to-end test cycle management — from requirements analysis and test case design to defect tracking, reporting, and knowledge transfer. Hands-on experience with database verification (DBeaver, SSMS, MySQL Workbench), API testing (Postman, Swagger), and UI inspection (Figma, DevTools).",

    skills: [
      {
        id: uid(),
        label: "Database & SQL",
        value:
          "Solid knowledge of Database and SQL for data validation and testing",
      },
      {
        id: uid(),
        label: "Testing Execution",
        value:
          "Test case design, test execution, defect analysis, and reporting",
      },
      {
        id: uid(),
        label: "Defect Management",
        value:
          "Experienced in using defect tracking tools to manage and monitor issues effectively",
      },
      {
        id: uid(),
        label: "Methodologies",
        value: "SDLC, Waterfall, Agile Scrum",
      },
      {
        id: uid(),
        label: "Requirement Analysis",
        value:
          "Skilled in analyzing SRS and communicating with stakeholders to clarify requirements",
      },
      {
        id: uid(),
        label: "Tools",
        value:
          "Redmine, Jira, Azure DevOps, Backlog, DBeaver, SSMS, MySQL Workbench, Postman, Swagger",
      },
      {
        id: uid(),
        label: "Platforms",
        value: "Web application testing, Mobile application testing",
      },
      {
        id: uid(),
        label: "Soft Skills",
        value: "Analytical thinking, problem-solving, teamwork",
      },
    ],

    experience: [
      {
        id: uid(),
        title: "Manual Tester — TDT Asia",
        date: "Dec 2024 – Present",
      },
      {
        id: uid(),
        title: "Manual Tester — LTS Group",
        date: "Aug 2022 – Dec 2024",
      },
    ],

    projects: [
      {
        id: uid(),
        name: "IFS Monday — Loan Management System (LMS)",
        date: "Jun 2023 – Dec 2024",
        team: "25",
        client: "Singapore",
        tools: "Redmine, DBeaver, Postman, Selenium IDE",
        description:
          "Financial management platform supporting loan processing and customer credit management operations including loan applications, repayment schedules, customer information, transaction tracking, and financial reporting.",
        respTitle: "Responsibilities",
        responsibilities: [
          {
            id: uid(),
            text: "Analyzed business requirements and collaborated with BA/PO to clarify ambiguities.",
          },
          {
            id: uid(),
            text: "Designed and maintained test plans, test cases, and test scenarios.",
          },
          {
            id: uid(),
            text: "Performed functional, regression, and integration testing.",
          },
          {
            id: uid(),
            text: "Executed test cases and managed defects using Jira.",
          },
          {
            id: uid(),
            text: "Verified bug fixes through re-testing and validation.",
          },
          {
            id: uid(),
            text: "Conducted API testing using Postman and backend validation using SQL queries.",
          },
          {
            id: uid(),
            text: "Participated in Agile/Scrum ceremonies and prepared detailed test reports.",
          },
        ],
      },
      {
        id: uid(),
        name: "Osaka Exchange (OSE)",
        date: "Oct 2022 – May 2023",
        team: "38",
        client: "Japan",
        tools: "Redmine, DBeaver, Selenium IDE",
        description:
          "Financial trading platform supporting secure and reliable derivatives and securities trading operations.",
        respTitle: "Responsibilities",
        responsibilities: [
          {
            id: uid(),
            text: "Analyzed business requirements and functional specifications.",
          },
          {
            id: uid(),
            text: "Designed test cases for Order Management covering FAS, FAK, FOK, IFD, IFD-OCO.",
          },
          {
            id: uid(),
            text: "Executed main flow, regression, rush test, and rehearsal testing.",
          },
          { id: uid(), text: "Validated DB records via DBeaver." },
          { id: uid(), text: "Reported and tracked defects using Redmine." },
          {
            id: uid(),
            text: "Collaborated closely with developers and stakeholders.",
          },
        ],
      },
      {
        id: uid(),
        name: "Mua Sắm Công (National eTendering Network)",
        date: "Aug 2022 – Feb 2023",
        team: "30",
        client: "Ministry of Finance, Vietnam",
        tools: "Jira, SSMS, Postman, Chrome DevTools",
        description:
          "Modernization of Vietnam National eTendering Network from legacy Internet Explorer system to a modern cross-browser procurement platform.",
        respTitle: "Responsibilities",
        responsibilities: [
          {
            id: uid(),
            text: "Analyzed business requirements and legal regulations.",
          },
          {
            id: uid(),
            text: "Performed feature integration testing and cross-browser testing.",
          },
          {
            id: uid(),
            text: "Reported defects and updated testing progress to Test Leader.",
          },
        ],
      },
      {
        id: uid(),
        name: "Bizbone",
        date: "Feb 2022 – Sep 2022",
        team: "40",
        client: "US",
        tools: "Azure DevOps, MySQL Workbench, Postman",
        description:
          "ERP solution covering business development, administration, accounting, and operations.",
        respTitle: "Responsibilities",
        responsibilities: [
          {
            id: uid(),
            text: "Analyzed business requirements and identified test scenarios.",
          },
          {
            id: uid(),
            text: "Designed and executed functional, integration, and regression test cases.",
          },
          { id: uid(), text: "Wrote and executed API test cases." },
          {
            id: uid(),
            text: "Reported and tracked defects using Azure DevOps.",
          },
          {
            id: uid(),
            text: "Led business knowledge transfer and handover materials.",
          },
        ],
      },
      {
        id: uid(),
        name: "Apollo App (Aeon Mall)",
        date: "Apr 2023 – Oct 2023",
        team: "18",
        client: "Japan",
        tools: "Azure DevOps, Swagger, Figma, VMware",
        description:
          "Payment application for Aeon Mall integrating multiple payment methods such as cash, credit card, and gift cards.",
        respTitle: "Responsibilities",
        responsibilities: [
          {
            id: uid(),
            text: "Tested payment flow with cash and gift card redemption.",
          },
          {
            id: uid(),
            text: "Used Figma for UI inspection and confirmed design discrepancies.",
          },
          { id: uid(), text: "Created SIT and UAT matrix test cases." },
          { id: uid(), text: "Validated API responses via Swagger." },
          { id: uid(), text: "Tested new features, updates, and hotfixes." },
        ],
      },
      {
        id: uid(),
        name: "Digitori 360 Digital Solution",
        date: "Jan 2024 – Jun 2024",
        team: "12",
        client: "Japan",
        tools: "Backlog, DBeaver, Postman",
        description:
          "Architectural modeling solution using 360° imaging to create immersive 3D maps.",
        respTitle: "Responsibilities",
        responsibilities: [
          {
            id: uid(),
            text: "Covered all main features and clarified requirements with BA and client.",
          },
          { id: uid(), text: "Designed and executed functional test cases." },
          { id: uid(), text: "Performed smoke and regression testing." },
          {
            id: uid(),
            text: "Validated backend data via DBeaver and APIs via Postman.",
          },
          { id: uid(), text: "Prepared Sprint Test Result Reports." },
        ],
      },
    ],

    education: [
      { id: uid(), name: "ISTQB Foundation Level", detail: "Issued July 2023" },
      {
        id: uid(),
        name: "Japanese Language Proficiency — N3",
        detail:
          "Vietnam College of Foreign Languages and Technology, 2019–2022",
      },
      {
        id: uid(),
        name: "Software Testing Certificate",
        detail: "Tester Hanoi, 2022",
      },
    ],
  };
}
