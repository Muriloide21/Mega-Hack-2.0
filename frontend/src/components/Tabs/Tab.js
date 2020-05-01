import React from 'react';

import styled from 'styled-components';

const TabItem = styled.li`
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-right: 3px;
    background-color: ${({active}) => active ? '#191919' : '#333333'};
    border-width: 2px 2px 2px 2px;
`;

export default function Tab({id, active, icon, handleClick}) {
  return (
      <TabItem active={active} onClick={() => handleClick(id)}>
        {icon}
      </TabItem>
  );
}
