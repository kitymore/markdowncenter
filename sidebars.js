module.exports = {
  cfmap: [
    "cfmap/overview",
    "cfmap/shiyongxuzhi",
    {
      type: "category",
      label: "开发指南",
      items: [
        "cfmap/guide/kuaisukaishi",
        "cfmap/guide/rumen",
        {
          type: "category",
          label: "地图",
          items: [
            "cfmap/guide/shiliangditu",
            "cfmap/guide/wmsditu",
            "cfmap/guide/wmtsditu",
            "cfmap/guide/esriwapianditu",
            "cfmap/guide/esridongtaiditu",
            "cfmap/guide/geoserverfuwu",
          ],
        },
        {
          type: "category",
          label: "图层",
          items: [
            "cfmap/guide/shiliangwapian",
            "cfmap/guide/dongtaishiliangwapian",
          ],
        },
        {
          type: "category",
          label: "量测",
          items: [
            "cfmap/guide/zuobiao",
            "cfmap/guide/juli",
            "cfmap/guide/mianji",
          ],
        },
        {
          type: "category",
          label: "事件",
          items: [
            "cfmap/guide/tanchuang",
            "cfmap/guide/jietu",
          ],
        },
        {
          type: "category",
          label: "编辑",
          items: [
            "cfmap/guide/dian",
            "cfmap/guide/xian",
            "cfmap/guide/mian",
            "cfmap/guide/fenge",
            "cfmap/guide/hebing",
          ],
        },
        "cfmap/guide/shuyushuoming",
        "cfmap/guide/chajianshuoming",
        "cfmap/guide/liulanqijiance",
      ],
    },
    {
      type: "category",
      label: "示例中心",
      items: [
        "cfmap/demo/helloworld",
        {
          type: "category",
          label: "x1",
          items: [
          ],
        },
      ],
    },
  ],
  geocms: [
    "geocms/overview",
    {
      type: "category",
      label: "使用指南",
      items: [
        {
          type: "category",
          label: "x1",
          items: [
          ],
        },
        {
          type: "category",
          label: "x2",
          items: [
          ],
        },
      ],
    },
    "mdx",
  ],
};
