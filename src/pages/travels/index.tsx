import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

function TravelPage(props) {
    return (
        <div className="container">
            <Header />

            <Breadcrumb 
                links={[
                    { href: '/', name: 'Home' }, 
                    { name: 'Travels' }
                ]}
            ></Breadcrumb>

            <div className="row">
                {props.travels.map((place, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card  h-100">
                        <style jsx>{`
                            .card {
                                width: 18rem;
                            }
                        `}</style>
                            <img src={`${place.cover}?fit=crop&w=300`} className="card-img-top" alt="cover"></img>
                            <div className="card-body">
                                <h5 className="card-title">{place.city}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{place.country}</h6>
                            </div>
                            <div className="card-footer">
                                <Link href={"/travels/" + place.city.toLowerCase()}>
                                    <a className="btn btn-primary">Read more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <Footer />
        </div>
    )
}

TravelPage.getInitialProps = async function(context) {
    const { slug } = context.query
    const config = await import(`../../data/my-travels.json`);
    return {
      travels: config.default,
    }
}

export default TravelPage