import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const HandleImageChange=()=>{
    const { setSelectedImage}=useContext(QContext);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
      };


 return(
    <div>
    <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
 );


}
export default HandleImageChange;