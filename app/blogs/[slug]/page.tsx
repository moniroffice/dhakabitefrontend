import NotificationBar from "@/components/notification-bar"
import Navbar from "@/components/navbar"
import BlogPostHeader from "@/components/blog-post-header"
import BlogPostContent from "@/components/blog-post-content"
import RelatedPosts from "@/components/related-posts"
import Footer from "@/components/footer"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // For demonstration, we're returning the same blog post for any slug
  return {
    title: "No more hassle of cooking, now with DhakaBite, healthy, fresh food every day!",
    subtitle: "DhakaBite: Safe Food Solution for Busy Lives",
    image: "/blog-food-photography.jpg",
    publishDate: "May 15, 2023",
    views: 50,
    content: `
      <p>Modern life is getting busier day by day, and due to lack of time, many people are unable to prepare healthy and delicious meals. As a solution to this problem, DhakaBite is working as a reliable online food delivery service that delivers healthy, fresh and hot meals. DhakaBite provides three types of services—Basic, Standard and Premium—from which customers can choose the appropriate option according to their needs and budget.</p>
      
      <h2>DhakaBite's Services and Price List</h2>
      <p>DhakaBite offers three types of food subscriptions for customers, the prices of which are determined based on a balanced diet and quality ingredients.</p>
      
      <h3>Basic Package (65/-)</h3>
      <p>This package is mainly intended for simple and nutritious meals.</p>
      <p>It is budget-friendly and suitable for busy students, working people, and bachelors.</p>
      <p>It usually contains rice, pulses, vegetables, eggs or simple fish and meat.</p>
      
      <h3>Standard Package (80/-)</h3>
      <p>The standard package contains comparatively better quality food.</p>
      <p>It includes meat, vegetables, bhaji and sometimes special curries or different types of food to ensure a balanced diet.</p>
      <p>It is an ideal choice for office-going and busy professionals.</p>
      
      <h3>Premium Package (120/-)</h3>
      <p>This is specially designed for high-quality food.</p>
      <p>The food includes high-quality meat, special curries, salads and other delicious ingredients.</p>
      <p>It is suitable for those who do not want to compromise on health and taste.</p>
      
      <h2>Why does DhakaBite provide the best food service?</h2>
      
      <h3>1. Healthy and fresh food</h3>
      <p>DhakaBite always prepares food using fresh and healthy ingredients. Every meal is cooked in a clean environment and quality ingredients are guaranteed.</p>
      
      <h3>2. Saves time in busy lives</h3>
      <p>Many of us are so busy with office, classes or other work that it is not possible to find time to cook. DhakaBite solves this problem and delivers food to your doorstep.</p>
      
      <h3>3. Easy convenience of online ordering</h3>
      <p>DhakaBite's online ordering system is very easy and fast. You can order using the website or mobile app with just a few clicks.</p>
      
      <h3>4. Different menus every day</h3>
      <p>No one likes to eat the same food every day. That's why DhakaBite creates different menus every day, so that customers don't feel bored.</p>
      
      <h3>5. Food safety assurance</h3>
      <p>Although there are many online food delivery services now, not all of them can ensure food safety. DhakaBite prepares and delivers food in a completely safe environment with an eye on health.</p>
      
      <h2>DhakaBite's delivery management</h2>
      <p>DhakaBite's efficient delivery team is committed to delivering food on time.</p>
      <p>Fast and reliable delivery is provided to different areas of Dhaka.</p>
      <p>Special packaging is used to keep the food fresh.</p>
      <p>Each delivery is monitored through a tracking system.</p>
      
      <h2>Who can become DhakaBite's customers?</h2>
      
      <h3>1. Students</h3>
      <p>DhakaBite is a great solution for university or college students who live in halls or messes. They can enjoy healthy and wholesome food without the hassle of cooking.</p>
      
      <h3>2. Office-goers and workers</h3>
      <p>It is often difficult to eat healthy food regularly in the midst of the busy office. DhakaBite guarantees nutritious food at an affordable price for them.</p>
      
      <h3>3. Bachelors and single people</h3>
      <p>Those who live alone and cannot cook every day can worry about food with a DhakaBite subscription.</p>
      
      <h3>4. Elderly and sick people</h3>
      <p>Many elderly people or sick patients who cannot cook can easily get healthy food through DhakaBite.</p>
      
      <h2>How to order from DhakaBite?</h2>
      <p>Ordering from DhakaBite is very easy—</p>
      <p>Visit the website.</p>
      <p>Choose a preferred food package.</p>
      <p>Confirm the order and make payment.</p>
      <p>Get food delivered on time.</p>
      
      <h2>DhakaBite's future plans</h2>
      <p>DhakaBite is working to ensure better quality services in the future. Some of the upcoming plans are—</p>
      <p>Expanding services to new areas</p>
      <p>Customized menus for different dietary needs</p>
      <p>Reward points and discount benefits</p>
      <p>Food tracking and advanced delivery management</p>
      
      <p>DhakaBite is not just about delivering food, it is part of a healthy lifestyle. Eating healthy is very important in our busy lives, and DhakaBite is working tirelessly to fulfill that need.</p>
      
      <p>For those looking for a reliable service for healthy and delicious food, DhakaBite can be the best solution</p>
    `,
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  return {
    title: `${post.title} | Dhaka Bite Blog`,
    description: post.subtitle,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  return (
    <main>
      <NotificationBar />
      <Navbar />
      <BlogPostHeader
        title={post.title}
        subtitle={post.subtitle}
        image={post.image}
        publishDate={post.publishDate}
        views={post.views}
      />
      <BlogPostContent content={post.content} />
      <RelatedPosts currentSlug={params.slug} />
      <Footer />
    </main>
  )
}
