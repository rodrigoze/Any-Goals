import './style.css';


let content = document.getElementById("content");

let myGoals = [];

function Goals (title,desc,dueDate,notes,category,email) {
    this.title = title
    this.desc= desc
    this.dueDate = dueDate
    this.notes = notes
    this.category = category
    this.email = email
}


 const goalOne = new Goals('I want to be a millionare','I want to obtain it in 1 year','24/0/22','Reaching the million-dollar mark is a laborious task and can only be accomplished by the serious individual who is willing to pay the price. Becoming a millionaire isn’t for those who just want to ‘settle’ in life. Nor will you become a millionaire if you’re looking for ‘get rich quick’ schemes. It requires high risk that can turn into high reward. Even though becoming a millionaire is easier than it’s ever been, not many people are willing or able to do it. Many people ‘play it safe’ or let their excuses hold them back. However, for those who believe they can achieve great financial wealth in their lives, keep reading. You might ask, “Why do I need to learn how to become a millionaire?” It’s simple. When most people think or talk about becoming millionaires, they’re actually looking to spend $1 million, not necessarily earn millions of dollars. However, if you really think about it, there are many more reasons for becoming a millionaire.','Goals','asd@gmail.com');


 addGoals(goalOne);


 function addGoals(myGoal) {
    myGoals.push(myGoal);
    addToPage(myGoals);
    addMain(myGoals)
  }

  function addToPage(myGoals) {
    let div = document.createElement("div");
    let title= document.createElement("div");
    let desc = document.createElement("div");
    let dueDate = document.createElement("div");
    let btns = document.createElement("div");
    let x = document.createElement("button");
    let t = document.createElement("button");
    let popUp = document.createElement("div");
    let popTitle = document.createElement("div");
    let popDate = document.createElement("div");
    let notes = document.createElement("div");
    let exit = document.createElement("button");
    t.setAttribute("type", "checkbox");
    title.id = 'title';
    div.classList.add('card');
    desc.id = 'desc';
    dueDate.id = 'dueDate';
    btns.id='btns';
    t.id='seeMore';
    popUp.id='popUp';
    popTitle.id='popTitle';
    popDate.id='popDate';
    notes.id = 'notes';
    exit.id='exit'
    exit.classList.add("x");
    x.classList.add("x");
    t.classList.add("t");
    x.addEventListener("click", remove);
    exit.addEventListener("click", escape);
    t.addEventListener("click",openPop);
    let count=0;
    for(let i=0;i<myGoals.length;i++){
    popUp.dataset.num =count;
    div.id = count;
    exit.dataset.number = count;
    x.dataset.number = count;
    t.dataset.number = count;
    x.innerHTML = `It's not my goal anymore`;
    t.innerHTML = `See More`;
    title.innerHTML = myGoals[i].title;
    desc.innerHTML = myGoals[i].desc;
    dueDate.innerHTML = `Due ${myGoals[i].dueDate}`;
    popTitle.innerHTML=myGoals[i].title;
    popDate.innerHTML = `Due ${myGoals[i].dueDate}`;
    notes.innerHTML = myGoals[i].notes;    
    exit.innerHTML='Close';
    let contents= document.getElementById('content');
    let dreams= document.getElementById('dreams');
    let three= document.getElementById('three');
    let four= document.getElementById('four');
    let five= document.getElementById('five');
    if (contents.style.display != 'none') {
      content.appendChild(div)
    } 
    else if (dreams.style.display != 'none'){
        dreams.appendChild(div)
    }
    else if (three.style.display != 'none'){
        three.appendChild(div)
    }
    else if (four.style.display != 'none'){
        four.appendChild(div)
    }
    else if (five.style.display != 'none'){
        five.appendChild(div)
    }
    div.appendChild(dueDate);
    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(notes);
    div.appendChild(btns);
    btns.appendChild(x);
    btns.appendChild(t);
    let popups=document.getElementById("popups")
    popups.appendChild(popUp);
    popUp.style.display = "none";
    popUp.appendChild(popDate);
    popUp.appendChild(popTitle);
    popUp.appendChild(notes);
    popUp.appendChild(exit);
    count++;
    }
  }

  function addMain(myGoalsa){
    let div = document.createElement("div");
    let title= document.createElement("div");
    let desc = document.createElement("div");
    let dueDate = document.createElement("div");
    let btns = document.createElement("div");
    let x = document.createElement("button");
    let t = document.createElement("button");
    let popUp = document.createElement("div");
    let popTitle = document.createElement("div");
    let popDate = document.createElement("div");
    let notes = document.createElement("div");
    let exit = document.createElement("button");
    t.setAttribute("type", "checkbox");
    title.id = 'title';
    div.classList.add('card');
    desc.id = 'desc';
    dueDate.id = 'dueDate';
    btns.id='btns';
    t.id='seeMore';
    popUp.classList.add('popUp')
    popUp.id='popUp';
    popTitle.id='popTitle';
    popDate.id='popDate';
    notes.id = 'notes';
    exit.id='exit'
    exit.classList.add("x");
    x.classList.add("x");
    t.classList.add("t");
    x.addEventListener("click", remove);
    exit.addEventListener("click", escape);
    t.addEventListener("click",openPop);
    let count=0;
    for(let i=0;i<myGoals.length;i++){
      popUp.id=count;
    popUp.dataset.num =count;
    div.id = count;
    exit.dataset.number = count;
    x.dataset.number = count;
    t.dataset.number = count;
    x.innerHTML = `It's not my goal anymore`;
    t.innerHTML = `See More`;
    title.innerHTML = myGoals[i].title;
    desc.innerHTML = myGoals[i].desc;
    dueDate.innerHTML = `Due ${myGoals[i].dueDate}`;
    popTitle.innerHTML=myGoals[i].title;
    popDate.innerHTML = `Due ${myGoals[i].dueDate}`;
    notes.innerHTML = myGoals[i].notes;    
    exit.innerHTML='Close';
    let main= document.getElementById('allGoals');
    main.appendChild(div)
    div.appendChild(dueDate);
    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(btns);
    btns.appendChild(x);
    btns.appendChild(t);

    count++;
    }
  }
function remove(index){
    myGoals.splice(index, 1);
    let a= index.target.getAttribute('data-number');
    const eli = document.getElementById(a);
    eli.remove();
    const abi = document.getElementById(a);
    abi.remove();
  
   }

   function escape(index){
    let p= index.target.getAttribute('data-number');
    let popups=document.querySelectorAll('#popUp');
    let eas=Array.from(popups);
    eas[p].style.display="none";
   }

   function openPop(indexo){
    let a= indexo.target.getAttribute('data-number');
    let popups=document.querySelectorAll('#popUp');
    let ea=Array.from(popups);
    ea[a].style.display="flex";
    const eli = document.getElementById(a);
    const b= eli.lastChild;
    eli.style.display="flex";
   }

   document.getElementById("addButton").addEventListener("click", openForm);

   function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  document.getElementById("closeButton").addEventListener("click", closeForm);
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  document.getElementById("newProject").addEventListener("click", newProjects);
  function newProjects() {
    document.getElementById("myProject").style.display = "block";
  }

  document.getElementById("closeButtons").addEventListener("click", closeFormTwo);
  function closeFormTwo() {
    document.getElementById("myProject").style.display = "none";
  }



  document.getElementById("submit").addEventListener("click", function(evt){
    evt.preventDefault();
    let formTitle = document.getElementById("formTitle");
    let formDesc = document.getElementById("formDesc");
    let formNote = document.getElementById("formNote");
    let formDate = document.getElementById("formDate");
    const goalThree = new Goals (formTitle.value,formDesc.value,formDate.value,formNote.value,'');
    addGoals(goalThree);
    formTitle.value = '';
    formDesc.value = '';
    formNote.value= '';
    formDate.value= '';
    document.getElementById("myForm").style.display = "none";
   });


   
   
   document.getElementById("all").addEventListener("click",home)
   document.getElementById("10").addEventListener("click",home)
   document.getElementById("11").addEventListener("click",home)
   if(document.getElementById("12"))
   document.getElementById("12").addEventListener("click",home)
   if(document.getElementById("13"))
   document.getElementById("13").addEventListener("click",home)
   if(document.getElementById("14"))
   document.getElementById("14").addEventListener("click",home)

   let c=12;
   document.getElementById("submits").addEventListener("click", function(evt){
    evt.preventDefault();
    if(c<15){
    let projectName = document.getElementById("projectName");
    let project = document.createElement("div");
    let nav=document.getElementById('nav');
    project.innerHTML= projectName.value;
    project.classList.add("link");
    nav.appendChild(project);
    projectName.value ='';
    project.addEventListener("click",home)
    project.id=c;
    c++;
    projectName.value ='';
    document.getElementById("myProject").style.display = "none";
    }
    if(c===15){
    document.getElementById("myProject").style.display = "none";
    }
   });

   function home(index){
    let d= event.srcElement.id;
    const boxy = document.getElementById(d);
    console.log(d)
    if(d==='10')
    {
        document.getElementById('dreams').style.display='none';
        document.getElementById('three').style.display='none';
        document.getElementById('four').style.display='none';
        document.getElementById('five').style.display='none';
        document.getElementById('content').style.display='flex';
        document.getElementById('allGoals').style.display='none';
        document.getElementById('10').style.fontWeight=800;
        document.getElementById('11').style.fontWeight=200;
        document.getElementById('all').style.fontWeight=200;
        document.getElementById('12').style.fontWeight=200;
        document.getElementById('13').style.fontWeight=200;
        document.getElementById('14').style.fontWeight=200;
    }
    if(d==='11')
    {
        document.getElementById('dreams').style.display='flex';
        document.getElementById('three').style.display='none';
        document.getElementById('four').style.display='none';
        document.getElementById('five').style.display='none';
        document.getElementById('content').style.display='none';
        document.getElementById('allGoals').style.display='none';
        document.getElementById('all').style.fontWeight=200;
        document.getElementById('10').style.fontWeight=200;
        document.getElementById('11').style.fontWeight=800;
        document.getElementById('12').style.fontWeight=200;
        document.getElementById('13').style.fontWeight=200;
        document.getElementById('14').style.fontWeight=200;

    }
    if(d==='all')
    {
      document.getElementById('all').style.fontWeight=800;
        document.getElementById('dreams').style.display='none';
        document.getElementById('three').style.display='none';
        document.getElementById('four').style.display='none';
        document.getElementById('five').style.display='none';
        document.getElementById('content').style.display='none';
        document.getElementById('allGoals').style.display='flex';
        document.getElementById('10').style.fontWeight=200;
        document.getElementById('11').style.fontWeight=200;
        document.getElementById('12').style.fontWeight=200;
        document.getElementById('13').style.fontWeight=200;
        document.getElementById('14').style.fontWeight=200;

    }
    if(d==='12')
    {
        document.getElementById('dreams').style.display='none';
        document.getElementById('three').style.display='flex';
        document.getElementById('four').style.display='none';
        document.getElementById('five').style.display='none';
        document.getElementById('content').style.display='none';
        document.getElementById('allGoals').style.display='none';
        document.getElementById('10').style.fontWeight=200;
        document.getElementById('11').style.fontWeight=200;
        document.getElementById('12').style.fontWeight=800;
        document.getElementById('13').style.fontWeight=200;
        document.getElementById('all').style.fontWeight=200;
        document.getElementById('14').style.fontWeight=200;

    }
    if(d==='13')
    {
        document.getElementById('dreams').style.display='none';
        document.getElementById('three').style.display='none';
        document.getElementById('four').style.display='flex';
        document.getElementById('five').style.display='none';
        document.getElementById('content').style.display='none';
        document.getElementById('allGoals').style.display='none';
        document.getElementById('10').style.fontWeight=200;
        document.getElementById('11').style.fontWeight=200;
        document.getElementById('12').style.fontWeight=200;
        document.getElementById('13').style.fontWeight=800;
        document.getElementById('all').style.fontWeight=200;
        document.getElementById('14').style.fontWeight=200;

    }
    if(d==='14')
    {
        document.getElementById('dreams').style.display='none';
        document.getElementById('three').style.display='none';
        document.getElementById('four').style.display='none';
        document.getElementById('five').style.display='flex';
        document.getElementById('content').style.display='none';
        document.getElementById('allGoals').style.display='none';
        document.getElementById('10').style.fontWeight=200;
        document.getElementById('11').style.fontWeight=200;
        document.getElementById('12').style.fontWeight=200;
        document.getElementById('13').style.fontWeight=200;
        document.getElementById('all').style.fontWeight=200;
        document.getElementById('14').style.fontWeight=800;

    }
}
