let isLoading =true;

function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject("rejected!!"), 2000);
    })
}

function App() {
    console.log("is Loading ......");
    getData()
    .then(response => console.log(response))
    .catch(err=> console.log(err)).finally(()=> {
        isLoading=false;
    console.log(`Loading : ${isLoading}`);
    })
}

App();