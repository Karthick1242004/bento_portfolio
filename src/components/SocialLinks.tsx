import { Github, Linkedin } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function SocialLinks() {
  const { data, loading, error } = usePortfolioData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="flex space-x-4">
      <a href={data.socialLinks.github} className="text-white hover:text-purple-400 transition">
        <Github size={24} />
      </a>
      <a href={data.socialLinks.linkedin} className="text-white hover:text-purple-400 transition">
        <Linkedin size={24} />
      </a>
      <a href={data.socialLinks.leetcode} className="text-white hover:text-purple-400 transition">
        <SiLeetcode size={24} />
      </a>
    </div>
  );
}