import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./style";

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> { }

export function Checkbox(props: CheckboxProps) {
    return (<CheckboxContainer {...props}>
        {/* com a prop asChild, ele vai funcionar como filho e nao como um elemento novo na tela */}
        <CheckboxIndicator asChild>
            <Check weight="bold" />
        </CheckboxIndicator>
    </CheckboxContainer>)
}