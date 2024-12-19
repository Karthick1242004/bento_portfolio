import { Box, Code, Database } from 'lucide-react'; // Import only the needed icons

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  const renderIcon = (title: string) => {
    switch (title) {
      case "Fullstack Developer":
        return <Box className="w-8 h-8 text-purple-400 mb-4" />;
      case "Programmer":
        return <Code className="w-8 h-8 text-purple-400 mb-4" />;
      case "Data Enthusiast":
        return <Database className="w-8 h-8 text-purple-400 mb-4" />;
      default:
        return <Box className="w-8 h-8 text-purple-400 mb-4" />; // Default icon
    }
  };

  return (
    <div className="bg-neutral-900 rounded-3xl p-6 h-full transition-transform hover:scale-[1.02]">
      {renderIcon(title)} {/* Render the icon based on the title */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}
