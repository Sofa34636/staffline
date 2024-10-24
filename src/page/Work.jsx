import React from 'react';

function Work({
  job_title,
  company_name,
  derectionz_dutie,
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
              <div class='schedule'>{schedule}</div>
              <div class='responsibilities'>{responsibilities}</div>
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
