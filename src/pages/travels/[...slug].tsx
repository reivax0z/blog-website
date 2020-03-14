import Header from '../../components/Header'
import Map from '../../components/Map';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

function TravelPageDetails(props) {
    const details = props.travels.find((place) => place.city.toLowerCase().localeCompare(props.slug) === 0);

    if (!details) {
        return (
            <div className="container">
                <Header current={props.pathname} />
                <p>Destination {props.slug} not found</p>
            </div>
        )
    }
    
    return (
        <div className="container">
            <Header current={props.pathname} />

            <Breadcrumb 
                links={[
                    { href: '/', name: 'Home' }, 
                    { href: '/travels', name: 'Travels' },
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

            <h2>My favourite 5 places</h2>
            {details['top-5'].map((top, index) => (
                <div key={index} className="media">
                    <img src={`${top.photo}?fit=crop&w=300`} className="align-self-center mr-3 img-thumbnail" alt="..." />
                    <style jsx>{`
                        .media img {
                            width: 18rem;
                        }
                        .media {
                            margin-bottom: 10px;
                        }
                    `}</style>
                    <div className="media-body">
                        <h5 className="mt-0">{top.name}</h5>
                        <p>{top.description}</p>
                        <p>{top.facts}</p>
                        <a className="btn btn-primary" href={"https://www.google.com/maps/place/" + top.location}>See on Maps</a>
                    </div>
                </div>
            ))}

            <h2>See on a Map</h2>
            
            <div className="row">
                <div className="col">
                    <Map
                        places={details['top-5']}
                    >
                    </Map>
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