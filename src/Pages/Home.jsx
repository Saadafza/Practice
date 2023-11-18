function Home (){
    return(
        <>
        <div className="container text-center HomeContainer">
            <p>With CodedWebs</p>
            <h1 className="display-2">Lets Start a Project Together</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis laborum</p>

            <div className="d-flex mailcontainer mx-auto mt-5">
                <input type="email" placeholder="Enter your Email Address"></input>
                <button className="btn btn-primary text-dark pt-1 pb-1">Get Started</button>
            </div>
        </div>
        </>
    )
}
export default Home;