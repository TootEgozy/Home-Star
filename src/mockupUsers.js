const data =   [
    {
      id:"a",
      name: "Yonni",
      avatar: "./user1.png",
      tasks: [{
        userId:"a",
        assignerId:"b",
        title:"Swipe Living room",
        date:"1.5.21",
        isCompeleted: false
      }],
      projects: [],
    },
    {
      id:"b",
      name: "Noa",
      avatar: "./user2.png",
      tasks: [
          {
              userId: "b",
              assignerId:"c",
              title: "Wash dishes",
              date:"2.5.21",
              isCompeleted:true
          }
      ],
      projects: [{
          userId:"b",
          assignerId:"b",
          title:"plant new flowers",
          date:"1.5.21",
          isCompeleted:false

      }],
    },
    {
      id:"c",
      name: "Mary",
      avatar: "./user3.png",
      tasks: [{}],
      projects: [],
    },
    {
      id:"d",
      name: "Daniel",
      avatar: "./user4.png",
      tasks: [{}],
      projects: [],
    },
    {
      id:"e",
      name: "Roy",
      avatar: "./user5.png",
      tasks: [{}],
      projects: [],
    },
  ];
export default data;