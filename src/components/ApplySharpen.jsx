import React, { useContext} from 'react';
import '../app.css'
import { QContext } from './Context';


const ApplySharpen=()=>{
    const {selectedImage, setSelectedImage}=useContext(QContext);
    const applySharpen = () => {
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
      
          const sharpenMatrix = [
            [0, -1, 0],
            [-1, 5, -1],
            [0, -1, 0]
          ];
      
          const width = canvas.width;
          const height = canvas.height;
      
          for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
              const offset = (y * width + x) * 4;
              let sumR = 0;
              let sumG = 0;
              let sumB = 0;
      
              for (let j = 0; j < 3; j++) {
                for (let i = 0; i < 3; i++) {
                  const pixelOffset = ((y + j - 1) * width + (x + i - 1)) * 4;
                  sumR += data[pixelOffset] * sharpenMatrix[j][i];
                  sumG += data[pixelOffset + 1] * sharpenMatrix[j][i];
                  sumB += data[pixelOffset + 2] * sharpenMatrix[j][i];
                }
              }
      
              data[offset] = Math.min(255, Math.max(0, sumR));
              data[offset + 1] = Math.min(255, Math.max(0, sumG));
              data[offset + 2] = Math.min(255, Math.max(0, sumB));
            }
          }
      
          context.putImageData(imageData, 0, 0);
      
          const sharpenedImage = canvas.toDataURL('image/png');
      
          setSelectedImage(sharpenedImage);
        };
      };

 return(
<button onClick={applySharpen}>apply sharpen</button>
 );


}
export default ApplySharpen;