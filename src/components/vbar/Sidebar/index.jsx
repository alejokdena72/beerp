import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


function Sidebar(){
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem >Dashboard</MenuItem>
                <SubMenu title="Components">
                <MenuItem>Sales order</MenuItem>
                <MenuItem>Invoices</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
}

export { Sidebar };
