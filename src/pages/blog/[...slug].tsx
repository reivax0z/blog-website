import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

export default function BlogPost(props) {
  const markdownBody = props.content
  const info = props.info

  return (
    <div className="container">
        <Header />

        <Breadcrumb 
            links={[
                { href: '/', name: 'Home' }, 
                { href: '/blog', name: 'Blog' },
                { name: info.title }
            ]}
        ></Breadcrumb>

      <article>
        <div className="jumbotron">
                <img src={info.cover} className="" alt="..." />
                <style jsx>{`
                    .jumbotron img {
                        width: 100%;
                    }
                `}</style>
                <h1 className="display-4">{info.title}</h1>
                <h3>{info.date}</h3>
                <p className="lead">{info.summary}</p>
                <p><code>{info.tags}</code></p>
        </div>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
      
      <Footer />
    </div>
  )
}

BlogPost.getInitialProps = async function(context) {
    // context contains the query param
    const { slug } = context.query
    // grab the file in the posts dir based on the slug
    const content = await import(`../../posts/${slug}.md`);
    // also grab the config file so we can pass down siteTitle
    const config = await import(`../../data/blog-posts.json`);
    const article = config.default.find(a => a.url.localeCompare(slug) === 0);
    //gray-matter parses the yaml frontmatter from the md body
    const data = matter(content.default)
    return {
      info: {
        title: article.title,
        summary: article.summary,
        cover: article.cover,
        date: article.date,
        tags: article.tags
      },
      ...data,
    }
  }