import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const ApplyBlackAndWhite=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const applyBlackAndWhite = () => {
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
      
            const average = (red + green + blue) / 3;
      
            data[i] = average;
            data[i + 1] = average;
            data[i + 2] = average;
          }
      
          context.putImageData(imageData, 0, 0);
      
          const blackAndWhiteImage = canvas.toDataURL('image/png');
      
          setSelectedImage(blackAndWhiteImage);
        };
      };

 return(
<button onClick={applyBlackAndWhite}>apply black and white</button>
 );


}
export default ApplyBlackAndWhite;