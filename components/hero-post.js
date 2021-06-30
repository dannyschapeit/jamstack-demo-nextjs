import DateFormatter from '../components/date-formatter'
import Author from '../components/author'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="">
        <div>
          <h3 className="">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="">
            <DateFormatter dateString={date} />
            <Author name={author} />
          </div>
        </div>
        <div>
          <p className="">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
