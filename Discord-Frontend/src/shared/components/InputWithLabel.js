import styled from '@emotion/styled'
import React from 'react'
const Wrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%"

})

const Label = styled("p")({
    color: "#b9bbbe",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "16px"
})

const Input=styled("input")({
    flexGrow: 1,
    height: "40px",
    border: "2px solid black",
    borderRadius: "5px",
    color: '#dcddde',
    background: "#35393f",
    margin: 0,
    fontSize: '16px',
    padding: "0 5px"
})

function InputWithLabel(props) {
    const{value,setValue,label,type,placeholder}=props
    const handleValueChange = (event)=>{
        setValue(event.target.value)
    }
    return (
        <div>
<Wrapper>
    <Label>{label}</Label>
    <Input
    type={type}
    onChange={handleValueChange} 
    placeholder={placeholder}
    value={value}
     />
</Wrapper>

        </div>
    )
}

export default InputWithLabel
