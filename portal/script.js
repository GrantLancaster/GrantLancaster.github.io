class ParentBox {
  constructor(num) {
    this.num = num;
  }

  styleParent() {
    let parent = document.getElementById(`parent ${this.num}`);
    parent.style.display = "flex";
    parent.style.margin = "1%";
  }

  buildParent() {
    const parentDiv = document.createElement("div");
    
    parentDiv.setAttribute("id", `parent ${this.num}`)
    document.body.appendChild(parentDiv);

    this.styleParent();
  }
}

class Module {
  constructor(parent, content=" ", color="white", border="0px solid black", number="0", backgroundColor="white", fill="1") {
    this.parent = parent;
    this.content = content;
    this.color = color;
    this.bgColor = backgroundColor;
    this.border = border;
    this.num = number;
    this.fill = `${fill}`
    array.push(this);

  }

  style(color, backgroundColor, curve, padding, margin, fill) { 
  //This styles the modules to the specified attributes stated in
  // the description
    let element = document.getElementById(`objdiv ${this.num}`);

    element.style.color = color;
    element.style.backgroundColor = backgroundColor;
    element.style.padding = padding;
    element.style.margin = margin;
    element.style.borderRadius = curve
    element.style.flex = fill
  }

  build() { //Builds as a child of the <body> of the document
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(this.content);

    newDiv.appendChild(newContent);
    newDiv.setAttribute("id", `objdiv ${this.num}`);
    document.body.appendChild(newDiv);

    this.style(this.color, this.bgColor, "10px", "1%", "1%", this.fill);
  }

  buildAsChild() { //Builds as a child of another <div>
    const parent = document.getElementById(`parent ${this.parent}`);
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(this.content);

    newDiv.appendChild(newContent);
    newDiv.setAttribute("id", `objdiv ${this.num}`);
    parent.appendChild(newDiv);

    this.style(this.color, this.bgColor, "10px", "1%", "1%", this.fill);
  }
}

const array = [];
const parent = new ParentBox(1);
parent.buildParent();
const mod = new Module(1, "Im a new div", "black", "5px solid black", 1, "white", 1);
const mod2 = new Module(1, "I'm another new div", "black", "2px solid orange", 2, "white", 3);
const mod3 = new Module(1, "I am gonna screen", "blue", "2px solid black", 3, "white", 4);
mod.buildAsChild();
mod2.buildAsChild();
mod3.build();
/*for (let i = 0; i < array.length; i++) {
  array[i].build();
}*/

//document.body.onload = addElement;
/*
function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Im the new div added with JS!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.appendChild(newDiv);
  
  //Changing an attribute to an element
  newDiv.setAttribute("id","div2");

  //Changing the style of elements by selecting with id
  document.getElementById("div2").style.border = "5px solid green";
}*/