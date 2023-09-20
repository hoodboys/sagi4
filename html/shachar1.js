
const imagesArray = [
    {
        url: "https://images.alphacoders.com/132/1327999.jpeg",
        loaded: false
    },
    {
        url: "https://images7.alphacoders.com/131/1318988.jpeg",
        loaded: false
    },{
        url: "https://images8.alphacoders.com/132/1328385.jpeg",
        loaded: false
    },
    {
        url: 'https://i.postimg.cc/gJBWFHrT/tree-838667-1920.jpg',
        loaded: false
    }
  ];
  
  const wrapper = document.querySelector('.wrapper');
  let indextoLoad = 0;
  
  function loadImage(){
    return new Promise((resolve, reject) => {
      const imageObject = new Image();
      if(indextoLoad < imagesArray.length){
        imageObject.src = imagesArray[indextoLoad].url;
        imageObject.onload = () => {
          indextoLoad++;
          resolve(imageObject);
        }
        imageObject.onerror = () => reject('Could not load Image');
      }else{
        reject('FinishLoading...');
      }
   });
  }
  
  
  wrapper.textContent = "Loading Image...";
  loadImage().then(imageObject => {
    wrapper.textContent = '';
    wrapper.appendChild(imageObject);
  }).catch(error =>{
    wrapper.textContent = error;
  })
  