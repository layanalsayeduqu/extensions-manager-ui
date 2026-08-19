import Button from "./Button";
import ExtensionCard from "./ExtensionCard"; 
import DevLens from "../assets/images/logo-devlens.svg";
import StyleSpy from "../assets/images/logo-style-spy.svg";
import SpeedBoost from "../assets/images/logo-speed-boost.svg";
import JSONWizard from "../assets/images/logo-json-wizard.svg";
import TabMasterPro from "../assets/images/logo-tab-master-pro.svg";
import ViewportBuddy from "../assets/images/logo-viewport-buddy.svg";
import MarkupNotes from "../assets/images/logo-markup-notes.svg";
import GridGuides from "../assets/images/logo-grid-guides.svg";
import PalettePicker from "../assets/images/logo-palette-picker.svg";
function ExtensionsList(){
return(
    <div className="flex flex-col gap-1">

    <div className="flex items-center justify-between px-10 mt-5">
    <h1 className=" text-xl font-bold ">Extensions List</h1>
    <div className="flex  gap-2 sm:gap-3 ">
     <Button title="All"/>
     <Button title="Active"/>
     <Button title="Inactive"/>
  </div>
   </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" >
<ExtensionCard CardTitle="DevLens" Description="Quickly inspect page layouts and visualize element boundaries."Image={DevLens}/>
<ExtensionCard CardTitle="StyleSpy" Description="Instantly analyze and copy CSS from any webpage element."Image={StyleSpy}/>
<ExtensionCard CardTitle="SpeedBoost" Description="Optimizes browser resource usage to accelerate page loading."Image={SpeedBoost}/>
<ExtensionCard CardTitle="JSONWizard" Description="Formats, validates, and prettifies JSON responses in-browser."Image={JSONWizard}/>
<ExtensionCard CardTitle="TabMaster Pro" Description="Organizes browser tabs into groups and sessions."Image={TabMasterPro}/>
<ExtensionCard CardTitle="ViewportBuddy" Description="Simulates various screen resolutions directly within the browser."Image={ViewportBuddy}/>
<ExtensionCard CardTitle="Markup Notes" Description="Enables annotation and notes directly onto webpages for collaborative debugging."Image={MarkupNotes}/>
<ExtensionCard CardTitle="GridGuides" Description="Overlay customizable grids and alignment guides on any webpage."Image={GridGuides}/>
<ExtensionCard CardTitle="Palette Picker" Description=" Instantly extracts color palettes from any webpage."Image={PalettePicker}/>
  </div>
    </div>
)
}
export default ExtensionsList;