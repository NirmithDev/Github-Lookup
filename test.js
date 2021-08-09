console.log("IT IS WORKING NIRMITH")
//yeah this might be a bad practice
//but if it works it works
fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=NirmithVictor').then(res => res.json()).then((content2)=>{
    //console.log(content)
    fetch('https://api.github.com/users/NirmithVictor/followers').then(res => res.json()).then((content1)=>{
    //console.log(content)
        fetch('https://api.github.com/users/NirmithVictor/following').then(res => res.json()).then((content)=>{
        console.log(content)
        console.log(content1)
        console.log(content2)
        })
    })
})