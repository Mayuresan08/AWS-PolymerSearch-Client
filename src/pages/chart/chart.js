/* eslint-disable react-hooks/exhaustive-deps */
import {Bar} from "react-chartjs-2"
import "./chart.css"
import { DataContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";

export default function Chart()
{
const {tags}=useContext(DataContext)
const [value,setValue]=useState()
const [labelArray,setLabelArray]=useState([])
const [dataArray,setDataArray] =useState([])





const chart=(value)=>
{
    let  labelArray1=[]
    let  dataArray1=[]
   for(let key1 in tags)
   {
       // console.log(key1)
       
       if(key1 ===value)
       {
           for(let key2 in tags[key1])
           {
               labelArray1.push(key2)
               dataArray1.push(tags[key1][key2])
           }
       }
       
   }

console.log(labelArray1)
setLabelArray([...labelArray1])
console.log(dataArray)
setDataArray([...dataArray1])
}

useEffect(()=>{
chart(value)
},[value])

    const data = {
        labels:labelArray,
        datasets: [
          {
            label: value,
            data: dataArray,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
             borderColor:'rgba(54, 162, 235, 1)',
            
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `${value} distibution`,
          },
        },
      };
    

      const handleChange=({target:{value}})=>{
          console.log(value)
        setValue(value)
      }

    return(
        <>
        <div  className="d-flex flex-column align-items-center  w-100 mt-2 p-4">
            <div>
                <label ><p className="mr-3">select axis</p></label>
                <select name="data" value={value} onChange={(event)=>{handleChange(event)}}  >
                <option value="">select</option>
                    <option value="language">Language</option>
                    <option value="topics">Topics</option>
                    <option value="license">License</option>
                    <option value="stargazers_count">Stars</option>
                    <option value="forks_count">Forks</option>
                    <option value="watchers_count">Watchers</option>
                    <option value="open_issues_count">Open Issues</option>
                    <option value="has_wiki">Has Wiki</option>
                </select>
                
            </div>
        { value &&
        <div className="chart">
        <Bar  data={data} options={options}  />
        </div>
        }
        </div>
        </>
    )
}