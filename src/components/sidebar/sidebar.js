/* eslint-disable react-hooks/exhaustive-deps */
import "./sidebar.css"
import { FaTag } from "react-icons/fa";
import alpha from "../../assets/alpha.PNG";
import numerical from "../../assets/numerical.PNG";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { useState,useContext, useEffect} from "react";
import ListTags from "./listTags"
import { DataContext } from "../../context/context";

export default function Sidebar()
{
    const {data,setTags} =useContext(DataContext)
    const [active,setActive]=useState("")

    let tags={
        language:{},
        topics:{},
        license:{},
        stargazers_count:{
            "0-50":0,
            "50-100":0,
            "100-500":0,
            "500-1000":0,
            "1000-10000":0
        },
        forks_count:{
            "0-50":0,
            "50-100":0,
            "100-500":0,
            "500-1000":0,
            "1000-2000":0
        },
        watchers_count:{
            "0-50":0,
            "50-100":0,
            "100-500":0,
            "500-1000":0,
            "1000-12000":0
        },
        open_issues_count:{
            "0-100":0,
            "100-200":0,
            "200-300":0,
            "300-400":0,
            "400-600":0
        },
        has_wiki:{
            true:0,
            false:0
        }
    }

    useEffect(()=>{
        setTags({...tags})
    },[])

    if(data.length<1) return[]

    // console.log(data)

    

    
    data.forEach((a)=>{
        //filtering language tags
        tags.language[a.language]=(tags.language[a.language]||0)+1

        //filtering topics tags
        a.topics.forEach((b)=>{
            tags.topics[b]= (tags.topics[b]||0)+1

        //filtering license tags
        for (let c in a.license)
          {
             if(c==="key")
            // console.log(a.license[c])
              tags.license[a.license[c]]=(tags.license[a.license[c]]||0)+1
          }
        })
        //filtering stars count
        
        //0-50
        if(a.stargazers_count <= 50) tags.stargazers_count["0-50"]=tags.stargazers_count["0-50"]+1
        else if(a.stargazers_count > 50 && a.stargazers_count <=100 ) tags.stargazers_count["50-100"]++
        else if(a.stargazers_count > 100 && a.stargazers_count <=500 ) tags.stargazers_count["100-500"]++
        else if(a.stargazers_count > 500 && a.stargazers_count <=1000 ) tags.stargazers_count["500-1000"]++
        else if(a.stargazers_count > 1000 && a.stargazers_count <=10000 ) tags.stargazers_count["1000-10000"]++


        //filtering forks count
        if(a.forks_count <= 50) tags.forks_count["0-50"]=tags.forks_count["0-50"]+1
        else if(a.forks_count > 50 && a.forks_count <=100 ) tags.forks_count["50-100"]++
        else if(a.forks_count > 100 && a.forks_count <=500 ) tags.forks_count["100-500"]++
        else if(a.forks_count > 500 && a.forks_count <=1000 ) tags.forks_count["500-1000"]++
        else if(a.forks_count > 1000 && a.forks_count <=2000 ) tags.forks_count["1000-2000"]++

        //filtering watchers count
        if(a.watchers_count <= 50) tags.watchers_count["0-50"]=tags.watchers_count["0-50"]+1
        else if(a.watchers_count > 50 && a.watchers_count <=100 ) tags.watchers_count["50-100"]++
        else if(a.watchers_count > 100 && a.watchers_count <=500 ) tags.watchers_count["100-500"]++
        else if(a.watchers_count > 500 && a.watchers_count <=1000 ) tags.watchers_count["500-1000"]++
        else if(a.watchers_count > 1000 && a.watchers_count <=2000 ) tags.watchers_count["1000-12000"]++

        //filtering open_issues count
        if(a.open_issues_count <= 50) tags.open_issues_count["0-100"]=tags.open_issues_count["0-100"]+1
        else if(a.open_issues_count > 50 && a.open_issues_count <=100 ) tags.open_issues_count["100-200"]++
        else if(a.open_issues_count > 100 && a.open_issues_count <=500 ) tags.open_issues_count["200-300"]++
        else if(a.open_issues_count > 500 && a.open_issues_count <=1000 ) tags.open_issues_count["300-400"]++
        else if(a.open_issues_count > 1000 && a.open_issues_count <=2000 ) tags.open_issues_count["400-600"]++

        //filtering has_wiki count
        console.log(a.has_wiki)
        if(a.has_wiki ) tags.has_wiki["true"]++
        else  tags.has_wiki["false"]++

    })
    console.log(tags)

    const handleStyle=(value)=>{
        if(active === value) setActive("")
        else setActive(value)
    }

    return(
        <>
        <div className="sidebarContainer ">
            <div className="sideFixed">
                <p className="mx-2 mt-4"><h4><FaTag/></h4></p>
                <p className="mx-2 tag">Query Tags</p>
            </div>
            <div className="sideScroll">
                <div className="scrollHeader d-flex">
                    <div><img src={alpha} alt="alpha"/> </div>
                    <div>CATEGORIES</div>
                </div>
                <div className="scrollList mb-2">
                    <div className="list d-flex " onClick={()=>{handleStyle("language")}}>
                        <div className={active==="language"&&`listNameActive`}></div>
                        <div className="listName">Language</div>
                        
                        <div className={`listNumber ${active ==="language"?"listNumberActive":"" } `}>{Object.keys(tags.language).length}</div>
                        <div><h6> {active === "language"?<AiOutlineMinus/>:<AiOutlinePlus/>}</h6></div>
                    </div>
                    { active === "language"&&
                     <ListTags tagName="language" tags={tags.language}/> }                   
                </div>

                <div className="scrollList mb-2">
                    <div className="list d-flex " onClick={()=>{handleStyle("topics")}}>
                        <div className={active==="topics"&&`listNameActive`}></div>
                        <div className="listName">Topics</div>
                        
                        <div className={`listNumber ${active ==="topics"?"listNumberActive":"" } `}>{Object.keys(tags.topics).length}</div>
                        <div><h6> {active === "topics"?<AiOutlineMinus/>:<AiOutlinePlus/>}</h6></div>
                    </div>
                    { active === "topics"&&
                     <ListTags tagName="topics" tags={tags.topics}/> }                   
                </div>

                <div className="scrollList mb-2">
                    <div className="list d-flex " onClick={()=>{handleStyle("license")}}>
                        <div className={active==="license"&&`listNameActive`}></div>
                        <div className="listName">License</div>
                        
                        <div className={`listNumber ${active ==="license"?"listNumberActive":"" } `}>{Object.keys(tags.license).length}</div>
                        <div><h6> {active === "license"?<AiOutlineMinus/>:<AiOutlinePlus/>}</h6></div>
                    </div>
                    { active === "license"&&
                     <ListTags tagName="license" tags={tags.license}/> }                   
                </div>

                <div className="scrollHeader d-flex">
                    <div><img src={numerical} alt="alpha"/> </div>
                    <div>NUMERICAL</div>
                </div>
                
                <div className="scrollList mb-2">
                    <div className="list d-flex " onClick={()=>{handleStyle("stars")}}>
                        <div className={active==="stars"&&`listNameActive`}></div>
                        <div className="listName">Stars</div>
                        
                        <div className={`listNumber ${active ==="stars"?"listNumberActive":"" } `}>{Object.keys(tags.stargazers_count).length}</div>
                        <div><h6> {active === "stars"?<AiOutlineMinus/>:<AiOutlinePlus/>}</h6></div>
                    </div>
                    { active === "stars"&&
                     <ListTags tagName="stargazers_count" tags={tags.stargazers_count}/> }                   
                </div>

                <div className="scrollList mb-2">
                    <div className="list d-flex " onClick={()=>{handleStyle("forks")}}>
                        <div className={active==="forks"&&`listNameActive`}></div>
                        <div className="listName">Forks</div>
                        
                        <div className={`listNumber ${active ==="forks"?"listNumberActive":"" } `}>{Object.keys(tags.forks_count).length}</div>
                        <div><h6> {active === "forks"?<AiOutlineMinus/>:<AiOutlinePlus/>}</h6></div>
                    </div>
                    { active === "forks"&&
                     <ListTags tagName="forks_count" tags={tags.forks_count}/> }                   
                </div>

                <div className="scrollList mb-2">
                    <div className="list d-flex " onClick={()=>{handleStyle("watchers")}}>
                        <div className={active==="watchers"&&`listNameActive`}></div>
                        <div className="listName">Watchers</div>
                        
                        <div className={`listNumber ${active ==="watchers"?"listNumberActive":"" } `}>{Object.keys(tags.watchers_count).length}</div>
                        <div><h6> {active === "watchers"?<AiOutlineMinus/>:<AiOutlinePlus/>}</h6></div>
                    </div>
                    { active === "watchers"&&
                     <ListTags tagName="watchers_count" tags={tags.watchers_count}/> }                   
                </div>

                <div className="scrollList mb-2">
                    <div className="list d-flex " onClick={()=>{handleStyle("issues")}}>
                        <div className={active==="issues"&&`listNameActive`}></div>
                        <div className="listName">Open Issues</div>
                        
                        <div className={`listNumber ${active ==="issues"?"listNumberActive":"" } `}>{Object.keys(tags.open_issues_count).length}</div>
                        <div><h6> {active === "issues"?<AiOutlineMinus/>:<AiOutlinePlus/>}</h6></div>
                    </div>
                    { active === "issues"&&
                     <ListTags tagName="open_issues_count" tags={tags.open_issues_count}/> }                   
                </div>


                <div className="scrollHeader d-flex">
                    <div><img src={numerical} alt="alpha"/> </div>
                    <div>BOOLEANS</div>
                </div>

                <div className="scrollList mb-2">
                    <div className="list d-flex " onClick={()=>{handleStyle("wiki")}}>
                        <div className={active==="wiki"&&`listNameActive`}></div>
                        <div className="listName">Has Wiki</div>
                        
                        <div className={`wiki ${active ==="wiki"?"listNumberActive":"" } `}>{Object.keys(tags.has_wiki).length}</div>
                        <div><h6> {active === "wiki"?<AiOutlineMinus/>:<AiOutlinePlus/>}</h6></div>
                    </div>
                    { active === "wiki"&&
                     <ListTags tagName="has_wiki" tags={tags.has_wiki}/> }                   
                </div>

            </div>
        </div>
        </>
    )
}