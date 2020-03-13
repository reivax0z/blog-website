import Link from 'next/link';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

function BlogPage(props) {
    return (
        <div className="container">
            <Header />
            
            <Breadcrumb 
                links={[
                    { href: '/', name: 'Home' }, 
                    { name: 'Blog' }
                ]}
            ></Breadcrumb>

            <div className="row row-cols-1 row-cols-md-3">

                {props.posts.map((post, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card  h-100">
                        <style jsx>{`
                            .card {
                                width: 18rem;
                            }
                        `}</style>
                            <img src={post.cover} className="card-img-top" alt="cover"></img>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{post.summary}</h6>
                            </div>
                            <div className="card-footer">
                                {post.url.startsWith('http') && 
                                <a href={post.url} className="btn btn-primary">Read more</a>
                                }

                                {!post.url.startsWith('http') && 
                                <Link href={"/blog/" + post.url}>
                                    <a className="btn btn-primary">Read more</a>
                                </Link>
                                }
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>

            <Footer />
        </div>
    )
}

BlogPage.getInitialProps = async function(context) {
    const { slug } = context.query
    const config = await import(`../../data/blog-posts.json`);
    return {
      posts: config.default,
    }
}

export default BlogPage