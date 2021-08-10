//yeah this might be a bad practice
//but if it works it works

let b= document.getElementById("submit")
let c=  document.getElementById("searchs")
//load this when the document loads
document.addEventListener("DOMContentLoaded",function(){
    console.log("IT IS WORKING NIRMITH")
    //click the submit button
    b.addEventListener("click",()=>{
        console.log("I WAS CLICKED")
        //take in user input
        console.log(c.value)
        //after taking in the searched name create api call to get the searched username detaisl
        fetch(`https://api.github.com/users/${c.value}`).then(res=>res.json()).then((content)=>{
            //console.log(content)
            //fetch for user's followers and fetch for user's following as well as pinned repos cuz this shit is just plain plain stupid
            fetch(`https://api.github.com/users/${c.value}/followers`).then(res => res.json()).then((content1)=>{
            //console.log(content)
                fetch(`https://api.github.com/users/${c.value}/following`).then(res => res.json()).then((content2)=>{
                    //console.log(content1.length)
                    console.log(content)
                    console.log(content1.length)
                    console.log(content2.length)
                    //get the name
                    console.log(content.login)
                    console.log(content.avatar_url)
                    //append this to the front end
                    let topInfo = document.getElementById("wrape")
                    //add the username
                    console.log(content.bio)
                    if(content.bio==null){
                        console.log("NO USER BIO")
                    }
                   let follower_len = content1.length
                   let following_len = content2.length
                    topInfo.innerHTML = `
                    <div class="side right">
                        <div class="imageContainer" style="margin-top: 15px;">
                            <img class="images" src=${content.avatar_url} alt="username logo">
                        </div>
                    </div>
                    <div class="side left">
                      <div class="caption capt" >
                        <!--Make the username capitalized-->
                        <p class="username" style="color: white;">${content.login}</p>
                            <!--Same thing for this-->
                            <div class="side left2">
                                <div class="caption">
                                        <a class="button" href="#">${follower_len} Followers</a>
                                </div>
                                <div class="caption">
                                        <a class="button" href="#">${following_len} Following</a>
                                </div>
                            </div>    
                      </div>
                    </div>
                    `
                    //bio of the user 
                    //special case when there is no user bio
                    let bio = document.getElementById("bios")
                    if(content.bio==null){
                        bio.innerHTML=`
                            <p class="bios" id="bios"> Bio&nbsp;: &nbsp; <q>NO USER BIO</q></p>
                        `
                    }
                    else{
                        bio.innerHTML=`
                            <p class="bios" id="bios"> Bio&nbsp;: &nbsp; <q>${content.bio}</q></p>
                        `
                    }
                    //Display Followers and Following List
                    console.log(content1)
                    console.log(content2)
                    let followers = document.getElementById("follows_dets")
                    let follow_lis = ""
                    for(let i=0;i<content1.length;i++){
                        follow_lis += `
                        <div class="follows">
                            <div class="followImage" style="display: block; margin: auto;margin-right: 10px;">
                                <img class="images2" src=${content1[i].avatar_url} alt="username logo">
                            </div>                            
                            <div class="followUsernam">
                                <p>${content1[i].login}</p>
                            </div>
                        </div>
                    `
                    }
                    followers.innerHTML=follow_lis

                })
            })
        })
        //create a fetch for the pinned repos separately
        fetch(`https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${c.value}`).then(res => res.json()).then((content)=>{
            console.log(content)
            console.log(content.length)
            let pinnedRepo=document.getElementById("repo_details")
            let pinnedRepo_Out=""
            for(let i=0;i<content.length;i++){
                pinnedRepo_Out+=`
                <div class="item">
                    <div class="repo_name">${content[i].repo}</div>
                    <!--Number of stars and forks make it clickable to the repo link-->
                    <div id="brah">
                        <!--Stars-->
                        <div class="star" style="padding: 10px;">
                            <i class="far fa-star"></i>${content[i].stars}
                        </div>
                        <!--Forks-->
                        <div class="fork"  style="padding: 10px;">
                            <i class="fas fa-code-branch"></i>${content[i].forks}
                        </div>
                    </div>
                </div>
                `
            }
            pinnedRepo.innerHTML=pinnedRepo_Out
        })
    })
    //special case scenario
        //empty input or if user not found
})