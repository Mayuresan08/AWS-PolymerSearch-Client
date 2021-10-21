/* eslint-disable react-hooks/exhaustive-deps */
import {  Container } from "react-bootstrap";
import { useContext,useState,useEffect } from "react";
import { DataContext } from "../../context/context";
import "./query.css"
import { FcSearch } from "react-icons/fc";
import { AiFillThunderbolt } from "react-icons/ai";
import DisplayCard from "../../components/card/card";

export default function Query()
{
    const {data,mainTags}=useContext(DataContext)
    const [filterData,setFilterData] =useState([])
    const [search,setSearch]=useState()
    const [tags,setTags]=useState([])

  

    useEffect(()=>{
        // console.log("in mount")
        setFilterData([...data])
        // console.log(mainTags)
        for (let key in mainTags)
        {
            // console.log(mainTags[key])
           if( Object.keys(mainTags[key]).length>0)
           {
               mainTags[key].forEach((a)=>{
                //    console.log(a)
                   setTags(tags=>[...tags,a])
               })
           }
        //    console.log(tags)
        }

    },[])

    if(data.length<1) return[]

    const handleSearch=({target:{value}})=>{
        setSearch(value)

        if(value)
        {
            const regex = new RegExp(value,"gi")

            let newData= filterData.filter((a)=>{
                return regex.test(a.name)
            }
            )
            console.log(newData)
            setFilterData([...newData])
        }
        else{
            setFilterData([...data])
        }
    }

    return(
        <>
        <div className="outerContainer">
        <Container className=" bg-muted d-flex flex-column align-items-center ">
            <div className="mainHeader "><h4><b><FcSearch/>The Best Way to Browse Quality AWS GitHub Repositories<FcSearch/></b></h4></div>
            <div><p><AiFillThunderbolt style={{color:"yellow"}}/>Built with a spreadsheet + <a  href="https://www.polymersearch.com/?utm_source=built_with_polymer_aws" target="_blank" rel="noreferrer"   >Polymer Search</a>|<a href="https://app.polymersearch.com/auth/login" target="_blank" rel="noreferrer"> Create a search and data app in seconds with Polymer beta</a></p></div>
            <div className="searchContainer">
                <div>
                    <form>
                        <input  className="searchBox form-control" placeholder="search..." onChange={handleSearch} value={search}/>
                    </form>
                </div>
            </div>
        </Container>
        <div className="tagBar">
            <div className="ms-5 mt-2">
                <p >TAGS :
                    {
                    tags.map((a)=>{
                        return <div className="tagBarItem text-muted">{a}</div>
                    })
                    }
                </p>
            </div>
        </div>
        <div className="countBar  ">
                <div>
                    <p>Count:<p className="d-inline text-muted"> {filterData.length} </p></p>
                </div>
        </div>
    
            <div className="row cardContainer">
                {
                    filterData.map((a)=>{
                       return <DisplayCard  key={a._id} data={a}/>
                    })
                }
               
            </div>
            
        </div>

        </>
    )
}