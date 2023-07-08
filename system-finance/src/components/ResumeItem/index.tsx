import * as Element from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <Element.Container>
            <Element.Title>{title}</Element.Title>
            <Element.Info color={color}>R$ {value}</Element.Info>
        </Element.Container>
    );
}
