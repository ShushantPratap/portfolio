const projects = [
  // web projects
  {
    id: 'physiotherapy',
    type: 'website',
    title: 'Physiotherapy website',
    description: `This responsive physiotherapist website is designed to connect patients with expert care. It features smooth slot booking and provides a seamless, user-friendly experience across all devices.`,
    technologies: ['Html', 'CSS', 'Bootstrap', 'JavaScript', 'AJAX', 'jQuery', 'PHP', 'MySQL'],
    githubLink: '#',
    liveLink: '/../../projects/webProjects/3-physiotherapy-Website/',
    image: 'https://sp3.free.nf/img/web3.jpeg'
  },
  {
    id: 'justblog',
    type: 'website',
    title: 'Just Blog',
    description: `This is a dynamic blogging website inspired by Instagram, featuring user authentication, post creation, browsing, reading, editing, deleting, saving, sharing and much more functions. It offers an interactive and user-friendly platform for expressing and exploring content-rich posts.`,
    technologies: ['react', 'redux', 'react router', 'CSS', 'appwrite.io'],
    githubLink: '#',
    liveLink: 'https://justblog.vercel.app/',
    image: 'https://placehold.co/400x250/F8F8F8/333333?text=Task+Manager'
  },
  {
    id: 'photographer',
    type: 'website',
    title: 'Photo and videographer portfolio',
    description: `This is a visually appealing photo and videographer portfolio website designed to showcase creative work with a clean, responsive layout. It features smooth navigation, interactive elements, and is hosted on Google Drive for easy access and sharing.`,
    technologies: ['html', 'JavaScript', 'CSS', 'bootstrap'],
    githubLink: '#',
    liveLink: 'https://q3mautvghkzszxumr2h1ia.on.drv.tw/www.anshusood.portfolio/',
    image: 'https://sp3.free.nf/img/web6.jpeg'
  },
  {
    id: 'e-commercewebsite',
    type: 'website',
    title: 'E-Commerce website',
    description: `This is a fully functional e-commerce website that allows users to browse products, add items to a shopping cart, register/login with user authentication, and manage orders. It offers a seamless shopping experience with essential features for customers.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'jQuery', 'PHP', 'MySQL'],
    githubLink: '#',
    liveLink: '/../../projects/webProjects/5-Website/',
    image: 'https://sp3.free.nf/img/web5.jpeg'
  },
  {
    id: 'gymwebsite',
    type: 'website',
    title: 'Workout website',
    description: `This is a simple workout website built using HTML and CSS. It showcases various fitness routines and tips in a clean layout, but it is not responsive and best viewed on desktop screens.`,
    technologies: ['HTML', 'CSS'],
    githubLink: '#',
    liveLink: '/../../projects/webProjects/5-Website/',
    image: 'https://sp3.free.nf/img/web1.png'
  },

  // js projects
  {
    id: 'laguagetranslator',
    type: 'js',
    title: 'Laguage translator',
    description: `This language translator project uses a third-party API to instantly translate text between multiple languages. It offers a simple interface for real-time, accurate translations with just a few clicks.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/translator/',
    image: 'https://sp3.free.nf/img/js21.jpeg'
  },
  {
    id: 'minioneyes',
    type: 'js',
    title: 'Minion eyes',
    description: `A fun interactive webpage that tracks your cursor movement using animated minion eyes. Built with HTML, CSS, and JavaScript, the eyes follow your pointer wherever it goes, adding a playful touch to the user experience.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/20-minionEyes',
    image: 'https://sp3.free.nf/img/js20.jpeg'
  },
  {
    id: 'pixelart',
    type: 'js',
    title: 'Pixel Art',
    description: `A creative drawing tool that lets you design colorful pixel-based art. You can draw anything, change colors freely, and bring your imagination to life with a fun, retro-style interface.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/19-pixelArt',
    image: 'https://sp3.free.nf/img/js19.jpeg'
  },
  {
    id: 'todolist',
    type: 'js',
    title: 'Todo list',
    description: `**Todo List** is a simple task manager that helps you stay organized. It allows you to add, edit, delete, and search your tasks easily for better productivity and time management.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/18-todoList',
    image: 'https://sp3.free.nf/img/js16.jpeg'
  },
  {
    id: 'jokes',
    type: 'js',
    title: 'Random jokes',
    description: `A **Random Jokes Generator** that displays hilarious jokes at the click of a button. Built for fun and entertainment, it delivers fresh, unpredictable jokes every time to keep you laughing.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/17-jokes',
    image: 'https://sp3.free.nf/img/js15.jpeg'
  },
  {
    id: 'snakeWaterGun',
    type: 'js',
    title: 'Snake Water Gun',
    description: `A simple **Snake Water Gun** game where players choose between snake, water, or gun, and the computer makes a random choice. The winner is decided based on classic game rules, making it fun and engaging to play.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/16-snakeWaterGun',
    image: 'https://sp3.free.nf/img/js17.jpeg'
  },
  {
    id: 'mcqquiz',
    type: 'js',
    title: 'MCQ Quiz',
    description: `**MCQ Quiz** is an interactive quiz platform that allows users to navigate through questions with next and previous options. It also includes a finish test feature to submit and view results seamlessly.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/15-mcqQuiz',
    image: 'https://sp3.free.nf/img/js15.jpeg'
  },
  {
    id: 'clockcalendar',
    type: 'js',
    title: 'clock calendar',
    description: `**Clock Calendar** is a simple web app that displays the current time and date together in a clean, easy-to-read interface. It helps users keep track of both time and calendar events at a glance.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/14-clockCalendar',
    image: 'https://sp3.free.nf/img/js14.jpeg'
  },
  {
    id: 'calendar',
    type: 'js',
    title: 'Calendar',
    description: `**Calendar** is a simple and user-friendly tool to view and organize dates. It allows easy navigation through months and helps keep track of important days and events efficiently.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/13-calendar',
    image: 'https://sp3.free.nf/img/js13.jpeg'
  },
  {
    id: 'clock',
    type: 'js',
    title: 'Clock',
    description: `A simple and elegant clock that displays the current time in real-time. Built using HTML, CSS, and JavaScript, it provides a clean and functional timekeeping interface for any webpage.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/12-clock',
    image: 'https://sp3.free.nf/img/js11.jpeg'
  },
  {
    id: 'slider',
    type: 'js',
    title: 'Slider',
    description: `A **Slider** that dynamically displays multiple images or messages in a rotating carousel. It enhances visual appeal and allows smooth navigation through banners with sliding transitions.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/11-slider',
    image: 'https://sp3.free.nf/img/js10.jpeg'
  },
  {
    id: 'stopwatch',
    type: 'js',
    title: 'Stop watch',
    description: `A simple **Stopwatch** web app that lets you start, pause, and reset time with ease. Perfect for tracking activities or workouts with an intuitive and minimal design.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/10-stopWatch',
    image: 'https://sp3.free.nf/img/js12.jpeg'
  },
  {
    id: 'Skill-sec-with-Dynamic-bg',
    type: 'js',
    title: 'Skill section with Dynamic background',
    description: `A **Skills Section** featuring a dynamic background that highlights your expertise in an engaging way. It creates a visually appealing showcase of your abilities, making the section stand out with motion and interactivity.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/09-Skill-sec-with-Dynamic-bg',
    image: 'https://sp3.free.nf/img/js8.jpeg'
  },
  {
    id: 'formvalidation',
    type: 'js',
    title: 'Form validation',
    description: `Is a web application that ensures user inputs are correct and complete before submission. Built with HTML, CSS, and JavaScript, it provides real-time feedback to help users enter valid data efficiently and accurately.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/08-formValidation',
    image: 'https://sp3.free.nf/img/js9.jpeg'
  },
  {
    id: 'counter',
    type: 'js',
    title: 'Counter',
    description: `**Counter** is a simple and interactive web tool that lets you track numbers easily.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/07-counter',
    image: 'https://sp3.free.nf/img/js7.jpeg'
  },
  {
    id: 'cart',
    type: 'js',
    title: 'Cart',
    description: `Is a simple e-commerce feature that allows users to select products and add them to their shopping cart. It provides an easy way to manage items before checkout, enhancing the online shopping experience.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/06-cart',
    image: 'https://sp3.free.nf/img/js6.jpeg'
  },
  {
    id: 'productsearch',
    type: 'js',
    title: 'Product search',
    description: `Is a web tool that allows users to quickly find products from a catalog. With easy search functionality, users can filter, browse, and discover items efficiently for a seamless shopping experience.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/05-productSearch',
    image: 'https://sp3.free.nf/img/js5.jpeg'
  },
  {
    id: 'productsearch1',
    type: 'js',
    title: 'Product search 2',
    description: `Is a web tool that allows users to quickly find products from a catalog. With easy search functionality, users can filter, browse, and discover items efficiently for a seamless shopping experience.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/05-productSearch2',
    image: 'https://sp3.free.nf/img/js5.jpeg'
  },
  {
    id: 'emi',
    type: 'js',
    title: 'EMI',
    description: `Is a simple and efficient tool to calculate your loan Equated Monthly Installments. Just enter the loan amount, interest rate, and tenure to get instant EMI results, helping you plan your finances easily.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/04-emi',
    image: 'https://sp3.free.nf/img/js4.jpeg'
  },
  {
    id: 'reviewpage',
    type: 'js',
    title: 'Review page',
    description: `Is a simple platform where users can share and read reviews. It allows visitors to post feedback, rate experiences, and browse others’ opinions, providing an easy way to gather and display user insights.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/03-reviewPage',
    image: 'https://sp3.free.nf/img/js3.jpeg'
  },
  {
    id: 'calculator',
    type: 'js',
    title: 'Calculator',
    description: `This is a simple and functional Calculator built with HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations quickly and efficiently through a clean and easy-to-use interface.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/02-calculator',
    image: 'https://sp3.free.nf/img/js2.jpeg'
  },
  {
    id: 'createtextnote',
    type: 'js',
    title: 'Create text note',
    description: `Is a simple and intuitive web app for writing and saving notes quickly.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '/../../projects/jsProjects/01-createTextNote',
    image: 'https://sp3.free.nf/img/js1.jpeg'
  },
];

export default projects;