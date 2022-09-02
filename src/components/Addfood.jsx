import { useRef} from 'react'

function Addfood() {


    let clear=useRef()
    
    let food={}

    function readvalue(poperty,value){
        food[poperty]=value
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
            if(data.success===true){
                food={}
                clear.current.reset();
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const submitHandler=(event)=>{
        event.preventDefault();
    }
  

  return (
    <div className="container">
        <h1 className='title'>Add Food Items</h1>
        <form ref={clear} className='form-container' onSubmit={submitHandler}>
            <input type="text" placeholder='Name'className='form-control' onChange={(e)=>{
                readvalue("fname",e.target.value)
            }} required/>
            <input type="text" placeholder='Ingredients'className='form-control' onChange={(e)=>{
                readvalue("ingredients",e.target.value)
            }} required/>
            <input type="text" placeholder='Description'className='form-control' onChange={(e)=>{
                readvalue("description",e.target.value)
            }} required/>
            <input type="text" placeholder='Directions'className='form-control' onChange={(e)=>{
                readvalue("directions",e.target.value)
            }} required/>
            <input type="number" placeholder='Calories'className='form-control' onChange={(e)=>{
                readvalue("calories",e.target.value)
            }} />
            <input type="text" placeholder="Image Link" className='form-control' onChange={(e)=>{
                readvalue("image",e.target.value)
            }} required/>
            <button className="btn btn-primary bg-success" type="submit" onClick={()=>{
                Addfood()
            }}>Add Food</button>
        </form>
      
      
    </div>
  )
}

export default Addfood;
