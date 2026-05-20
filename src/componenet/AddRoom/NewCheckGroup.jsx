
import { Checkbox, CheckboxGroup, Description, Label } from "@heroui/react";

export function NewCheckGroup() {
  return (
  
    <CheckboxGroup name="interests" className="w-full max-w-md">
      <Label>Select your interests</Label>
      <Description>Choose all that apply</Description>
      
      {/* 
        The Fix: 
        1. Added "w-full" to <Checkbox> so it spans the entire row.
        2. Added layout classes to align the control box and text columns horizontally.
      */}
      <div className="flex flex-col gap-3 mt-3 w-full">
        
        {/* Coding Checkbox */}
        <Checkbox value="coding" className="w-full flex items-start gap-3">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content className="flex flex-col flex-1 min-w-0">
            <Label className="font-medium text-sm">Coding</Label>
            <Description className="text-xs text-default-500 whitespace-normal">
              Love building software
            </Description>
          </Checkbox.Content>
        </Checkbox>

        {/* Design Checkbox */}
        <Checkbox value="design" className="w-full flex items-start gap-3">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content className="flex flex-col flex-1 min-w-0">
            <Label className="font-medium text-sm">Design</Label>
            <Description className="text-xs text-default-500 whitespace-normal">
              Enjoy creating beautiful interfaces
            </Description>
          </Checkbox.Content>
        </Checkbox>

        {/* Writing Checkbox */}
        <Checkbox value="writing" className="w-full flex items-start gap-3">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content className="flex flex-col flex-1 min-w-0">
            <Label className="font-medium text-sm">Writing</Label>
            <Description className="text-xs text-default-500 whitespace-normal">
              Passionate about content creation
            </Description>
          </Checkbox.Content>
        </Checkbox>

      </div>
    </CheckboxGroup>
  );
}