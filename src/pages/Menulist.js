const Menulist =(props)=>{
    return(
        <div className="col-3 g-3">
        <div className="card text p-2  ">
          <label className="h6 text-center mt-2  ">Menu List</label>
          <label className="p-1">Name : {props.name}</label>
          <label className="p-1">Price : {props.price}</label>
          <label className="p-1">Lunch menu : {props.lunchMenu}</label>
          <label className="p-1">If you have any problem : {props.issue}</label>
          <label className="p-1">
            Describe your problem : {props.feedback}
          </label>
        
        </div> 
      </div>
    )
  }
  export default Menulist
