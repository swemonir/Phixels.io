import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCalendar, FaUser, FaClock, FaArrowRight } from "react-icons/fa";
import { blogPosts } from "@/data/blogData";

interface PageProps {
  params: Promise<{ id: string }>;
}

const BlogPostPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // Related posts logic: same category, excluding current
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20">
       
      {/* Scroll Progress Bar (Simplified) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div className="h-full bg-[#ED1F24] w-0" id="reading-progress" />
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 lg:px-20 xl:px-56 pb-12 lg:pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#ED1F24] mb-8 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>
          
          <div className="flex gap-3 mb-6">
             <span className="bg-[#ED1F24] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
               {post.category}
             </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-8 max-w-5xl leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm sm:text-base border-t border-gray-700/50 pt-6 max-w-2xl">
            <div className="flex items-center gap-3">
               {post.authorImage ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gray-600">
                     <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                  </div>
               ) : (
                  <FaUser className="text-[#ED1F24]" /> 
               )}
               <span className="font-medium text-white">{post.author}</span>
            </div>
            <span className="w-1 h-1 bg-gray-500 rounded-full"/>
            <span className="flex items-center gap-2">
              <FaCalendar className="text-[#ED1F24]" /> {post.date}
            </span>
             {post.readTime && (
                <>
                <span className="w-1 h-1 bg-gray-500 rounded-full"/>
                <span className="flex items-center gap-2">
                  <FaClock className="text-[#ED1F24]" /> {post.readTime}
                </span>
                </>
             )}
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="px-4 sm:px-8 lg:px-20 xl:px-56 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Article */}
        <div className="lg:col-span-8">
          <div className="prose prose-invert prose-lg prose-red max-w-none">
             <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light mb-10 border-l-4 border-[#ED1F24] pl-6">
                {post.summary}
             </p>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-20 pt-10 border-t border-gray-800 flex justify-between items-center">
             <span className="text-gray-500 text-sm">Thanks for reading!</span>
             <Link href="/blog" className="text-[#ED1F24] hover:underline font-medium">Browse more articles</Link>
          </div>
        </div>

        {/* Sidebar (Optional - could be Table of Contents or Ad space, leaving empty for clean look or putting related here on mobile) */}
        <div className="hidden lg:block lg:col-span-4">
           <div className="sticky top-32 p-6 rounded-2xl border border-gray-800 bg-[#1A1829]/50">
              <h3 className="text-lg font-bold mb-4 text-white">Share this article</h3>
              <div className="flex gap-2">
                 {/* Mock Social Buttons */}
                 <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ED1F24] transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                 </button>
                 <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0A66C2] transition-colors">
                     <span className="sr-only">LinkedIn</span>
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                 </button>
              </div>
           </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
          <div className="mt-32 px-4 sm:px-8 lg:px-20 xl:px-56 border-t border-gray-900 pt-20">
              <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((related) => (
                      <Link href={`/blog/${related.id}`} key={related.id} className="group block">
                          <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                              <Image 
                                src={related.image} 
                                alt={related.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                              />
                               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                          </div>
                          <span className="text-[#ED1F24] text-xs font-bold uppercase mb-2 block">{related.category}</span>
                          <h3 className="text-lg font-bold leading-tight group-hover:text-[#ED1F24] transition-colors">{related.title}</h3>
                      </Link>
                  ))}
              </div>
          </div>
      )}
    </div>
  );
};

export default BlogPostPage;
