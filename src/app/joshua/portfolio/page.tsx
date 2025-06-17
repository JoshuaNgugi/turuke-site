'use client'; // This directive marks the component as a Client Component

import React from 'react';
import { Code, Smartphone, Terminal, Rocket, Github, Mail, Linkedin, Atom, Type, Server, Database, Cloud, Package } from 'lucide-react';

// Header Component: Displays your name, title, and a brief description.
const Header = () => (
    <section id="home" className="py-20 bg-gradient-to-br from-emerald-50 to-white text-center rounded-b-3xl shadow-lg">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Joshua Ngugi
            </h1>
            <p className="mt-4 text-2xl text-emerald-700 font-semibold">
                Software Engineer | Flutter & Full-Stack Developer
            </p>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                Building impactful tech for agriculture, finance, and scale with a focus on robust and user-centric solutions.
            </p>
        </div>
    </section>
);

// DetailCard Component: A reusable card for displaying project or experience details, including images.
const DetailCard = ({ title, description, link, linkText, icon: IconComponent, imageUrls, role }) => (
    <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-emerald-700 mb-3 flex items-center">
            {IconComponent && <IconComponent className="w-6 h-6 mr-3 text-emerald-600" />}
            {title}
        </h3>
        {role && <p className="text-lg font-semibold text-gray-800 mb-3">{role}</p>}
        <p className="mt-2 text-gray-700 text-lg leading-relaxed flex-grow">
            {description}
        </p>
        {imageUrls && imageUrls.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {imageUrls.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md object-cover"
                        // Placeholder image fallbacks for better robustness
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x225/e2e8f0/64748b?text=Image+Load+Error`; }}
                    />
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
                <a href="https://github.com/joshuangugi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub Profile">
                    <Github className="w-6 h-6" />
                </a>
                <a href="mailto:ngugijoshua93@gmail.com" className="hover:text-white transition-colors duration-200" aria-label="Email Me">
                    <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/joshua-ngugi-190666244/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn Profile">
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
                            title="Allied Commerce"
                            role="Software Engineer"
                            description="Developed and maintained the Krossroads app, a comprehensive business management solution. Led the development of robust backend APIs and scalable mobile features, focusing on performance and user experience."
                            link="https://play.google.com/store/apps/details?id=com.alliedcommerce.seller.pos&hl=en"
                            linkText="View Krossroads on Play Store"
                            icon={Terminal}
                            imageUrls={[
                                "/images/krossroads-web-dashboard.jpg",
                                "/images/krossroads-login.jpg",
                            ]}
                        />
                        {/* Ellixar Experience */}
                        <DetailCard
                            title="Ellixar"
                            role="Flutter & Full-Stack Developer"
                            description="Successfully migrated an Android POS system to Flutter under tight deadlines. Implemented timezone-sensitive reporting for US clients and integrated Stripe & CardConnect APIs. Mentored junior developers during the transition, ensuring smooth adoption of new technologies."
                            icon={Smartphone}
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
                        {/* Turuke Project */}
                        <DetailCard
                            title="Turuke"
                            description="A Flutter-based poultry farm management app with offline-first support, egg production analytics, and comprehensive health tracking. Designed for scalability and reliability, empowering farmers with real-time insights."
                            link="https://github.com/JoshuaNgugi/turuke-mobile"
                            linkText="View on Play Store"
                            icon={Smartphone}
                            imageUrls={[
                                "/images/turuke-dashboard.jpg",
                                "/images/turuke-drawer.jpg",
                            ]}
                        />
                        {/* Moolah Check Project */}
                        <DetailCard
                            title="Moolah Check"
                            description="A MERN (MongoDB, Express.js, React, Node.js) stack personal expense tracker featuring interactive Chart.js data visualizations and a mobile-first responsive design. Provides intuitive financial oversight for better budget management."
                            link="https://github.com/JoshuaNgugi/moolah-check"
                            linkText="View GitHub Repo"
                            icon={Code}
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
                        <SkillItem icon={Code} name="Java & Spring" />
                        <SkillItem icon={Rocket} name="PostgreSQL" />
                        <SkillItem icon={Database} name="MongoDB" />
                        <SkillItem icon={Type} name="TypeScript" />
                        <SkillItem icon={Cloud} name="AWS" />
                        <SkillItem icon={Package} name="Docker" />
                        <SkillItem icon={Github} name="Git/GitHub" />
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
