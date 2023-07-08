import * as Element from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <Element.Table>
            <thead>
                <tr>
                    <Element.TableHeadColumn width={100}>Data</Element.TableHeadColumn>
                    <Element.TableHeadColumn width={130}>Categoria</Element.TableHeadColumn>
                    <Element.TableHeadColumn>Título</Element.TableHeadColumn>
                    <Element.TableHeadColumn width={150}>Valor</Element.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </Element.Table>
    );
}
