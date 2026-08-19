import Button from "./Button";
import Toggle from "./Toggle";
function ExtensionCard({
    CardTitle,
    Description,
    Image
}){
    return(
  <div className="flex flex-col  justify-between bg-white  border rounded-xl p-4 " >

  <div className=" flex gap-3">

    <img src={Image} alt="cardPhoto"className="w-10 h-10 "/>

    <div className=" flex flex-col gap-1">
    <h2 className=" font-bold">{CardTitle}</h2>
    <p className="text-sm text-gray-500">{Description}</p>
    </div>

  </div>

  <div className="flex justify-between mt-3 ">
    <Button title="Remove"/>
   <Toggle />
  </div>
  </div>
    )
}

export default ExtensionCard;