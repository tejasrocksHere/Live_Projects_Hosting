AOS.init({
  duration: 1200,
  once: true,
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
      title: "Portfolio Website",
      description:
        "My personal portfolio showcasing all my live projects. Designed to highlight my skills and creativity.",
      image: "static/portfolio.png",
      link: "https://tejas-mundhe-portfolio-finalweb.netlify.app/",
      emoji: "🌐",
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
      title: "TejaTube",
      description:
        "A basic YouTube clone with search functionality. Browse and watch videos just like on YouTube.",
      image: "static/youtube-clone.png",
      link: "https://tejatube.netlify.app/",
      emoji: "🎥",
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
