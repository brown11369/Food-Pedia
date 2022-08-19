import { useState, useEffect } from 'react'



function Products() {

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

    function delitem(id) {
        fetch(`https://pms-api-food.herokuapp.com/products?id=${id}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((data) => {

                if (data.success === true) {
                    let newprod = [...food]
                    delfood = newprod.findIndex((ele, index) => {
                        return Number(id) === Number(ele.id)
                    })
                    newprod.splice(delfood, 1)
                    setFood(newprod);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <div className='container'>
                <h1 className='title'>Food Items</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Inredients</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            food.map((ele, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{1 + index}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.ingredients}</td>
                                        <td><p>Edit</p></td>
                                        <td><p style={{cursor: "pointer",fontWeight:"500"}} onClick={() => {
                                            delitem(ele.id)
                                        }}>Delete</p></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>

            </div>

        </>
    )

}



export default Products;