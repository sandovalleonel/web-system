import img from "../img/1.jpeg";
export default function contact() {
    return (
        <div className="card " style={{"width": "15rem","margin":"auto"}}>
            <img src={img} className="card-img-top" alt="..." style={{"border-radius":"50%","height":"100px","width":"100px","margin":"auto"}}/>
            <div className="card-body">
                <p className="card-text">
                    <h4> 099-999-9999</h4>
                </p>
            </div>
        </div>
    );
}