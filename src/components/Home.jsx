import "./Home.css"
import { useState, useRef, useEffect } from "react"

const Home = () => {

    let show = useRef();

    let [food, setFood] = useState([])
    let [dish, setDish] = useState({})

    useEffect(() => {
        fetch("https://pms-api-food.herokuapp.com/products")
            .then((response) => response.json())
            .then((data) => {
                setFood(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(food)



    return (
        <>
            <h1 className="container bg-light">food-pedia</h1>

            <div className="d-inline-flex p-3 bd-highlight gap-2">
                {
                    food.map((item, ind) => {
                        return (
                            <div key={ind} className="card">
                                <img src={item.image} className="card-img-top img-fluid" alt="..." style={{height:"150px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <button onClick={() => {
                                        show.current.className = "pop-up"
                                        setDish(item);
                                    }} className="btn btn-primary">View More</button>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <div ref={show} className="hide">
                <div className="card food-box">
                    <div className="cross">
                        <i onClick={() => {
                            show.current.className = "hide"
                        }} class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <h3 className="card-title">{dish.name}</h3>
                    <h5 className="card-text">{dish.ingredients}</h5>
                    <p className="card-text">{dish.directions}</p>
                </div>
            </div>


        </>
    )
}

export default Home;