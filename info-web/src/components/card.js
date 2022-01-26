import Img from '../img/103.jpg';
import '../assets/styles.css';
import JsonCard from '../json/card-json.json';
const cardImg = require.context('../card-img', true);
export default function card() {
    return (
    
        <div  className="card mb-3 " style={{ "max-width": "100%" }}>
            {
                JsonCard.map((item, index) => {
                    console.log(item.img);
                    return (
                        <div className="row g-0 shadow-lg p-3 mb-5 bg-body rounded card-border" data-aos="fade-aup">
                            <div className="col-md-4">
                                <img src={cardImg("./"+item.img)} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.content}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    );
}