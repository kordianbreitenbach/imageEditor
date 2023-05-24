import React, { useState} from 'react';
import '../app.css'
import { QContext } from './Context';
import AntySepia from './AntySepia';
import ApplyBlackAndWhite from './ApplyBlackAndWhite';
import ApplyBlur from './ApplyBlur';
import ApplySepia from './ApplySepia';
import ApplySharpen from './ApplySharpen';
import HandleDownload from './HandleDownload';
import HandleImageChange from './HandleImageChange';
import HandleMirror from './HandleMirror';
import InvertImage from './InvertImage';
import HandleMirrorVerdical from './HandleMirrorVerdical';


const ImageEditor=()=>{
  const [selectedImage, setSelectedImage] = useState(null);

 


 
  return (
    <div> 
         <QContext.Provider value={{selectedImage, setSelectedImage}}>
    <div className='adder'>
         <h1>image editor</h1>
   
  <HandleImageChange/>
      </div>
      {selectedImage && (
        <div>
            <div className="content">
          <img src={selectedImage} alt="Selected" />
          </div>
       
          <div className="menu">
          
      <HandleDownload/>
            
            <HandleMirror/>
          
            <HandleMirrorVerdical/>
           <ApplySepia/>
            <AntySepia/>
          
           <InvertImage/>
            <ApplyBlur/>
          
          <ApplySharpen/>
            <ApplyBlackAndWhite/>
            </div>
        </div>
      )}
 

  </QContext.Provider>
    </div>
  );
}
export default ImageEditor;