function Popup(props) {

    let dish = props.data

    return (
        <>
            <div className=" d-flex h-100 container-fluid position-fixed top-0 start-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                <div className="d-flex align-self-center justify-content-center flex-row flex-wrap flex-md-nowrap">
                    <div className="card food-box m-5 p-2">
                        <div className="cross d-flex justify-content-end">
                            <i onClick={() => {
                                props.visible(false)

                            }} className="fa-regular fa-circle-xmark text-danger h4"></i>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title text-capitalize">{dish.fname}</h3>
                            <p className="card-text text-secondary"><b>Ingredients : </b>{dish.ingredients}</p>
                            <p className="card-text text-secondary"><b>Directions : </b>{dish.directions.substring(0,150)}...<strong>premium lelo</strong></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup;
