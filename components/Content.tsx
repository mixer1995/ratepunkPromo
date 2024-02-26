import React from 'react'
import styles from './Content.module.scss'
import GetReferal from './GetReferal'
import VoucherSteps from './VoucherSteps'
import inviteLogo from './../public/invite.svg'
import coinsLogo from './../public/collect-coins.svg'
import voucherLogo from './../public/voucher.svg'

const Content = () => {
  const stepsArr = [
    {
      link: inviteLogo.src,
      title: "INVITE FRIENDS",
      body: "Refer friends with your unique referral link."
    },
    {
      link: coinsLogo.src,
      title: "COLLECT COINS",
      body: "Get 1 coin for each friend that installs our extension using your referral link."
    },
    {
      link: voucherLogo.src,
      title: "GET VOUCHER",
      body: "ReRedeem for a $20 hotel booking voucher once you collect 20 coins."
    },
  ]

  return (
    <div className={styles.main}>
      <div className={styles.align}>
        <div className={styles.refer}>
          <h1>REFER FRIENDS AND GET REWARDS</h1>
          <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>

          <GetReferal />

          <span className={styles.bottom}>Limits on max rewards apply.</span>
        </div>
        <div className={styles.instructions}>
          {stepsArr.map((elData, i) => <VoucherSteps key={i} link={elData.link} title={elData.title} body={elData.body} index={i} />)}
        </div>
      </div>
    </div>
  )
}

export default Content