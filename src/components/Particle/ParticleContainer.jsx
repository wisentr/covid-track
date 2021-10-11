import React from "react";

import Particles from "react-tsparticles";
import mikrop1 from "../../images/mikrop1.png";
import mikrop2 from "../../images/mikrop2.svg";

function ParticleContainer() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          collisions: {
            enable: false,
          },
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          shape: {
            type: "image",
            image: [
              {
                src: mikrop1,
                height: 20,
                width: 20,
              },
              {
                src: mikrop2,
                height: 20,
                width: 20,
              },
            ],
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 5,
              sync: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default ParticleContainer;
