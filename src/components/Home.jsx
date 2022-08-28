import { useState, useRef, useEffect } from "react"

function Home() {

    let show = useRef();

    let [food, setFood] = useState([])
    let [foodshow, setShowFood] = useState([])
    let [dish, setDish] = useState({})
    let [searched, setSearched] = useState({})

    useEffect(() => {
        fetch("https://pms-api-food.herokuapp.com/products")
            .then((response) => response.json())
            .then((data) => {
                setFood(data)
                setShowFood(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h3 className="text-success">food-<span className="text-danger">Pedia</span></h3>
                    <div className="d-flex" role="search">
                        <input onChange={(e) => {
                            setSearched(e.target.value)
                        }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={() => {
                            if (searched !== null) {
                                setShowFood(food.filter((e, i) => {
                                    return e.ingredients.toLowerCase().includes(searched.toLowerCase()) || e.name.toLowerCase().includes(searched.toLowerCase())
                                }))
                            }
                            else{
                                setShowFood(food)
                            }
                        }} className="btn btn-outline-success" type="button">Search</button>
                    </div>
                </div>
            </nav>
            <div className="container-fluid min-vh-100" style={{ backgroundColor: "#e7e7e7", backgroundImage:"url(https://i.pinimg.com/736x/fa/61/07/fa610763f8007b711ec710aef08b0e15.jpg)",backgroundAttachment:"fixed"}}>
                <div className="d-flex justify-content-center gap-3 p-3 flex-row flex-wrap">
                    {
                        foodshow.map((item, ind) => {
                            return (
                                <div key={ind} className="card bg-light" style={{ width: "245px", boxShadow: "0px 0px 30px 2px rgba(0, 0, 0, 0.15)" }}>
                                    <img src={item.image} className="card-img-top img-fluid" alt="..." style={{ height: "150px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <button onClick={() => {
                                            show.current.className = "d-block h-100 container-fluid position-fixed top-0 start-0"
                                            setDish(item);
                                            show.current.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
                                        }} className="btn btn-primary bg-success">View More</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div ref={show} className="d-none">
                <div className="d-flex justify-content-center flex-row flex-wrap flex-md-nowrap">
                    <div className="card food-box m-5 p-2">
                        <div className="cross d-flex justify-content-end">
                            <i onClick={() => {
                                show.current.className = "d-none"
                            }} className="fa-regular fa-circle-xmark text-danger h4"></i>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{dish.name}</h3>
                            <p className="card-text"><b>Ingredients : </b>{dish.ingredients}</p>
                            <p className="card-text"><b>Directions : </b>{dish.directions}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;