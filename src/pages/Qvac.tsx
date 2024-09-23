// import React from 'react';

// const Qvac = () => {
//   return (
//     <div>
//       <h1>Welcome to the QVAC's landing  Page</h1>
      
//       {/* Add your content here */}
//     </div>
//   );
// };

// export default Qvac;
//mine..........................
// import React from 'react';
// import Home from './Home'; 
// import About from './About'; 
// import Contact from './Contact'; 
// //import NavBar from './NavBar';
// import NavBar from './NavBar';
// import Features from './Features';

// const Qvac = () => {
//   return (
//     <div>
//       <Home />
//       <About />
//       <Contact />
//       <NavBar/>
//       <Features/>
//       {/* Add more sections as needed */}
//     </div>
//   );
// };

// export default Qvac;
import React, { useEffect } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Features from './Features';
import { ChevronUp } from 'lucide-react';
import Footer from './Footer';

const Qvac: React.FC = () => {
    // Set document title
    useEffect(() => {
        document.title = "Qvac | Your Website Title";
    }, []);

    // Scroll handler to show/hide back-to-top button
    const windowScroll = () => {
        const backToTop = document.getElementById("back-to-top");
        if (backToTop) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                backToTop.style.opacity = "1";
            } else {
                backToTop.style.opacity = "0";
            }
        }
    };

    // Add/remove scroll event listeners
    useEffect(() => {
        window.addEventListener('scroll', windowScroll);
        window.addEventListener('load', windowScroll);

        return () => {
            window.removeEventListener('scroll', windowScroll);
        };
    }, []);

    // Back-to-top button click handler
    const handleScroll = () => {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
    };

    // Apply specific body and HTML class names
    useEffect(() => {
        const bodyElement = document.body;
        bodyElement.classList.add(
            "text-base",
            "bg-white",
            "text-body",
            "font-public",
            "dark:text-zink-50",
            "dark:bg-zink-800"
        );

        const htmlElement = document.documentElement;
        htmlElement.classList.add("overflow-x-hidden", "scroll-smooth", "group");

        return () => {
            htmlElement.classList.remove("overflow-x-hidden", "scroll-smooth", "group");
        };
    }, []);

    return (
        <React.Fragment>
            <NavBar />
            <Home />
            <Features />
            <About />
            <Contact />
            <Footer/>

            {/* Back-to-top button */}
            <button
                id="back-to-top"
                className="fixed flex items-center justify-center size-10 text-white bg-purple-500 rounded-md bottom-10 right-10"
                onClick={handleScroll}
                style={{ opacity: 0, transition: 'opacity 0.3s' }} // Initial state with hidden button
            >
                <ChevronUp className="animate animate-icons" />
            </button>
        </React.Fragment>
    );
};

export default Qvac;

