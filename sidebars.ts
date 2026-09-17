import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  idrSidebar: [
    'intro',
    'how-to-use-this-portal',
    'resource-library',
    {
      type: 'category',
      label: 'Individual roadmaps',
      link: {type: 'doc', id: 'individual-plans/index'},
      items: [
        'individual-plans/adrian-rincon',
        'individual-plans/analita-goncalves',
        'individual-plans/fernanda-koppe-souto-maior-macias',
        'individual-plans/nkateko-mtembi',
        'individual-plans/mthiya-lunga',
        'individual-plans/blessing-cloudio',
        'individual-plans/christine-du-plessis',
        'individual-plans/colani-siguca-gembe',
        'individual-plans/ammar-boualem-zeghough',
      ],
    },
  ],
};

export default sidebars;
