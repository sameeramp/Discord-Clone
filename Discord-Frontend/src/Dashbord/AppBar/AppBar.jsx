import styled from '@emotion/styled'
import React from 'react'
import Dropdown from './DropdownMenu'

const MainContainer = styled("div")({
    position: "absolute",
    right: "0",
    top: "0",
    height: "48px",
    borderBottom: "1px solid black",
    backgroundColor: "#36393f",
    width: "calc(100% - 326px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
})
function AppBar() {

    return (
        <MainContainer>
            <Dropdown/>

        </MainContainer>
    )
}

export default AppBar
