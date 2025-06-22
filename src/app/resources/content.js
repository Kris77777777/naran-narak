import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Narak",
  lastName: "Naran",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Project Manager, Business Analysis, QA, Programmer",
  avatar: "/images/projects/project-01/me.jpg",
  email: "naran.narak7@gmail.com",
  location: "Asia/Phnom_Penh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Khmer"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/isme_rak",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/narak-naran-28306626b/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Welcome to My Portfolio</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">DamDoh</strong></>,
    href: "/work/PNNPLUS_project",
  },
  subline: (
    <>
      I'm Narak, experience in <b>project management</b>, <b>business analysis</b>, <b>quality assurance</b>, <b>programmer</b>, and <b>Ux/UI Desiger</b>, where you can find my detail information here
      <br />
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {/* I’m Naran Narak, an experienced Project Manager and Backend Developer with a strong background in quality assurance and usability testing. With over two years of experience in the software technology industry, I have successfully managed and tested projects in logistics, entertainment, e-commerce, and more. My expertise covers both web and mobile applications, focusing on user experience and payment process efficiency. */}
        I have a comprehensive understanding of project development lifecycles, from sales to project delivery.
        My background combines project management and backend development, enabling me to deliver quality work that aligns with business objectives and
        technical needs. Skilled in usability testing, payment process analysis, and user experience evaluation, I bring a detail-oriented and user-focused
        approach to every project. My experience managing diverse teams and collaborating closely with stakeholders ensures that testing and project goals are
        met efficiently and effectively.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Phnom Penh Commercial Bank",
        timeframe: "Nov 2024 - Present",
        role: "IT Planning",
        achievements: [
          <>Led project delivery, ensuring timely execution.</>,

          <>Collaborated with architects and engineers to determine material and equipment needs.</>,

          <>Tested new versions of the mobile banking app before launch.</>,

          <>Consulted with solution companies on integrating payment gateways (QR Payment & Deeplink).</>,

          <>Provided technical guidance to solution companies, including API workflows and suggestions for optimization.</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Codingate Technology Co., Ltd",
        timeframe: "Apr 2023 - Oct 2024",
        role: "Project Manager and Backend Developer",
        achievements: [
          <>Led projects from planning to execution, managing resources, timelines, and budgets.</>,

          <>Developed new features and resolved project issues as a hands-on developer.</>,

          <>Created comprehensive project plans, aligned with customer requirements and stakeholder expectations.</>,

          <>Managed project teams, assigned tasks, and ensured smooth collaboration.</>,

          <>Conducted progress tracking, performance analysis, and adjustments for timely project completion.</>,

          <>Set monthly targets with the Chief Technology Officer and Finance team to prioritize project delivery.</>,

          <>Built strong relationships with clients and stakeholders.</>,

          <>Conducted quality assurance, tested deliverables, and maintained project documentation.</>,

          <>Provided status updates and resolved issues, maintaining clear communication with stakeholders.</>,

          <>Proficient in Laravel, PHP, JavaScript, JQuery, and MySQL, with experience in Vue.js and WordPress.</>,

          <>Experienced in system optimization, database query optimization, and code refactoring.</>,

          <>Managed data scraping from e-commerce sites and third-party video ad integrations for mobile apps.</>,

          <>Uploaded applications to Google Play Store and Apple App Store, ensuring compliance.</>
        ],
        images: [],
      },
      {
        company: "Codingate Technology Co., Ltd",
        timeframe: "Oct 2022 - Apr 2023",
        role: "Project Coordinator",
        achievements: [
          <>Collaborated with Business Analysis, Sales, and stakeholders to gather requirements.</>
          ,
          <>Created detailed Project Requirement Specification documents.</>
          ,
          <>Defined project scope, resources, and timelines, and assigned tasks accordingly.</>
          ,
          <>Created visual diagrams for project processes.</>
          ,
          <>Worked with design teams and customers to ensure the frontend and backend met project requirements.</>
          ,
          <>Oversaw project teams and tracked progress, identifying and resolving potential risks.</>
          ,
          <>Maintained project documentation, including test cases, user guides, and progress reports.</>
          ,
          <>Regularly updated stakeholders and held meetings to ensure alignment.</>
          ,
          <>Identified and resolved project issues, escalating when necessary.</>
          ,
          <>Crafted test cases, user stories, and use cases for clarity and functionality.</>
          ,
          <>Managed project plans and backup strategies using Gantt charts for on-time delivery.</>
        ],
        images: [],
      },
      {
        company: "Codingate Technology Co., Ltd",
        timeframe: "Mar 2022 - Oct 2022",
        role: "Junior Project Coordinator",
        achievements: [
          <>Assisted the Project Manager with planning and project execution.</>
          ,
          <>Conducted testing and monitored project issues to ensure quality standards.</>
          ,
          <>Gained an understanding of systems, including POS, e-commerce, marketplace, and property management.</>
          ,
          <>Managed task decomposition and supported testing and communication throughout the project.</>
          ,
          <>Developed skills in speaking, negotiation, and thorough testing to support project delivery.</>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Bachelor Degree at BELTEI International University (2021 - 2024)",
        // name: "Beltei International University",
        description: <>Studied software engineering.</>,
      },
      {
        name: "SereyPheab High School (2017 - 2020)",
        description: <>Studied in science class</>,
      },
      {
        name: "Svay Rolum Secondary School (2014 - 2017)",
        description: <>Studied in secondary school</>,
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Project Management",
        description: <>Able to manage project with Agile Methodology, Waterfall Methodology; using click up and excel to tracking the progress, assigned tasks, and report.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/dashboard1.jpg",
            alt: "Project Dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/ganttchart.png",
            alt: "Project Gantt Chart",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/clickup.png",
            alt: "Task Progress Tracking",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Business Analysis",
        description: <>Experienced in gathering and analyzing requirements, creating detailed documentation,
          and supporting team alignment using tools like Balsamiq and MindManager. Using Balsamiq and Figma for deisgn the wireframes</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Skill_image/BA/BA_doc1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Skill_image/BA/BA_doc2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Skill_image/BA/wireframe1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Skill_image/BA/wireframe2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Quality Assurance",
        description: <>Proficient in testing, creating detailed test cases, documentation,
          and user guides to ensure product reliability and optimal user experience.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Skill_image/QA/qa1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Skill_image/QA/qa2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Skill_image/QA/qa3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Developer",
        description: <>Experienced in developing, debugging, and optimizing applications using
          Laravel, Laravel Telescope (debugging), PHP, JavaScript, JQuery, WordPress, and SASS for efficient and scalable solutions</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Skill_image/program/laravel.png",
            alt: "Project image",
            width: 10,
            height: 4,
          },
          {
            src: "/images/Skill_image/program/php.png",
            alt: "Project image",
            width: 10,
            height: 4,
          },
          {
            src: "/images/Skill_image/program/vue_js.png",
            alt: "Project image",
            width: 10,
            height: 4,
          },
          {
            src: "/images/Skill_image/program/wordpress.png",
            alt: "Project image",
            width: 10,
            height: 4,
          },
          {
            src: "/images/Skill_image/program/js.png",
            alt: "Project image",
            width: 10,
            height: 4,
          },
        ],
      },
      {
        title: "UX/UI Desiger",
        description: <>Proficient in designing intuitive interfaces and wireframes using Figma and Balsamiq,
          focused on enhancing user experience and engagement.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/Skill_image/ui/ui1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Skill_image/ui/ui2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Skill_image/ui/ui3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Skill_image/ui/ui4.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
