let evenNum = [];

function evenNumCal(){
    for(let i=1; i<51; i++)
    {
        if(i%2 == 0){
            evenNum.push(i);
        }
    }return evenNum;
}
evenNumCal();

console.log(evenNum);