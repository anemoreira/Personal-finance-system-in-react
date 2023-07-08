import * as Element from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <Element.TableLine>
            <Element.TableColumn>{formatDate(item.date)}</Element.TableColumn>
            <Element.TableColumn>
                <Element.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Element.Category>
            </Element.TableColumn>
            <Element.TableColumn>{item.title}</Element.TableColumn>
            <Element.TableColumn>
                <Element.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </Element.Value>
            </Element.TableColumn>
        </Element.TableLine>
    );
}
