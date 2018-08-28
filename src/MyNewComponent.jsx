import React, { Component } from 'react'
import SubUpLeft from "./Subcomponents/components/SubUpLeft.jsx"
import SubBotLeft from "./Subcomponents/components/SubBotLeft.jsx"
import SubUpRight from "./Subcomponents/components/SubUpRight.jsx"
import "./MyNewComponent.css"

export default class MyNewComponent extends Component
{
    render(){
        return (
            <div className="MyNewComponent">
                <div className="LeftAlign">
                    <SubUpLeft />
                    <SubBotLeft />
                </div>
                <div classname="RightAlign">
                    <SubUpRight />
                </div>
            </div>
        )
    }
}