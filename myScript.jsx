var myWindow = new Window("palette", "Text and Button Window");

var imagePath = "image2.png"; 
var imageFile = new File(imagePath);
var imageElement = myWindow.add("image", undefined, imageFile);

//Sin button
var imagePath = "image4.png"; 
var imageFile = new File(imagePath);
var imageElement = myWindow.add("image", undefined, imageFile);
var SinButton = myWindow.add("button", undefined, "SIN [x]");
var SinButton2 = myWindow.add("button", undefined, "SIN [x, x]");

//Elastic button
var imagePath = "image5.png"; 
var imageFile = new File(imagePath);
var imageElement = myWindow.add("image", undefined, imageFile);
var ElasticButton = myWindow.add("button", undefined, "ELASTIC default [x]");
var ElasticButton1 = myWindow.add("button", undefined, "ELASTIC less AMP [x]");
var ElasticButton2 = myWindow.add("button", undefined, "ELASTIC high decay [x]");

var ElasticButtonxx = myWindow.add("button", undefined, "ELASTIC default [x, x]");
var ElasticButtonxx1 = myWindow.add("button", undefined, "ELASTIC less AMP [x, x]");
var ElasticButtonxx2 = myWindow.add("button", undefined, "ELASTIC high decay [x, x]");


ElasticButton.onClick = function () {
if (app.project.activeItem && app.project.activeItem.selectedProperties.length > 0) {
    var comp = app.project.activeItem;
  
    for (var i = 0; i < comp.selectedProperties.length; i++) {
      var selectedProperty = comp.selectedProperties[i];
  
      if (selectedProperty.canSetExpression && selectedProperty.propertyType !== PropertyType.NO_VALUE) {
  
        var time1 = comp.time; 
        var time2 = comp.time + 0.1; 
        
        var userInput1 = prompt("Enter the start value:", "0");
        var userInput2 = prompt("Enter the final value:", "100");

        var valueAtTime1 = parseInt(userInput1);
        var valueAtTime2 = parseInt(userInput2);
  
        selectedProperty.setValueAtTime(time1, valueAtTime1);
        selectedProperty.setValueAtTime(time2, valueAtTime2);

        selectedProperty.expression = "amp = .1;freq = 2.0;decay = 2.0;n = 0;time_max = 4;if (numKeys > 0){n = nearestKey(time).index;if (key(n).time > time){n--;}}if (n == 0){ t = 0;}else{t = time - key(n).time;}if (n > 0 && t < time_max){v = velocityAtTime(key(n).time - thisComp.frameDuration/10);value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);}else{value};";
      } else {
        alert("The selected property cannot have expressions or keyframes applied to it.");
      }
    }
  } else {
    alert("Please select at least one animatable property in After Effects.");
  }
  
};

ElasticButton1.onClick = function () {
  if (app.project.activeItem && app.project.activeItem.selectedProperties.length > 0) {
      var comp = app.project.activeItem;
    
      for (var i = 0; i < comp.selectedProperties.length; i++) {
        var selectedProperty = comp.selectedProperties[i];
    
        if (selectedProperty.canSetExpression && selectedProperty.propertyType !== PropertyType.NO_VALUE) {
          
          var time1 = comp.time; 
          var time2 = comp.time + 0.1; 
          
          var userInput1 = prompt("Enter the start value:", "0");
          var userInput2 = prompt("Enter the final value:", "100");
  
          var valueAtTime1 = parseInt(userInput1); 
          var valueAtTime2 = parseInt(userInput2);
    
          selectedProperty.setValueAtTime(time1, valueAtTime1);
          selectedProperty.setValueAtTime(time2, valueAtTime2);
  
          selectedProperty.expression = "amp = .05;freq = 2.0;decay = 2.0;n = 0;time_max = 4;if (numKeys > 0){n = nearestKey(time).index;if (key(n).time > time){n--;}}if (n == 0){ t = 0;}else{t = time - key(n).time;}if (n > 0 && t < time_max){v = velocityAtTime(key(n).time - thisComp.frameDuration/10);value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);}else{value};";
        } else {
          alert("The selected property cannot have expressions or keyframes applied to it.");
        }
      }
    } else {
      alert("Please select at least one animatable property in After Effects.");
    }
    
};

ElasticButton2.onClick = function () {
  if (app.project.activeItem && app.project.activeItem.selectedProperties.length > 0) {
      var comp = app.project.activeItem;
    
      for (var i = 0; i < comp.selectedProperties.length; i++) {
        var selectedProperty = comp.selectedProperties[i];
    
        if (selectedProperty.canSetExpression && selectedProperty.propertyType !== PropertyType.NO_VALUE) {
          
          var time1 = comp.time; 
          var time2 = comp.time + 0.1; 
          
          var userInput1 = prompt("Enter the start value:", "0");
          var userInput2 = prompt("Enter the final value:", "100");
  
          var valueAtTime1 = parseInt(userInput1); 
          var valueAtTime2 = parseInt(userInput2);
    
          selectedProperty.setValueAtTime(time1, valueAtTime1);
          selectedProperty.setValueAtTime(time2, valueAtTime2);
  
          selectedProperty.expression = "amp = .1;freq = 2.0;decay = 4.0;n = 0;time_max = 4;if (numKeys > 0){n = nearestKey(time).index;if (key(n).time > time){n--;}}if (n == 0){ t = 0;}else{t = time - key(n).time;}if (n > 0 && t < time_max){v = velocityAtTime(key(n).time - thisComp.frameDuration/10);value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);}else{value};";
        } else {
          alert("The selected property cannot have expressions or keyframes applied to it.");
        }
      }
    } else {
      alert("Please select at least one animatable property in After Effects.");
    }
    
};

SinButton.onClick = function () {
    if (app.project.activeItem && app.project.activeItem.selectedProperties.length > 0) {
        var comp = app.project.activeItem;
      
        for (var i = 0; i < comp.selectedProperties.length; i++) {
          var selectedProperty = comp.selectedProperties[i];
      
          if (selectedProperty.canSetExpression && selectedProperty.propertyType !== PropertyType.NO_VALUE) {
         
            var userInput1 = prompt("Enter the speed:", "2");
            var userInput2 = prompt("Enter the AMP:", "100");
        
            selectedProperty.expression = "speed = " + userInput1 + ";amp = " + userInput2 +";Math.sin(time * speed ) * amp ;";
          } else {
            alert("The selected property cannot have expressions or keyframes applied to it.");
          }
        }
      } else {
        alert("Please select at least one animatable property in After Effects.");
      }
};

SinButton2.onClick = function () {
  if (app.project.activeItem && app.project.activeItem.selectedProperties.length > 0) {
      var comp = app.project.activeItem;
    
      for (var i = 0; i < comp.selectedProperties.length; i++) {
        var selectedProperty = comp.selectedProperties[i];
    
        if (selectedProperty.canSetExpression && selectedProperty.propertyType !== PropertyType.NO_VALUE) {
       
          var userInput1 = prompt("Enter the speed for param1:", "2");
          var userInput2 = prompt("Enter the AMP for param1:", "10");
          var userInput3 = prompt("Enter the speed for param2:", "2");
          var userInput4 = prompt("Enter the AMP for param2:", "10");
      
          selectedProperty.expression = "sp =" + userInput1 + ";amp = " + userInput2 +";offset = 0;s = Math.sin(time * Math.PI * 2 * sp + offset*thisComp.frameDuration) * amp;s1 = Math.sin(time * Math.PI * 2 * " + userInput3 +" + offset*thisComp.frameDuration) * "+ userInput4+";value + [s, s1]";
          
        } else {
          alert("The selected property cannot have expressions or keyframes applied to it.");
        }
      }
    } else {
      alert("Please select at least one animatable property in After Effects.");
    }
};

ElasticButtonxx.onClick = function () {
  if (app.project.activeItem && app.project.activeItem.selectedProperties.length > 0) {
      var comp = app.project.activeItem;
    
      for (var i = 0; i < comp.selectedProperties.length; i++) {
        var selectedProperty = comp.selectedProperties[i];
    
        if (selectedProperty.canSetExpression && selectedProperty.propertyType !== PropertyType.NO_VALUE) {
    
          var time1 = comp.time; 
          var time2 = comp.time + 0.1; 
          
          var userInput1 = prompt("Enter the start value param1:", "0");
          var userInput12 = prompt("Enter the start value param2:", "0");
          var userInput2 = prompt("Enter the final value param1:", "100");
          var userInput21 = prompt("Enter the final value param2:", "100");
    
          selectedProperty.setValueAtTime(time1, [parseInt(userInput1), parseInt(userInput2)]);
          selectedProperty.setValueAtTime(time2, [parseInt(userInput12), parseInt(userInput21)]);
  
          selectedProperty.expression = "amp = .1;freq = 2.0;decay = 2.0;n = 0;time_max = 4;if (numKeys > 0){n = nearestKey(time).index;if (key(n).time > time){n--;}}if (n == 0){ t = 0;}else{t = time - key(n).time;}if (n > 0 && t < time_max){v = velocityAtTime(key(n).time - thisComp.frameDuration/10);value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);}else{value};";
        } else {
          alert("The selected property cannot have expressions or keyframes applied to it.");
        }
      }
    } else {
      alert("Please select at least one animatable property in After Effects.");
    }
    
  };

  ElasticButtonxx1.onClick = function () {
    if (app.project.activeItem && app.project.activeItem.selectedProperties.length > 0) {
        var comp = app.project.activeItem;
      
        for (var i = 0; i < comp.selectedProperties.length; i++) {
          var selectedProperty = comp.selectedProperties[i];
      
          if (selectedProperty.canSetExpression && selectedProperty.propertyType !== PropertyType.NO_VALUE) {
      
            var time1 = comp.time; 
            var time2 = comp.time + 0.1; 
            
            var userInput1 = prompt("Enter the start value param1:", "0");
            var userInput12 = prompt("Enter the start value param2:", "0");
            var userInput2 = prompt("Enter the final value param1:", "100");
            var userInput21 = prompt("Enter the final value param2:", "100");
      
            selectedProperty.setValueAtTime(time1, [parseInt(userInput1), parseInt(userInput2)]);
            selectedProperty.setValueAtTime(time2, [parseInt(userInput12), parseInt(userInput21)]);
    
            selectedProperty.expression = "amp = .05;freq = 2.0;decay = 2.0;n = 0;time_max = 4;if (numKeys > 0){n = nearestKey(time).index;if (key(n).time > time){n--;}}if (n == 0){ t = 0;}else{t = time - key(n).time;}if (n > 0 && t < time_max){v = velocityAtTime(key(n).time - thisComp.frameDuration/10);value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);}else{value};";
          } else {
            alert("The selected property cannot have expressions or keyframes applied to it.");
          }
        }
      } else {
        alert("Please select at least one animatable property in After Effects.");
      }
      
    };

    ElasticButtonxx2.onClick = function () {
      if (app.project.activeItem && app.project.activeItem.selectedProperties.length > 0) {
          var comp = app.project.activeItem;
        
          for (var i = 0; i < comp.selectedProperties.length; i++) {
            var selectedProperty = comp.selectedProperties[i];
        
            if (selectedProperty.canSetExpression && selectedProperty.propertyType !== PropertyType.NO_VALUE) {
        
              var time1 = comp.time; 
              var time2 = comp.time + 0.1; 
              
              var userInput1 = prompt("Enter the start value param1:", "0");
              var userInput12 = prompt("Enter the start value param2:", "0");
              var userInput2 = prompt("Enter the final value param1:", "100");
              var userInput21 = prompt("Enter the final value param2:", "100");
        
              selectedProperty.setValueAtTime(time1, [parseInt(userInput1), parseInt(userInput2)]);
              selectedProperty.setValueAtTime(time2, [parseInt(userInput12), parseInt(userInput21)]);
      
              selectedProperty.expression = "amp = .1;freq = 2.0;decay = 4.0;n = 0;time_max = 4;if (numKeys > 0){n = nearestKey(time).index;if (key(n).time > time){n--;}}if (n == 0){ t = 0;}else{t = time - key(n).time;}if (n > 0 && t < time_max){v = velocityAtTime(key(n).time - thisComp.frameDuration/10);value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);}else{value};";
            } else {
              alert("The selected property cannot have expressions or keyframes applied to it.");
            }
          }
        } else {
          alert("Please select at least one animatable property in After Effects.");
        }
        
      };

myWindow.show();
