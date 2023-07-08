import React from 'react';
import * as Element from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea: React.FC<Props> = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}) => {
  const handleMonthChange = (increment: number) => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + increment);
    onMonthChange(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
    );
  };

  return (
    <Element.Container>
      <Element.MonthArea>
        <Element.MonthArrow onClick={() => handleMonthChange(-1)}>
          ⬅️
        </Element.MonthArrow>
        <Element.MonthTitle>{formatCurrentMonth(currentMonth)}</Element.MonthTitle>
        <Element.MonthArrow onClick={() => handleMonthChange(1)}>
          ➡️
        </Element.MonthArrow>
      </Element.MonthArea>
      <Element.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? 'red' : 'green'}
        />
      </Element.ResumeArea>
    </Element.Container>
  );
};
