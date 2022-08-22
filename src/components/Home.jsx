import { useState, useRef, useEffect } from "react"

function Home() {

    

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

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h3 className="text-success">food-<span className="text-danger">Pedia</span></h3>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="container-fluid" style={{backgroundColor:"#e7e7e7"}}>
                <div className="d-flex justify-content-center gap-3 p-3 flex-row flex-wrap">
                    {
                        food.map((item, ind) => {
                            return (
                                <div key={ind} className="card bg-light" style={{ width: "245px",boxShadow:"0px 0px 30px 2px rgba(0, 0, 0, 0.15)"}}>
                                    <img src={item.image} className="card-img-top img-fluid" alt="..." style={{ height: "150px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <button onClick={() => {
                                            show.current.className = "d-block h-100 container-fluid position-fixed top-0 start-0"
                                            setDish(item);
                                            show.current.style.backgroundColor="rgba(0, 0, 0, 0.7)"
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
                    <div className="card food-box m-5">
                        <div className="cross d-flex justify-content-end">
                            <i onClick={() => {
                                show.current.className = "d-none"
                            }} className="fa-regular fa-circle-xmark text-danger h4"></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{dish.name}</h5>
                            <p className="card-text">{dish.ingredients}</p>
                            <p className="card-text">{dish.directions}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;