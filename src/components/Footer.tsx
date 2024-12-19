import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub, SiLeetcode, SiLinkedin } from 'react-icons/si';
import { usePortfolioData } from '../hooks/usePortfolioData';

interface ProjectLinkProps {
  name: string;
  href: string;
}

function ProjectLink({ name, href }: ProjectLinkProps) {
  return (
    <a 
      href={href}
      className="flex items-center justify-between p-6 border-b border-neutral-800 hover:bg-neutral-900 transition-colors"
    >
      <span className="text-lg">{name}</span>
      <ArrowUpRight className="text-neutral-400" />
    </a>
  );
}

export default function Footer() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return <div className="text-center text-neutral-400">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!data) return null;

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-neutral-900 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">{data.footer.contact.title}</h2>
          <p className="text-neutral-400 mb-6">{data.footer.contact.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${data.footer.contact.email}`} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition">
              {data.footer.contact.email}
            </a>
            <div className="flex gap-4">
              <a href={data.socialLinks.github} className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
                <SiGithub size={24} />
              </a>
              <a href={data.socialLinks.linkedin} className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
                <SiLinkedin size={24} />
              </a>
              <a href={data.socialLinks.leetcode} className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
                <SiLeetcode size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-3xl overflow-hidden">
          <h2 className="p-6 text-2xl font-bold border-b border-neutral-800">{data.footer.academic.title}</h2>
          {data.footer.academic.qualifications.map((qual: any, index: number) => (
            <ProjectLink key={index} name={qual.name} href={qual.href} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center text-neutral-400">
        <div className="text-2xl font-bold text-white">{data.siteTitle}</div>
        <div>© All rights reserved</div>
      </div>
    </footer>
  );
}
