'use client'; // This directive marks the component as a Client Component

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { Orbitron, Inter } from 'next/font/google'; // Import fonts from next/font/google
import { Code, Smartphone, Terminal, Rocket, Github, Mail, Linkedin, Atom, Type, Server, Database, Cloud, Package, GitBranch, LayoutDashboard, FileDown, Menu, X, ArrowUp } from 'lucide-react'; // Removed 'Component'

// Initialize fonts
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

// Define constants for reusability and easy updates
const CONTACT_INFO = {
    email: "joshuamwaurangugi@gmail.com",
    github: "https://github.com/JoshuaNgugi",
    linkedin: "https://www.linkedin.com/in/joshua-ngugi/",
    turukeMobile: "https://github.com/JoshuaNgugi/turuke-mobile",
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
    description: string[];
    link?: string;
    linkText?: string;
    icon?: React.ElementType;
    imageCategories?: ImageCategory[];
    role?: string;
    duration?: string;
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

// Helper function to convert Markdown bold (**) to HTML strong tags
const formatDescription = (descriptionArray: string[]): string[] => {
    return descriptionArray.map(point =>
        point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    );
};

// Data for Work Experience
const workExperienceData: ExperienceItem[] = [
    {
        id: "allied-commerce",
        title: "Allied Commerce Ltd",
        role: "Software Team Lead / Software Engineer",
        duration: "Feb 2023 – Present / Jun 2019 – Jan 2023",
        description: formatDescription([
            "**Software Development Lifecycle & Engineering Excellence:** Led the design, development, and maintenance of critical Java/Spring Boot backend services, implementing a microservices architecture that powered the Krossroads POS ecosystem, ensuring high availability and scalability for over 10,000 users. Applied stringent information security principles in developing secure APIs for payment integrations (Stripe, WorldPay, CardConnect), safeguarding personal and transactional data, and ensuring compliance.",
            "**Architecture & System Design:** Expertly managed PostgreSQL databases, optimizing stored procedures, performing complex large-scale data transfers (e.g., migrating a compressed 8GB Ingram file containing more than 10 million records), and implementing real-time data synchronization solutions using Debezium. Designed and implemented a sophisticated two-tier microservice backend (RPC and CDC tiers with Debezium, Kafka, Docker, and Firebase) for real-time data synchronization and push notifications.",
            "**Technical Leadership & Team Empowerment:** Led a team of 4 junior developers, fostering a collaborative and high-performing environment. Conducted thorough code reviews, provided constructive feedback, and ensured adherence to high coding standards and best practices. Actively mentored junior and mid-level engineers, supporting their professional growth and technical skill development.",
            "**Strategic Product Management & Market Impact:** Directly oversaw the Krossroads Point-of-Sale (POS) product suite from concept to deployment, including its successful market launch. The product achieved significant success across the United States (Washington, California), Singapore, and Europe, culminating in its acquisition by Boston-based WHF.",
            "**Specialized Expertise: Hardware Integration & Low-Level Communication:** Integrated Flutter mobile applications with native Android code for hardware-level communication with STAR Micronics receipt printers and Stripe card readers (USB & Bluetooth). Developed underlying Android code for intricate device I/O and bridged functionality to Dart via type-safe Pigeon platform channels. Implemented barcode scanner functionalities.",
            "**Quality Assurance & Testing Automation:** Directed comprehensive software testing strategies, including Test-Driven Development (TDD) using JUnit and Mockito, achieving 98% test coverage. Developed automation tests using Appium to streamline testing processes.",
            "**Cloud-Native Development & Infrastructure:** Integrated with Firebase for backend operations, authentication, and data storage, enabled by the CDC architecture. Actively advocated for and implemented CI/CD pipelines (e.g., GitHub Actions) and automation.",
            "**Cross-Functional Collaboration & User-Centricity:** Actively participated in Agile sprint planning, daily stand-ups, and retrospectives, coordinating seamlessly with cross-functional teams. Conducted live demos for stakeholders and end-users (e.g., Montlake Food Market outlets in Seattle, USA) to gather direct feedback, which directly translated into feature updates and re-optimizations. Investigated and resolved difficult bugs and critical production issues efficiently."
        ]),
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
        description: formatDescription([
            "Led a dynamic team in developing enterprise-grade native Android applications, notably the Adrian Visitor and Leave Management apps, achieving 90%+ user adoption.",
            "Integrated RESTful APIs using Java and SpringBoot for robust data management.",
            "Collaborated closely with clients to gather requirements and translate them into actionable development plans, consistently meeting and exceeding expectations.",
            "Optimized backend data processing and UI responsiveness by 15%, contributing to overall application performance.",
            "Designed user-friendly interfaces using MVC patterns, optimizing for usability and cross-device compatibility.",
            "Conducted unit and integration tests with JUnit and Espresso. Spearheaded app deployments to Google Play Store, ensuring robust performance and positive user reviews."
        ]),
        icon: Smartphone,
        imageCategories: [
            {
                title: "App Overview",
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
        description: formatDescription([
            "**Comprehensive Flock Management:** Allows farmers to effortlessly record and monitor essential data points for their poultry, including egg counts, vaccination schedules, feed consumption, and health statuses.",
            "**Offline-First Capabilities:** Built with sqflite for local data persistence, ensuring seamless operation and data capture even in areas with unreliable internet connectivity—a critical feature for remote farm environments.",
            "**Intuitive Data Visualization:** Leverages fl_chart to transform complex data into clear, engaging yield graphs and statistical summaries, enabling farmers to quickly identify trends, assess performance, and make informed decisions directly from their mobile devices.",
            "**Streamlined Operations:** Designed to minimize manual record-keeping and provide real-time insights, saving farmers significant time and effort in managing their coops.",
            "**Technical Architecture & My Role:** As the sole founder and developer, I was responsible for the entire software development lifecycle of Turuke, from ideation and architectural design to implementation, deployment, and ongoing maintenance.",
            "**Mobile Frontend (Flutter/Dart):** Developed the cross-platform mobile application using Flutter and Dart, ensuring a consistent and fluid user experience on both Android and iOS devices. Implemented Provider for efficient and scalable state management. Architected the offline-first functionality with sqflite. Integrated fl_chart for dynamic and interactive data visualization.",
            "**Backend & API Development (Node.js/PostgreSQL):** Engineered a robust and scalable Node.js backend to manage core business logic, user authentication, and synchronize data. Designed and implemented a PostgreSQL relational database. Developed efficient RESTful APIs.",
            "**Cloud-Native Deployment & Infrastructure (AWS/Docker):** Successfully Dockerized the Node.js backend. Orchestrated the deployment and management of the Dockerized backend on Amazon Web Services (AWS), demonstrating practical experience with cloud infrastructure, ensuring high availability, scalability, and robust performance.",
            "**Impact & Demonstrated Skills:** The Turuke project vividly demonstrates Full-Stack Proficiency, End-to-End Ownership, Problem-Solving & Innovation, Scalability & Performance, User-Centric Design, and Entrepreneurial Drive."
        ]),
        link: CONTACT_INFO.turukeMobile,
        linkText: "View on GitHub",
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
        description: formatDescription([
            "A lean Flutter app demonstrating core functionalities for rich media sharing, built with strong emphasis on ownership, rapid iteration, and performance.",
            "Implemented secure Firebase Authentication, seamless media capture/selection, and efficient Firebase Storage/Firestore integration for scalable user-generated content."
        ]),
        link: "https://github.com/JoshuaNgugi/momentum-app",
        linkText: "View GitHub Repo",
        icon: Rocket,
    },
    {
        id: "moolah-check",
        title: "Moolah Check – Founder & Developer",
        description: formatDescription([
            "Developed a full-stack expense tracking web app with a React frontend and Node.js/MongoDB backend, featuring secure APIs and dynamic data visualizations."
        ]),
        link: CONTACT_INFO.moolahCheckGithub,
        linkText: "View GitHub Repo",
        icon: Code,
    },
    {
        id: "internal-admin-portal",
        title: "Internal Admin Portal (Allied Commerce)",
        description: formatDescription([
            "Developed a secure internal admin portal with a React frontend and an Express.js (Node.js) backend, enabling critical monitoring of terminal metrics and user logs.",
            "This project was instrumental in optimizing data access workflows for operational teams."
        ]),
        icon: LayoutDashboard,
    },
    {
        id: "ingram-book-migration",
        title: "Ingram Book Inventory Migration",
        description: formatDescription([
            "Successfully executed a critical data migration, transferring an 8GB legacy Ingram Book inventory file into the database.",
            "This achievement enabled seamless access to large-scale product data, supporting real-time inventory workflows and highlighting my capability in handling significant data volumes."
        ]),
        icon: FileDown,
    },
];

// Header Component: Displays your name, title, and a brief description.
const Header = () => (
    <section id="home" className="relative py-24 bg-gradient-to-br from-[#100F1A] via-gray-900 to-black text-white text-center rounded-b-3xl shadow-2xl overflow-hidden">
        {/* Angled background effect */}
        <div className="absolute inset-0 bg-zinc-900 transform -skew-y-3 origin-top-left"></div>
        <div className="absolute inset-0 bg-zinc-800 transform skew-y-6 origin-bottom-right opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-8">
                {/* Replaced <img> with <Image /> from next/image */}
                <Image
                    src="/images/prog.svg"
                    alt="Programming illustration"
                    // For responsive images that fill their container, use fill and set parent to relative
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    className="rounded-full shadow-lg shadow-[#00F0FF]/50 animate-wave !relative !h-auto !w-auto" // Ensure relative positioning for fill
                    priority // Prioritize this image for LCP
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://placehold.co/400x250/1f2937/d1d5db?text=Image+Load+Error`;
                    }}
                />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
                <h1 className={`${orbitron.className} text-5xl sm:text-6xl font-extrabold text-[#00F0FF] leading-tight tracking-wide animate-glitch`}
                    data-text="Joshua Ngugi" // Used for glitch effect
                    style={{ textShadow: '0 0 10px rgba(0,240,255,0.4), 0 0 20px rgba(0,240,255,0.2)' }}>
                    Joshua Ngugi
                </h1>
                <p className={`${inter.className} mt-4 text-2xl text-[#FF00FF] font-semibold`}>
                    Software Engineer | Full-Stack Developer
                </p>
                <p className={`${inter.className} mt-8 text-lg text-gray-300 leading-relaxed`}>
                    I am a highly accomplished and results-driven Software Engineer with over 6 years of experience in designing, developing, and leading complex software solutions across mobile, web, and backend systems. My expertise spans the entire software development lifecycle, from initial concept and architectural design to deployment, post-launch optimization, and strategic product evolution. I excel in building scalable, secure, and user-centric applications, consistently translating intricate business needs into robust technical solutions. My work is defined by a commitment to engineering excellence, a passion for problem-solving, and a proven ability to lead and mentor high-performing teams.
                </p>
            </div>
        </div>
    </section>
);

// DetailCard Component: A reusable card for displaying project or experience details, including images.
const DetailCard: React.FC<DetailCardProps> = ({ title, description, link, linkText, icon: IconComponent, imageCategories, role, duration }) => {
    const [showImages, setShowImages] = useState(false);

    return (
        <div className="relative p-8 bg-zinc-800 rounded-xl border border-[#3A3A4A] hover:border-[#00F0FF] hover:shadow-lg hover:shadow-[#00F0FF]/30 transition-all duration-300 ease-in-out transform hover:-translate-y-2 group">
            <h3 className={`${orbitron.className} text-3xl font-bold text-[#00F0FF] mb-3 flex items-center`}>
                {IconComponent && <IconComponent className="w-8 h-8 mr-3 text-[#FF00FF] group-hover:animate-glitch-icon" />}
                {title}
            </h3>
            {role && <p className={`${inter.className} text-xl font-semibold text-gray-200 mb-1`}>{role}</p>}
            {duration && <p className={`${inter.className} text-lg text-gray-400 mb-4`}>{duration}</p>}
            <ul className={`${inter.className} mt-4 text-gray-300 text-lg leading-relaxed flex-grow list-disc pl-5 space-y-3`}>
                {description.map((point, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
            </ul>

            {imageCategories && imageCategories.length > 0 && (
                <div className="mt-6">
                    <button
                        onClick={() => setShowImages(!showImages)}
                        className={`${inter.className} text-[#FF00FF] hover:text-[#00F0FF] transition-colors duration-200 flex items-center font-semibold mb-4`}
                    >
                        {showImages ? 'Hide Visual Data [-]' : 'Access Visual Data [+]'}
                    </button>
                    {showImages && (
                        <div className="space-y-6 animate-fade-in-images">
                            {imageCategories.map((category, catIndex) => (
                                <div key={catIndex}>
                                    {category.title && <h4 className={`${orbitron.className} text-xl font-semibold text-[#00FFFF] mb-3 border-b border-[#3A3A4A] pb-2`}>{category.title}</h4>}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {category.urls.map((url, imgIndex) => (
                                            // Replaced <img> with <Image /> from next/image
                                            <Image
                                                key={`${catIndex}-${imgIndex}`}
                                                src={url}
                                                alt={`${category.title} Screenshot ${imgIndex + 1}`}
                                                width={400} // Example width, adjust as needed or use fill
                                                height={225} // Example height, adjust as needed or use fill
                                                className="rounded-lg shadow-md object-cover border border-[#3A3A4A]"
                                                loading="lazy"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" // Example sizes
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.onerror = null;
                                                    target.src = `https://placehold.co/400x225/1f2937/d1d5db?text=Image+Load+Error`;
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${inter.className} mt-6 inline-flex items-center px-6 py-3 border border-[#00F0FF] text-[#00F0FF] font-semibold rounded-md shadow-lg shadow-[#00F0FF]/20 hover:bg-[#00F0FF] hover:text-[#100F1A] transition-all duration-300 group-hover:animate-pulse-light`}
                >
                    {linkText}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </a>
            )}
        </div>
    );
};

// Define an interface for the SkillItem props
interface SkillItemProps {
    icon?: React.ElementType;
    name: string;
}

// SkillItem Component: A reusable item for displaying individual skills with an icon.
const SkillItem: React.FC<SkillItemProps> = ({ icon: Icon, name }) => (
    <div className="flex flex-col items-center p-4 bg-zinc-800 rounded-xl shadow-md shadow-zinc-700/30 hover:shadow-lg hover:shadow-[#00F0FF]/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00F0FF] opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-pulse-slow rounded-xl"></div>
        {Icon && <Icon className="w-10 h-10 text-[#00F0FF] mb-3 group-hover:animate-wiggle relative z-10" />}
        <span className={`${inter.className} text-lg font-medium text-gray-100 text-center relative z-10`}>{name}</span>
    </div>
);

// Footer Component: Contains copyright information and social media links.
const Footer = () => (
    <footer className="bg-[#100F1A] text-gray-400 text-sm py-8 px-6 rounded-t-3xl shadow-inner shadow-[#00F0FF]/20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className={`${inter.className} mb-4 sm:mb-0`}>© {new Date().getFullYear()} Joshua Ngugi</p>
            <div className="flex space-x-6">
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition-colors duration-200" aria-label="GitHub Profile">
                    <Github className="w-6 h-6" />
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#00F0FF] transition-colors duration-200" aria-label="Email Me">
                    <Mail className="w-6 h-6" />
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition-colors duration-200" aria-label="LinkedIn Profile">
                    <Linkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
    </footer>
);

// SectionWrapper for fade-in animation and angled backgrounds
const SectionWrapper: React.FC<{ id: string; children: React.ReactNode; className?: string; onIntersect: (id: string) => void; skew?: number; bgColor?: string }> = ({ id, children, className, onIntersect, skew = 0, bgColor = 'bg-zinc-950' }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    onIntersect(id);
                } else {
                    // Optional: If you want it to fade out when scrolling away
                    // setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        // Capture current ref value for cleanup
        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) { // Use the captured value for cleanup
                observer.unobserve(currentRef);
            }
        };
    }, [id, onIntersect]); // Removed sectionRef from dependencies as currentRef is captured

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`relative ${className} transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} overflow-hidden`}
        >
            {/* Angled background layer */}
            {skew !== 0 && (
                <div className={`absolute inset-0 ${bgColor} transform ${skew > 0 ? `skew-y-${skew}` : `-skew-y-${Math.abs(skew)}`} origin-top-left`}></div>
            )}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
};


// Main PortfolioPage Component
export default function App() { // Changed to App for default export
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        if (window.scrollY > 300) {
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
        <div className={`${inter.className} bg-[#100F1A] text-gray-100 antialiased`}>
            {/* Google Fonts Import - Removed as using next/font */}

            {/* Define custom keyframes for animations */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }

                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(0.5deg); } /* Reduced rotation */
                    50% { transform: rotate(-0.5deg); } /* Reduced rotation */
                    75% { transform: rotate(0.2deg); } /* Reduced rotation */
                }
                .animate-wave {
                    animation: wave 4s ease-in-out infinite; /* Increased duration for slower shake */
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-5deg); }
                    50% { transform: rotate(5deg); }
                    75% { transform: rotate(-2deg); }
                }
                .group-hover\\:animate-wiggle:hover {
                    animation: wiggle 0.5s ease-in-out;
                }

                @keyframes glitch {
                    0% {
                        text-shadow: 0.05em 0 0 rgba(0, 240, 255, 0.75), -0.02em -0.04em 0 rgba(255, 0, 255, 0.75), 0.025em 0.05em 0 rgba(0, 255, 255, 0.75);
                    }
                    14% {
                        text-shadow: 0.05em 0 0 rgba(0, 240, 255, 0.75), -0.02em -0.04em 0 rgba(255, 0, 255, 0.75), 0.025em 0.05em 0 rgba(0, 255, 255, 0.75);
                    }
                    15% {
                        text-shadow: -0.05em -0.025em 0 rgba(0, 240, 255, 0.75), 0.02em 0.03em 0 rgba(255, 0, 255, 0.75), -0.04em -0.02em 0 rgba(0, 255, 255, 0.75);
                    }
                    49% {
                        text-shadow: -0.05em -0.025em 0 rgba(0, 240, 255, 0.75), 0.02em 0.03em 0 rgba(255, 0, 255, 0.75), -0.04em -0.02em 0 rgba(0, 255, 255, 0.75);
                    }
                    50% {
                        text-shadow: 0.025em 0.035em 0 rgba(0, 240, 255, 0.75), 0.03em 0 0 rgba(255, 0, 255, 0.75), 0 -0.04em 0 rgba(0, 255, 255, 0.75);
                    }
                    99% {
                        text-shadow: 0.025em 0.035em 0 rgba(0, 240, 255, 0.75), 0.03em 0 0 rgba(255, 0, 255, 0.75), 0 -0.04em 0 rgba(0, 255, 255, 0.75);
                    }
                    100% {
                        text-shadow: 0 0 10px rgba(0,240,255,0.4), 0 0 20px rgba(0,240,255,0.2); /* Return to normal neon glow */
                    }
                }
                .animate-glitch {
                    animation: glitch 2s linear infinite alternate;
                }

                @keyframes blink-caret {
                    from, to { border-right-color: transparent }
                    50% { border-right-color: #00F0FF; }
                }

                .blinking-cursor {
                    border-right: 2px solid #00F0FF;
                    animation: blink-caret 0.75s step-end infinite;
                }

                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.1; }
                    50% { transform: scale(1.05); opacity: 0.2; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2s infinite ease-in-out;
                }

                @keyframes glitch-icon {
                    0%, 100% { transform: translate(0, 0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                }
                .group-hover\\:animate-glitch-icon:hover {
                    animation: glitch-icon 0.3s cubic-bezier(.25,.46,.45,.94) infinite;
                }

                @keyframes pulse-light {
                    0%, 100% { box-shadow: 0 0 10px rgba(0,240,255,0.4), 0 0 20px rgba(0,240,255,0.2); }
                    50% { box-shadow: 0 0 20px rgba(0,240,255,0.6), 0 0 30px rgba(0,240,255,0.4); }
                }
                .group-hover\\:animate-pulse-light:hover {
                    animation: pulse-light 1.5s infinite alternate;
                }

                @keyframes fadeInImages {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-images {
                    animation: fadeInImages 0.5s ease-out forwards;
                }

            `}</style>

            {/* Navigation Bar: Sticky to stay at the top while scrolling */}
            <nav className="sticky top-0 z-50 bg-[#100F1A] shadow-lg shadow-[#00F0FF]/20 py-4 px-6 rounded-b-lg border-b border-[#3A3A4A]">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <span className={`${orbitron.className} text-2xl font-bold text-[#00F0FF]`}>Joshua Ngugi</span>
                    <div className="space-x-6 hidden md:flex">
                        <a href="#home" className={`${inter.className} text-gray-300 hover:text-[#00F0FF] transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF00FF] after:transition-all after:duration-300 hover:after:w-full ${activeSection === 'home' ? 'text-[#00F0FF] font-bold after:w-full' : ''}`}>Home</a>
                        <a href="#work-experience" className={`${inter.className} text-gray-300 hover:text-[#00F0FF] transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF00FF] after:transition-all after:duration-300 hover:after:w-full ${activeSection === 'work-experience' ? 'text-[#00F0FF] font-bold after:w-full' : ''}`}>Work Experience</a>
                        <a href="#projects" className={`${inter.className} text-gray-300 hover:text-[#00F0FF] transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF00FF] after:transition-all after:duration-300 hover:after:w-full ${activeSection === 'projects' ? 'text-[#00F0FF] font-bold after:w-full' : ''}`}>Projects</a>
                        <a href="#skills" className={`${inter.className} text-gray-300 hover:text-[#00F0FF] transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF00FF] after:transition-all after:duration-300 hover:after:w-full ${activeSection === 'skills' ? 'text-[#00F0FF] font-bold after:w-full' : ''}`}>Skills</a>
                        <a href="#contact" className={`${inter.className} text-gray-300 hover:text-[#00F0FF] transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF00FF] after:transition-all after:duration-300 hover:after:w-full ${activeSection === 'contact' ? 'text-[#00F0FF] font-bold after:w-full' : ''}`}>Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-[#00F0FF] focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-[#100F1A] z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-gray-300 hover:text-[#00F0FF] focus:outline-none"
                        aria-label="Close mobile menu"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className={`${inter.className} text-3xl font-bold text-[#00F0FF] hover:text-[#FF00FF] transition-colors duration-200`}>Home</a>
                    <a href="#work-experience" onClick={() => setIsMobileMenuOpen(false)} className={`${inter.className} text-3xl font-bold text-[#00F0FF] hover:text-[#FF00FF] transition-colors duration-200`}>Work Experience</a>
                    <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className={`${inter.className} text-3xl font-bold text-[#00F0FF] hover:text-[#FF00FF] transition-colors duration-200`}>Projects</a>
                    <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className={`${inter.className} text-3xl font-bold text-[#00F0FF] hover:text-[#FF00FF] transition-colors duration-200`}>Skills</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={`${inter.className} text-3xl font-bold text-[#00F0FF] hover:text-[#FF00FF] transition-colors duration-200`}>Contact</a>
                </div>
            )}

            <Header />

            {/* Work Experience Section */}
            <SectionWrapper id="work-experience" className="py-24" onIntersect={handleSectionIntersect} skew={-2} bgColor="bg-zinc-900">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className={`${orbitron.className} text-4xl font-bold text-[#00F0FF] text-center mb-16 relative`}>
                        <span className="relative z-10">Work Experience</span>
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-[#FF00FF] rounded-full animate-pulse-light"></span>
                    </h2>
                    <div className="space-y-20"> {/* Stacked layout with more vertical space */}
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
            <SectionWrapper id="projects" className="py-24" onIntersect={handleSectionIntersect} skew={2} bgColor="bg-zinc-900">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className={`${orbitron.className} text-4xl font-bold text-[#00F0FF] text-center mb-16 relative`}>
                        <span className="relative z-10">Personal Projects</span>
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-[#00FFFF] rounded-full animate-pulse-light"></span>
                    </h2>
                    <div className="space-y-20"> {/* Stacked layout with more vertical space */}
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

            {/* Skills Section */}
            <SectionWrapper id="skills" className="py-24" onIntersect={handleSectionIntersect} skew={-2} bgColor="bg-zinc-900">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className={`${orbitron.className} text-4xl font-bold text-[#00F0FF] text-center mb-16 relative`}>
                        <span className="relative z-10">Skills Matrix</span>
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-[#FF00FF] rounded-full animate-pulse-light"></span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Adjusted grid for better spacing */}
                        <SkillItem icon={Code} name="Java / Spring Boot" />
                        <SkillItem icon={Smartphone} name="Flutter / Dart" />
                        <SkillItem icon={Terminal} name="Node.js / Express.js" />
                        <SkillItem icon={Database} name="PostgreSQL / MongoDB" />
                        <SkillItem icon={Cloud} name="AWS / Docker" />
                        <SkillItem icon={GitBranch} name="Git / GitHub" />
                        <SkillItem icon={Type} name="TypeScript / JavaScript" />
                        <SkillItem icon={LayoutDashboard} name="React / Next.js" />
                        <SkillItem icon={Server} name="Microservices" />
                        <SkillItem icon={Package} name="CI/CD" />
                        <SkillItem icon={Atom} name="Agile Methodologies" />
                        {/* Add more relevant skills */}
                    </div>
                </div>
            </SectionWrapper>

            {/* Contact Section */}
            <SectionWrapper id="contact" className="py-24" onIntersect={handleSectionIntersect} skew={2} bgColor="bg-zinc-900">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className={`${orbitron.className} text-4xl font-bold text-[#00F0FF] mb-12 relative`}>
                        <span className="relative z-10">Contact</span>
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-[#00FFFF] rounded-full animate-pulse-light"></span>
                    </h2>
                    <p className={`${inter.className} text-xl text-gray-300 mb-8 leading-relaxed`}>
                        Ready to connect? Send a data packet or link up on the networks below.
                    </p>
                    <div className="flex justify-center space-x-8 mb-12">
                        <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-zinc-800 border border-[#3A3A4A] hover:border-[#00F0FF] text-gray-300 hover:text-[#00F0FF] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#00F0FF]/30" aria-label="GitHub Profile">
                            <Github className="w-10 h-10" />
                        </a>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="p-4 rounded-full bg-zinc-800 border border-[#3A3A4A] hover:border-[#00F0FF] text-gray-300 hover:text-[#00F0FF] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#00F0FF]/30" aria-label="Email Me">
                            <Mail className="w-10 h-10" />
                        </a>
                        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-zinc-800 border border-[#3A3A4A] hover:border-[#00F0FF] text-gray-300 hover:text-[#00F0FF] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#00F0FF]/30" aria-label="LinkedIn Profile">
                            <Linkedin className="w-10 h-10" />
                        </a>
                    </div>
                    {/* Optional: Add a simple contact form here with cyberpunk styling */}
                </div>
            </SectionWrapper>

            <Footer />

            {/* Scroll to Top Button */}
            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 bg-[#00F0FF] text-[#100F1A] rounded-full shadow-lg hover:shadow-xl hover:bg-[#00FFFF] transition-all duration-300 z-50 animate-pulse-light"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}
