export const useMenu = () => {
  return [
    {
      title: '消息通知',
      desc: '消息通知，实时查收',
      linkUrl: '/customer/msg/list',
      imgUrl: 'list_0@2x.png',
      show: true
    },
    {
      title: '客户报备审核',
      desc: '客户报备与跟进，随时维护',
      linkUrl: '/customer/report/list',
      imgUrl: 'list_1@2x.png',
      show: true
    },
    {
      title: '客户跟进',
      desc: '市场管理，跟进查询',
      linkUrl: '/customer/follow/add',
      imgUrl: 'list_3@2x.png',
      show: true
    }
    // {
    //   title: (() => {
    //     if (userLevel === 4 || userLevel === 6 || userLevel === 7) {
    //       return '客户报备审核'
    //     } else if (userLevel <= 2) {
    //       return '管理部报备审核'
    //     } else {
    //       return '我的客户'
    //     }
    //   })(),
    //   desc: '客户报备与跟进，随时维护',
    //   linkUrl: (() => {
    //     if (userLevel === 4 || userLevel === 6 || userLevel === 7) {
    //       return '/customer/report/list?navType=2'
    //     } else if (userLevel <= 2) {
    //       return '/customer/report/list?navType=3'
    //     } else {
    //       return '/customer/report/list'
    //     }
    //   })(),
    //   imgUrl: 'list_1@2x.png',
    //   show: true
    // },
    // {
    //   title: (() => {
    //     if (userLevel === 4 || userLevel === 6 || userLevel === 7 || userLevel <= 2) {
    //       return '客户跟进记录'
    //     } else {
    //       return '客户跟进'
    //     }
    //   })(),
    //   desc: '市场管理，跟进查询',
    //   linkUrl: (() => {
    //     if (userLevel === 4 || userLevel === 6 || userLevel === 7 || userLevel <= 2) {
    //       return '/customer/report/list?navType=4'
    //     } else {
    //       return '/customer/follow/add'
    //     }
    //   })(),
    //   imgUrl: 'list_3@2x.png',
    //   show: true
    // }
  ];
};
