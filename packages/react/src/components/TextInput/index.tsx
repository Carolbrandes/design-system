import { ComponentProps } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

// Extend from the Input component's props instead
export interface TextInputProps extends ComponentProps<typeof Input> {
    disabled?: boolean;
    placeholder?: string;
    prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props} />
        </TextInputContainer>
    )
}

TextInput.displayName = 'TextInput';