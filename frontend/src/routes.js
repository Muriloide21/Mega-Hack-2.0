import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login'
import UserTalkView from './pages/User/TalkView';
import SpeakerTalkManage from './pages/Speaker/TalkManage';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/talkview" exact component={UserTalkView} />
                {/* <Route path="/home" exact component={UserHome} /> */}
                <Route path="/talkmanage" exact component={SpeakerTalkManage} />
            </Switch>
        </BrowserRouter>
    );
}