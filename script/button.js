// discover
const dis= document.getElementById('discover')
    .addEventListener('click', function(){
        window.location.href="./main.html"
    })





    // completed
  const mobileButton =  document.getElementById('btn-card1')
        .addEventListener('click', function(){
            alert('Board Update Successfully')
        const task =  document.getElementById('task')
        task.innerHTML='05';
        const number =document.getElementById('number')
            number.innerHTML ='<p id="number" class="font-bold">25</p>';
         const container=   document.getElementById('active1')
            const p = document.createElement('p');
            p.innerText='You have completed the task Fix Mobile Button Issue at 1:26:53 AM'
            container.appendChild(p)
            this.classList.add("blur-effect");
                 this.disabled = true;

           

          
});
        
    document.getElementById('btn-card2')
        .addEventListener('click', function(){
            alert('Board Update Successfully')
        const task =  document.getElementById('task')
        task.innerHTML='04';
        const number =document.getElementById('number')
            number.innerHTML ='<p id="number" class="font-bold">26</p>';
            const container=   document.getElementById('active2')
            const p = document.createElement('p');
            p.innerText='You have completed the task Add Dark Mode at 9:26:53 pM'
            container.appendChild(p)
            this.classList.add("blur-effect");
                 this.disabled = true;
        })
    document.getElementById('btn-card3')
        .addEventListener('click', function(){
            alert('Board Update Successfully')
        const task =  document.getElementById('task')
        task.innerHTML='03';
        const number =document.getElementById('number')
            number.innerHTML ='<p id="number" class="font-bold">27</p>';
            document.getElementById('')
            const container=   document.getElementById('active3')
            const p = document.createElement('p');
            p.innerText='You have completed the task Optimize Home page  at 7:20:53 AM'
            container.appendChild(p)
            this.classList.add("blur-effect");
                 this.disabled = true;
        })
    document.getElementById('btn-card4')
        .addEventListener('click', function(){
            alert('Board Update Successfully')
        const task =  document.getElementById('task')
        task.innerHTML='02';
        const number =document.getElementById('number')
            number.innerHTML ='<p id="number" class="font-bold">28</p>';
            const container=   document.getElementById('active4')
            const p = document.createElement('p');
            p.innerText='You have completed the task Add new emoji 🤲 at 6:08:3 pM'
            container.appendChild(p)
            this.classList.add("blur-effect");
                 this.disabled = true;
        })
    document.getElementById('btn-card5')
        .addEventListener('click', function(){
            alert('Board Update Successfully')
        const task =  document.getElementById('task')
        task.innerHTML='01';
        const number =document.getElementById('number')
            number.innerHTML ='<p id="number" class="font-bold">29</p>';
            const container=   document.getElementById('active5')
            const p = document.createElement('p');
            p.innerText='You have completed the task Integrate OpenAI API at 1:26:53 AM'
            container.appendChild(p)
            this.classList.add("blur-effect");
                 this.disabled = true;
        })
    document.getElementById('btn-card6')
        .addEventListener('click', function(){
            alert('Board Update Successfully')
            alert('congras!')
        const task =  document.getElementById('task')
        task.innerHTML='01';
        const number =document.getElementById('number')
            number.innerHTML ='<p id="number" class="font-bold">29</p>';
            const container=   document.getElementById('active5')
            const p = document.createElement('p');
            p.innerText='You have completed the task Improve Job searching at 1:26:53 AM'
            container.appendChild(p)
            this.classList.add("blur-effect");
                 this.disabled = true;
        })

        // clear history

        document.getElementById('clear-history')
            .addEventListener('click', function(){
                
                handleToggle('active1','none')
                handleToggle('active2','none')
                handleToggle('active3','none')
                handleToggle('active4','none')
                handleToggle('active5','none')
                handleToggle('active6','none')
               
            })

            function handleToggle(id,status){
                document.getElementById(id).style.display=status;
            }


        //round
     const dala=   document.getElementById('round-btn')
        .addEventListener('click',function(){
            document.getElementById('body').style.backgroundColor='green';
            document.getElementById('body').style.backgroundColor='red';
            document.getElementById('body').style.backgroundColor='yellow';
            
            document.getElementById('body').style.backgroundColor='purple';
        })  
        const man=   document.getElementById('round-btn')
        .addEventListener('click',function(){
            document.getElementById('body').style.backgroundColor='blue';
        })



        
           

