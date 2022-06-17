import './slider.css';
import Cards from './Cards'

function Slider() {
    return (<div>
        <img src="https://source.unsplash.com/1600x600/?fruits" className="img-fluid" alt=""/>
            <div className="carousel-caption">
                <h2>First slide label</h2>
                <p className='para pb-5 mb-5 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, harum quo ab inventore rem nulla doloremque cumque provident est corporis eaque illo aliquam praesentium, similique culpa totam? Explicabo blanditiis veritatis rem tempora, animi ex. </p>
            </div>
            <hr />
            <Cards></Cards>

    </div >
        
    );
}

export default Slider;