import React from "react";
import { TextCard as KiwiTextCard } from "kiwi-design-system";
import "./opening-hours.scss";

export const OpeningHours = ({ business }) => {
  const { schedule } = business;

  return (
    <div className="grsp-opening-hours">
      <KiwiTextCard>
        <h4 className="grsp-opening-hours__title">Horario de apertura</h4>
        <table>
          {schedule.map(({ openingDay, availableHours, isClosed }) => (
            <tr>
              <th className="grsp-opening-hours__day">
                <h5 className="t-uppercase">{openingDay}</h5>
              </th>
              <th className="grsp-opening-hours__hours">
                {!isClosed && availableHours.map(({ opening, closing }) => (
                  <p>
                    {opening}h - {closing}h
                  </p>
                ))}
                {isClosed && <p>cerrado</p>}
              </th>
            </tr>
          ))}
        </table>
      </KiwiTextCard>
    </div>
  );
};
