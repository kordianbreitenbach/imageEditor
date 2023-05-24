import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const HandleDownload=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = selectedImage;
        link.download = 'image/png';
        link.click();
      };


 return(
<button onClick={handleDownload}>Download</button>
 );


}
export default HandleDownload;