import { ComponentProps } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof TextInput> {
    disabled?: boolean;
    placeholder?: string;
    prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
    return <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
    </TextInputContainer>
}


TextInput.displayName = 'TextInput'