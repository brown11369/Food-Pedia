import { useState, useEffect } from 'react'

function Addfood() {

    let [id, setID]=useState()

    


    useEffect(() => {
        fetch("https://pms-api-food.herokuapp.com/products")
            .then((response) => response.json())
            .then((data) => {
                let ro=data.map((e,i)=>{
                    return e.id
                })
                setID(ro.pop())
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    

    let food={}

    function readvalue(poperty,value){
        food.id=id+1
        food[poperty]=value
        console.log(food)
    }
    Addfood=()=>{
        fetch("https://pms-api-food.herokuapp.com/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(food)
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  

  return (
    <div className="container">
        <h1 className='title'>Add Food Items</h1>
        <form className='form-container'>
            <input type="text" placeholder='Name'className='form-control' onChange={(e)=>{
                readvalue("name",e.target.value)
            }} />
            <input type="text" placeholder='Ingredients'className='form-control' onChange={(e)=>{
                readvalue("ingredients",e.target.value)
            }} />
            <input type="text" placeholder='Directions'className='form-control' onChange={(e)=>{
                readvalue("directions",e.target.value)
            }} />
            <input type="number" placeholder='Calories'className='form-control' onChange={(e)=>{
                readvalue("calories",e.target.value)
            }} />
            <input type="text" placeholder="Image Link" className='form-control' onChange={(e)=>{
                readvalue("image",e.target.value)
            }} />
            <button type="button" onClick={()=>{
                Addfood()
            }}>Add Food</button>
        </form>
      
      
    </div>
  )
}

export default Addfood;