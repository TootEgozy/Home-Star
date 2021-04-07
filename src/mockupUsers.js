const data =   [
    {
      id:"a",
      name: "Yonni",
      avatar: "./user1.png",
      tasks: [
          {
          title:"Swipe Living room",
          start:"07/05/2021 10:00PM",
          end:"07/05/2021 10:00PM",
          resources:[{taskId: "a", userId: "a", assignerId: "b", isCompeleted: false}],
        },
          {
          title:"Wash dishes",
          start:"08/05/2021 11:20PM",
          end:"08/05/2021 11:20PM",
          resources:[{taskId: "b", userId: "a", assignerId: "c", isCompeleted: true}],

        }
      ],
      projects: [],
    },
    {
      id:"b",
      name: "Noa",
      avatar: "./user2.png",
      tasks: [
          {
              title: "Clean Fridge",
              start:"02/05/2021 17:30PM",
              end:"02/05/2021 17:30PM",
              resources:[{taskId: "c", userId: "b", assignerId: "c", isCompeleted: true}],
          },
          {
              title: "Walk dog",
              start:"04/05/2021 14:30PM",
              end:"04/05/2021 14:30PM",
              resources:[{taskId: "d", userId: "b", assignerId: "e", isCompeleted: true}],
          }
      ],
      projects: [],
    },
    {
      id:"c",
      name: "Mary",
      avatar: "./user3.png",
      tasks: [
        {
          title: "Hang laundry",
          start:"01/05/2021 13:30PM",
          end:"01/05/2021 13:30PM",
          resources:[{taskId: "e", userId: "c", assignerId: "d", isCompeleted: false}],
      }
      ],
      projects: [],
    },
    {
      id:"d",
      name: "Daniel",
      avatar: "./user4.png",
      tasks: [
        {
          title: "Wash floor",
          start:"11/04/2021 17:30PM",
          end:"11/04/2021 17:30PM",
          resources:[{taskId: "i", userId: "d", assignerId: "c", isCompeleted: true}],
      },
      {
          title: "Walk cat",
          start:"03/04/2021 14:30PM",
          end:"03/04/2021 14:30PM",
          resources:[{taskId: "j", userId: "d", assignerId: "e", isCompeleted: true}],
      },
      {
          title: "Scrub stove",
          start:"08/05/2021 10:30PM",
          end:"08/05/2021 10:30PM",
          resources:[{taskId: "k", userId: "d", assignerId: "a", isCompeleted: true}],
      }
      ],
      projects: [],
    },
    {
      id:"e",
      name: "Roy",
      avatar: "./user5.png",
      tasks: [
        {
          title: "Wash floor",
          start:"02/04/2021 17:30PM",
          end:"02/04/2021 17:30PM",
          resources:[{taskId: "l", userId: "e", assignerId: "c", isCompeleted: true}],
      },
      {
          title: "Walk cat",
          start:"03/04/2021 14:30PM",
          end:"03/04/2021 14:30PM",
          resources:[{taskId: "m", userId: "e", assignerId: "e", isCompeleted: true}],
      },
      {
          title: "Scrub stove",
          start:"03/04/2021 10:30PM",
          end:"03/04/2021 10:30PM",
          resources:[{taskId: "n", userId: "e", assignerId: "a", isCompeleted: true}],
      }
      ],
      projects: [],
    },
  ];
export default data;