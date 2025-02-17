'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from "../ui/container";  // Adjust the relative path based on the file structure
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fadeUpVariant, staggerContainer, hoverScale } from '@/utils/motion'

// Create a motion version of Card
const MotionCard = motion.create(Card);

const blogPosts = [
  {
    title: 'Building Scalable React Applications',
    excerpt:
      'Learn the best practices and patterns for building large-scale React applications that are maintainable and performant.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: '/placeholder.svg',
    tags: ['React', 'Architecture', 'Performance'],
  },
  {
    title: 'Modern Backend Development with Node.js',
    excerpt:
      'Explore advanced Node.js concepts and learn how to build robust backend services with modern practices.',
    date: 'March 10, 2024',
    readTime: '10 min read',
    image: '/placeholder.svg',
    tags: ['Node.js', 'Backend', 'API'],
  },
  {
    title: 'Mastering TypeScript for Frontend Development',
    excerpt:
      'Deep dive into TypeScript features and how to leverage them effectively in your frontend projects.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    image: '/placeholder.svg',
    tags: ['TypeScript', 'Frontend', 'Development'],
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Latest Blog Posts
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Sharing my thoughts and experiences in web development
            </p>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeUpVariant}>
                <MotionCard
                  variants={hoverScale}
                  whileHover="hover"
                  className="overflow-hidden"
                >
                  <div className="relative aspect-[16/9]">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </MotionCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="flex justify-center"
          >
            <Button variant="outline" size="lg">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}