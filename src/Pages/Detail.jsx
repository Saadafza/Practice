

function Detail (props){
 

    return(
        <>
<div className="container">
    <img src={props.detail.url} alt="image"/>
    <h1>{props.detail.title}</h1>
</div>


        </>
    )
}
export default Detail