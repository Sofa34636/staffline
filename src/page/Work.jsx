import React from 'react';

function Work({
  job_title,
  company_name,
  derectionz_dutie,
  city,
  address,
  schedule,
  responsibilities,
  pay,
}) {
  return (
    <section class='job'>
      <div class='container job__inner'>
        <div class='job__box'>
          <div class='job__container'>
            <div class='job_grup'>
              <div class='job_title'>{job_title}</div>
              <div class='company_name'>{company_name}</div>
              <div class='derectionz_dutie'>{derectionz_dutie}</div>
              <div class='address'>{address}</div>
            </div>
            <div class='job_grup'>
              <div class='city'>{city}</div>
              <div class='schedule'>{schedule}</div>
              <div class='responsibilities'>
                <span
                  dangerouslySetInnerHTML={{ __html: responsibilities.replace(/\r\n/g, '<br />') }}
                />
              </div>
            </div>
            <div class='job_grup'>
              <div class='job_pay'>Заработная плата</div>
              <div class='pay'>{pay}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
