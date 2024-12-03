import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Shield, Users, Sparkles, Share2, Settings } from 'lucide-react';
import { Button } from '../components/Button';
import { Scene } from '../components/3d/Scene';
import { Footer } from '../components/Footer';

export function Home() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
      title: "AI-Powered Code Generation",
      description: "Generate high-quality code from natural language descriptions"
    },
    {
      icon: <Share2 className="h-6 w-6 text-purple-600" />,
      title: "Real-time Collaboration",
      description: "Work together with your team seamlessly"
    },
    {
      icon: <Settings className="h-6 w-6 text-indigo-600" />,
      title: "Customizable Editor",
      description: "Personalize your coding environment"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section with 3D Background */}
        <section className="relative min-h-screen overflow-hidden">
          <Scene />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                Code Smarter, Not Harder
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Transform your ideas into production-ready code with our AI-powered platform.
                Write better code, faster than ever before.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg">
                  Try it Now
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid with Auto-scrolling */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need to Code Better
              </h2>
              <p className="text-xl text-gray-600">
                Powerful features to supercharge your development workflow
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="flex space-x-8 animate-scroll">
                {[...features, ...features].map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections... */}
      </div>
      <Footer />
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 min-w-[300px]"
    >
      <div className="rounded-lg bg-gray-50 p-3 inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}