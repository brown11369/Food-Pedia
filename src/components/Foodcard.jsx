import {useState} from "react";
import Popup from "./Popup";

function Foodcard(props) {
    let foodshow=props.data
    let [dish,setDish]=useState({})
    let [pop,setPop]=useState(false)


    return (
        <>
            <div className="container-fluid min-vh-100" style={{ backgroundColor: "#e7e7e7", backgroundImage: "url(https://www.pngitem.com/pimgs/m/661-6611238_pink-flower-pattern-watercolor-design-floral-flowers-flower.png)", backgroundAttachment: "fixed" }}>
                <div className="d-flex justify-content-center gap-3 p-3 flex-row flex-wrap">
                    {
                        foodshow.map((item, ind) => {
                            return (
                                <div key={ind} className="card bg-light" style={{ width: "245px", boxShadow: "0px 0px 30px 2px rgba(0, 0, 0, 0.15)" }}>
                                    <img src={item.image} className="card-img-top img-fluid" alt="..." style={{ height: "150px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-capitalize">{item.fname}</h5>
                                        <p className="card-text text-secondary">{
                                            item.description.substring(0,150)}...</p>
                                        <button onClick={() => {
                                            setPop(true)
                                            setDish(item)
                                        }} className="btn btn-primary bg-success">View More</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {pop && <Popup data={dish} visible={setPop}/>}
        </>
    )
}


export default Foodcard;
