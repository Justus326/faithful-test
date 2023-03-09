import React, { FC } from "react";
import FaTimesButton from "../../../../Components/Form/Buttons/FaTimesButton";
import PrimaryButton from "../../../../Components/Form/Buttons/PrimaryButton";
import { FaTimes } from "react-icons/fa";
// import PrimarySelector from "../../../../Components/Form/inputs/PrimarySelector";
// import TextInput from "../../../../Components/Form/inputs/TextInput";
import { AdsContainar, AdsContainerCaption, InputContainer, InputText } from "./style";
import  './styles.css';

interface IAdd {
  setState: any;
  
}
const AddRequest: FC<IAdd> = ({ setState }) => {
  return (
    <AdsContainar>
        <FaTimesButton          
          size="small"
          faTimes={<FaTimes />}
          handleClick={() => setState(false)}
        />
     <AdsContainerCaption>Add a Prayer Request</AdsContainerCaption>
    <div className="selectContainer">
      <TextInput placeholder={"Enter Title"} type="text" />
      
      <textarea rows={7}
       cols={36} 
       className='form-control' 
      placeholder='Enter Prayer request'/>
      </div>
      <div className="selectContainer">
        <PrimaryButton text="Add" size="small" />        
      </div>
    </AdsContainar>
  );
};



interface TextInputI {
    placeholder: any;
    
    icon?: any;
    leftIcon?: any;
    name?: string;
    type?: string;
    
  }
  
  const TextInput: FC<TextInputI> = ({
   
    placeholder,
    icon,
    name,
    type,    
    leftIcon,
  }) => {
    return (
      <InputContainer>
        <span>{leftIcon}</span>
        <InputText
          placeholder={placeholder}
          name={name}
          type={type}
          // defaultValue={value}
          
        />
        <span>{icon}</span>
      </InputContainer>
    );
  };
  
  
  

export default AddRequest;



