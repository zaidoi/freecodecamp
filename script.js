const userLeft = false
const userWatchingCatMeme = false

let watchTutorialCallback = new Promise((resolve,reject) => {
  if(userLeft){
    reject({
      name:"User Left",
      message: ':('
    })
  }else if(userWatchingCatMeme){
    reject({
      name:'User watching Cat Meme',
      message: 'WevDevSimplied < Cat'
    })
  }else{
  resolve('Thumbs up and Subscribe')
  }
})

watchTutorialCallback.then((message) =>{
  console.log(message);
}).catch((message)=>{
  console.log(message)
})