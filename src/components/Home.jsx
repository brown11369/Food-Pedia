import { useState, useEffect } from "react"

const Home = () => {

    let [food, setFood] = useState([])

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

            <div className="d-inline-flex p-2 bd-highlight">
                {
                    food.map((item, ind) => {
                        return (
                            <div key={ind} className="card">
                                <img src={item.image} className="card-img-top" alt="..." style={{ width: "20%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a href="#" className="btn btn-primary">View Ingredients</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </>
    )
}

export default Home;