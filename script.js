// function displayNumber(num)
// {
// // document.getElementById("result").value+=num
// result.value+=num}

// function evaluateExpression(){
//     let res=eval(result.value)
//     result.value=res
// }

// function clearBox(){
//     result.value=""
// }

// function removeNumber(){
//     let rest=result.value.slice(0,-1)
//     result.value=rest
// }




let displayNumber = (num) => result.value += num
let evaluateExpression = () => {
    if (result.value == "") {
        result.value = "0";
    }
    else {
        try {

            result.value = eval(result.value)
        }
        catch
        {
            result.value="error"
        }
    }
}

    // let evaluateExpression=()=>result.value==""?0:result.value=eval(result.value)

    let clearBox = () => result.value = ""
    let removeNumber = () => result.value = result.value.slice(0, -1)
