// import React, { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { Box, Center, HStack, VStack } from "@chakra-ui/react";
// import "./Header.css";
// import logo from "../images/logo.png";
// import navBack from "../images/nav top.png";

// const socials = [
//   {
//     icon: faEnvelope,
//     url: "mailto: sam@solidbuildingaspect.co.uk"
//   },
//   {
//     icon: faLinkedin,
//     url: "https://www.linkedin.com/in/sami-selimi-7b2733131/?originalSubdomain=uk"
//   },
//   {
//     icon: faFacebook,
//     url: "https://www.facebook.com/solidbuildingaspect?locale=en_GB"
//   }
// ];

// const Header = () => {
//   const headerRef = useRef(null);

//   useEffect(() => {
//     let prevScrollPos = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const headerElement = headerRef.current;
//       if (!headerElement) {
//         return;
//       }
//       if (prevScrollPos > currentScrollPos) {
//         headerElement.style.transform = "translateY(0)";
//       } else {
//         headerElement.style.transform = "translateY(-200px)";
//       }
//       prevScrollPos = currentScrollPos;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleClick = (anchor) => {
//     const id = `${anchor}-section`;
//     const element = document.getElementById(id);

//     if (element) {
//       const navBarHeight = 100; // Adjust this value to the height of your fixed navigation bar

//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition - navBarHeight;

//       window.scrollTo({
//         top: window.scrollY + offsetPosition,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//     <div id="profile-section">
//       <Box
//         position="fixed"
//         top={0}
//         left={0}
//         right={0}
//         translateY={0}
//         transitionProperty="transform"
//         transitionDuration=".3s"
//         transitionTimingFunction="ease-in-out"
//         bgImg={navBack}
//         bgPos={"center"}
//         bgSize={"cover"}
//         backgroundColor="#18181b"
//         shadow={"inset 0 0 0 118px rgba(0,0,0,0.87)"}
//         height={200}
//         ref={headerRef}
//       >
//         <Box color="white" maxWidth="1280px" minW="670px" margin="0 auto">
//           <HStack>
//             <VStack>
//               <img src={logo} alt="logo"></img>
//               <h1>( SOLID BUILDING ASPECT LTD ) -Your Trusted Subcontractor</h1>
//             </VStack>
//             <HStack
//               px={16}
//               py={4}
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <nav>
//                 <div className="socials_icons">
//                   <HStack spacing={8}>
//                     {socials.map((social, index) => (
//                       <a href={social.url} key={index}>
//                         <FontAwesomeIcon
//                           icon={social.icon}
//                           className="icon"
//                           size="2x"
//                         />
//                       </a>
//                     ))}
//                   </HStack>
//                 </div>
//               </nav>
//               <nav>
//                 <div className="socials_icons">
//                   <HStack spacing={8}>
//                     <a
//                       href="/#profile"
//                       onClick={() => {
//                         handleClick("profile");
//                       }}
//                       key={"profile"}
//                       className="head"
//                     >
//                       Profile
//                     </a>
//                     <a
//                       href="/#projects"
//                       onClick={() => handleClick("projects")}
//                       key={"projects"}
//                       className="head"
//                     >
//                       Projects
//                     </a>
//                     <a
//                       href="/#contact-me"
//                       onClick={() => handleClick("contactme")}
//                       key={"contact_me"}
//                       className="head"
//                     >
//                       Contact Me
//                     </a>
//                   </HStack>
//                 </div>
//               </nav>
//             </HStack>
//           </HStack>
//         </Box>
//       </Box>
//     </div>
//   );
// };
// export default Header;
