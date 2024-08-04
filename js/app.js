import { LayoutRenderer } from './LayoutRenderer.js';

import { home } from '../views/home.js';
import { fyp } from '../views/fyp.js';
import { search } from '../views/search.js';
import { chats } from '../views/chats.js';
import { user } from '../views/user.js';
import { register } from '../views/register.js';

import { header } from '../components/header.js';
import { navbar } from '../Components/navbar.js';
import { post } from '../components/post.js';
import {userComponent} from '../components/userComponent.js'

const pages = {
    "register": register,
    "home" : home,
    "fyp" : fyp,
    "search" : search,
    "chats" : chats,
    "user":user
}

document.addEventListener('DOMContentLoaded', main);

async function main() {
    let render = new LayoutRenderer(pages, [navbar, header], [post]);
    await render.renderMain('search'); //vista default

    localStorage.setItem('user_id', 4124);
    document.querySelectorAll(".bio p").forEach(it =>{
        it.addEventListener("click",expand)
    })

    if(render.getActualPage){
        document.querySelector(".search-bar").addEventListener("input", search_bar)
    }
}

function expand({target}) {
    let bio = document.getElementById(target.id) 
    bio.classList.toggle("plegado")
}

async function search_bar({target:{value}}) {
    let data = null; // Usa null para indicar que no se ha encontrado aún
    try {
        const response = await fetch('../database/users.json');
        data = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    document.getElementById("users").innerHTML = /*html */`
    ${data.map((i)=>{return userComponent(i)})}`
}