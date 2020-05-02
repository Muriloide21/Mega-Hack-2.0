import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login'
import UserTalkView from './pages/User/TalkView';
import SpeakerTalkManage from './pages/Speaker/TalkManage';
import Main from './pages/Event/Main';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/talkview" exact component={UserTalkView} />
                <Route path="/talkmanage" exact component={SpeakerTalkManage} />
                <Route path="/main" exact component={Main} />
            </Switch>
        </BrowserRouter>
    );
}