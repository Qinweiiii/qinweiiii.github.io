const imagePaths = [
  "assets/images/home/jupiter.png",
  "assets/images/home/blueplanet.png",
  "assets/images/home/redplanet.png",
  "assets/images/home/purpleplanet.png"
];

let imageIndex = 0;

// 配置 particles.js
particlesJS("particles-js1", {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": false
      }
    },
    "color": {
      "value": "#000"
    },
    "opacity": {
      "value": 1,
      "anim": {
        "enable": false
      }
    },
    "shape": {
      "type": "image",
      "image": {
        "src": imagePaths[0], // 使用随机选定的图像路径
        "width": 100,
        "height": 100
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 7,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  },
});

particlesJS("particles-js2", {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": false
      }
    },
    "color": {
      "value": "#000"
    },
    "opacity": {
      "value": 1,
      "anim": {
        "enable": false
      }
    },
    "shape": {
      "type": "image",
      "image": {
        "src": imagePaths[1], // 使用随机选定的图像路径
        "width": 100,
        "height": 100
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 7,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  },
});

particlesJS("particles-js3", {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": false
      }
    },
    "color": {
      "value": "#000"
    },
    "opacity": {
      "value": 1,
      "anim": {
        "enable": false
      }
    },
    "shape": {
      "type": "image",
      "image": {
        "src": imagePaths[2], // 使用随机选定的图像路径
        "width": 100,
        "height": 100
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 7,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  },
});

particlesJS("particles-js4", {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": false
      }
    },
    "color": {
      "value": "#000"
    },
    "opacity": {
      "value": 1,
      "anim": {
        "enable": false
      }
    },
    "shape": {
      "type": "image",
      "image": {
        "src": imagePaths[3], // 使用随机选定的图像路径
        "width": 100,
        "height": 100
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 7,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "straight": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  },
});

const allElements = document.querySelectorAll(".animated-text");

// It checks if there is at least one element
if (allElements.length > 0) {
  //It runs the script for each found element
  allElements.forEach((element) => {
    const txtElement = element,
      wordsList = txtElement.getAttribute("data-words"),
      words = wordsList.split(", "); // It makes an array of words from data attribute

    let wordsCount = 0;

    entry();

    // Initial function
    function entry() {
      if (wordsCount < words.length) {
        // It runs the code for each word
        let word = words[wordsCount],
          txtArr = word.split(""), // It makes an array of letters in the word
          count = 0;

        txtElement.textContent = ""; // It removes the previous text from the element

        // For each letter in the array
        txtArr.forEach((letter) => {
          // It replaces the empty space for the "non-break-space" HTML...
          // ... This is needed to separate the words properly
          let _letter = letter === " " ? "&nbsp;" : letter;

          // It wraps every letter with a "span" and puts all they back to the element
          txtElement.innerHTML += `<span>${_letter}</span>`;
        });

        let spans = txtElement.childNodes;

        // It sets the interval between each letter showing
        const letterInterval = setInterval(activeLetter, 70);

        function activeLetter() {
          spans[count].classList.add("active");
          count++;

          if (count === spans.length) {
            clearInterval(letterInterval);

            // It waits 4 seconds to start erasing the word
            setTimeout(() => {
              eraseText();
            }, 600);
          }
        }

        function eraseText() {
          // It sets the interval between each letter hiding
          let removeInterval = setInterval(removeLetter, 40);
          count--;

          function removeLetter() {
            spans[count].classList.remove("active");
            count--;

            if (count === -1) {
              clearInterval(removeInterval);
              wordsCount++;

              // After removing the last letter, call the initial function again
              entry();
            }
          }
        }
      } else {
        // If the code reaches the last word
        // It resets the words counter...
        wordsCount = 0;
        // ...and calls the initial function again.
        entry();
      }
    }
  });
}
