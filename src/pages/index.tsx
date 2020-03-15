import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Link from 'next/link'

function HomePage(props) {
    return (
        <div>
            <Header current={props.pathname} />
            
            <Breadcrumb 
                links={[
                    { name: 'Home' }
                ]}
            ></Breadcrumb>

            <div className="jumbotron">
                <div className="container">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is my blog website, which I primarily use to showcase some of my interests, namely <em>Traveling</em> and <em>Technology</em>.</p>
                <hr className="my-4"></hr>
                <p>This site contains recommendation on travel destinations and technology blog posts based on my experiences.</p>
                <p>The website itself is built using <code>Next.js</code>, <code>Typescript</code>, <code>React</code> and is hosted on <code>AWS</code>.</p>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Travels
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Some of my travel highlights</h5>
                                <p className="card-text">With supporting photos and top things to visit.</p>
                                <Link href="/travels" passHref>
                                    <a className="btn btn-primary">See more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Tech blog
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Some of my tech insights</h5>
                                <p className="card-text">Taken from past projects and problems faced.</p>
                                <Link href="/blog" passHref>
                                    <a className="btn btn-primary">See more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

HomePage.getInitialProps = async function(context) {
    return {
      pathname: context.pathname,
    }
}

export default HomePage