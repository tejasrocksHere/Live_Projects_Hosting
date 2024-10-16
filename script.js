AOS.init({
  duration: 1200,
  once: true,
});
document.getElementById("mobile-menu").addEventListener("click", function () {
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("active");
});

// JavaScript code to dynamically create project cards
const projectsData = {
  projects: [
    {
      title: "JEE Based College Predictor",
      description:
        "A web application that predicts colleges based on JEE scores. It helps students make informed decisions.",
      image: "static/jee-based-collage-pred.png",
      link: "https://collage-prediction.onrender.com/",
      emoji: "🎓",
    },
    {
      title: "Real time chatapplication",
      description:
        "Experience global communication with our real-time chat application, built using React for a dynamic and responsive user interface and Supabase as the backend database",
      image: "static/chat.png",
      link: "https://treal-time-chatapp.netlify.app/",
      emoji: "🌐",
    },
    {
      title: "Free Javascript compiler and Code Note Maker",
      description:
        "This project is a minimalistic, ad-free JavaScript compiler integrated with CodeMirror, providing a clean and intuitive environment for coding in JavaScript. The editor comes with syntax highlighting, auto-completion, and multiple themes, allowing users to write, run, and save their JavaScript code efficiently.",
      image: "static/jscompiler.png",
      link: "https://add-free-javascript-compiler.netlify.app/",
      emoji: "🖱️",
    },
    {
      title: "LastBenchMate Broadcasting Platform",
      description:
        "It is a **'zero internet, low-latency'** platform that to help students in large classrooms by broadcasting the content written on the board directly to their devices. Utilizing React.js, Node.js, and Express, the platform ensures real-time broadcasting with clear, accessible visuals. This assists students with low vision to stay updated with classroom lessons and notes efficiently.",
      image: "static/lastbencth.png",
      link: "https://drive.google.com/file/d/1hY2w3_NZFB71FqgOAFbXB_YjBgJp3Uat/view",
      emoji: "📺",
    },
    {
      title: "VisioAid Exam System",
      description:
        "An mcq based exam system specifically developed for visually impaired individuals, using React.js, Node.js, and a custom keyboard built with Raspberry Pi. It incorporates voice feedback, custom navigation controls, and a seamless interface to assist users in completing exams independently. The project aims to empower visually impaired students to take MCQ-based tests with ease and precision.",
      image: "static/exam.png",
      link: "https://drive.google.com/file/d/1nWhGEQSolyc3JBn7cTOfexchiarfvt6N/view",
      emoji: "📝",
    },
    {
      title: "TM1 Screen Recorder",
      description: `A user-friendly screen recording application (Only Desinged for chrome in PC) that allows users to easily capture their screen with or without audio. Developed using JavaScript, this tool features intuitive buttons for starting and stopping recordings, along with seamless downloads of recorded videos. The project empowers users to create high-quality screen recordings effortlessly. Used HTML5 CSS3 JavaScript
, Chrome API `,
      image: "static/screen.png",
      link: "https://github.com/tejasrocksHere/Tm1-Screen-Recorder/tree/main",
      emoji: "🎥✨",
    },

    {
      title: "TejaTube",
      description:
        "A basic YouTube clone with search functionality. Browse and watch videos just like on YouTube.",
      image: "static/youtube-clone.png",
      link: "https://tejatube.netlify.app/",
      emoji: "🎥",
    },
    {
      title: "Agro-Help",
      description:
        "An agricultural assistance platform that provides resources, market information, and real-time data to help farmers make informed decisions and improve crop yields.",
      image: "static/agro-help.png",
      link: "https://agro-helper.netlify.app/",
      emoji: "🌾",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio showcasing all my live projects. Designed to highlight my skills and creativity.",
      image: "static/portfolio.png",
      link: "https://tejas-mundhe-portfolio-finalweb.netlify.app/",
      emoji: "🌐",
    },

    {
      title: "Password Generator",
      description:
        "Password Generator created using react + react hooks (useState,Effects,useCallback) to optimse the application",
      image: "static/password.png",
      link: "https://password-generator433.netlify.app/",
      emoji: "🔑",
    },
    {
      title: "Housewarming Invitation",
      description:
        "An animated invitation card for a housewarming event. Engaging and creative design using CSS animations.",
      image: "static/housewarming.png",
      link: "https://tic-tac-toe-tmundhe.netlify.app/",
      emoji: "🏡",
    },
    {
      title: "To-Do List",
      description:
        "A simple and functional to-do list application. Stay organized and manage your tasks effectively.",
      image: "static/todo.png",
      link: "https://my-todo-list-959.netlify.app/",
      emoji: "📝",
    },

    {
      title: "Bus Seat Finder",
      description:
        "A bus seat finder application to help passengers find seats easily. Convenient for booking your next trip.",
      image: "static/bus-seaatfinder.png",
      link: "https://find-cool-seats.netlify.app/",
      emoji: "🚌",
    },
    {
      title: "Dino Game",
      description:
        "A fun dino game built using HTML, CSS, and JavaScript. Challenge yourself to beat your high score!",
      image: "static/dino-game.png",
      link: "https://tejasorousgame.netlify.app/",
      emoji: "🦖",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Classic tic-tac-toe game with a simple interface. Play against the computer and enjoy the fun!",
      image: "static/tiktaktoe.png",
      link: "https://tic-tac-toe-tmundhe.netlify.app/",
      emoji: "❌⭕",
    },
    {
      title: "Calculator",
      description:
        "A simple and sleek online calculator for quick and easy calculations.",
      image: "static/calculator.png",
      link: "https://free-web-calculator.netlify.app/",
      emoji: "📱",
    },
    {
      title: "TM1 Review",
      description:
        "A personal site where I share my reviews on movies and TV shows.",
      image: "static/tm1.png",
      link: "https://tm1review.netlify.app/",
      emoji: "🎥",
    },
    {
      title: "StopWatch",
      description:
        "A straightforward and user-friendly stopwatch for tracking time.",
      image: "static/stopwatch.png",
      link: "https://stopwatch-free.netlify.app/",
      emoji: "🕛",
    },

    {
      title: "Healthy-fy - BMI Finder",
      description:
        "A web application that accurately calculates your BMI and provides personalized health insights",
      image: "static/bmi.png",
      link: "https://bmi-finder-healthyfy.netlify.app/",
      emoji: "🎥",
    },
  ],
};

const projectsContainer = document.querySelector(".projects");

projectsData.projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectCard.setAttribute("data-aos", "fade-right");

  projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" />
      <h3>${project.emoji} ${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" class="btn">View Live</a>
    `;

  projectsContainer.appendChild(projectCard);
});
