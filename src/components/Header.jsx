function Header(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top">
                <div className="container-fluid">
                    <h3 className="text-success">food-<span className="text-danger">Pedia</span></h3>
                    <div className="d-flex" role="search">
                        <input onChange={(e) => {
                            if(e.target.value=== ""){
                                props.searchfood()
                            }
                            else{
                                props.findstring(e.target.value)
                            }
                        }} className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                        <button onClick={() => {
                            props.searchfood()
                        }} className="btn btn-outline-success" type="button">Search</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;