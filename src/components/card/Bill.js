const Menulist =(props)=>{
    return(
        <div className="col-3 mx-auto mt-4">
        <div className="card text p-2  ">
          <label className="h6 text-center mt-2  ">Billing</label>
          <label className="p-1">Name : {props.name}</label>
          <label className="p-1">Price : {props.price==="veg"?70:90}</label>
          <label className="P-1">Food type:{props.price==="veg"?"Veg":"Non-Veg"}</label>
          <label className="p-1">Lunch menu : {props.lunchMenu.toString()}</label>
          <label className="p-1">If you have any problem : {props.issue}</label>
          <label className="p-1">
            Describe your problem : {props.feedback}
          </label>
        
        </div> 
      </div>
    )
  }
  export default Menulist
