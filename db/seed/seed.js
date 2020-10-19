const { db } = require('../index');
const { Job } = require('../models');

const exampleJob = {
  company: "quora",
  title: "frontend engineer",
  link: "https://careers.quora.com",
  starred: false,
  active: true,
  stages: [
    {
      stage: 'outreach',
      data: [
        {
          title: 'who',
          type: 'text',
          value: "James Van"
        },
        {
          title: 'via',
          type: 'text',
          value: 'linkedin'
        },
        {
          title: 'initial',
          type: 'date',
          value: '08142020'
        },
        {
          title: 'last',
          type: 'date',
          vlaue: '08152020'
        }
      ]
    },
    {
      stage: 'application',
      data: [
        {
          title: 'via',
          type: 'text',
          value: 'careers page'
        },
        {
          title: 'date applied',
          type: 'date',
          value: '08152020'
        },
        {
          title: 'referral?',
          type: 'bool',
          value: 'yes'
        }
      ]
    },
    {
      stage: 'phone screen',
      data: [
        {
          title: 'date',
          type: 'date',
          value: '08172020'
        },
        {
          title: 'follow up',
          type: 'date',
          value: '08222020'
        },
        {
          title: 'pass',
          type: 'bool',
          value: 'yes'
        }
      ]
    }
  ]
}

const job = new Job(exampleJob);
job.save(exampleJob)
  .then(() => {
    console.log('successfully seeded db! ')
    db.close();
  })
  .catch(err => console.log('error seeding db! ', err));
