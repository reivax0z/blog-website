import Header from '../../components/Header'
import Map from '../../components/Map';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

function TravelPageDetails(props) {
    const details = props.travels.find((place) => place.city.toLowerCase().localeCompare(props.slug) === 0);

    if (!details) {
        return (
            <div>
                <Header current={props.pathname} />
                <div className="container">
                    <p>Destination {props.slug} not found</p>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <Header current={props.pathname} />

            <Breadcrumb 
                links={[
                    { href: '/', name: 'Home' }, 
                    { href: '/travels/', name: 'Travels' },
                    { name: details.city }
                ]}
            ></Breadcrumb>
            
            <div className="jumbotron">
                <img src={`${details.cover}?fit=crop&w=800`} className="" alt="..." />
                <style jsx>{`
                    .jumbotron img {
                        width: 100%;
                    }
                `}</style>
                <div className="container">
                <h1 className="display-4">{details.city}</h1>
                <h3>{details.country}</h3>
                <p className="lead">{details.summary}</p>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Key info
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Population:</strong> {details.population}</li>
                                <li className="list-group-item"><strong>Currency:</strong> {details.currency}</li>
                                <li className="list-group-item"><strong>Timezone:</strong> {details.timezone}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Did you know?
                            </div>
                            <div className="card-body">{details.funfact}</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="container">

            <h2>My favourite 5 places</h2>
            <div className="row">
            {details['top-5'].map((top, index) => (
                <div key={index} className="col mb-4">
                    <div className="card h-100">
                    <img src={`${top.photo}?fit=crop&w=800`} className="card-img-top" alt="..." />
                    <style jsx>{`
                        .card {
                            width: 25rem;
                        }
                        .card img {
                            width: 100%;
                        }
                    `}</style>
                    <div className="card-body">
                        <h5 className="card-title">{top.name}</h5>
                        <p>{top.description}</p>
                        <p className="card-subtitle mb-2 text-muted">{top.facts}</p>
                    </div>
                    </div>
                </div>
            ))}
            </div>

            <h2>See on a Map</h2>
            <div className="row">
                <div className="col">
                    <Map
                        places={details['top-5']}
                    >
                    </Map>
                </div>
            </div>
            </div>

            <Footer />
        </div>
    )
}

TravelPageDetails.getInitialProps = async function(context) {
    const { slug } = context.query;
    const config = await import(`../../data/my-travels.json`);
    return {
      slug,
      travels: config.default,
      pathname: context.pathname,
    }
}

export default TravelPageDetails