import '/static/assets/css/style.css'

const SliderArea = () => (
    <section className="slider_section slider_section_two mb-70">
        <div className="slider_area owl-carousel">
            <div className="single_slider d-flex align-items-center" data-bgimg="/static/assets/img/slider/slider1.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slider_content">
                                <h1>best skin</h1>
                                <h2>qled 75 inch q7f</h2>
                                <p>exclusive offer <span> 20% off </span> this week</p>
                                <a className="button" href="shop.html">shopping now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="single_slider d-flex align-items-center" data-bgimg="/static/assets/img/slider/slider2.jpg">
    <div className="container">
     <div className="row">
       <div className="col-12">
       <div className="slider_content">
        <h1>Dual Front</h1>
        <h2>camera 20mp</h2>
        <p>exclusive offer <span> 20% off </span> this week</p>
        <a className="button" href="shop.html">shopping now</a>
        </div>
       </div>
     </div>
     </div>
    </div>
    <div className="single_slider d-flex align-items-center" data-bgimg="/static/assets/img/slider/slider3.jpg">
    <div className="container">
     <div className="row">
       <div className="col-12">
       <div className="slider_content">
        <h1>Hurry Up!</h1>
        <h2>IN THE WORD 2019</h2>
        <p>exclusive offer <span> 20% off </span> this week</p>
        <a className="button" href="shop.html">shopping now</a>
        </div>
       </div>
     </div>
     </div>
    </div> */}
        
        </div>
    </section>
)

export default SliderArea