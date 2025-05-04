import React from "react";
import { PiDiamondDuotone } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { BiSquareRounded } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { GrMysql } from "react-icons/gr";
import { FaDiamond } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { LiaJenkins } from "react-icons/lia";
import { FaDocker } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { SiPostman } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { PiNumberCircleFiveFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";


interface ProgramingLanguages{
    language:string;
    defaulticon:React.ComponentType<{className?:string}>;
    hovericon:React.ComponentType<{className?:string}>;
}

export const languages:ProgramingLanguages[]=[
    {
        language:"Java",
        defaulticon:PiDiamondDuotone,
        hovericon:FaJava
    },

    {
        language:"Python",
        defaulticon:PiDiamondDuotone,
        hovericon:AiOutlinePython
    },

    {
        language:"TypeScript",
        defaulticon:PiDiamondDuotone,
        hovericon:SiTypescript
    },

    {
        language:"MySql",
        defaulticon:PiDiamondDuotone,
        hovericon:GrMysql
    },

    {
        language:"HTML & CSS",
        defaulticon:PiDiamondDuotone,
        hovericon:ImHtmlFive2
    },
]

export const Certifications:Array<String>=["Programming Fundamentals","Java Programming",
    "Building Microservices with Springboot","Mathematics for Machine Learning"]


export const Tools:ProgramingLanguages[]=[
    {
        language:"Git",
        defaulticon: FaDiamond,
        hovericon:FaGitAlt
    },
    {
        language:"BitBucket",
        defaulticon: FaDiamond,
        hovericon:FaBitbucket
    },
    {
        language:"Jenkins",
        defaulticon: FaDiamond,
        hovericon:LiaJenkins
    },
    {
        language:"Docker",
        defaulticon: FaDiamond,
        hovericon:FaDocker
    },
    {
        language:"RLM (Release LifeCyle Management)",
        defaulticon: FaDiamond,
        hovericon:GiRecycle
    },
    {
        language:"PostMan",
        defaulticon: FaDiamond,
        hovericon:SiPostman
    }
]

export const FrameWorks:ProgramingLanguages[]=[
    {
        language:"SpringBoot",
        defaulticon:BiSquareRounded,
        hovericon:SiSpringboot
    },
    {
        language:"Junit & Mockito",
        defaulticon:BiSquareRounded,
        hovericon:PiNumberCircleFiveFill
    },
    {
        language:"React (ts)",
        defaulticon:BiSquareRounded,
        hovericon:FaReact
    },
    {
        language:"Tailwind CSS",
        defaulticon:BiSquareRounded,
        hovericon:RiTailwindCssLine
    }
]

export const Mailto=()=>{
    window.open("mailto:swarnasaisankarnaidu369@gmail.com")
}

export const Github=()=>{
    window.open("https://github.com/Swarna7414", "_blank")
}

export const Bitbucket=()=>{
    window.open("https://bitbucket.org/deployedprojects/workspace/overview/","_blank")
}

export const LinkedIn=()=>{
    window.open("https://www.linkedin.com/in/swanra-sai-sankar-000797191","_blank")
}

export const LeetCode=()=>{
    window.open("https://leetcode.com/u/Swarna7414/","_blank")
}