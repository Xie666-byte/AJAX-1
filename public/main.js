


//加载1.css
getCSS.onclick=()=>{
    const request=new XMLHttpRequest()
    //通过http请求获取1.css
    request.open('GET','/1.css')
    //把从1.css获取的文件放到创建好的style标签里
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<300){
            const style=document.createElement('style')
                style.innerHTML=request.response
                document.head.appendChild(style)
        }
    }
    //放松http请求
    request.send()
}
//加载2.js
getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<300){
            const script=document.createElement('script')
            script.innerHTML=request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}
//加载3.html
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<300){
            const div=document.createElement('div')
            div.innerHTML=request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}
//加载4.xml
getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<300){
            //直接获取xml的响应，是一个dom对象
            const dom=request.responseXML
            //操作dom对象
            const string=dom.querySelector('warning').textContent
            console.log(string.trim())
        }
    }
    request.send()
}
//加载5.json
getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/5.json`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<300){
            //将JSON变成JS类型
            const object=JSON.parse(request.response)
            console.log(object)
            myName.textContent=object.name
        }
    }
    request.send()
}
let n=1
//请求下一页
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<300){
            //把响应变成JS数组
            const array=JSON.parse(request.response)
            array.forEach(element => {
                const li=document.createElement('li')
                li.textContent=element.id
                xxx.appendChild(li)
            });
            n=n+1;
        }
    }
    request.send()
}