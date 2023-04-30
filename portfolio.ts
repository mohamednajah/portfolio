import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'M. NAJAH',
  title: "Hi all, I'm MOHAMED NAJAH",
  description:
    "I'm a Full Stack web developer having an experience of web applications with  React.js, Next.js,VueJs,Angular and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    'https://drive.google.com/file/d/1PixZq9jKooIFrVF0HlT6Qxxb7MMroyPZ/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'mohamednajah',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/mohamednajah',
  linkedin: 'https://www.linkedin.com/in/mohamed-najah-84043b204/',
  github: 'https://github.com/mohamednajah',
  instagram: 'https://www.instagram.com/_mohamed.najah/',
  facebook: 'https://www.facebook.com/',
  
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: ' FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassName: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'ENSET MOHAMMEDIA',
    subHeader: 'BIG DATA AND CLOUD COMPUTING',
    duration: 'September 2021 - NOW',
    desc: 'SECOND YEAR OF ENGINEERING ',
    descBullets: [
      'Participation in entrepreneurship days ',
      'Vice President of the Club "Beax Arts"',
    ],
  },
   {
    schoolName: 'BTS AGADIR',
    subHeader: 'SYSTEMES ET RESEAUX INFORMATIQUES',
    duration: 'September 2019 - 2021',
    desc: '2 YEARS IN AL IDRISSI ',
    descBullets: [
      '1st nationally in BTS SRI 2019 ',
      'creation of an e-learning application',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'IOT Developer',
    company: 'SMA AGADIR',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'August 2022 – September 2022',
    desc: 'I worked as an iot and  web developer to create an attendance system based on the RFID technologie , i created the interface also which offers  the possibility of managing the data o the users',
  },
  {
    role: 'WEB Developer',
    company: 'AGANET',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'MAY – JUNE 2021',
    desc: 'I worked as a web developer. i created a website for the company which offers some digital services ',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
 
];

export const projects: ProjectType[] = [
  {
    name: 'FitClub website',
    desc: 'a website for a fitclub that shows the offers with the menu of subscribtion with React.',
    github: 'https://github.com/mohamednajah',
    link: 'https://github.com/mohamednajah',
  },
  {
    name: 'Fast Food Delivery App',
    desc: 'it contains the menu of food with a fast delivery service with NextJs.',
    github: 'https://github.com/mohamednajah',
  },
  {
    name: 'ATTENDANCE SYSTEM  WITH RFID TECHNOLOGIE',
    desc: 'using the rfid tech to create an attendance system and creating an interface for visualization ',
    github: 'https://github.com/mohamednajah',
  },
  {
    name: 'BLOG SPA(SINGLE PAGE APPLICATION)',
    desc: 'Single page application full stack with Expressjs,JQuery,Ajax..',
    github: 'https://github.com/mohamednajah',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'IDEATHON',
    feedback:
'I participated in the competition named IDEATHON during the Entrepreneurship Days at ENSET MOHAMMEDIA. My team secured the 3rd place in the competition, the experience we gained was invaluable.During the competition, we had to come up with innovative business ideas and present them to a panel of judges. This required us to think creatively and critically to develop a unique concept that would capture the attention of the judges.                                  One of the essential skills that I learned during the competition was how to choose the right idea. We had to consider various factors such as market demand, competition, feasibility, and sustainability while selecting the concept to work on.Another crucial aspect that we learned during the competition was time management. We had a limited time frame to come up with the idea, develop the business plan, and prepare the presentation. As a team, we had to prioritize tasks and manage our time effectively to meet the deadline. This experience taught us how to work efficiently under pressure and deliver results within a short period.Overall, participating in the IDEATHON competition was a beneficial experience. We learned a lot about entrepreneurship, critical thinking, and time management. It also provided us with an opportunity to network with like-minded individuals and gain valuable feedback from experienced judges. ', 
   image:'https://i.ibb.co/VTqgszk/ab804c57-e96f-4fc0-a355-bafc0d054e57.jpg',  
  },
  {
    name: 'ENGLISH COURSE',
    feedback:
'what i liked the most about our english course presented by our teacher Abderrahim CHALFAOUAT is how we express our ideas freely, engage in thoughtful discussions, share our thoughts, and learn from each other. Personally i find this approach vital in helping students to develop their English language skills, especially in terms of speaking and listening.The course requires for us to give presentations on various topics, which contribute significantly to the improvement of our language and organizational skills. we learned how to structure our ideas and present them in a clear and concise manner, and that helped us to communicate effectively and confidently in different settings, including public speaking.The course also encouraged us to practice active listening, which is a critical component of effective communication. we learned how to listen attentively to others(taking notes,vlog experience), ask questions, and provide constructive feedback. This approach creates an environment where we felt comfortable expressing our opinions where everyone s ideas are valued.and to sum up i can say that the course was really benifitial in all aspects.',
      image:'',  
    },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'MOHAMED NAJAH',
  description:
    'A  Full Stack Developer.',
  author: 'MOHAMED NAJAH',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url:  'https://www.linkedin.com/in/mohamed-najah-84043b204/',
  keywords: [
    
  ],
};
