import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

export default function About(props) {
  const markdownBody = props.content
  const info = props.info

  return (
    <div>
        <Header current={props.pathname} />

        <Breadcrumb 
            links={[
                { href: '/', name: 'Home' }, 
                { name: 'About' }
            ]}
        ></Breadcrumb>

      <article>
        <div className="jumbotron">
                <div className="container">
                  <h1 className="display-4">{info.title}</h1>
                  <h3>{info.date}</h3>
                  <p className="lead">{info.summary}</p>
                </div>
        </div>
        <div className="container">
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
      
      <Footer />
    </div>
  )
}

About.getInitialProps = async function(context) {
    const slug = ['about'];
    const content = await import(`../../posts/${slug}.md`);
    //gray-matter parses the yaml frontmatter from the md body
    const data = matter(content.default)
    return {
      info: {
        title: 'Xavier Caron',
        summary: 'Software Engineer | AWS Certified, MEng(CS) & MIS',
        date: '2020, March'
      },
      pathname: context.pathname,
      ...data,
    }
  }