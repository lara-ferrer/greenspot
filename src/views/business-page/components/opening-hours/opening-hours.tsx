import React from "react";
import { TextCard } from "kiwi-design-system";


export const OpeningHours = ({ business }) => {
  return (
    <TextCard>
      <h4>Horario de apertura</h4>
      <table>
        {business.schedule.map(({ openingDay, opening, closing }) => (
          <tr>
            <th className="grsp-business-page__opening-day">
              <h5 className="t-uppercase">{openingDay}</h5>
            </th>
            <th className="grsp-business-page__opening-hours">
              <p>
                {opening}h - {closing}h
              </p>
            </th>
          </tr>
        ))}
      </table>
    </TextCard>
  );
};
