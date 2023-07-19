function menu() {
  const hero = document.getElementsByClassName("hero-content")[0];
  const cover = document.getElementsByClassName("cover")[0];
  const m = document.getElementsByClassName("list")[0];
  const currentTop = parseInt(hero.style.top);
  
  if (currentTop === 500) {
    hero.style.top = "100px";
    cover.style.height = "100vh";
    m.style.display = "none";
  } else {
    hero.style.top = "500px";
    cover.style.height = "150vh";
    m.style.display = "flex";
    
  }
}


tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 180,
        sync: true
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 50,
      random: {
        enable: true,
        minimumValue: 10
      },
      animation: {
        enable: true,
        speed: 5,
        minimumValue: 10,
        sync: true,
        startValue: "min",
        destroy: "max"
      }
    },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: false,
      straight: false,
      outMode: "destroy",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onhover: {
        enable: true,
        mode: "trail"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      },
      trail: {
        delay: 0.005,
        quantity: 5
      }
    }
  },
  retina_detect: true,
  background: {
    color: "#000000",
    image: "url('https://media.macphun.com/img/uploads/customer/blog/682/167395988263c699cadae282.84678404.jpg?q=85&w=1680')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: "#1d1d1d"
    }
  }
});


