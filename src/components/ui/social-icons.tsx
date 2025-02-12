"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Sloane-J",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-dorkey-9a88901bb/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:samueldorkeyjr@gmail.com",
    icon: Mail,
  },
];

export function SocialIcons() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, i) => {
        const Icon = link.icon;
        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full">
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}
