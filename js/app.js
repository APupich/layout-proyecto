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

const pages = {
    "register": register,
    "home" : home,
    "fyp" : fyp,
    "search" : search,
    "chats" : chats,
    "user":user
}

document.addEventListener('DOMContentLoaded', main);

function main() {
    let render = new LayoutRenderer(pages, [navbar, header], [post]);
    render.renderMain('home');
    localStorage.setItem('user_id', 4124);

    
}
