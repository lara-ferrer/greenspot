import React from "react";
import { TextCard as KiwiTextCard } from "kiwi-design-system";
import './opening-hours.scss';

export const OpeningHours = ({ business }) => {
  return (
    <div className="grsp-opening-hours">
      <KiwiTextCard>
        <h4 className="grsp-opening-hours__title">Horario de apertura</h4>
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
      </KiwiTextCard>
    </div>
  );
};
