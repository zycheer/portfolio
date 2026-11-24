// All portfolio content lives here. Edit this file to update the site.
export const profile = {
  name: "Kim Euzent Rebong Dausin",
  short: "Kim Euzent",
  email: "togtogdausin@gmail.com",
  phone: "0975-028-7261",
  phoneHref: "+639750287261",
  location: "Victoria, Laguna, Philippines",
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  socials: [],
};

export const nav = [
  ["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"],
  ["experience", "Experience"], ["education", "Education"], ["contact", "Contact"],
];

export const skills = [
  { title: "Programming & Development", icon: "Code2", items: ["Python", "JavaScript", "Flutter", "Dart", "Flask"] },
  { title: "Database & Technologies", icon: "Database", items: ["Firebase", "Socket.IO", "OpenCV", "Leaflet"] },
  { title: "Tools & Productivity", icon: "Layers", items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Publisher", "Canva"] },
  { title: "Technical Support", icon: "Wrench", items: ["Computer and laptop troubleshooting", "Basic printer maintenance", "Desktop computer maintenance", "Device configuration and management"] },
];

export const safe = {
  title: "S.A.F.E. — Smart Alert and Fast Emergency System",
  blurb: "An undergraduate thesis project developed to provide a citizen-initiated emergency response platform for Victoria, Laguna.",
  details: [
    "Developed a full-stack emergency response platform.",
    "Created a Flutter mobile application.",
    "Developed a Flask web dashboard.",
    "Implemented real-time geolocation tracking.",
    "Integrated push notifications.",
    "Built responder routing functionality.",
    "Used Firebase and Socket.IO for real-time communication.",
    "Evaluated usability and adoption using the Technology Acceptance Model.",
  ],
  stack: ["Flutter", "Python", "Flask", "Firebase", "Socket.IO", "OpenCV", "Leaflet"],
  // Replace with real screenshots, e.g. "/safe-mobile.png" and "/safe-dashboard.png" in /public
  mobileImg: null,
  dashboardImg: null,
};

export const experience = [
  {
    title: "On-the-Job Training", org: "Municipal Hall of Victoria, Laguna", meta: "2026 | 600 Hours",
    points: ["Encoding data.", "Performing basic troubleshooting and maintenance of desktop computers.", "Sorting files and organizing important documents."],
  },
  {
    title: "Government Internship Program (GIP)", org: "Public Employment Service Office (PESO), Municipality of Victoria, Laguna", meta: "2026",
    points: [
      "Managed administrative and office-related tasks.", "Printed and prepared documents.",
      "Assisted jobseekers in finding employment opportunities.", "Maintained a database of job vacancies and applicants.",
      "Referred qualified applicants to employers.", "Handled documentation, filing, and reports related to employment services.",
      "Assisted in maintaining daily PESO operations.",
    ],
  },
];

export const education = [
  { title: "Laguna State Polytechnic University", org: "Bachelor of Science in Information Technology", meta: "2022–2026 · Sta. Cruz, Laguna" },
  { title: "Masapang Integrated National High School", org: "Science, Technology, Engineering, and Mathematics (STEM)", meta: "2020–2022" },
];

export const certs = [
  { title: "Information Technology Specialist in Device Configuration and Management", meta: "Certiport", icon: "BadgeCheck" },
  { title: "Participant, 18th Youth Congress on Information Technology (Y4IT)", meta: "2023", icon: "Award" },
  { title: "Participant, P.U.S.I.T. (Program, Unite, Survive in Information Technology, Exceed)", meta: "2023", icon: "Award" },
];

export const qualities = [
  { label: "Attention to Detail", icon: "Eye" },
  { label: "Communication Skills", icon: "MessagesSquare" },
  { label: "Ability to Work Under Pressure", icon: "Timer" },
  { label: "Client-Friendly Attitude", icon: "Smile" },
  { label: "Respect for Workplace Hierarchy", icon: "Landmark" },
];