import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const HandleMirrorVerdical=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const handleMirrorVerdical = () => {
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
      
          context.translate(0, canvas.height);
          context.scale(1, -1);
          context.drawImage(img, 0, 0);
      
         
          const mirroredImage = canvas.toDataURL('image/png');
      
          
          setSelectedImage(mirroredImage);
        };
      };

 return(
<button onClick={handleMirrorVerdical}>mirror verdically</button>
 );


}
export default HandleMirrorVerdical;