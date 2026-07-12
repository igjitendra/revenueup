export const legalDocs = {
  privacy: {
    title: 'Privacy Policy',
    updated: '12 July 2026',
    sections: [
      ['Information we collect', 'Contact details and project information you voluntarily submit, plus basic technical analytics where enabled.'],
      ['How we use information', 'To respond to enquiries, deliver agreed services, improve the website and meet legal obligations.'],
      ['Sharing and retention', 'We do not sell personal data. Information may be shared with service providers where necessary and retained only as reasonably required.'],
      ['Your choices', 'You may request access, correction or deletion by emailing hello@revenueup.in.']
    ]
  },
  terms: {
    title: 'Terms of Use',
    updated: '12 July 2026',
    sections: [
      ['Website use', 'Website content is general information and does not create a client relationship or performance guarantee.'],
      ['Intellectual property', 'Unless stated otherwise, website content and design are owned by RevenueUp and may not be reproduced commercially without permission.'],
      ['Service agreements', 'Paid work is governed by a separate written proposal defining scope, fees, timelines, responsibilities and ownership.'],
      ['Limitation', 'To the extent permitted by law, RevenueUp is not responsible for indirect loss arising from use of this website.']
    ]
  },
  refund: {
    title: 'Cancellation & Refund Policy',
    updated: '12 July 2026',
    sections: [
      ['Before work begins', 'Cancellation terms should be defined in the signed proposal. Any refundable amount excludes committed third-party costs.'],
      ['After work begins', 'Fees for completed work, reserved capacity and approved expenses are generally non-refundable.'],
      ['Advertising spend', 'Media spend paid to advertising platforms is controlled by those platforms and is not refundable by RevenueUp.'],
      ['Disputes', 'Raise billing concerns promptly at hello@revenueup.in so they can be reviewed against the signed scope.']
    ]
  }
} as const;
