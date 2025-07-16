'use client'; // This directive marks the component as a Client Component

import React, { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Terminal, Rocket, Github, Mail, Linkedin, Atom, Type, Server, Database, Cloud, Package, GitBranch, LayoutDashboard, Component, FileDown, Menu, X, ArrowUp } from 'lucide-react';

// Define constants for reusability and easy updates
const CONTACT_INFO = {
    email: "joshuamwaurangugi@gmail.com",
    github: "https://github.com/JoshuaNgugi",
    linkedin: "https://www.linkedin.com/in/joshua-ngugi/",
    turukeMobile: "https://github.com/JoshuaNgugi/turuke-mobile", // Change this for Play Store
    moolahCheckGithub: "https://github.com/JoshuaNgugi/moolah-check",
    krossroadsPlayStore: "https://play.google.com/store/apps/details?id=com.alliedcommerce.seller.pos&hl=en"
};

// Define an interface for the image categories
interface ImageCategory {
    title: string;
    urls: string[];
}

// Define an interface for the DetailCard props
interface DetailCardProps {
    title: string;
    description: string[]; // Changed to array of strings for bullet points
    link?: string; // Optional link
    linkText?: string; // Optional link text
    icon?: React.ElementType; // Icon component (from lucide-react)
    imageCategories?: ImageCategory[]; // Optional array of image categories
    role?: string; // Optional role for work experience
    duration?: string; // Optional duration for work experience
}

// Define interfaces for structured data
interface ExperienceItem {
    id: string;
    title: string;
    role: string;
    duration: string;
    description: string[];
    link?: string;
    linkText?: string;
    icon: React.ElementType;
    imageCategories?: ImageCategory[];
}

interface ProjectItem {
    id: string;
    title: string;
    description: string[];
    link?: string;
    linkText?: string;
    icon: React.ElementType;
    imageCategories?: ImageCategory[];
}

// Data for Work Experience
const workExperienceData: ExperienceItem[] = [
    {
        id: "allied-commerce",
        title: "Allied Commerce Ltd",
        role: "Software Team Lead / Software Engineer",
        duration: "Feb 2023 – Present / Jun 2019 – Jan 2023",
        description: [
            "Led the design, development, and maintenance of critical Java/Spring Boot backend services, implementing a microservices architecture that powered the Krossroads POS ecosystem, ensuring high availability and scalability for over 10,000 users.",
            "Applied stringent information security principles in developing secure APIs for payment integrations (Stripe, WorldPay, CardConnect), safeguarding personal and transactional data, and ensuring compliance.",
            "Expertly managed PostgreSQL databases, optimizing stored procedures, performing complex large-scale data transfers, for example, migrating a compressed 8GB Ingram file containing more than 10 million records to database, and implementing real-time data synchronization solutions using Debezium.",
            "Applied principles of software engineering to the design, development, and testing of new features. Directed comprehensive software testing strategies, including Test-Driven Development (TDD) using Junit and Mockito, achieving 98% test coverage to ensure robust and reliable Java applications.",
            "Actively participated in Agile sprint planning, daily stand-ups, and retrospectives, coordinating seamlessly with cross-functional teams.",
            "Documented work clearly and understandably for future use, including API specifications and system architecture.",
            "Designed solutions to support high transaction volumes and optimized application performance, reducing average screen load time by 24% for integrated mobile frontends, ensuring efficient service delivery.",
            "Provided guidance and mentorship to 3 junior developers, elevating team capabilities.",
            "Led rigorous code reviews to maintain a high bar for code quality, adherence to best practices, and knowledge sharing."
        ],
        link: CONTACT_INFO.krossroadsPlayStore,
        linkText: "View Krossroads on Play Store",
        icon: Terminal,
        imageCategories: [
            {
                title: "Smartphone Screenshots",
                urls: [
                    "/images/krossroads-mobile-dashboard-1.jpg",
                    "/images/krossroads-mobile-checkout.jpg",
                ],
            },
            {
                title: "Web Page Screenshots",
                urls: [
                    "/images/krossroads-web-dashboard.jpg",
                    "/images/krossroads-web-checkout.jpg",
                ],
            },
        ],
    },
    {
        id: "ellixar-technologies",
        title: "Ellixar Technologies",
        role: "Android Developer Team Lead",
        duration: "Dec 2018 – Jun 2019",
        description: [
            "Led a dynamic team in developing native Android applications, integrating RESTful APIs using Java and SpringBoot for robust data management and achieving 90%+ user adoption.",
            "Collaborated closely with clients to gather requirements and translate them into actionable development plans, consistently meeting and exceeding expectations.",
            "Optimized backend data processing and UI responsiveness by 15%, contributing to overall application performance.",
            "Designed user-friendly interfaces using MVC patterns, optimizing for usability and cross-device compatibility.",
            "Conducted unit and integration tests with JUnit and Espresso. Spearheaded app deployments to Google Play Store, ensuring robust performance and positive user reviews."
        ],
        icon: Smartphone,
        imageCategories: [
            {
                title: "App Overview", // Changed title for clarity
                urls: [
                    "/images/app-data.svg",
                ],
            },
        ],
    },
];

// Data for Projects
const projectsData: ProjectItem[] = [
    {
        id: "turuke-app",
        title: "Turuke App – Founder & Developer",
        description: [
            "Engineered a Flutter mobile application for poultry management, demonstrating core functionalities for scalable, performant, and user-friendly mobile apps.",
            "Developed and deployed the Node.js + PostgreSQL backend, which is Dockerized and hosted on AWS, showcasing hands-on experience with cloud-native deployment, scalable infrastructure, and backend development for a data-driven application."
        ],
        link: CONTACT_INFO.turukeMobile,
        linkText: "View on GitHub", // Changed link text as it's a GitHub link
        icon: Smartphone,
        imageCategories: [
            {
                title: "Smartphone Screenshots",
                urls: [
                    "/images/turuke-dashboard.jpg",
                    "/images/turuke-drawer.jpg",
                ],
            },
        ],
    },
    {
        id: "momentum-app",
        title: "Momentum App – Proof of Concept Social Media Platform",
        description: [
            "A lean Flutter app demonstrating core functionalities for rich media sharing, built with strong emphasis on ownership, rapid iteration, and performance.",
            "Implemented secure Firebase Authentication, seamless media capture/selection, and efficient Firebase Storage/Firestore integration for scalable user-generated content."
        ],
        link: "https://github.com/JoshuaNgugi/momentum-app", // Assuming this is the correct repo link
        linkText: "View GitHub Repo",
        icon: Rocket, // Changed icon to Rocket for a social media app
    },
    {
        id: "moolah-check",
        title: "Moolah Check – Founder & Developer",
        description: [
            "Developed a full-stack expense tracking web app with a React frontend and Node.js/MongoDB backend, featuring secure APIs and dynamic data visualizations."
        ],
        link: CONTACT_INFO.moolahCheckGithub,
        linkText: "View GitHub Repo",
        icon: Code,
    },
    {
        id: "internal-admin-portal",
        title: "Internal Admin Portal (Allied Commerce)",
        description: [
            "Developed a secure internal admin portal with a React frontend and an Express.js (Node.js) backend, enabling critical monitoring of terminal metrics and user logs.",
            "This project was instrumental in optimizing data access workflows for operational teams."
        ],
        icon: LayoutDashboard,
    },
    {
        id: "ingram-book-migration",
        title: "Ingram Book Inventory Migration",
        description: [
            "Successfully executed a critical data migration, transferring an 8GB legacy Ingram Book inventory file into the database.",
            "This achievement enabled seamless access to large-scale product data, supporting real-time inventory workflows and highlighting my capability in handling significant data volumes."
        ],
        icon: FileDown,
    },
];

// Header Component: Displays your name, title, and a brief description.
const Header = () => (
    <section id="home" className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-white text-center rounded-b-3xl shadow-lg">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center"> {/* Added flexbox for side-by-side layout */}
            {/* Image on the left for larger screens, hidden on small screens */}
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-8">
                <img
                    src="/images/prog.svg" // Using your uploaded image
                    alt="Programming illustration"
                    className="w-48 sm:w-64 md:w-full h-auto object-contain rounded-full shadow-xl" // Responsive sizing and object-contain, added rounded-full and shadow
                    onError={(e) => {
                        // Cast e.target to HTMLImageElement to access src and onerror properties
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop if fallback image also fails
                        target.src = `https://placehold.co/400x250/e2e8f0/64748b?text=Image+Load+Error`;
                    }}
                />
            </div>
            {/* Text content */}
            <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}> {/* Subtle text shadow for emphasis */}
                    Joshua Ngugi
                </h1>
                <p className="mt-4 text-2xl text-emerald-700 font-semibold">
                    Software Engineer | Full-Stack Developer
                </p>
                <p className="mt-8 text-lg text-gray-600"> {/* Removed max-w-2xl mx-auto from here to flow better with image */}
                    With over six years dedicated to crafting robust software solutions, I specialize in full-stack development, data engineering, and leading technical teams to deliver high-performance applications. My expertise spans complex backend systems, intuitive user interfaces, and large-scale data management, consistently driving efficiency and innovation in fast-paced environments.
                </p>
            </div>
        </div>
    </section>
);

// DetailCard Component: A reusable card for displaying project or experience details, including images.
// Now accepts 'imageCategories' for organized screenshots and 'description' as string array for bullet points.
const DetailCard: React.FC<DetailCardProps> = ({ title, description, link, linkText, icon: IconComponent, imageCategories, role, duration }) => (
    <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-emerald-700 mb-3 flex items-center">
            {IconComponent && <IconComponent className="w-6 h-6 mr-3 text-emerald-600" />}
            {title}
        </h3>
        {role && <p className="text-lg font-semibold text-gray-800 mb-1">{role}</p>}
        {duration && <p className="text-md text-gray-600 mb-4">{duration}</p>} {/* Display duration */}
        <ul className="mt-2 text-gray-700 text-lg leading-relaxed flex-grow list-disc pl-5 space-y-2"> {/* Added list styling */}
            {description.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
        {imageCategories && imageCategories.length > 0 && (
            <div className="mt-6 space-y-6"> {/* Space between image categories */}
                {imageCategories.map((category, catIndex) => (
                    <div key={catIndex}>
                        {category.title && <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">{category.title}</h4>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {category.urls.map((url, imgIndex) => (
                                <img
                                    key={`${catIndex}-${imgIndex}`}
                                    src={url}
                                    alt={`${category.title} Screenshot ${imgIndex + 1}`}
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                    // Placeholder image fallbacks for better robustness
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = `https://placehold.co/400x225/e2e8f0/64748b?text=Image+Load+Error`;
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )}
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer" // Security best practice for external links
                className="mt-4 inline-flex items-center text-emerald-600 font-semibold hover:underline hover:text-emerald-800 transition-colors duration-200"
            >
                {linkText}
                {/* External link icon */}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </a>
        )}
    </div>
);

// Define an interface for the SkillItem props
interface SkillItemProps {
    icon?: React.ElementType; // Icon component (from lucide-react)
    name: string;
}

// SkillItem Component: A reusable item for displaying individual skills with an icon.
const SkillItem: React.FC<SkillItemProps> = ({ icon: Icon, name }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
        {/* Render icon if provided */}
        {Icon && <Icon className="w-10 h-10 text-emerald-600 mb-3" />}
        <span className="text-lg font-medium text-gray-800 text-center">{name}</span>
    </div>
);

// Footer Component: Contains copyright information and social media links.
const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 text-sm py-8 px-6 rounded-t-3xl shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} Joshua Ngugi</p>
            <div className="flex space-x-6">
                {/* Social media links */}
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub Profile">
                    <Github className="w-6 h-6" />
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors duration-200" aria-label="Email Me">
                    <Mail className="w-6 h-6" />
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn Profile">
                    <Linkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
    </footer>
);

// SectionWrapper for fade-in animation
const SectionWrapper: React.FC<{ id: string; children: React.ReactNode; className?: string; onIntersect: (id: string) => void }> = ({ id, children, className, onIntersect }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    onIntersect(id); // Notify parent about intersection
                } else {
                    // Optional: If you want it to fade out when scrolling away
                    // setIsVisible(false);
                }
            },
            { threshold: 0 } // Changed threshold to 0 for better mobile visibility
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [id, onIntersect]);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`${className} transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </section>
    );
};


// Main PortfolioPage Component
export default function PortfolioPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSectionIntersect = (id: string) => {
        setActiveSection(id);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Define custom keyframes for the fade-in animation */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>

            {/* Navigation Bar: Sticky to stay at the top while scrolling */}
            <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-700">Joshua Ngugi</span>
                    <div className="space-x-6 hidden md:flex"> {/* Hidden on small screens, shown on medium and above */}
                        <a href="#home" className={`text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium ${activeSection === 'home' ? 'text-emerald-600 font-bold' : ''}`}>Home</a>
                        <a href="#work-experience" className={`text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium ${activeSection === 'work-experience' ? 'text-emerald-600 font-bold' : ''}`}>Work Experience</a>
                        <a href="#projects" className={`text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium ${activeSection === 'projects' ? 'text-emerald-600 font-bold' : ''}`}>Projects</a>
                        <a href="#skills" className={`text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium ${activeSection === 'skills' ? 'text-emerald-600 font-bold' : ''}`}>Skills</a>
                        <a href="#contact" className={`text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium ${activeSection === 'contact' ? 'text-emerald-600 font-bold' : ''}`}>Contact</a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-emerald-600 focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-gray-700 hover:text-emerald-600 focus:outline-none"
                        aria-label="Close mobile menu"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-emerald-700 hover:text-emerald-900 transition-colors duration-200">Home</a>
                    <a href="#work-experience" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-emerald-700 hover:text-emerald-900 transition-colors duration-200">Work Experience</a>
                    <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-emerald-700 hover:text-emerald-900 transition-colors duration-200">Projects</a>
                    <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-emerald-700 hover:text-emerald-900 transition-colors duration-200">Skills</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-emerald-700 hover:text-emerald-900 transition-colors duration-200">Contact</a>
                </div>
            )}

            <Header />

            {/* Work Experience Section */}
            <SectionWrapper id="work-experience" className="py-24 bg-gray-50" onIntersect={handleSectionIntersect}>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
                        Work Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {workExperienceData.map((exp) => (
                            <DetailCard
                                key={exp.id}
                                title={exp.title}
                                role={exp.role}
                                duration={exp.duration}
                                description={exp.description}
                                link={exp.link}
                                linkText={exp.linkText}
                                icon={exp.icon}
                                imageCategories={exp.imageCategories}
                            />
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Projects Section */}
            <SectionWrapper id="projects" className="py-24 bg-gray-50" onIntersect={handleSectionIntersect}>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projectsData.map((project) => (
                            <DetailCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                linkText={project.linkText}
                                icon={project.icon}
                                imageCategories={project.imageCategories}
                            />
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Skills Section: Highlights core technical skills */}
            <SectionWrapper id="skills" className="py-20 bg-emerald-50 text-center rounded-xl mx-auto max-w-7xl px-6 my-16 shadow-inner" onIntersect={handleSectionIntersect}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-12 text-gray-900">Core Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                        <SkillItem icon={Smartphone} name="Flutter" />
                        <SkillItem icon={Atom} name="React.js" />
                        <SkillItem icon={Terminal} name="Node.js" />
                        <SkillItem icon={Server} name="Express.js" />
                        <SkillItem icon={Code} name="Java & Spring Boot" />
                        <SkillItem icon={Rocket} name="PostgreSQL" />
                        <SkillItem icon={Database} name="MongoDB" />
                        <SkillItem icon={Type} name="TypeScript" />
                        <SkillItem icon={Cloud} name="AWS" />
                        <SkillItem icon={Package} name="Docker" />
                        <SkillItem icon={Github} name="Git/GitHub" />
                        <SkillItem icon={Database} name="Debezium" />
                        <SkillItem icon={Code} name="TDD" />
                        <SkillItem icon={GitBranch} name="CI/CD" />
                        <SkillItem icon={Server} name="RESTful APIs" />
                        <SkillItem icon={Database} name="SQLite" />
                        <SkillItem icon={Component} name="Chart.js" />
                        <SkillItem icon={FileDown} name="Flyway" />
                        <SkillItem icon={Package} name="ETL Processes" />
                    </div>
                </div>
            </SectionWrapper>

            {/* Contact Section: Provides a call to action for connecting */}
            <SectionWrapper id="contact" className="py-20 bg-emerald-700 text-white text-center rounded-xl mx-auto max-w-5xl px-6 mb-16 shadow-2xl" onIntersect={handleSectionIntersect}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-extrabold">Let&apos;s Connect</h2>
                    <p className="mt-4 text-xl leading-relaxed">
                        I&apos;m currently open to new opportunities and exciting collaborations. Feel free to reach out!
                    </p>
                    <div className="mt-8">
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="inline-block bg-white text-emerald-800 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out transform"
                        >
                            Email Me
                        </a>
                    </div>
                </div>
            </SectionWrapper>

            <Footer />

            {/* Scroll to Top Button */}
            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 ease-in-out transform hover:scale-110 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}
