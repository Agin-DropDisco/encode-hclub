import gsap from "gsap";




// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 1.2,
    height: 0,
    transformOrigin: "right top",
    skewY: -12,
    ease: "power4.inOut",
    stagger: {
      amount: 0.1
    }
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 1.2,
    height: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.07
    }
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 0.8,
    y: -100,
    delay: 0.18,
    ease: "power4.Out",
    stagger: {
      amount: 0.88
    }
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = node => {
  gsap.from(node, {
    y: 200,
    duration: 1,
    delay: 0.5,
    autoAlpha: 0,
    ease: "power4.Out",
    stagger: {
      amount: 0.88
    }
  });
};

// Hover on the link
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 8,
    ease: "power1.inOut"
  });
};

// Hover off the link
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut"
  });
};

// adds city image once you hover on
export const handleCity = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power4.inOut"
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top"
  });
};

// Removes the city image once you hover off
export const handleCityReturn = target => {
  gsap.to(target, {
    duration: 0,
    skewY: 0
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0
  });
};


