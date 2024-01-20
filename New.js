function Loginpage(){

    const Message=()=>{
        alert("welcome to zomato")
    }

    return(
        <>
    
        <h1>Zomato Login page</h1>

        Name :<input type="text"/> <br/><br/>
        phone no. :<input type="number"/> <br/><br/>
        Email-id :<input type="text"/> <br/><br/>
        Password :<input type="text"/> <br/><br/>

        <button onClick={Message}>Login</button>  

        </>
    )
}

export default Loginpage;