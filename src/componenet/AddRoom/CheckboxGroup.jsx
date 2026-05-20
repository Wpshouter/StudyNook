import React from 'react';
import {Checkbox, CheckboxGroup, Description, Label} from "@heroui/react";

const CheckboxGroupst = () => {
     return (
        
    <CheckboxGroup name="interests">
      <Label>Select your interests</Label>
      <Description>Choose all that apply</Description>
      <Checkbox value="coding">
        <Checkbox.Control className='w-5xl' >
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content className='w-full'>
          <Label className='w-5xl'>Coding</Label>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="design">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label>Design</Label>
          <Description>Enjoy creating beautiful interfaces</Description>
        </Checkbox.Content>
      </Checkbox>
      <Checkbox value="writing">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label>Writing</Label>
          <Description>Passionate about content creation</Description>
        </Checkbox.Content>
      </Checkbox>
    </CheckboxGroup>
  );
};

export default CheckboxGroupst;