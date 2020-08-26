import React from 'react';
import Table from '../table/table.jsx';

const JobsTable = (props) => {


  /**
   * array of every column to render in the table
   */
  const columns = [
    {
      title: 'Company',
      key: 'company'
    },
    {
      title: 'position',
      key: 'position'
    },
    {
      title: 'link',
      key: 'link'
    },
    {
      title: 'contact',
      key: 'contact'
    },
    {
      title: 'via',
      key: 'via'
    },
    {
      title: 'first contact',
      key: 'first-contact'
    },
    {
      title: 'last contact',
      key: 'last-contact'
    },
    {
      title: 'referral?',
      key: 'referral'
    },
    {
      title: 'applied',
      key: 'applied'
    },
    {
      title: 'date',
      key: 'ph-date',
      classes: '--phone-screen'
    },
    {
      title: 'follow up / thanks',
      key: 'ph-follow-up',
      classes: '--phone-screen'
    },
    {
      title: 'success/fail?',
      key: 'ph-success',
      classes: '--phone-screen'
    },
    {
      title: 'date received',
      key: 'code-received',
      classes: '--challenge'
    },
    {
      title: 'date submitted',
      key: 'code-submitted',
      classes: '--challenge'
    },
    {
      title: 'follow up / thanks',
      key: 'code-follow-up',
      classes: '--challenge'
    },
    {
      title: 'success/fail?',
      key: 'code-success',
      classes: '--challenge'
    },
    {
      title: 'date',
      key: 'onsite-date',
      classes: '--onste'
    },
    {
      title: 'follow up / thanks',
      key: 'onsite-thanks',
      classes: '--onste'
    },
    {
      title: 'success/fail?',
      key: 'onsite-success',
      classes: '--onste'
    },
    {
      title: 'type',
      key: 'offer-type',
      classes: '--offer'
    },
    {
      title: 'comp',
      key: 'offer-comp',
      classes: '--offer'
    },
    {
      title: 'negotiated',
      key: 'offer-negotiated',
      classes: '--offer'
    },
    {
      title: 'final comp',
      key: 'offer-final-comp',
      classes: '--offer'
    },
    {
      title: 'accepted/rejected?',
      key: 'offer-accepted',
      classes: '--offer'
    }
  ]

  /**
   * column groups array indicates the column grouping and their title
   * will be rendered as column master headers/groups 
   */
  const columnGroups = [
    {
      title: '',
      colSpan: 8
    },
    {
      title: 'phone screen',
      colSpan: 3,
      classes: ['--phone-screen']
    },
    {
      title: 'coding challenge',
      colSpan: 4,
      classes: ['--challenge']
    },
    {
      title: 'onsite',
      colSpan: 3,
      classes: ['--onsite']
    },
    {
      title: 'offer',
      colSpan: 5,
      classes: ['--offer']
    }
  ]

  return (
    <Table cols={columns} data={props.data} class="--jobs" />
  )
}

export default JobsTable;
