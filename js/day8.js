// VS CODE CHEAT - CTRL F LEFT-DOWNARROW- LETS YOU REPLACE ANY WORD


// DAY 8 NOTES
const smiley = {
    head: {
        color: "yellow",
        height: '200px',
        width: '200px',
        radius: "50%",
        position: "relative",
    },
    LeftEye: {
        color: "blue",
        radius: "50%",
        height: "50px",
        width: "50px",
        top: "50px",
        right: "50px",
        position: "absolute",
    },
    RightEye: {
        color: "blue",
        radius: "50%",
        height: "",
        width: "",
        top: "50px",
        right: "45px",
        position: "absolute",
    },
    Mouth: {
        color: "transparent",
        height: '50px',
        width: '70px',
        radius: "50%",
        position: "relative",
        top: "100px",
        right: "calc(50% - 35px)",
        borderBottom: "10px solid black",
    }
    face: null;
    createFace: function() {
        // create a new div
        this.face = document.createElement("div");
        this.face.addEventListener
        const div = this.face
        // place it in the body
        document.body.appendChild(div);
        // style the div
        div.style.backgroundColor = smiley.head.color;
        div.style.height = smiley.head.height;
        div.style.width = smiley.head.width;
        div.style.borderRadius = smiley.head.radius;
        div.style.position = smiley.head.position;
    }
    createLeftEye function() {
        this.face = document.createElement("div");
        const div = this.face
        this.face.appendChild(div);
        div.style.backgroundColor = smiley.leftEye.color;
        div.style.height = smiley.leftEye.height;
        div.style.width = smiley.leftEye.width;
        div.style.borderRadius = smiley.leftEye.radius;
        div.style.top = smiley.leftEye.top;
        div.style.right = smiley.leftEye.right;
    }
    createRightEye function() {
        this.face = document.createElement("div");
        const div = this.face
        this.face.appendChild(div);
        div.style.backgroundColor = smiley.RightEye.color;
        div.style.height = smiley.RightEye.height;
        div.style.width = smiley.RightEye.width;
        div.style.borderRadius = smiley.RightEye.radius;
        div.style.top = smiley.RightEye.top;
        div.style.right = smiley.RightEye.right;
    }
    createMouth function() {
        this.face = document.createElement("div");
        const div = this.face
        this.face.appendChild(div);
        div.style.backgroundColor = smiley.Mouth.color;
        div.style.height = smiley.Mouth.height;
        div.style.width = smiley.Mouth.width;
        div.style.borderRadius = smiley.Mouth.radius;
        div.style.top = smiley.Mouth.top;
        div.style.right = smiley.Mouth.right;
        div.style.borderBottom = smiley.Mouth.borderBottom;
    }
}
}

class Smiley = {
    winking = false;
    constructor(headColor = 'yellow') {
        this.head.color = "red";
        this.createFace();
        this.createLeftEye();
        this.createRightEye();
        this.createMouth();
        console.log(this.head)
    }
    wink () {

        console.log(this)
        this.left.style.height = '1px';
        this.left.style.top = '75px';
    }
    head = {
        color: "yellow",
        height: '200px',
        width: '200px',
        radius: "50%",
        position: "relative",
    };
    LeftEye = {
        color: "blue",
        radius: "50%",
        height: "50px",
        width: "50px",
        top: "50px",
        right: "50px",
        position: "absolute",
    };
    RightEye = {
        color: "blue",
        radius: "50%",
        height: "",
        width: "",
        top: "50px",
        right: "45px",
        position: "absolute",
    };
    Mouth = {
        color: "transparent",
        height: '50px',
        width: '70px',
        radius: "50%",
        position: "relative",
        top: "100px",
        right: "calc(50% - 35px)",
        borderBottom: "10px solid black",
    };
    face: null;
    createFace: function() {
        // create a new div
        this.face = document.createElement("div");
        const div = this.face
        // place it in the body
        document.body.appendChild(div);
        // style the div
        div.style.backgroundColor = smiley.head.color;
        div.style.height = smiley.head.height;
        div.style.width = smiley.head.width;
        div.style.borderRadius = smiley.head.radius;
        div.style.position = smiley.head.position;
    }
    createLeftEye function() {
        this.face = document.createElement("div");
        const div = this.face
        this.face.appendChild(div);
        div.style.backgroundColor = smiley.leftEye.color;
        div.style.height = smiley.leftEye.height;
        div.style.width = smiley.leftEye.width;
        div.style.borderRadius = smiley.leftEye.radius;
        div.style.top = smiley.leftEye.top;
        div.style.right = smiley.leftEye.right;
    }
    createRightEye function() {
        this.face = document.createElement("div");
        const div = this.face
        this.face.appendChild(div);
        div.style.backgroundColor = smiley.RightEye.color;
        div.style.height = smiley.RightEye.height;
        div.style.width = smiley.RightEye.width;
        div.style.borderRadius = smiley.RightEye.radius;
        div.style.top = smiley.RightEye.top;
        div.style.right = smiley.RightEye.right;
    }
    createMouth function() {
        this.face = document.createElement("div");
        const div = this.face
        this.face.appendChild(div);
        div.style.backgroundColor = smiley.Mouth.color;
        div.style.height = smiley.Mouth.height;
        div.style.width = smiley.Mouth.width;
        div.style.borderRadius = smiley.Mouth.radius;
        div.style.top = smiley.Mouth.top;
        div.style.right = smiley.Mouth.right;
        div.style.borderBottom =
}
}
}


// DAY 8 INCLASS ASSIGNMENT

const myDog = {
    name: "Winston",
    legs: '3',
    color: "brown",
    speak: function() {
        alert('${this.name} says woof!!');
    },
    washDishes: function() {
        alert('${this.name} washed the dishes!')
    },
}

function speakTrick(){
    alert("Woof!")
}
const button = document.createElement('button')
document.body.innerHTML
button.innerHTML = "SPEAK!!!"
button.addEventListener('click', speakTrick)


// DAY 8 TAKEHOME ASSIGNMENT