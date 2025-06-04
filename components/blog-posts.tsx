import Image from "next/image"
import Link from "next/link"
import { Eye, Calendar } from "lucide-react"

// Blog post interface
interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  views: number
  publishDate: string
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "no-more-hassle-of-cooking",
    title: "No more hassle of cooking, now with DhakaBite, healthy, fresh food every day!",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Morbi quam facilisi aliquam metus.",
    image: "/blog-food-photography.jpg",
    views: 50,
    publishDate: "May 15, 2023",
  },
  {
    id: 2,
    slug: "cheesy-pasta-with-crispy-bacon-1",
    title: "Cheesy pasta with crispy bacon and mozzarella cheese",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Morbi quam facilisi aliquam metus.",
    image: "/blog-laptop-food.jpg",
    views: 50,
    publishDate: "May 10, 2023",
  },
  {
    id: 3,
    slug: "cheesy-pasta-with-crispy-bacon-2",
    title: "Cheesy pasta with crispy bacon and mozzarella cheese",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Morbi quam facilisi aliquam metus.",
    image: "/blog-woman-coffee.jpg",
    views: 50,
    publishDate: "May 5, 2023",
  },
  {
    id: 4,
    slug: "cheesy-pasta-with-crispy-bacon-3",
    title: "Cheesy pasta with crispy bacon and mozzarella cheese",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Morbi quam facilisi aliquam metus.",
    image: "/blog-stuffed-tomatoes.jpg",
    views: 50,
    publishDate: "April 28, 2023",
  },
  {
    id: 5,
    slug: "cheesy-pasta-with-crispy-bacon-4",
    title: "Cheesy pasta with crispy bacon and mozzarella cheese",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Morbi quam facilisi aliquam metus.",
    image: "/blog-woman-cooking.jpg",
    views: 50,
    publishDate: "April 20, 2023",
  },
  {
    id: 6,
    slug: "cheesy-pasta-with-crispy-bacon-5",
    title: "Cheesy pasta with crispy bacon and mozzarella cheese",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Morbi quam facilisi aliquam metus.",
    image: "/blog-woman-tablet.jpg",
    views: 50,
    publishDate: "April 15, 2023",
  },
]

export default function BlogPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: BlogPost
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <Link href={`/blogs/${post.slug}`} className="block relative h-56 w-full overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-start gap-4 mb-3 text-gray-500 text-sm">
          <div className="flex items-center">
            <Eye size={16} className="mr-1" />
            <span>{post.views}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{post.publishDate}</span>
          </div>
        </div>

        <Link href={`/blogs/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h2>
        </Link>

        <p className="text-gray-600 mb-3">{post.excerpt}</p>

        <Link href={`/blogs/${post.slug}`} className="text-primary font-medium hover:underline">
          Read more
        </Link>
      </div>
    </article>
  )
}
