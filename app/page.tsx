import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projectsArray = [
    //     {
    //       title: "Digital Pet",
    //       path: "/projects/digital-pet",
    //       image: "/projects/digital-pet/image.png",
    //       description: `Digital Pet — React Application
    // A virtual pet simulator with needs-based care and dynamic environment changes. Users can feed, play with, and heal their pet, triggering visual status updates and interactive animations.
    // Technologies: React, Tailwind CSS, TypeScript, LocalStorage, Next.js
    // Key Features:
    // - Four core needs: hunger, happiness, cleanliness, and health
    // - Real-time needs decay with visual feedback
    // - Action-based needs improvement (feed, play, clean, heal)
    // - Dynamic pet status display with emojis and animations
    // - Environment color changes based on pet's health
    // - LocalStorage persistence for pet state
    // - Modern, responsive UI with toggleable light/dark mode`,
    //     },
    {
      title: "Shape Manager",
      path: "/projects/shape-manager/index.html",
      image: "/projects/shape-manager/image.png",
      description: `Shape Manager — Vanilla TypeScript Project
Developed a dynamic geometric shape calculator that computes the area of various shapes. Features real-time state synchronization, DOM manipulation, input validation, and a beautiful modern interface with an adaptive grid.
Technologies: TypeScript, HTML5, CSS3, Vite
Key Features:
- Dynamic calculation of Circle, Rectangle, and Triangle areas
- Real-time input updates and validation (negative values prevention)
- Modern clean UI card layout with transition animations
- TypeScript interface modeling and type-safe DOM querying`,
    },
    {
      title: "Tic-Tac-Toe",
      path: "/projects/tic-tac-toe",
      image: "/projects/tic-tac-toe/image.png",
      description: `Tic-Tac-Toe Game — React Project
Developed an interactive Tic-Tac-Toe game with turn-based gameplay and dynamic UI updates. Implemented winner detection logic, winning-cell highlighting, draw detection, game reset functionality, and conditional button disabling using React state management.
Technologies: React, JavaScript (ES6+), CSS3, React Hooks (useState)
Key Features:
- Turn-based game logic (X/O switching)
- Winner detection using winning combinations array
- Draw state handling
- Dynamic UI updates and conditional rendering
- Reset functionality
- Interactive styling and animations with CSS`,
    },
    {
      title: "Currency converter",
      path: "/projects/currency-converter",
      image: "/projects/currency-converter/image.png",
      description: `Currency Converter — React Application
A dynamic currency conversion tool that fetches real-time exchange rates. Users can input amounts and instantly see converted values across different currencies.
Technologies: React, JavaScript, REST API, Tailwind CSS
Key Features:
- Real-time exchange rate fetching
- Dynamic input calculation
- Responsive and clean user interface
- Error handling for API requests`,
    },
    {
      title: "Todo App",
      path: "/projects/todo-app",
      image: "/projects/todo-app/image.png",
      description: `Todo App — React Application
A comprehensive task management application that allows users to track their daily activities. Features robust state management.
Technologies: React, Tailwind CSS, JavaScript
Key Features:
- Add, edit, and delete tasks (CRUD operations)
- Mark tasks as complete or pending`,
    },
    {
      title: "Calculator",
      path: "/projects/calculator/index.html",
      image: "/projects/calculator/image.png",
      description: `Calculator — Vanilla JS Project
My very first interactive calculator built purely with JavaScript, HTML, and CSS. It performs standard mathematical operations with instant feedback.
Technologies: JavaScript (ES6), HTML5, CSS3
Key Features:
- Basic arithmetic operations (+, -, *, /)
- Responsive grid layout for buttons
- Clean interface with robust error handling
- DOM manipulation and event listeners`,
    },
    {
      title: "Shopping list",
      path: "/projects/shopping-list",
      image: "/projects/shopping-list/image.png",
      description: `Shopping List — React Application
A smart shopping list helper that lets users easily add items to buy and remove them once purchased.
Technologies: React, JavaScript, Tailwind CSS
Key Features:
- Dynamic state management for lists
- Interactive "check-off" functionality
- Responsive design
- User-friendly input forms`,
    },
    {
      title: "Event RSVP Form",
      path: "/projects/event-rsvp-form",
      image: "/projects/event-rsvp-form/image.png",
      description: `Event RSVP Form — React Component
An interactive registration form for events. Includes comprehensive form validation and controlled inputs to gather attendee information effectively.
Technologies: React, Controlled Components, CSS/Tailwind
Key Features:
- Complex form state management
- Real-time input validation
- Conditional rendering of success messages
- Responsive form layout`,
    },
    {
      title: "Superhero Application Form",
      path: "/projects/superhero-application-form",
      image: "/projects/superhero-application-form/image.png",
      description: `Superhero Application Form — React Form
A fun and interactive multi-step form built for aspiring superheroes. Demonstrates advanced handling of multiple input types and form submission.
Technologies: React, React Hooks, CSS
Key Features:
- Multi-step or complex data collection
- Handling checkboxes, radio buttons, and text inputs
- Custom styling for form elements
- State management for entire form payload`,
    },
    {
      title: "OTP Generator",
      path: "/projects/otp-generator",
      image: "/projects/otp-generator/image.png",
      description: `OTP Generator — React Application
A secure One-Time Password generator tool. Generates random codes and allows users to copy them to the clipboard with a single click.
Technologies: React, Clipboard API, JavaScript
Key Features:
- Secure random number generation
- One-click "Copy to Clipboard" functionality
- Visual feedback on copy action
- Clean, focused user interface`,
    },
    {
      title: "Fruits Search",
      path: "/projects/fruits-search",
      image: "/projects/fruits-search/image.png",
      description: `Fruits Search — React Application
A search application that fetches data from an API and filters results in real-time based on user input. Perfect example of complex array filtering.
Technologies: React, REST API, JavaScript (Filter/Map)
Key Features:
- Live search filtering as the user types
- API integration with error handling
- Dynamic list rendering
- Data manipulation and array methods`,
    },
    {
      title: "Color Picker",
      path: "/projects/color-picker",
      image: "/projects/color-picker/image.png",
      description: `Color Picker — React Application
An interactive utility for designers to pick, adjust, and copy color codes (HEX, RGB).
Technologies: React, CSS/Tailwind
Key Features:
- Dynamic color state updates
- Copy to clipboard integration
- Real-time color preview
- Hex and RGB code generation`,
    },
    {
      title: "Mood Board",
      path: "/projects/mood-board",
      image: "/projects/mood-board/image.png",
      description: `Mood Board — React Application
A visual organization tool where users can collect and arrange images, colors, and notes to create inspirational boards.
Technologies: React, CSS Grid/Flexbox
Key Features:
- Interactive layout manipulation
- Image and text block rendering
- Creative and aesthetic UI design
- State management for board items`,
    },

    {
      title: "Pricing Component",
      path: "/projects/pricing-component",
      image: "/projects/pricing-component/image.png",
      description: `Pricing Component — UI Component
A responsive, modern pricing table section commonly used in SaaS products. Built purely with Tailwind CSS for layout perfection.
Technologies: React, Tailwind CSS
Key Features:
- Fully responsive layout (Mobile to Desktop)
- Hover effects and highlighted "Pro" tiers
- Clean typography and color hierarchy
- Scalable component architecture`,
    },
    {
      title: "CTA Component",
      path: "/projects/cta-component",
      image: "/projects/cta-component/image.png",
      description: `CTA Component — UI Component
A high-converting Call-To-Action section designed to grab user attention. Focuses on visual hierarchy and responsive behavior.
Technologies: React, Tailwind CSS
Key Features:
- Engaging visual design and layout
- Adaptive padding and margin strategies
- Button hover animations
- Seamless mobile responsiveness`,
    },
    {
      title: "Dior",
      path: "/projects/dior/index.html",
      image: "/projects/dior/image.png",
      description: `Dior Landing Page — HTML/CSS Project
A premium, stylish landing page replica for a fashion brand. Focuses on high-quality image placement, typography, and pixel-perfect spacing.
Technologies: HTML5, CSS3, Flexbox/Grid
Key Features:
- Semantic HTML structure
- Advanced CSS layouts
- Premium typography and elegant design
- Fully responsive styling without frameworks`,
    },
    {
      title: "Iphone Landing Page",
      path: "/projects/iphone/index.html",
      image: "/projects/iphone/images/image.png",
      description: `iPhone Landing Page — HTML/CSS Project
A sleek, modern product showcase page inspired by Apple's design language. Features large imagery, clean sections, and smooth CSS interactions.
Technologies: HTML5, CSS3, Responsive Design
Key Features:
- Complex multi-section layout
- Mobile-first adaptive design using Media Queries
- Custom CSS reset and normalization
- Interactive navigation menu`,
    },
    {
      title: "3D game",
      path: "/projects/3d-game/index.html",
      image: "/projects/3d-game/img/image.png",
      description: `3D Game Promotional Site — HTML/CSS Project
A vibrant, game-oriented promotional website with rich backgrounds, grid layouts, and interactive visual elements.
Technologies: HTML5, CSS3
Key Features:
- Hero sections with large background images
- Custom CSS animations and hover states
- Flexible grid systems for feature lists
- Engaging, gaming-themed visual aesthetics`,
    },

  ];
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <p className="text-2xl font-bold text-blue-950 mt-8 px-12 pt-4  ">
        My projects hub.
        <br />A collection of educational apps created while learning
        JavaScript, React, Tailwind CSS, and Next.js.
      </p>
      <div className="w-full max-w-[1200px] px-4">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-12 p-12 list-none">
          {projectsArray.map((project) => (
            <li className="relative group" key={project.title}>
              <div className="p-3 opacity-0 pointer-events-none invisible">
                <div className="w-full aspect-square"></div>
                <p className="text-base font-bold mt-3">&nbsp;</p>
              </div>
              <Link
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full group-hover:w-[200%] bg-white border border-blue-200 shadow-sm rounded-xl p-4 group-hover:shadow-2xl group-hover:z-50 transform transition-all duration-500 ease-in-out z-10 no-underline cursor-pointer flex flex-col"
                href={project.path}
              >
                <div className="overflow-hidden rounded-lg w-full max-w-[160px] aspect-square mx-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <p className="text-base font-bold text-center text-blue-950 mt-3 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </p>
                <div className="max-h-0 opacity-0 group-hover:max-h-[800px] group-hover:opacity-100 transition-all  overflow-hidden">
                  <p className="text-sm text-zinc-600 whitespace-pre-line border-t border-blue-100 pt-3 mt-3">
                    {project.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
