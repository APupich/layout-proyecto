import { LayoutRenderer } from './LayoutRenderer.js';

import { home } from '../views/home.js';
import { fyp } from '../views/fyp.js';
import { search } from '../views/search.js';
import { chats } from '../views/chats.js';
import { chat } from '../views/chat.js';
import { user } from '../views/user.js';
import { register } from '../views/register.js';

import { header_home,header_chats,header_chat} from '../components/header.js';
import { navbar } from '../Components/navbar.js';
import { post } from '../components/post.js';
import { userComponent,userChatComponent } from '../components/userComponent.js'
import { story } from "../components/story.js";
import { chatComponent } from '../components/chatComponent.js'
const pages = {
    "register": register,
    "home" : home,
    "fyp" : fyp,
    "search" : search,
    "chats" : chats,
    "chat" : chat,
    "user":user
}

document.addEventListener('DOMContentLoaded', main);

async function main() {
    let render = new LayoutRenderer(pages, [navbar, header_home,header_chats,header_chat], [post,story,userComponent,userChatComponent,chatComponent]);
    await render.renderMain('register'); //vista default
    localStorage.setItem('user_id', 4124);
    const hash = window.location.hash.substring(1)
    if (hash) {
        await render.renderMain(hash);
    }
}
