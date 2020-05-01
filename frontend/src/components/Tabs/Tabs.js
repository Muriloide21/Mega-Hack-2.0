import React, { useState } from 'react';

import styled from 'styled-components';
import Tab from './Tab';

const TabContainer = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
`;

const TabHeader = styled.ol`
    padding-left: 0;
    margin: 0;
    color: white;
`;

const TabContent = styled.div`
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 65px);
    display: flex;
    flex-flow: column;

    background: #191919;
    border-radius: 0 4px 4px 4px;

    padding: 8px;
`;

export default function Tabs({defaultActiveTab, children}) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <TabContainer>
      <TabHeader>
        {children.map(({props}) => (
            <Tab
              active={activeTab === props.id}
              id={props.id}
              key={props.icon}
              icon={props.icon}
              handleClick={new_id => setActiveTab(new_id)}
            />
          ))}
      </TabHeader>

      <TabContent>
        {children.find(({props}) => props.id === activeTab)?.props.children}
      </TabContent>
    </TabContainer>
  );
}