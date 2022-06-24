import './cards.css';
import { Link} from "react-router-dom";

function Cards() {
    return (<div class="container d-flex">
        <div className="row">

        <div class="card m-3">
            <img src="https://source.unsplash.com/200x200/?fruits,vegetable" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/home" class="btn btn-primary">Go somewhere</Link>
                </div>
        </div>
        <div class="card m-3">
            <img src="https://source.unsplash.com/200x200/?fruits,vegetable" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/home" class="btn btn-primary">Go somewhere</Link>
                </div>
        </div>
        <div class="card m-3">
            <img src="https://source.unsplash.com/200x200/?fruits,vegetable" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/home" class="btn btn-primary">Go somewhere</Link>
                </div>
        </div>
        <div class="card m-3">
            <img src="https://source.unsplash.com/200x200/?fruits,vegetable" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/home" class="btn btn-primary">Go somewhere</Link>
                </div>
        </div>
        <div class="card m-3">
            <img src="https://source.unsplash.com/200x200/?fruits,vegetable" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/home" class="btn btn-primary">Go somewhere</Link>
                </div>
        </div>
        <div class="card m-3">
            <img src="https://source.unsplash.com/200x200/?fruits,vegetable" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/home" class="btn btn-primary">Go somewhere</Link>
                </div>
        </div>
        </div>
    </div>);
}

export default Cards;