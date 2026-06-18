function generateTable() {
    let num=document.getElementById("numberInput").value;
    let resultDiv=document.getElementById("result");
    resultDiv.innerHTML=""; 
    if(num === "")
    {
        resultDiv.innerHTML="Please enter a number!";
        return;
    }
    num=parseInt(num);
    for(let i=1; i<=10; i++)
    {
        resultDiv.innerHTML+= num + " x " + i + " = " + (num*i) + "<br>";
    }
}