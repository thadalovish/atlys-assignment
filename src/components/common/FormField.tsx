import React from "react";
import {
  FieldWrapper,
  FieldHelperText,
  ErrorText,
} from "components/auth/styles";
import Input from "components/common/style-components/Input";
import { Control, FieldError, Controller } from "react-hook-form";

interface FormFieldProps {
  name: string;
  control: Control<any>;
  errors: FieldError | undefined;
  rules?: object;
  placeholder: string;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  control,
  errors,
  rules,
  placeholder,
  type = "text",
}) => {
  return (
    <FieldWrapper>
      <FieldHelperText>{placeholder}</FieldHelperText>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Input
            type={type}
            {...field}
            placeholder={placeholder}
            style={{ width: "97%", height: "32px", padding: "6px" }}
          />
        )}
      />
      {errors && <ErrorText>{errors.message}</ErrorText>}
    </FieldWrapper>
  );
};

export default FormField;
