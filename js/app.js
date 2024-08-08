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
import { userComponent } from '../components/userComponent.js'
import { story } from "../components/story.js";
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
    let render = new LayoutRenderer(pages, [navbar, header,userComponent], [post,story]);
    await render.renderMain('register'); //vista default
    localStorage.setItem('user_id', 4124);
    const hash = window.location.hash.substring(1)
    if (hash) {
        await render.renderMain(hash);
    }
}
