// function to change total interview count 

function CountForInterview(){
    const totalIn = document.getElementById('total');
    const total= totalIn.innerText;


    const semiTotalIn = document.getElementById('semi-total');
    const semiTotal= totalIn.innerText;


    const interviewIn = document.getElementById('interview');
    const interview= interviewIn.innerText;
    const totalNew=Number(total)-1;

    const semiTotalNew=Number(total)-1;
    document.getElementById('semi-total').innerText= semiTotalNew;


    document.getElementById('total').innerText= totalNew;
    const interviewNew=Number(interview)+1;
    document.getElementById('interview').innerText= interviewNew;
    

}

// function to change total rejected count 

function CountForRejected(){
    const totalIn = document.getElementById('total');
    const total= totalIn.innerText;

    const semiTotalIn = document.getElementById('semi-total');
    const semiTotal= totalIn.innerText;
    
    const rejectedIn = document.getElementById('rejected');
    const rejected= rejectedIn.innerText;
    
    const totalNew=Number(total)-1;
    document.getElementById('total').innerText= totalNew;

    const semiTotalNew=Number(total)-1;
    document.getElementById('semi-total').innerText= semiTotalNew;

    
    const rejectedNew=Number(rejected)+1;
    document.getElementById('rejected').innerText= rejectedNew;

}

function changeButtonInter(id1,id2){
    const changeBtn = document.getElementById(id1);
    changeBtn.classList.add('hidden');
    const changeBtnDiv = document.getElementById(id2);
    const newBtn  = document.createElement('button')
    changeBtnDiv.appendChild(newBtn);
    newBtn.innerHTML= `<button class="btn btn-outline btn-success">interview</button>`;
    
}


function changeButtonReje(id1,id2){
    const changeBtn = document.getElementById(id1);
    changeBtn.classList.add('hidden');
    const changeBtnDiv = document.getElementById(id2);
    const newBtn  = document.createElement('button')
    changeBtnDiv.appendChild(newBtn);
    newBtn.innerHTML= `<button class="btn btn-outline btn-error">Rejected</button>`;
    
}


function interviewPage(){
    if(document.getElementById('interview').innerText==0){
        document.getElementById('defaultIRpage').classList.remove('hidden');
        document.getElementById('section-0ne').classList.add('hidden');
        document.getElementById('section-two').classList.add('hidden');
        document.getElementById('section-three').classList.add('hidden');
        document.getElementById('section-four').classList.add('hidden');
        document.getElementById('section-five').classList.add('hidden');
        document.getElementById('section-six').classList.add('hidden');
        document.getElementById('section-seven').classList.add('hidden');
        document.getElementById('section-eight').classList.add('hidden');


    }
    
    
    
}
   
function rejectedPage(){
    if(document.getElementById('rejected').innerText==0){
        document.getElementById('defaultIRpage').classList.remove('hidden');
        document.getElementById('section-0ne').classList.add('hidden');
        document.getElementById('section-two').classList.add('hidden');
        document.getElementById('section-three').classList.add('hidden');
        document.getElementById('section-four').classList.add('hidden');
        document.getElementById('section-five').classList.add('hidden');
        document.getElementById('section-six').classList.add('hidden');
        document.getElementById('section-seven').classList.add('hidden');
        document.getElementById('section-eight').classList.add('hidden');


    }
    
}
function mainPage(){
        document.getElementById('defaultIRpage').classList.add('hidden');
        document.getElementById('section-0ne').classList.remove('hidden');
        document.getElementById('section-two').classList.remove('hidden');
        document.getElementById('section-three').classList.remove('hidden');
        document.getElementById('section-four').classList.remove('hidden');
        document.getElementById('section-five').classList.remove('hidden');
        document.getElementById('section-six').classList.remove('hidden');
        document.getElementById('section-seven').classList.remove('hidden');
        document.getElementById('section-eight').classList.remove('hidden');


    }


    function interviewClick(value){
        document.getElementById('defaultIRpage').classList.add('hidden');

        const mainIn = document.getElementById(value);
        const main = mainIn.innerHTML;


        const copyIn = document.getElementById('card-section-interview');
        const copy = document.createElement('div');
        copy=main;
        copyIn.appendChild(copy);

    }


    function deleteBtn(value){
       const deleteB = document.getElementById(value);
       deleteB.classList.add('hidden');
    }

    