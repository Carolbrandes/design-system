import { ComponentProps, ElementRef, forwardRef } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

// Extend from the Input component's props instead
export interface TextInputProps extends ComponentProps<typeof Input> {
    disabled?: boolean;
    placeholder?: string;
    prefix?: string;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(({ prefix, ...props }: TextInputProps, ref) => {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input ref={ref} {...props} />
        </TextInputContainer>
    )
})

TextInput.displayName = 'TextInput';