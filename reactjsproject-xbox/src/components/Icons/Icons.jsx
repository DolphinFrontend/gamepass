import React from "react";
import { nanoid } from "nanoid";
import game_pass from "../../media/icons/green/game_pass.svg"
import consoles from "../../media/icons/green/consoles.svg"
import accessories from "../../media/icons/green/accessories.svg"
import played from "../../media/icons/green/play.svg"
import sign_ing from "../../media/icons/green/sign_in.svg"

import {IconsContainer , IconLink, IconText} from "./Icon.styles"


const iconData = [

    {
        name : "Game Pass",
        icon : game_pass,
    },

    {
        name : "Consoles",
        icon : consoles,
    },
    {
        name : "Accessories",
        icon : accessories,
    },
     {
         name : "Play",
         icon : "play",
     },
     {
         name : "Sign In",
         icon : sign_ing
     }
]

const Icons = () => {
    return(
        <IconsContainer>
            {iconData.map(({name , icon }) => (
                <IconLink key={nanoid()}>
                    <img src={icon} alt="" />
                     <IconText>{name}</IconText>
                </IconLink>
            ))}
        </IconsContainer>
    )
}
export default Icons