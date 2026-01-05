"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Service } from "@/data/servicesData";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useServicePopup } from "@/components/services/ServicePopupWrapper";
import { usePopup } from "@/context/PopupContext";

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- Components ---

export const ServiceHero = ({ service }: { service: Service }) => {
  const { openPopup } = usePopup();
  return (
    <section className="relative py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <span className="text-red-500 font-bold uppercase tracking-wider mb-4 block">
            {service.category} Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {service.shortDescription}
          </p>
          <button
            onClick={openPopup}
            className="btn bg-red-600 hover:bg-red-700 text-white border-none px-8 py-3 rounded-full text-lg"
          >
            Get a Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export const ServiceDetails = ({ service }: { service: Service }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <FaCheckCircle className="text-red-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Team working"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const TechStack = ({ service }: { service: Service }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Technologies We Use
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust and scalable
            solutions.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {service.technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-gray-700 font-medium hover:shadow-md transition-shadow"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const ProcessWorkflow = ({ service }: { service: Service }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Process</h2>
          <p className="text-gray-600">
            A proven workflow to ensure project success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {service.process.map((step, index) => (
            <div key={index} className="group relative">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index !== service.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <FaArrowRight className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const RelatedProjects = ({ service }: { service: Service }) => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-400">
              See what we have built for our clients.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-red-500 hover:text-red-400 font-medium hidden sm:block"
          >
            View All Projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Benefits = ({ service }: { service: Service }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500"
            >
              <h3 className="font-bold text-lg text-gray-800">{benefit}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = ({ service }: { service: Service }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {service.faq.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-gray-50 border border-gray-100 rounded-lg"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-lg font-medium text-gray-800">
                {item.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TeamList = () => {
  // Placeholder team data with added fields
  const team = [
    {
      name: "Alex Johnson",
      role: "Senior Developer",
      experience: "8+ Years",
      skills: ["React", "Node.js", "AWS"],
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Sarah Williams",
      role: "UI/UX Designer",
      experience: "6+ Years",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      experience: "10+ Years",
      skills: ["Agile", "Scrum", "Risk Management"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Meet the Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-50 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
              <p className="text-red-500 font-medium mb-3">{member.role}</p>

              <div className="text-sm text-gray-600 mb-2">
                <strong>Exp:</strong> {member.experience}
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {member.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { blogPosts } from "@/data/blogData";

export const RelatedBlogPosts = () => {
  // Use first 3 posts
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="font-bold text-lg mt-2 text-gray-900 leading-tight mb-4">
                  {post.title}
                </h3>
                <div className="mt-auto">
                  <button className="text-gray-500 text-sm font-medium group-hover:text-red-600 transition-colors">
                    Read More &rarr;
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
