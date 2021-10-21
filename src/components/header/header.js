/* eslint-disable react/jsx-pascal-case */
import './header.css'
import aws from "../../assets/aws.png";
import query from "../../assets/querytip.PNG";
 import chart from "../../assets/charttip.PNG";
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiFillBulb,AiOutlineReload } from "react-icons/ai";
import { RiVipDiamondFill } from "react-icons/ri";
 import { useState } from 'react';

export default function Header()
{
    const [showQ,setShowQ]=useState(false)
    const [showC,setShowC]=useState(false)

    const showTip=(value)=>
    {
        console.log("in",showQ)
        if(value === "q") setShowQ(true)
        else setShowC(true)
    }
    const hideTip=(value)=>{
        if(value === "q") setShowQ(false)
        else setShowC(false)
    }
    return(
        <>
        <Navbar className="navbarContainer"  expand="lg">
                <Navbar.Brand className="d-flex align-items-center ms-2">
                    <img src={aws}  alt="aws logo" className="d-inline-block align-top" />
                    <h5 className="navTitle">Everything AWS</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ">
                    <div id="searchId">
                    <Nav.Link   href="#"><NavLink   className="navItem"  to="/search" activeClassName="setItem" onMouseEnter={()=>{showTip("q")}}  onMouseLeave={()=>{hideTip("q")}}>Search & Query</NavLink></Nav.Link>
                   {
                    showQ &&

                    <div id="searchTooltip" className="d-flex">
                        <div><img src={query} alt="querytip" /></div>
                        <div>
                            <h6>Interactive Data</h6>
                            <p>Your data can be shown in three formats:card,gallery and grid</p>
                        </div>
                    </div>

                    }           
                    </div>
                    <div id="chartId">
                    <Nav.Link   href="#"><NavLink to="/chart" className="navItem" activeClassName="setItem" onMouseEnter={()=>{showTip("c")}}  onMouseLeave={()=>{hideTip("c")}}>Visualize</NavLink></Nav.Link>
                    {
                        showC &&
                    
                    <div id="chartTooltip" className="d-flex">
                        <div><img src={chart} alt="charttip" /></div>
                        <div>
                            <h6>Visualize</h6>
                            <p>Create detailed visual reports with a couple of clicks</p>
                        </div>
                    </div> 
                    }
                    </div>                                 
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><h5 className="bulbIcon"><AiFillBulb/></h5></Nav.Link>
                        <Nav.Link href="#"><NavLink to="/query"><h5 className="reloadIcon"><AiOutlineReload/></h5></NavLink></Nav.Link>
                        <NavDropdown title="More sites" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://flixgem.com/?utm_source=aws" target="_blank">                                   
                                <div className="d-flex gap-2 align-items-center">
                                    <div ><h4 style={{color:"blue"}}><RiVipDiamondFill/></h4></div>
                                    <div><b>FlixGem</b>
                                        <p>Discover Hidden gems for your netflix </p>
                                    </div>
                                    </div>                                  
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://interviewgeni.us/?utm_source=aws" target="_blank">
                                <div className="d-flex gap-2 align-items-center">
                                    <div ><h4 className="bulbIcon"><AiFillBulb/></h4></div>
                                    <div><b>InterviewGenius</b>
                                        <p>Master your Tech interview </p>
                                    </div>
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="polymer" href="https://www.polymersearch.com/?utm_source=aws" target="_blank"><h6 >Built with Polymer</h6></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    )
}