const getUserName = ()=>{
    return(
        localStorage.getItem("username")
    )
}

export default getUserName