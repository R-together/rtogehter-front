"use client";
/* 
    This is a page to preview all the components in the app.
    It should be deleted before the app is deployed.
*/

import { useState } from "react";
import { TextInput } from "@/app/__components/TextInput";
import { BasicButton } from "../__components/BasicButton";
import { ToggleButton } from "../__components/ToggleButton";
import { SelectBox } from "../__components/SelectBox";

export default function ComponentsCheckPage() {
  const [textInput, setTextInput] = useState("");
  const [labeledTextInput, setLabeledTextInput] = useState("");
  const [requiredTextInput, setRequiredTextInput] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "option 1", value: "opt1" },
    { label: "option 2", value: "opt2" },
  ];

  const handleClickButton = () => {
    alert("clicked");
  };

  const handleClickToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2 p-3 ">
      <h1 className="font-bold text-3xl">Components Check Page</h1>
      <div>
        <h2 className="font-bold">Text Input</h2>
        <h3>Without Label</h3>
        <TextInput
          id="text-input"
          labeled={false}
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
        <h3>With Label</h3>
        <TextInput
          id="labeled-text-input"
          labelName="Text Input"
          value={labeledTextInput}
          onChange={(e) => {
            setLabeledTextInput(e.target.value);
          }}
        />
        <h3>With required</h3>
        <TextInput
          id="required-text-input"
          labelName="Text Input"
          required
          value={requiredTextInput}
          onChange={(e) => {
            setRequiredTextInput(e.target.value);
          }}
        />
        <h3>For password</h3>
        <TextInput
          id="password"
          labelName="Text Input"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <h2 className="font-bold">Basic Button</h2>
        <h3>Light theme</h3>
        <BasicButton
          theme="light"
          buttonLabel="Basic Button"
          onClick={handleClickButton}
        />
        <h3>Dark theme</h3>
        <BasicButton
          theme="dark"
          buttonLabel="Basic Button"
          onClick={handleClickButton}
        />
      </div>
      <div>
        <h2 className="font-bold">Toggle Button</h2>
        <ToggleButton
          id="toggle"
          labeled={false}
          isChecked={isChecked}
          onChange={handleClickToggle}
        />
      </div>
      <div>
        <h2 className="font-bold">Select Box</h2>
        <SelectBox
          id="selectbox"
          labelName="select box"
          placeholder="please select an option"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      </div>
    </div>
  );
}
