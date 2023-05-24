import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const AntySepia=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const antySepia = () => {
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
      
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
      
          for (let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];
      
            const originalRed = Math.min(255, Math.round((red - 0.189 * blue - 0.769 * green) / 0.393));
            const originalGreen = Math.min(255, Math.round((green - 0.168 * blue - 0.349 * red) / 0.686));
            const originalBlue = Math.min(255, Math.round((blue - 0.131 * green - 0.272 * red) / 0.534));
      
            data[i] = originalRed;
            data[i + 1] = originalGreen;
            data[i + 2] = originalBlue;
          }
      
          context.putImageData(imageData, 0, 0);
      
          const originalImage = canvas.toDataURL('image/png');
      
          setSelectedImage(originalImage);
        };
      };

 return(
<button onClick={antySepia}>anty sepia</button>
 );


}
export default AntySepia;