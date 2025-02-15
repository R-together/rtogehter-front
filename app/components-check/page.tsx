/* 
    This is a page to preview all the components in the app.
    It should be deleted before the app is deployed.
*/

import { BasicForm } from "@/app/__components/BasicForm";
import { BasicButton } from "../__components/BasicButton";
import { ToggleButton } from "../__components/ToggleButton";

export default function ComponentsCheckPage() {
  return (
    <div className="flex flex-col gap-2 p-3 ">
      <h1 className="font-bold text-3xl">Components Check Page</h1>
      <div>
        <h2 className="font-bold">Basic Form</h2>
        <h3>With Label</h3>
        <BasicForm id="basic-form-with-label" labelName="Basic Form" />
        <h3>Without Label</h3>
        <BasicForm id="basic-form-without-label" labeled={false} />
        <h3>For password</h3>
        <BasicForm
          id="basic-form-for-password"
          labelName="For password"
          type="password"
        />
      </div>
      <div>
        <h2 className="font-bold">Basic Button</h2>
        <h3>Light theme</h3>
        <BasicButton theme="light" buttonLabel="Basic Button" />
        <h3>Dark theme</h3>
        <BasicButton theme="dark" buttonLabel="Basic Button" />
      </div>
      <div>
        <h2 className="font-bold">Toggle Button</h2>
        <ToggleButton />
      </div>
    </div>
  );
}
