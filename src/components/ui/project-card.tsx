"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { hoverScale } from "@/utils/motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({ title, description, image, tags, github, demo }: ProjectCardProps) {
  return (
    <Card as={motion.div} variants={hoverScale} whileHover="hover" className="overflow-hidden">
      <div className="relative aspect-video">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
