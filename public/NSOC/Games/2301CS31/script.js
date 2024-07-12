document.addEventListener('DOMContentLoaded', () => {
  const background = document.querySelector('.background');
  for (let i = 0; i < 10; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    const size = Math.random() * 80 + 40;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.animationDuration = `${5 + Math.random() * 10}s`;
    background.appendChild(shape);
  }
});
const gameData = {
  // ... your existing game data
  tasks: [
    // ... your existing tasks
    {
      name: "Study Session",
      location: "library", // or hostel study room
      type: "exam-prep",
      progress: 0, // Track study progress
      maxProgress: 10, // Set a target for study progress
      miniGame: "memory-challenge", // or "matching-pairs", "multiple-choice"
      description: "Spend some time studying in the library to prepare for your exams."
    },
    {
      name: "Group Study",
      location: "hostel-common-room", // or another study area
      type: "exam-prep",
      progress: 0,
      maxProgress: 5,
      miniGame: "time-management", // or "collaboration"
      description: "Join a group study session in the hostel common room to collaborate with your friends."
    },
    // ... Add more exam prep tasks
  ]
};
function handlePlayerInteraction(location) {
  // ... your existing interaction logic
  if (location === "library" || location === "hostel-study-room") {
    // Display the "Study Session" task
    displayTask("Study Session");
  } else if (location === "hostel-common-room") {
    // Display the "Group Study" task
    displayTask("Group Study");
  }
  // ...
}
function playMemoryChallenge() {
  // ... implement the memory challenge game logic
}

function playMatchingPairs() {
  // ... implement the matching pairs game logic
}

function playMultipleChoice() {
  // ... implement the multiple-choice question game logic
}

function playTimeManagement() {
  // ... implement the time management game logic
}

function playCollaboration() {
  // ... implement the collaboration game logic
}
function completeTask(taskName) {
  // ... your existing task completion logic
  if (taskName === "Study Session") {
    gameData.tasks.find(t => t.name === "Study Session").progress++;
    updateStudyProgress(); // Update the UI
  } else if (taskName === "Group Study") {
    gameData.tasks.find(t => t.name === "Group Study").progress++;
    updateStudyProgress();
  }
  // ... existing code ...

  // In your handlePlayerInteraction function:
  function handlePlayerInteraction(location) {
    // ... your existing interaction logic
    if (location === "library") {
      // Display the "Study Session" task
      displayTask("Study Session");
    }
    // ...
  }

  // Function to display a task
  function displayTask(taskName) {
    // ... get task details from gameData
    // ... display task description and options (e.g., "Start Studying")
    // ... listen for player interaction (e.g., clicking "Start Studying")
  }

  // Function to start a mini-game
  function startMiniGame(miniGameType) {
    if (miniGameType === "memory-challenge") {
      playMemoryChallenge();
    } else if (miniGameType === "matching-pairs") {
      playMatchingPairs();
    }
    // ... other mini-games
  }

  // Function to handle mini-game completion
  function completeMiniGame(taskName) {
    if (taskName === "Study Session") {
      gameData.tasks.find(t => t.name === "Study Session").progress++;
      updateStudyProgress();
    }
    // ...
  }
  // ...
}

function updateStudyProgress() {
  const studyProgress = gameData.tasks.find(t => t.name === "Study Session").progress;
  document.getElementById("study-progress").textContent = `Study Progress: ${studyProgress}/${gameData.tasks.find(t => t.name === "Study Session").maxProgress}`;
}
document.addEventListener('DOMContentLoaded', () => {
  const dialogues = [
    "Welcome to the library quest!",
    "I am Pradhi Rajeev, your guide.",
    "You need to find the following books:",
    "1. Data Structures and Algorithms",
    "2. Operating System Concepts",
    "3. Introduction to Machine Learning",
    "4. Database Management Systems",
    "5. Computer Networks",
    "Find all these books within the time limit!",
    "Good luck!"
  ];

  const player1Dialogue = document.getElementById('player1-dialogue');
  const player2Dialogue = document.getElementById('player2-dialogue');
  const nextBtn = document.getElementById('next-dialogue');
  const startTaskBtn = document.getElementById('start-task');

  let dialogueIndex = 0;

  function showNextDialogue() {
    if (dialogueIndex < dialogues.length) {
      if (dialogueIndex % 2 === 0) {
        player1Dialogue.textContent = dialogues[dialogueIndex];
        player2Dialogue.textContent = '';
      } else {
        player2Dialogue.textContent = dialogues[dialogueIndex];
        player1Dialogue.textContent = '';
      }
      dialogueIndex++;
    } else {
      nextBtn.style.display = 'none';
      startTaskBtn.style.display = 'inline-block';
    }
  }

  nextBtn.addEventListener('click', showNextDialogue);

  startTaskBtn.addEventListener('click', () => {
    window.location.href = 'book-finding.html';
  });

  showNextDialogue(); // Show the first dialogue
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('library.html')) {
    const dialogues = [
      "Welcome to the library quest!",
      "I am Pradhi Rajeev, your guide.",
      "You need to find the following books:",
      "1. Data Structures and Algorithms",
      "2. Operating System Concepts",
      "3. Introduction to Machine Learning",
      "4. Database Management Systems",
      "5. Computer Networks",
      "Find all these books within the time limit!",
      "Good luck!"
    ];

    const player1Dialogue = document.getElementById('player1-dialogue');
    const player2Dialogue = document.getElementById('player2-dialogue');
    const nextBtn = document.getElementById('next-dialogue');
    const startTaskBtn = document.getElementById('start-task');

    let dialogueIndex = 0;

    function showNextDialogue() {
      if (dialogueIndex < dialogues.length) {
        if (dialogueIndex % 2 === 0) {
          player1Dialogue.textContent = dialogues[dialogueIndex];
          player2Dialogue.textContent = '';
        } else {
          player2Dialogue.textContent = dialogues[dialogueIndex];
          player1Dialogue.textContent = '';
        }
        dialogueIndex++;
      } else {
        nextBtn.style.display = 'none';
        startTaskBtn.style.display = 'inline-block';
      }
    }

    nextBtn.addEventListener('click', showNextDialogue);

    startTaskBtn.addEventListener('click', () => {
      window.location.href = 'book-finding.html';
    });

    showNextDialogue(); // Show the first dialogue
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('book-finding.html')) {
    const startTaskBtn = document.getElementById('start-task');

    startTaskBtn.addEventListener('click', () => {
      startBookFindingTask();
    });
  }
});

function startBookFindingTask() {
  // Implement the book-finding game logic here
  alert("Start finding the books!");

  // Redirect to the next task or quest after completing the book-finding
  setTimeout(() => {
    window.location.href = 'next-task.html'; // Link to the next task page
  }, 10000); // Give the player some time to find the books
}

function isPassable(x, y) {
  const gridX = Math.floor(x / step);
  const gridY = Math.floor(y / step);

  // Check both grid value (for pre-defined obstacles) and road color (grey)
  return grid[gridY] && grid[gridY][gridX] === 1 &&
    // Check for a tolerance range around grey for variations
    isColorInRange(getColorAtPixel(x, y), '#cccccc', tolerance);
}

function getColorAtPixel(x, y) {
  // Replace with code to get the color of the pixel at (x, y) from the map image
  // (Implementation details depend on your chosen approach)
  return '#aaaaaa'; // Placeholder (replace with actual color retrieval)
}

// Function to check if a color is within a tolerance range of another color
function isColorInRange(color, targetColor, tolerance) {
  const [r1, g1, b1] = color.slice(4, -1).split(',').map(Number);
  const [r2, g2, b2] = targetColor.slice(4, -1).split(',').map(Number);
  return (
    Math.abs(r1 - r2) <= tolerance &&
    Math.abs(g1 - g2) <= tolerance &&
    Math.abs(b1 - b2) <= tolerance
  );
}

// Function to convert hex color string to RGB object (replace with actual implementation)
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function findStartingPosition() {
  const mapCanvas = document.createElement('canvas');
  mapCanvas.width = mapContainer.clientWidth;
  mapCanvas.height = mapContainer.clientHeight;
  const ctx = mapCanvas.getContext('2d');

  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function() {
    ctx.drawImage(img, 0, 0, mapCanvas.width, mapCanvas.height);
    const imageData = ctx.getImageData(0, 0, mapCanvas.width, mapCanvas.height);

    // Start with the center of the image, moving outwards
    const centerX = mapCanvas.width / 2;
    const centerY = mapCanvas.height / 2;
    const radius = 1;
    let foundRoad = false;

    for (let r = radius; r < mapCanvas.width / 2; r++) {
      for (let angle = 0; angle < 360; angle += 10) {
        const x = centerX + r * Math.cos(angle * Math.PI / 180);
        const y = centerY + r * Math.sin(angle * Math.PI / 180);

        if (x >= 0 && x < mapCanvas.width && y >= 0 && y < mapCanvas.height) {
          const index = (y * mapCanvas.width + x) * 4;
          const color = `rgb(${imageData.data[index]}, ${imageData.data[index + 1]}, ${imageData.data[index + 2]})`;
          if (isColorInRange(color, targetColor, tolerance)) {
            foundRoad = true;
            return { x, y };
          }
        }
      }
      if (foundRoad) {
        break;
      }
    }
    // If no road pixel found within the search area, handle the case
    console.error("No road pixel found on the map image!");
  };
  img.src = 'https://lh5.googleusercontent.com/p/AF1QipNJ34REEbYUDGXepXIXRODmBlJpTpSchc3vKtfB=w263-h336-p-k-no';
}
