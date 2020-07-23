import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";



function App() {

  
  var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };
  
  var sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
  };

  const girl = useWebAnimations({ 
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' },
      
      
    ],
    timing: {
      
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 200,
      playbackRate: 1,
      iterations: Infinity
    }
  });


  
  const background1 = useWebAnimations({ 
    keyframes: sceneryFrames,
    timing:sceneryTimingBackground
  });



  const background2 = useWebAnimations({ 
    keyframes: sceneryFrames,
    timing:sceneryTimingBackground
  });

  
  const foreground1 = useWebAnimations({ 
    keyframes: sceneryFrames,
    timing:sceneryTimingForeground
  });


  const foreground2 = useWebAnimations({ 
    keyframes: sceneryFrames,
    timing:sceneryTimingForeground
  });


  

  React.useEffect(() => { 

    

    girl.getAnimation().updatePlaybackRate(0.1);
    girl.getAnimation().duration = 600;

    console.log(girl.getAnimation().playbackRate);
    document.addEventListener("mousedown", (e) => {
      goFaster();
     
    });

    document.addEventListener("touchstart", (e) => {
      goFaster();

    });



    var sceneries = [background1.getAnimation(), background2.getAnimation(), foreground1.getAnimation(), foreground2.getAnimation()];

    var adjustBackgroundPlayback = function() {
      if (girl.getAnimation().playbackRate < .8) {
        sceneries.forEach(function(anim) {
          anim.playbackRate = girl.getAnimation().playbackRate*2;
          

        });
      } else if (girl.getAnimation().playbackRate > 1.2) {
        sceneries.forEach(function(anim) {
          anim.playbackRate = girl.getAnimation().playbackRate*2.5;
         

        });
      }  
    }
    
    
    setInterval( function() {
     
      if (girl.getAnimation().playbackRate > .4) {
        girl.getAnimation().playbackRate *= .9;    
      } 
      adjustBackgroundPlayback();
   
      
    }, 3000);
    
  
    var goFaster = function() {
      girl.getAnimation().updatePlaybackRate( girl.getAnimation().playbackRate *  1.1);
      adjustBackgroundPlayback();
    }
  
    

  }, [ girl.animate]);

  


  return (

<div className="wrapper">
  <div className="sky"></div>
  <div className="earth">
    <div id="red-queen_and_alice">
      <img ref = {girl.ref} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
    </div>
  </div>

  <div ref = {foreground2.ref} className="scenery" id="foreground1">
    <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
  </div>
  <div ref = {foreground1.ref} className="scenery" id="foreground2">
    <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
    <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
  </div>
  <div  ref = {background1.ref} className="scenery" id="background1">
    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
  </div>
  <div ref = {background2.ref} className="scenery" id="background2">
    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
  </div>
</div>
  );

}

export default App;

