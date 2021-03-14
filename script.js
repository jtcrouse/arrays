var wrap = document.body.querySelector(".wrap");

var x=0;
var y=0;

var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },
  {
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
];


for(var x=0; x<warriors.length; x++)
  {  
    var ele = document.createElement("div");
    var nameEle = document.createElement("h1");
    var damageEle=document.createElement("h2");
    var healthEle = document.createElement("h3");
    var warriorEle = document.createElement("h3");
    nameEle.innerHTML = warriors[x].name;
    damageEle.innerHTML = "Damage: " + warriors[x].damage;
    healthEle.innerHTML = "Health: " + warriors[x].health;
    ele.appendChild(nameEle);
    ele.appendChild(damageEle);
    ele.appendChild(healthEle);
    ele.appendChild(warriorEle);
    if(warriors[x].health>=10)
      {
        if(warriors[x].damage>=2)
          {
            if(warriors[x].warrior===true)
              {
                wrap.appendChild(ele);
                if(warriors[x].name.includes("a"))
                  {
                    ele.style.color = "red";

                  }
              }
          }
      }
  }