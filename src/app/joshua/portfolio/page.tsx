'use client'; // This directive marks the component as a Client Component

import React from 'react';
import { Code, Smartphone, Terminal, Rocket, Github, Mail, Linkedin, Atom, Type, Server, Database, Cloud, Package, GitBranch, LayoutDashboard, Component, FileDown } from 'lucide-react';

// Header Component: Displays your name, title, and a brief description.
const Header = () => (
    <section id="home" className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-white text-center rounded-b-3xl shadow-lg">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center"> {/* Added flexbox for side-by-side layout */}
            {/* Image on the left for larger screens, hidden on small screens */}
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0 md:mr-8">
                <img
                    src="/images/prog.svg" // Using your uploaded image
                    alt="Programming illustration"
                    className="w-48 sm:w-64 md:w-full h-auto object-contain" // Responsive sizing and object-contain
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/e2e8f0/64748b?text=Illustration`; }}
                />
            </div>
            {/* Text content */}
            <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}> {/* Subtle text shadow for emphasis */}
                    Joshua Ngugi
                </h1>
                <p className="mt-4 text-2xl text-emerald-700 font-semibold">
                    Software Engineer | Flutter & Full-Stack Developer
                </p>
                <p className="mt-8 text-lg text-gray-600"> {/* Removed max-w-2xl mx-auto from here to flow better with image */}
                    With over six years dedicated to crafting robust software solutions, I specialize in full-stack development, data engineering, and leading technical teams to deliver high-performance applications. My expertise spans complex backend systems, intuitive user interfaces, and large-scale data management, consistently driving efficiency and innovation in fast-paced environments.
                </p>
            </div>
        </div>
    </section>
);

// DetailCard Component: A reusable card for displaying project or experience details, including images.
// Now accepts 'imageCategories' for organized screenshots.
const DetailCard = ({ title, description, link, linkText, icon: IconComponent, imageCategories, role }) => (
    <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-emerald-700 mb-3 flex items-center">
            {IconComponent && <IconComponent className="w-6 h-6 mr-3 text-emerald-600" />}
            {title}
        </h3>
        {role && <p className="text-lg font-semibold text-gray-800 mb-3">{role}</p>}
        <p className="mt-2 text-gray-700 text-lg leading-relaxed flex-grow">
            {description}
        </p>
        {imageCategories && imageCategories.length > 0 && (
            <div className="mt-6 space-y-6"> {/* Space between image categories */}
                {imageCategories.map((category, catIndex) => (
                    <div key={catIndex}>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">{category.title}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {category.urls.map((url, imgIndex) => (
                                <img
                                    key={`${catIndex}-${imgIndex}`}
                                    src={url}
                                    alt={`${category.title} Screenshot ${imgIndex + 1}`}
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                    // Placeholder image fallbacks for better robustness
                                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x225/e2e8f0/64748b?text=Image+Load+Error`; }}
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

// SkillItem Component: A reusable item for displaying individual skills with an icon.
const SkillItem = ({ icon: Icon, name }) => (
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
            <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} Joshua Ngugi. All rights reserved.</p>
            <div className="flex space-x-6">
                {/* Social media links */}
                <a href="https://github.com/JoshuaNgugi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub Profile">
                    <Github className="w-6 h-6" />
                </a>
                <a href="mailto:joshuamwaurangugi@gmail.com" className="hover:text-white transition-colors duration-200" aria-label="Email Me">
                    <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/joshua-ngugi/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn Profile">
                    <Linkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
    </footer>
);

// Main PortfolioPage Component
export default function PortfolioPage() {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            {/* Navigation Bar: Sticky to stay at the top while scrolling */}
            <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-700">Joshua Ngugi</span>
                    <div className="space-x-6 hidden md:flex"> {/* Hidden on small screens, shown on medium and above */}
                        <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Home</a>
                        <a href="#work-experience" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Work Experience</a>
                        <a href="#projects" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Projects</a>
                        <a href="#skills" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Skills</a>
                        <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Contact</a>
                    </div>
                    {/* Mobile menu button could be added here for smaller screens */}
                </div>
            </nav>

            <Header />

            {/* Work Experience Section */}
            <section id="work-experience" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
                        Work Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Allied Commerce Experience */}
                        <DetailCard
                            title="Allied Commerce Ltd"
                            role="Software Team Lead | Software Engineer"
                            description="I led the end-to-end development and scaling of the Krossroads POS application, a critical business solution that achieved over 10,000 downloads across iOS and Android. My work involved significant backend engineering with Java/Spring Boot, optimizing PostgreSQL databases, and implementing sophisticated real-time data synchronization pipelines using Debezium for millions of records. I champion Test-Driven Development (TDD), achieving 98% test coverage and leading CI/CD initiatives that slashed production bugs by 20%. As a team lead, I mentored junior developers, fostering collaboration and ensuring high code quality."
                            link="https://play.google.com/store/apps/details?id=com.krossroads"
                            linkText="View Krossroads on Play Store"
                            icon={Terminal}
                            imageCategories={[
                                {
                                    title: "Smartphone",
                                    urls: [
                                        "/images/krossroads-mobile-dashboard-1.jpg",
                                        "/images/krossroads-mobile-checkout.jpg",
                                    ],
                                },
                                {
                                    title: "Web Page",
                                    urls: [
                                        "/images/krossroads-web-dashboard.jpg",
                                        "/images/krossroads-web-checkout.jpg",
                                    ],
                                },
                            ]}
                        />
                        {/* Ellixar Experience */}
                        <DetailCard
                            title="Ellixar Technologies"
                            role="Android Developer Team Lead"
                            description="I spearheaded a team developing enterprise-grade native Android applications, notably the Adrian Visitor and Leave Management apps, which achieved 90%+ user adoption. I focused on optimizing UI performance and building robust backend integrations with RESTful APIs and SQLite, ensuring reliable data management and seamless user experiences."
                            icon={Smartphone}
                            imageCategories={[
                                {
                                    urls: [
                                        "/images/app-data.svg",
                                    ],
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Internal Admin Portal (Allied Commerce) */}
                        <DetailCard
                            title="Internal Admin Portal (Allied Commerce)"
                            description="I developed a secure internal admin portal with a React frontend and an Express.js (Node.js) backend, enabling critical monitoring of terminal metrics and user logs. This project was instrumental in optimizing data access workflows for operational teams."
                            icon={LayoutDashboard}
                        />
                        {/* Turuke App */}
                        <DetailCard
                            title="Turuke App – Founder & Developer"
                            description="As founder, I'm building a full-stack platform for rural poultry farmers, featuring a Flutter mobile app and a Node.js/PostgreSQL backend. This project highlights my expertise in ETL processes, data migration (Flyway), and designing scalable analytics for agricultural data, optimized for low-connectivity environments."
                            link="https://github.com/JoshuaNgugi/turuke-mobile"
                            linkText="View on Play Store"
                            icon={Smartphone}
                            imageCategories={[
                                {
                                    title: "Smartphone",
                                    urls: [
                                        "/images/turuke-dashboard.jpg",
                                        "/images/turuke-drawer.jpg",
                                    ],
                                },
                            ]}
                        />
                        {/* Moolah Check Project */}
                        <DetailCard
                            title="Moolah Check"
                            description="I created a full-stack expense tracking web app using React, Node.js, and MongoDB. This project showcases my skills in dynamic data visualization with Chart.js, building secure RESTful APIs with JWT authentication, and delivering intuitive user dashboards."
                            link="https://github.com/JoshuaNgugi/moolah-check"
                            linkText="View GitHub Repo"
                            icon={Code}
                        />
                        {/* Ingram Book Inventory Migration */}
                        <DetailCard
                            title="Ingram Book Inventory Migration"
                            description="I successfully executed a critical data migration, transferring an 8GB legacy Ingram Book inventory file into the database. This achievement enabled seamless access to large-scale product data, supporting real-time inventory workflows and highlighting my capability in handling significant data volumes."
                            icon={FileDown}
                        />
                    </div>
                </div>
            </section>

            {/* Skills Section: Highlights core technical skills */}
            <section id="skills" className="py-20 bg-emerald-50 text-center rounded-xl mx-auto max-w-7xl px-6 my-16 shadow-inner">
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
            </section>

            {/* Contact Section: Provides a call to action for connecting */}
            <section id="contact" className="py-20 bg-emerald-700 text-white text-center rounded-xl mx-auto max-w-5xl px-6 mb-16 shadow-2xl">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-extrabold">Let's Connect</h2>
                    <p className="mt-4 text-xl leading-relaxed">
                        I'm currently open to new opportunities and exciting collaborations. Feel free to reach out!
                    </p>
                    <div className="mt-8">
                        <a
                            href="mailto:joshuamwaurangugi@gmail.com"
                            className="inline-block bg-white text-emerald-800 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out transform"
                        >
                            Email Me
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
