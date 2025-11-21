
export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrls: string[];
  imageHints: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projectsData: Project[] = [
  {
    id: "project-1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online store with a modern UI, product management, and a secure checkout process.",
    longDescription: `
This project is a comprehensive e-commerce solution designed from the ground up. It features a sleek, modern user interface built with Next.js and Tailwind CSS for a fully responsive experience. 

Key features include:
- **Product Catalog:** A dynamic product listing with filtering and sorting capabilities.
- **Shopping Cart:** A persistent shopping cart that remembers user selections across sessions.
- **Secure Checkout:** Integration with Stripe for secure and seamless payment processing.
- **Admin Dashboard:** A dedicated dashboard for store owners to manage products, view orders, and track sales analytics. The dashboard provides a complete overview of the store's performance.

The backend is powered by Node.js and connects to a PostgreSQL database, ensuring robust performance and data integrity. The entire application is containerized using Docker, making it easy to deploy and scale.
    `,
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    imageUrls: [
      "/e-commerce-system.png",
      "/ecommerce-laptop.png",
      "/alpha-Admin-Dashboard.png",
    ],
    imageHints: ["ecommerce system", "ecommerce laptop", "admin dashboard"],
    liveUrl: "https://alpha-plumbing-n-electrical-ltd.onrender.com",
    githubUrl: "#",
  },
  {
    id: "project-2",
    slug: "banking-mobile-app",
    title: "Banking Mobile-App",
    description: "A collaborative tool for teams to organize tasks, set deadlines, and track progress with an intuitive drag-and-drop interface.",
    longDescription: `
The Banking Mobile App is a concept project designed to provide a seamless and secure mobile banking experience. The UI is built with React and styled with Tailwind CSS, with smooth animations powered by Framer Motion to enhance user interaction.

Core functionalities include:
- **Account Overview:** Users can view their account balances, transaction history, and spending summaries.
- **Fund Transfers:** Securely transfer money between accounts or to external recipients.
- **Bill Payments:** Schedule and pay bills directly from the app.
- **Real-time Notifications:** Users receive instant alerts for transactions and account activity.

Firebase is used for the backend, providing real-time database capabilities and secure authentication, ensuring that user data is always protected and up-to-date.
    `,
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    imageUrls: ["/Banking App-Layout.png", "/Banking-MobileApp.png"],
    imageHints: ["banking app", "mobile banking"],
    liveUrl: "#",
    githubUrl: "#",
  },
    {
    id: "project-3",
    slug: "shape-color-generator",
    title: "Shape GEN and color painter web",
    description: "A web application for generating shapes and painting with colors using a canvas.",
    longDescription: `
This is a fun, interactive web application that allows users to unleash their creativity. Built with plain HTML5, JavaScript, and the Canvas API, this project demonstrates the power of browser-native technologies.

Users can:
- **Generate Shapes:** Create various geometric shapes with random sizes and colors.
- **Paint Freely:** Use a color picker and brush tools to paint directly on the canvas.

It's a simple yet powerful demonstration of what can be achieved with fundamental web technologies and provides a great sandbox for creative expression.
    `,
    tags: ["HTML5", "Canvas", "JavaScript"],
    imageUrls: ["https://picsum.photos/seed/3/600/400"],
    imageHints: ["data dashboard"],
    liveUrl: "https://shangiy.github.io/colourGen.0/",
    githubUrl: "#",
  },
  {
    id: "project-4",
    slug: "game-app",
    title: "Game App",
    description: "An interactive game application with engaging UI and real-time features.",
    longDescription: `
This Ludo game application brings the classic board game to mobile devices. Built with React Native, it offers a cross-platform experience for both iOS and Android users, allowing for a wider reach with a single codebase.

Game features:
- **Real-time Multiplayer:** The core of the game is its real-time multiplayer functionality. I utilized Firebase Realtime Database to manage game state synchronization between players. This ensures that every move, dice roll, and piece position is instantly updated across all devices in a game session, providing a seamless and competitive experience.
- **Engaging UI with Lottie:** To make the game more visually appealing and fun, I integrated Lottie animations for key interactions like dice rolls, piece movements, and winning celebrations. This adds a layer of polish and delight to the user interface.
- **Customizable Game Setup:** Players aren't locked into a single game mode. They can set up custom games, choosing the number of players (from 2 to 4) and other game-specific settings before starting a match.

This project was a great exercise in managing real-time data synchronization and creating a polished, engaging mobile application. The main challenge was ensuring that the game logic was robust and that the real-time updates were efficient to prevent any lag, which was achieved through careful data structure design in Firebase.
    `,
    tags: ["React Native", "Firebase", "Lottie"],
    imageUrls: ["/ludoGame-homepage.png", "/LudoGameboardLayout.png", "/game-Setup.png"],
    imageHints: ["ludo homepage", "ludo gameboard", "game setup"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-5",
    slug: "parms-xclusive-cars",
    title: "Parms Xclusive Cars Ltd System",
    description: "Developed a parmsXclusive cars ltd website that allows user and customer to look for their preferred car either to buy or trade-in with an existing car.",
    longDescription: `
This project is a website for a luxury car dealership, Parms Xclusive Cars Ltd. The site allows customers to browse available cars, view detailed specifications, and inquire about purchasing or trading in their existing vehicles.

The website was built using a classic LAMP stack:
- **PHP** for server-side logic.
- **MySQL** for the database to store car inventory and customer inquiries.
- **HTML/CSS** for the front-end structure and styling.

This project was a great opportunity to work with server-side scripting and database management to create a functional and practical business website.
    `,
    tags: ["PHP", "MySQL", "HTML/CSS"],
    imageUrls: ["/parmsXclusive trade-in.png", "/parmsXclusive cars ltd LC.png", "/parmsXclusive cars ltd website.png"],
    imageHints: ["car trade-in", "car landing", "car website"],
    liveUrl: "https://shangiy.github.io/p5/",
    githubUrl: "https://shangiy.github.io/p5/",
  },
  {
    id: "project-6",
    slug: "clients-portfolio",
    title: "Clients Portfolio",
    description: "A beautiful and responsive portfolio website built for a client to showcase their work and skills.",
    longDescription: `
This project involved creating a clean, modern, and fully responsive portfolio website for a client. The site was built using Next.js for its performance benefits and server-side rendering capabilities. React and Tailwind CSS were used to create a custom, visually appealing design that adapts perfectly to any screen size.

The goal was to create a digital space that effectively showcases the client's skills, projects, and professional background. The final product is a fast, elegant, and easy-to-navigate website that serves as a powerful tool for the client's personal branding.
    `,
    tags: ["Next.js", "React", "Tailwind CSS"],
    imageUrls: ["/wanjikuHome.png","/Wanjiku'sBlog.png", "/Wanjiku'sArtCurator.png", "/Wanjiku'sFooter.png"],
    imageHints: ["client portfolio", "blog section", "art curator", "footer design"],
    liveUrl: "https://wanjiku-s-portfolio.onrender.com/",
    githubUrl: "#",
  },
];
