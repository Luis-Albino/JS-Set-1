const target = document.getElementById("target");

Object.prototype.styleElement = function (newColor,newSize,newBackground) {
    this.style.color = newColor?newColor:"black";
    this.style.fontSize = newSize?newSize:"20px";
    this.style.background = newBackground?newBackground:"white";
};

target.styleElement("red","35px","blue");



// const target = document.getElementById("target");

// function styleElement (element,newColor,newSize,newBackground) {
//     function NewElement (obj) {
//         for (let prop in obj) {
//             this[prop] = obj[prop];
//         }
//         this.style.color = newColor;
//         this.style.fontSize = newSize;
//         this.style.background = newBackground;
//     };

//     let newElement = new NewElement(element);
//     element.parentNode.replaceChild(newElement,element);
// };

// styleElement(target,"red","35px","blue");