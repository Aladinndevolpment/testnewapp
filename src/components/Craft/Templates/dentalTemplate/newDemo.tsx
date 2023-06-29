import React from "react";
import { TextInputElement } from "../../widgets/form/TextInput";
import ErrorBoundary from "./errorNew";

const MyComponent: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>
        {
          <TextInputElement
            textInputProps={{
              name: "xyz",
              placeholder: "Your Email",
              type: "email",
              // className:
              //   "text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none",
            }}
          />
        }
      </div>
    </ErrorBoundary>
  );
};

export default MyComponent;
