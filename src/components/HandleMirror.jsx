import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const HandleMirror=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const handleMirror = () => {
        if (!selectedImage) {
          return;
        }
    
        const img = new Image();
        img.src = selectedImage;
    
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
    
        img.onload = () => {
         
          canvas.width = img.width;
          canvas.height = img.height;
    
          
          context.translate(canvas.width, 0);
          context.scale(-1, 1);
          context.drawImage(img, 0, 0);
    
          const mirroredImage = canvas.toDataURL('image/png');
    
       
          setSelectedImage(mirroredImage);
        };
      };


 return(
    <button onClick={handleMirror}>mirror horizontally  </button>
 );


}
export default HandleMirror;