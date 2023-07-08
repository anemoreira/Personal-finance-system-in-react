import { Item } from '../types/Item';

export const getCurrentMonth = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const [year, month] = date.split('-');

  return list.filter(
    (item) =>
      item.date.getFullYear() === parseInt(year) &&
      item.date.getMonth() + 1 === parseInt(month)
  );
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split('-');
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
};

export const newDateAdjusted = (dateField: string): Date => {
  const [year, month, day] = dateField.split('-');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
