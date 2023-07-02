import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  Avatar,
  Box,
  Text,
  HStack,
  Spacer,
  VStack,
  Link,
  Image
} from "@chakra-ui/react";
import "./Header.css";
import logo from "../images/logo1.png";
import navBack from "../images/nav top.png";
import sam from "../images/Sam.png";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sam@solidbuildingaspect.co.uk"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sami-selimi-7b2733131/?originalSubdomain=uk"
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/solidbuildingaspect?locale=en_GB"
  },
  {
    icon: faPhone
  }
];

const navBars = [
  { name: "home", heading: "Home" },
  { name: "services", heading: "Services" },
  { name: "projects", heading: "Projects" },
  { name: "about", heading: "About" },
  { name: "contact-me", heading: "Contact Me" }
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      const navBarHeight = 100; // Adjust this value to the height of your fixed navigation bar

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - navBarHeight;

      window.scrollTo({
        top: window.scrollY + offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="profile-section">
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        bgImg={navBack}
        bgPos={"center"}
        bgSize={"cover"}
        shadow={"inset 0 0 0 118px rgba(0,0,0,0.87)"}
        height={200}
        ref={headerRef}
        p={2}
        zIndex={100}
      >
        <Box color="white" minW="670px" margin="0 auto">
          <HStack pl={33}>
            {/* ##### Main Logo Start #### */}
            <VStack>
              <Image w="350px" src={logo} alt="logo" />
              <Text fontSize={20}>Your Trusted Subcontractor</Text>
            </VStack>
            <Spacer />
            {/* ##### Main Logo End #### */}
            <VStack px={8} py={4} pos={"right"}>
              <nav>
                <div className="nav_bar">
                  <HStack spacing={8}>
                    {/* #### Avitar and Name Start #### */}
                    <Avatar name="Sam Salimi" src={sam} size={`xl`} />
                    <VStack
                      bgGradient="linear(to-l, #d19446 0%, #dcaf77 45%, #8c5e2a 100%)"
                      bgClip="text"
                    >
                      <Text fontSize={50}>SAM SALIMI</Text>
                      <Text fontSize={20} mt={-22}>
                        Director
                      </Text>
                    </VStack>
                    {/* #### Avitar and Name End #### */}

                    {/* #### Social Icons Start #### */}
                    <svg width="0" height="0">
                      <linearGradient id="rg" r="150%" cx="30%" cy="107%">
                        <stop stop-color="#d19446" offset="0" />
                        <stop stop-color="#dcaf77" offset="0.45" />
                        <stop stop-color="#8c5e2a" offset="0.9" />
                      </linearGradient>
                    </svg>
                    <div className="icon_cont">
                      {socials.map((social, index) => (
                        <a href={social.url} key={index}>
                          <FontAwesomeIcon
                            icon={social.icon}
                            className="icon"
                            size="2x"
                          />
                        </a>
                      ))}
                    </div>
                    {/* #### Social Icons End #### */}
                  </HStack>
                </div>
              </nav>
              {/* #### Navigation Bar Start #### */}

              <nav>
                <HStack spacing={8} fontSize={30} fontWeight="bold">
                  {navBars.map((navName) => (
                    <Link
                      href={`/#${navName.name}`}
                      onClick={() => {
                        handleClick(navName.name);
                      }}
                      key={navName.name}
                      className="head"
                      _hover={{
                        bgGradient:
                          "linear(to-l, #d19446 0%, #dcaf77 45%, #8c5e2a 100%)",
                        bgClip: "text",
                        transform: "scale(1.2)"
                      }}
                    >
                      {navName.heading}
                    </Link>
                  ))}
                </HStack>
              </nav>
              {/* #### Navigation Bar End #### */}
            </VStack>
          </HStack>
        </Box>
      </Box>
    </div>
  );
};
export default Header;
