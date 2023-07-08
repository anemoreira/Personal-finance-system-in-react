import React, { useState } from 'react';
import * as Element from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea: React.FC<Props> = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  const categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    const errors: string[] = [];

    if (!dateField) errors.push('Data inválida!');
    if (!categoryField) errors.push('Categoria inválida!');
    if (!titleField) errors.push('Título vazio!');
    if (valueField <= 0) errors.push('Valor inválido!');

    errors.length > 0
      ? alert(errors.join('\n'))
      : (() => {
        const newItem: Item = {
          date: newDateAdjusted(dateField),
          category: categoryField,
          title: titleField,
          value: valueField,
        };
        onAdd(newItem);
        clearFields();
      })();

  };

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  };

  return (
    <Element.Container>
      <Element.InputLabel>
        <Element.InputTitle>Data</Element.InputTitle>
        <Element.Input
          type="date"
          value={dateField}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDateField(e.target.value)}
        />
      </Element.InputLabel>
      <Element.InputLabel>
        <Element.InputTitle>Categoria</Element.InputTitle>
        <Element.Select
          value={categoryField}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCategoryField(e.target.value)}
        >
          <option></option>
          {categoryKeys.map((key) => (
            <option key={key} value={key}>
              {categories[key].title}
            </option>
          ))}
        </Element.Select>
      </Element.InputLabel>
      <Element.InputLabel>
        <Element.InputTitle>Título</Element.InputTitle>
        <Element.Input
          type="text"
          value={titleField}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setTitleField(e.target.value)}
        />
      </Element.InputLabel>
      <Element.InputLabel>
        <Element.InputTitle>Valor</Element.InputTitle>
        <Element.Input
          type="number"
          value={valueField}
          onChange={(e: { target: { value: string; }; }) => setValueField(parseFloat(e.target.value))}
        />
      </Element.InputLabel>
      <Element.InputLabel>
        <Element.InputTitle>&nbsp;</Element.InputTitle>
        <Element.Button onClick={handleAddEvent}>Adicionar</Element.Button>
      </Element.InputLabel>
    </Element.Container>
  );
};
