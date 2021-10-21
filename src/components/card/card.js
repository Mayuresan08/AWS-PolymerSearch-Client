import "./card.css"
import { useState } from "react"
import { Button,Alert, Modal } from "react-bootstrap";
import styled from "styled-components";
import { AiFillGithub,AiOutlineShareAlt } from "react-icons/ai";

const Div=styled.div` 
    transistion:all .3s linear;
    box-shadow: 1px 2px #888888;
    :hover{
        transform:scale(1.03);
    }
    `

  const DisplayCard=({data})=>{
 
    const[show,setShow]=useState(false)

    let date=new Date(data.updated_at).toDateString()
    let date1=new Date(data.created_at).toDateString()
    

    const [alert,setAlert]=useState(false)
    const copyClipboard=(link)=>{
        navigator.clipboard.writeText(link)
        setAlert(true)
        window.setTimeout(()=>{setAlert(false)},1000)
    }
    
    return(
        <>
        
        <Div className=" card col-xl-4 col-lg-12 "onClick={()=>{setShow(true)}}>
        <div><h5><a href={`${data.html_url}`} target="_blank" rel="noreferrer"> {data.name}</a></h5></div>
        <div><h6>  <span style={{fontSize:"0.8rem" , fontWeight:"400"}}> {data.description}</span></h6></div>
        <div className="shareCopy">
            <a className="shareCopy border-light text-decoration-none" href={`${data.html_url}`} target="_blank" rel="noreferrer" >GitHub <AiFillGithub/></a>
            <Button className="shareCopy border-light" variant="none"  onClick={()=>{copyClipboard(`${data.html_url}`)}}>Share <AiOutlineShareAlt/></Button>
            { alert && 
            <div className="alertBox">
            <Alert variant="primary">
                <div><p>Link Copied!</p></div>
            </Alert>
            </div>
            }
        </div>
        <hr/>
        <div className="body1 d-flex flex-column"  >
            <div className="d-flex" >
                <div><h6 style={{fontSize:"0.8rem",width:"6rem"}} ><b>Full Name </b></h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem" ,backgroundColor:"lightblue",borderRadius:"5px"}} > {data.full_name} </h6></div>
            </div>
            <div className="d-flex" >
                <div><h6 style={{fontSize:"0.8rem",width:"6rem"}} ><b>Owner </b></h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightgreen" ,borderRadius:"5px"}} > {data.owner.login} </h6></div>
            </div>
        </div>
        <hr/>
        <div className="insideCard1">
        <div className="d-flex flex-column " >
                <div><h6 style={{fontSize:"0.8rem",}} >Stars </h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem" ,backgroundColor:"lightblue",borderRadius:"5px"}} > {data.stargazers_count} </h6></div>
            </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"0.8rem"}} >Language</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightpink" ,borderRadius:"5px"}} > {data.language} </h6></div>
            </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"0.8rem"}} >forks</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightgreen" ,borderRadius:"5px"}} > {data.forks_count} </h6></div>
            </div>
        </div>
     </Div>
     {/* <div className={` ${show ? "modal-90w":""}`}> */}
        <Modal 
     show={show}
     onHide={()=>{setShow(false)}}
       dialogClassName="modal-90w"
      aria-labelledby={data._id}
      className="custom-modal-style"
    //  animation={false}>
    >
         <Modal.Header  className="text-center" closeButton ><Modal.Title id={data._id}>{data.name}</Modal.Title></Modal.Header>
         <Modal.Body>
             <div className="modalBody p-2">
         <div><h5><a href={`${data.html_url}`} target="_blank" rel="noreferrer"> {data.name}</a></h5></div>
        <div><h6> Description <span style={{fontSize:"0.8rem" , fontWeight:"400"}}> {data.description}</span></h6></div>
        <div className="shareCopy">
            <a className="shareCopy border-light text-decoration-none" href={`${data.html_url}`} target="_blank" rel="noreferrer" >GitHub <AiFillGithub/></a>
            <Button className="shareCopy border-light" variant="none"  onClick={()=>{copyClipboard(`${data.html_url}`)}}>Share <AiOutlineShareAlt/></Button>
            { alert && 
            <div className="alertBox">
            <Alert variant="primary" style={{zIndex:2}}>
                <div><p>Link Copied!</p></div>
            </Alert>
            </div>
            }
        </div>
        <hr/>
        <div className="modalBody1">
            <p className="modalHeader">Popularity</p>
        <div className="insideCard">
         <div className="d-flex flex-column gap-4" >
                <div><h3 style={{fontSize:"1rem",}} >Stars </h3></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem" ,backgroundColor:"lightblue",borderRadius:"5px"}} > {data.stargazers_count} </h6></div>
         </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >Watchers</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightpink" ,borderRadius:"5px"}} > {data.watchers_count} </h6></div>
            </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >forks</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightgreen" ,borderRadius:"5px"}} > {data.forks_count} </h6></div>
            </div>
        </div>
        <hr/>
        </div>

        <div className="modalBody1">
            <p className="modalHeader">Stats</p>
        <div className="insideCard">
         <div className="d-flex flex-column gap-4" >
                <div><h3 style={{fontSize:"1rem",}} >Open Issues </h3></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem" ,backgroundColor:"lightblue",borderRadius:"5px"}} > {data.open_issues} </h6></div>
         </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >Last Updated</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightpink" ,borderRadius:"5px"}} > {`${date}`} </h6></div>
            </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >forks</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightgreen" ,borderRadius:"5px"}} > {data.forks_count} </h6></div>
            </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >Created At</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightpink" ,borderRadius:"5px"}} > {`${date1}`} </h6></div>
            </div>
        </div>
        <hr/>
        </div>

        <div className="modalBody1">
            <p className="modalHeader">Details</p>
        <div className="insideCard">
         <div className="d-flex flex-column gap-4" >
                <div><h3 style={{fontSize:"1rem",}} >Has Wiki </h3></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem" ,backgroundColor:"lightblue",borderRadius:"5px"}} > { data.has_wiki?"true":"false"} </h6></div>
         </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >Language</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightpink" ,borderRadius:"5px"}} > {data.language} </h6></div>
            </div>
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >Is Fork</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightgreen" ,borderRadius:"5px"}} >{ data.fork?"true":"false"} </h6></div>
            </div>
            <div className="d-flex flex-column gap-4" >
                <div><h3 style={{fontSize:"1rem",}} >Owner Type </h3></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem" ,backgroundColor:"lightblue",borderRadius:"5px"}} > { data.owner.type} </h6></div>
         </div>
         <div className="d-flex flex-column gap-4" >
                <div><h3 style={{fontSize:"1rem",}} >Topics </h3></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem" ,borderRadius:"5px"}} > { data.topics.map(a=>{
                    return <p style={{display:"inline-block" ,marginRight:"5px"}}>{a}</p>
                })} 
                </h6>
                </div>
         </div>
        </div>
        <hr/>
        </div>

        <div className="modalBody1">
            <p className="modalHeader">Repository Clock</p>
        <div className="insideCard">
         
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >Last Updated</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightpink" ,borderRadius:"5px"}} > {`${date}`} </h6></div>
            </div>
            
            <div className="d-flex flex-column" >
                <div><h6 style={{fontSize:"1rem"}} >Created At</h6></div>
                <div><h6 style={{padding:"3px",fontSize:"0.8rem",backgroundColor:"lightpink" ,borderRadius:"5px"}} > {`${date1}`} </h6></div>
            </div>
        </div>
        </div>

        </div>
         </Modal.Body>
     </Modal>
     {/* </div> */}
     </>
    )
}

export default DisplayCard