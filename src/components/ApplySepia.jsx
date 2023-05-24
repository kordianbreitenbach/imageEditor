import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const ApplySepia=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const applySepia=()=>{
     
   
 
        const img = new Image();
        img.src = selectedImage;
    
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
    
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
    
          context.drawImage(img, 0, 0);
    
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
    
          for (let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];
    
            const sepiaRed = Math.min(255, Math.round(0.393 * red + 0.769 * green + 0.189 * blue));
            const sepiaGreen = Math.min(255, Math.round(0.349 * red + 0.686 * green + 0.168 * blue));
            const sepiaBlue = Math.min(255, Math.round(0.272 * red + 0.534 * green + 0.131 * blue));
    
            data[i] = sepiaRed;
            data[i + 1] = sepiaGreen;
            data[i + 2] = sepiaBlue;
          }
    
          context.putImageData(imageData, 0, 0);
    
          const sepiaImage = canvas.toDataURL('image/png');
    
          setSelectedImage(sepiaImage);
        };
    
    }

 return(
<button onClick={applySepia}>apply sepia</button>
 );


}
export default ApplySepia;