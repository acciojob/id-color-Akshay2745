//your JS code here. If required.
   ["yellow","red","green"].map(id => {
     const s = getComputedStyle(document.getElementById(id));
     return id + ": " + s.backgroundColor + " | " + s.borderTopWidth + " " + s.borderTopColor;
   })