/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akbar's Portfolio",
  description:
    "A hardworking Fullstack Developer 🚀 having an experience of building Web applications with Laravel and NodeJs.",
  og: {
    title: "Akbar Affaruk Khuzaimi Ahmadani Portfolio",
    type: "website",
    url: "https://akbaraffaruk.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Akbar Affaruk Khuzaimi Ahmadani",
  logo_name: "AkbarAffarukKhuzaimiAhmadani",
  nickname: "Akbar",
  subTitle:
    "A hardworking Fullstack Developer 🚀 having an experience of building Web applications with Laravel and NodeJs.",
  resumeLink:
    "https://drive.google.com/file/d/1-3k8eN1Jhp9ZmLalJ4pxg558y9c1DzFm/view?usp=drive_link",
  portfolio_repository:
    "https://github.com/akbaraffaruk/akbaraffaruk.github.io",
  githubProfile: "https://github.com/akbaraffaruk",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/akbaraffaruk",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akbar-affaruk-khuzaimi-ahmadani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:akbaraffaruk13@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/afka.best/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/afkaa_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Web Development",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop Front End / Back End for your web applications",
        "⚡ Developing web applications using Laravel, Node, & Express",
        "⚡ Integration of third party services",
        "⚡ Experience working with databases such as MySQL, PostgreSQL, & Supabase",
        "⚡ Server management using Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38B2AC",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#51ce93",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "Certiprof",
    //   iconifyClassname: "simple-icons:scrum",
    //   style: {
    //     color: "#f2f2f2",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    //   {
    //     siteName: "HackerRank",
    //     iconifyClassname: "simple-icons:hackerrank",
    //     style: {
    //       color: "#2EC866",
    //     },
    //     profileLink: "https://www.hackerrank.com/layman_brother",
    //   },
    //   {
    //     siteName: "Codechef",
    //     iconifyClassname: "simple-icons:codechef",
    //     style: {
    //       color: "#5B4638",
    //     },
    //     profileLink: "https://www.codechef.com/users/ashutosh_1919",
    //   },
    //   {
    //     siteName: "Codeforces",
    //     iconifyClassname: "simple-icons:codeforces",
    //     style: {
    //       color: "#1F8ACB",
    //     },
    //     profileLink: "http://codeforces.com/profile/layman_brother",
    //   },
    //   {
    //     siteName: "Hackerearth",
    //     iconifyClassname: "simple-icons:hackerearth",
    //     style: {
    //       color: "#323754",
    //     },
    //     profileLink: "https://www.hackerearth.com/@ashutosh391",
    //   },
    //   {
    //     siteName: "Kaggle",
    //     iconifyClassname: "simple-icons:kaggle",
    //     style: {
    //       color: "#20BEFF",
    //     },
    //     profileLink: "https://www.kaggle.com/laymanbrother",
    //   },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Telkom University",
      subtitle: "S.Kom. in Information System",
      logo_path: "telkomLogo.png",
      alt_name: "Telkom University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied information system subjects like Web Development, Object Oriented Programming, Database, Network, etc.",
        "⚡ Apart from this, I Participated in the Enterprise System Development Research Group.",
        "⚡ I was selected for Software Development Coordinator in Research Group.",
      ],
      website_link: "https://telkomuniversity.ac.id/",
    },
    // {
    //   title: "Telkom University",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Junior Web Developer",
      subtitle: "- BNSP",
      logo_path: "lsp_informatika.png",
      certificate_link:
        "https://drive.google.com/file/d/1DzrLm65K_YpBJ902P7DpGO2kKameUQMz/view?usp=sharing",
      alt_name: "LSP Informatika",
      color_code: "#277cbe",
    },
    {
      title: "SCRUM FOUNDATION PROFESSIONAL CERTIFICATE (SFPC)",
      subtitle: "- Certiprof",
      logo_path: "scrum_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1elg2oGxnA3tVZsMcWNC5Bp70Ezw-Z68n/view?usp=sharing",
      alt_name: "Certiprof",
      color_code: "#1e374d",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Project and Work",
  description:
    "I have worked with several companies as a freelancer, intern and staff. I have also worked on some personal projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "LESLAR Metaverse",
          company: "LESLAR Metaverse",
          company_url: "https://www.leslarmetaverse.com/",
          logo_path: "leslar-logo.jpg",
          duration: "September 2022 – Now",
          location: "Jakarta, Indonesia",
          description:
            "I developed an ad management dashboard for the Cuan.tv website using Laravel, Parse Platform, and Moralis Cloud Function. Additionally, I created a management dashboard for leslarmetaverse using the same technologies. I built a WhatsApp chatbot using CodeIgniter and Node.js. Furthermore, I designed and developed event management and booking management dashboard apps using Laravel and Supabase. I implemented a WhatsApp notification service using Express.js. Moreover, I developed a reservation app service using Express.js and Supabase. Lastly, I constructed a reservation app dashboard using Laravel.",
          color: "#4285F4",
        },
        {
          title: "Designer Roomaliving",
          company: "Roomaliving",
          company_url: "https://rooma.co.id/",
          logo_path: "rooma_logo.png",
          duration: "April 2023 - May 2023",
          location: "Jakarta, Indonesia",
          description:
            "Developing a website for Roomaliving, a company that provides interior design services. The website is developed using the Laravel Framework.",
          color: "#47b9c8",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Internship in Ministry of Trade of the Republic of Indonesia",
          company: "Ministry of Trade",
          company_url: "https://www.kemendag.go.id/",
          logo_path: "kemendag_logo.png",
          duration: "May 2021 – December 2021",
          location: "Jakarta, Indonesia",
          description:
            "I developed the backend and frontend for the Information Management and Documentation Officer (PPID) website at the Ministry of Trade using the Laravel framework. Additionally, I created an API for the mobile application of the Information and Documentation Management Officer (PPID) at the Ministry of Trade, also utilizing the Laravel framework. Furthermore, I developed the frontend display for the Ministry of Trade's Computer Security Incident Response Team (CSIRT) website using the Codeigniter framework.",
          color: "#12172b",
        },
        {
          title: "Digital Knowledge Management System (DIGIKNOW)",
          company: "PT Telkom Indonesia (Persero) Tbk.",
          company_url: "https://www.telkom.co.id/sites",
          logo_path: "telkom_indonesia_logo.png",
          duration: "January 2022 – May 2022",
          location: "Bandung, Indonesia",
          description:
            "Developing a website for Knowledge Management System. The website is developed using the Laravel Framework.",
          color: "#e84230",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "Creditworthiness Web Application",
          company: "Karya Usaha Mandiri",
          company_url: "https://www.kumsyariah.com/",
          logo_path: "kum_logo.png",
          duration: "January 2022 – Juli 2022",
          location: "Bogor, Indonesia",
          description:
            "I analyze system requirements for applications by creating Unified Modeling Language (UML) diagrams. Additionally, I develop a Creditworthiness Analysis Information System website using the Laravel framework. The website aims to determine the creditworthiness of members in Cooperatives.",
          color: "#55b949",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on several projects, some of which are personal projects and some of which are for companies.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name:
        "Pengembangan Prototipe Perancangan Aplikasi Sistem Informasi Analisis Kelayakan Kredit Berbasis Web Pada KSPPS Karya Usaha Mandiri Menggunakan Metode Iterative Incremental",
      createdAt: "2023-02-14T16:26:54Z",
      description:
        "Paper Written on Creditworthiness Analysis Information System published in Syntax Literate",
      url:
        "https://jurnal.syntaxliterate.co.id/index.php/syntax-literate/article/view/11353",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Laravel, Node.js, and Express.js",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Warnasari Barat, RT 01 RW 08, Cibeber 1, Leuwiliang, Kabupaten Bogor, Jawa Barat, 16640",
    locality: "Leuwiliang",
    country: "ID",
    region: "Jawa Barat",
    postalCode: "16640",
    streetAddress: "Warnasari Barat",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/oYkP4ApxcNFVcPTp8 ",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+62 822-4271-7072",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
