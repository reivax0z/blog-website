import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

function HomePage() {
    return (
        <div className="container">
            <Header />

            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">Blog website used to showcase some of my interests, namely <em>Traveling</em> and <em>Technology</em>.</p>
                <hr className="my-4"></hr>
                <p>This site contains recommendation on travel destinations and technology blog posts based on my experiences.</p>
                <p>The website itself is built using <code>Next.js</code>, <code>Typescript</code>, <code>React</code>, uses <code>Bootstrap</code> for the design and is hosted on AWS.</p>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Travels
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Some of my travel highlights</h5>
                            <p className="card-text">With supporting photos and top things to visit.</p>
                            <Link href="/travels">
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
                            <p className="card-text">Taken from past projects and problem faced.</p>
                            <Link href="/blog">
                                <a className="btn btn-primary">See more</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage