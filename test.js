console.log("IT IS WORKING NIRMITH")

fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=NirmithVictor').then(res => res.json()).then((content)=>{
    console.log(content)
    fetch('https://api.github.com/users/NirmithVictor/followers').then(res => res.json()).then((content)=>{
    console.log(content)
    })
})