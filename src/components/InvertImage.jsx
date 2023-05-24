import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const InvertImage=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const invertImage=()=>{
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
    
            data[i] = 255 - red; // Invert red
            data[i + 1] = 255 - green; // Invert green
            data[i + 2] = 255 - blue; // Invert blue
          }
    
          context.putImageData(imageData, 0, 0);
    
          const invertedImage = canvas.toDataURL('image/png');
    
          setSelectedImage(invertedImage);
        };
    }
     
 return(
<button onClick={invertImage}>invert colors</button>
 );


}
export default InvertImage;