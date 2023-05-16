import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sm1 from "../../Assets/free-delivery_218x184.png";
import sm2 from "../../Assets/JForce.png";
import { CiApple } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbShirt } from "react-icons/tb";

import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'

import big1 from "../../Assets/Artboard_1.jpg";
import big2 from "../../Assets/712x384.jpg";
import big3 from "../../Assets/Desktop_Homepage_Slider__712x384_copy.png";
import big4 from "../../Assets/Slider.png";

const Hero = () => {
  // const [counter, setCounter] = useState<number>(0)

  // useEffect(()=>{
  //     setInterval(()=>{
  //         setCounter((el:number)=>{
  //             return el+1
  //         })
  //     }, 10000)

  const [number, setNumber] = useState<number>(0)


  const increase = () =>{
    setNumber((el: number)=>{
      return el + 1
    })
  }
  const reduce = () =>{
    setNumber((el: number)=>{
      if(el < 0){
        return el = 0
      }else{
      return el + 1
      }
    })
    
  }

  const imagePic = [big1, big2, big3, big4]

  useEffect(()=>{
    setInterval(()=>{
        setNumber((el: number)=>{
          return el + 1
        })
    }, 10000)
  })

  return (
    <div>
      <Container>
        <Main>
          <Sider>
            <span>
              <Icon1 />
              <Items> SuperMarket </Items>
            </span>
            <span>
              <Icon5 />
              <Items> Computers </Items>
            </span>
            <span>
              <Icon2 />
              <Items> Home & Groceries </Items>
            </span>
            <span>
              <Icon3 />
              <Items> Phones & Tablets </Items>
            </span>
            <span>
              <Icon4 />
              <Items> Fashion </Items>
            </span>
           
          </Sider>
          <Side>
            <span>
              <Icon1 />
              <Items> SuperMarket </Items>
            </span>
            <span>
              <Icon5 />
              <Items> Computers </Items>
            </span>
            <span>
              <Icon2 />
              <Items> Home & Groceries </Items>
            </span>
            <span>
              <Icon3 />
              <Items> Phones & Tablets </Items>
            </span>
            <span>
              <Icon4 />
              <Items> Fashion </Items>
            </span>
            <span>
              <Icon1 />
              <Items> SuperMarket </Items>
            </span>
            <span>
              <Icon5 />
              <Items> Computers </Items>
            </span>
            <span>
              <Icon2 />
              <Items> Home & Groceries </Items>
            </span>
            <span>
              <Icon3 />
              <Items> Phones & Tablets </Items>
            </span>
            <span>
              <Icon4 />
              <Items> Fashion </Items>
            </span>
          </Side>
          <Middle>
          <BigSlider src={imagePic[number % imagePic.length]}></BigSlider>
          <IconLeft onClick={increase
          }/>
          <IconRight onClick={reduce
          }/>
          </Middle>
          <SmallSlider>
            <Image src={sm1}></Image>
            <Image src={sm2}></Image>
          </SmallSlider>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Middle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const IconLeft = styled(AiFillLeftCircle)`
font-size:45px;
color: white;
position: absolute;
left: 5px;
opacity: 0;
transition: all 750ms;
cursor: pointer;
:hover{
  opacity: 0.7;
}
`
const IconRight = styled(AiFillRightCircle)`
font-size:45px;
color: white;
position: absolute;
right: 5px;
opacity: 0;
transition: all 750ms;
cursor: pointer;
:hover{
  opacity: 0.7;
}
`
const Sider = styled.div`
height: 40px;
display: flex;
width: 75%;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
display: none;
@media screen and (max-width:1100px){
    display: flex;
  }

`

const Icon5 = styled(HiOutlineDesktopComputer)`
  font-size: 23px;
  margin-right: 8px;

`;
const Icon1 = styled(CiApple)`
  font-size: 25px;
  margin-right: 8px;

`;
const Icon2 = styled(GrHomeRounded)`
  font-size: 23px;
  margin-right: 8px;

`;
const Icon3 = styled(IoIosPhonePortrait)`
  font-size: 25px;
  margin-right: 8px;

`;
const Icon4 = styled(TbShirt)`
  font-size: 23px;
  margin-right: 8px;

`;
const Items = styled.div`
  font-size: 12px;
  /* color: black; */
`;
const Container = styled.div`
  height: calc(100vh - 120px);
  background-color: rgb(239, 240, 210);
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
`;
const Image = styled.img`
  height: 190px;
  width: 220px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: white;
  object-fit: cover;
`;
const SmallSlider = styled.div`
  height: 400px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width:1300px){
    display: none;
  }
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 100%;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 90%;
  justify-content: space-between;
  align-items: center;
  display: flex;

  @media screen and (max-width:1100px){
    flex-direction: column;
  }
`;
const BigSlider = styled.img`
  
  height: 400px;
  width: 740px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: white;
  object-fit: cover;
  @media screen and (max-width:1300px){
    flex: 1;
    margin-left: 15px;
  }
`;
const Side = styled.div`
@media screen and (max-width:1100px){
    display: none;
  }
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    transition: all 400ms;
    cursor: pointer;
    :hover{
      color: darkorange;
      /* background-color: lightgray; */
      
    }
  }
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  width: 220px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: white;
`;
