"use client"

import /*React,*/ { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, CodeIcon, PaletteIcon, BookOpenIcon } from 'lucide-react';
import { Container } from '@/components/ui/container';

// Define valid tab types
type TabType = 'story' | 'interests';

export default function ModernAbout() {
  // Single state declaration with proper typing
  const [activeTab, setActiveTab] = useState<TabType>('story');

  // Define tabContent with proper typing
  const tabContent: Record<TabType, JSX.Element> = {
    story: (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <p>
          Hello! I'm Samuel D. Jr, a passionate Full Stack Developer with a keen interest in building digital solutions that make a difference. 
          With 3 years of experience in web development, I've worked on diverse projects that have sharpened my skills in both frontend and backend technologies.
        </p>
        <p>
          My journey in tech is driven by a curiosity to solve complex problems and create innovative digital experiences.
        </p>
      </motion.div>
    ),
    interests: (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center space-x-4 bg-secondary/10 p-4 rounded-lg">
          <CodeIcon className="w-10 h-10 text-primary" />
          <div>
            <h3 className="font-semibold">Open Source</h3>
            <p className="text-sm text-muted-foreground">
              Active contributor to community-driven projects
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-secondary/10 p-4 rounded-lg">
          <PaletteIcon className="w-10 h-10 text-primary" />
          <div>
            <h3 className="font-semibold">Creative Pursuits</h3>
            <p className="text-sm text-muted-foreground">
              Painting and digital art as a form of creative expression
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-secondary/10 p-4 rounded-lg">
          <BookOpenIcon className="w-10 h-10 text-primary" />
          <div>
            <h3 className="font-semibold">Continuous Learning</h3>
            <p className="text-sm text-muted-foreground">
              Regular attendance at tech conferences and workshops
            </p>
          </div>
        </div>
      </motion.div>
    )
  };

  return (
    <section id="about" className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Image Section */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="relative aspect-square overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="/placeholder.svg"
              alt="Profile picture"
              className="w-full h-full object-cover filter hover:grayscale-0 grayscale transition-all duration-300"
            />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              <p className="text-muted-foreground">Full Stack Developer based in Ghana</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-4 border-b mb-4">
              {(['story', 'interests'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    pb-2 capitalize transition-colors
                    ${activeTab === tab 
                      ? 'border-b-2 border-primary text-primary' 
                      : 'text-muted-foreground hover:text-foreground'}
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ 
                  duration: 0.2,
                  ease: "easeInOut"
                }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>

            <Card className="border-muted/50">
              <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    3 years of professional web development
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    HND in Information and Communication Technology
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}