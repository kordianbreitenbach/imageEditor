import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const ApplyBlur=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const applyBlur = () => {
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
      
          context.drawImage(img, 0, 0);
      
          // Apply blur effect with a radius of 5 pixels
          context.filter = 'blur(5px)';
          context.drawImage(canvas, 0, 0);
      
          const blurredImage = canvas.toDataURL('image/png');
      
          setSelectedImage(blurredImage);
        };
      };

 return(
<button onClick={applyBlur}>apply blur</button>
 );


}
export default ApplyBlur;