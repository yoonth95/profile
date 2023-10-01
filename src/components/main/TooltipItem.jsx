import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const TooltipItem = ({ timeList, text, className, children }) => {
  const [tooltipContent, setTooltipContent] = useState("");

  const handleMouseOver = () => {
    const oldDate = new Date(timeList[0]);
    const newDate = new Date(timeList[1]);
    const duration = Math.abs((newDate.getFullYear() - oldDate.getFullYear())*12 + (newDate.getMonth() - oldDate.getMonth())) + 1;

    let calcDuration;
    if (duration / 12 >= 1) {
      if (duration % 12 === 0) {
        calcDuration = `${Math.floor(duration / 12)}년`;
      } else {
        calcDuration = `${Math.floor(duration / 12)}년 ${duration % 12}개월`;
      }
    } else {
      calcDuration = `${duration % 12}개월`;
    }

    const content = `
      ${text}<br/>
      ${calcDuration}<br/>
      ${timeList[0]} ~ ${timeList[1]}
    `;

    setTooltipContent(content);
    ReactTooltip.rebuild();  // 툴팁을 다시 빌드
  };

  return (
    <div
      className={className}
      data-tip={tooltipContent}
      data-for="globalTooltip"
      onMouseOver={handleMouseOver}
    >
      {children}
    </div>
  );
};

export default TooltipItem;
